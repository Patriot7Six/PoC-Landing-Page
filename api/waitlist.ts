import type { VercelRequest, VercelResponse } from '@vercel/node'
import { render } from '@react-email/components'
import WaitlistConfirmation from './emails/WaitlistConfirmation'

const RESEND_API_KEY = process.env.RESEND_API_KEY
const RESEND_AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID

interface WaitlistRequest {
  email: string
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { email } = req.body as WaitlistRequest

  // Validate email
  if (!email || !isValidEmail(email)) {
    return res.status(400).json({ error: 'Please provide a valid email address' })
  }

  if (!RESEND_AUDIENCE_ID) {
    console.error('RESEND_AUDIENCE_ID not configured')
    return res.status(500).json({ error: 'Server configuration error' })
  }

  try {
    // Add to Resend audience/contacts
    // API: https://resend.com/docs/api-reference/contacts/create-contact
    const response = await fetch(
      `https://api.resend.com/audiences/${RESEND_AUDIENCE_ID}/contacts`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          unsubscribed: false,
        }),
      }
    )

    if (!response.ok) {
      const errorData = await response.json()

      // Handle duplicate email gracefully
      if (response.status === 409 || errorData?.message?.includes('already exists')) {
        return res.status(200).json({
          success: true,
          message: "You're already on the waitlist!",
        })
      }

      console.error('Resend API error:', errorData)
      return res.status(500).json({ error: 'Failed to join waitlist. Please try again.' })
    }

    // Render the React Email template
    const emailHtml = await render(WaitlistConfirmation({ email }))

    // Send confirmation email
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Patriot Ops Center <noreply@patriot-ops.com>',
        to: email,
        subject: 'Welcome to the Patriot Ops Center Waitlist!',
        html: emailHtml,
      }),
    })

    return res.status(200).json({
      success: true,
      message: 'Successfully joined the waitlist!',
    })
  } catch (error) {
    console.error('Waitlist error:', error)
    return res.status(500).json({ error: 'An unexpected error occurred. Please try again.' })
  }
}

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}
