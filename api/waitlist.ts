import type { VercelRequest, VercelResponse } from '@vercel/node'

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
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
            <h1 style="color: #1a1a1a;">You're on the list!</h1>
            <p style="color: #333; font-size: 16px; line-height: 1.6;">
              Thank you for joining the Patriot Ops Center waitlist. We're building an AI-powered
              career transition platform specifically designed for military veterans like you.
            </p>
            <p style="color: #333; font-size: 16px; line-height: 1.6;">
              We'll notify you as soon as we launch so you can be among the first to:
            </p>
            <ul style="color: #333; font-size: 16px; line-height: 1.8;">
              <li>Upload your DD214 and have AI extract your skills</li>
              <li>Translate your MOS into civilian career matches</li>
              <li>Generate ATS-optimized resumes</li>
              <li>Get matched with federal and civilian jobs</li>
            </ul>
            <p style="color: #333; font-size: 16px; line-height: 1.6;">
              Your service matters. Your skills are valuable. We're here to help you prove it.
            </p>
            <p style="color: #666; font-size: 14px; margin-top: 30px;">
              — Bradley Baker<br/>
              U.S. Army Veteran & Founder<br/>
              Patriot Ops Center
            </p>
            <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;" />
            <p style="color: #999; font-size: 12px;">
              This We'll Defend — Your mission does not end with service, it evolves.
            </p>
          </div>
        `,
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
