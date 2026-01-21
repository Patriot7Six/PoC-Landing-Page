import type { VercelRequest, VercelResponse } from '@vercel/node'

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

  const RESEND_API_KEY = process.env.RESEND_API_KEY
  const RESEND_AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID

  if (!RESEND_API_KEY) {
    console.error('RESEND_API_KEY not configured')
    return res.status(500).json({ error: 'Server configuration error: API key missing' })
  }

  if (!RESEND_AUDIENCE_ID) {
    console.error('RESEND_AUDIENCE_ID not configured')
    return res.status(500).json({ error: 'Server configuration error: Audience ID missing' })
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

      console.error('Resend API error:', response.status, errorData)
      return res.status(500).json({
        error: 'Failed to join waitlist. Please try again.',
        status: response.status,
        details: errorData
      })
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
        html: getWaitlistEmailHtml(email),
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

function getWaitlistEmailHtml(email: string): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to Patriot Ops Center</title>
</head>
<body style="margin: 0; padding: 0; background-color: #0a0f1a; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
  <table role="presentation" style="width: 100%; border-collapse: collapse;">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        <table role="presentation" style="max-width: 600px; width: 100%; border-collapse: collapse;">

          <!-- Logo -->
          <tr>
            <td align="center" style="padding-bottom: 32px;">
              <img src="https://poc-landing-page-five.vercel.app/logo.png" width="80" height="80" alt="Patriot Ops Center" style="display: block;">
            </td>
          </tr>

          <!-- Main Content Card -->
          <tr>
            <td style="background-color: #111827; border-radius: 12px; padding: 32px; border: 1px solid #1f2937;">

              <h1 style="color: #d4af37; font-size: 28px; font-weight: 700; text-align: center; margin: 0 0 24px 0;">
                You're on the list!
              </h1>

              <p style="color: #e5e7eb; font-size: 16px; line-height: 1.6; margin: 0 0 16px 0;">
                Thank you for joining the Patriot Ops Center waitlist. We're building an AI-powered
                career transition platform specifically designed for military veterans like you.
              </p>

              <p style="color: #e5e7eb; font-size: 16px; line-height: 1.6; margin: 0 0 16px 0;">
                We'll notify you as soon as we launch so you can be among the first to:
              </p>

              <!-- Feature List -->
              <table role="presentation" style="width: 100%; background-color: #0d1321; border-radius: 8px; margin: 24px 0;">
                <tr>
                  <td style="padding: 20px;">
                    <p style="color: #e5e7eb; font-size: 15px; line-height: 1.8; margin: 0 0 8px 0;">
                      <span style="color: #d4af37; margin-right: 8px;">★</span> Upload your DD214 and have AI extract your skills
                    </p>
                    <p style="color: #e5e7eb; font-size: 15px; line-height: 1.8; margin: 0 0 8px 0;">
                      <span style="color: #d4af37; margin-right: 8px;">★</span> Translate your MOS into civilian career matches
                    </p>
                    <p style="color: #e5e7eb; font-size: 15px; line-height: 1.8; margin: 0 0 8px 0;">
                      <span style="color: #d4af37; margin-right: 8px;">★</span> Generate ATS-optimized resumes
                    </p>
                    <p style="color: #e5e7eb; font-size: 15px; line-height: 1.8; margin: 0;">
                      <span style="color: #d4af37; margin-right: 8px;">★</span> Get matched with federal and civilian jobs
                    </p>
                  </td>
                </tr>
              </table>

              <!-- Highlight Box -->
              <table role="presentation" style="width: 100%; background-color: rgba(212, 175, 55, 0.1); border-radius: 8px; border: 1px solid rgba(212, 175, 55, 0.2); margin-top: 24px;">
                <tr>
                  <td style="padding: 20px; text-align: center;">
                    <p style="color: #d4af37; font-size: 17px; font-weight: 600; margin: 0;">
                      Your service matters. Your skills are valuable. We're here to help you prove it.
                    </p>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Signature -->
          <tr>
            <td style="padding-top: 32px;">
              <p style="color: #9ca3af; font-size: 14px; line-height: 1.6; margin: 0;">
                — Bradley Baker<br>
                <span style="color: #6b7280;">U.S. Army Veteran & Founder</span><br>
                <span style="color: #d4af37; font-weight: 600;">Patriot Ops Center</span>
              </p>
            </td>
          </tr>

          <!-- Divider -->
          <tr>
            <td style="padding: 32px 0;">
              <hr style="border: none; border-top: 1px solid #1f2937; margin: 0;">
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td align="center">
              <p style="color: #6b7280; font-size: 13px; font-style: italic; margin: 0 0 16px 0;">
                "This We'll Defend" — Your mission does not end with service, it evolves.
              </p>
              <p style="color: #6b7280; font-size: 12px; margin: 0 0 16px 0;">
                <a href="https://poc-landing-page-five.vercel.app" style="color: #d4af37; text-decoration: none;">Website</a>
                &bull;
                <a href="https://poc-landing-page-five.vercel.app/privacy" style="color: #d4af37; text-decoration: none;">Privacy Policy</a>
              </p>
              <p style="color: #4b5563; font-size: 11px; margin: 0;">
                You're receiving this email because ${email} signed up for the Patriot Ops Center waitlist.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim()
}
