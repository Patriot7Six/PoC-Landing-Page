import type { VercelRequest, VercelResponse } from '@vercel/node'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Allow GET for email link clicks
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { email } = req.query

  if (!email || typeof email !== 'string') {
    return res.status(400).send(getErrorHtml('Invalid unsubscribe link'))
  }

  const RESEND_API_KEY = process.env.RESEND_API_KEY
  const RESEND_AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID

  if (!RESEND_API_KEY || !RESEND_AUDIENCE_ID) {
    console.error('Missing Resend configuration')
    return res.status(500).send(getErrorHtml('Server configuration error'))
  }

  try {
    // First, get the contact ID by email
    const contactsResponse = await fetch(
      `https://api.resend.com/audiences/${RESEND_AUDIENCE_ID}/contacts`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${RESEND_API_KEY}`,
        },
      }
    )

    if (!contactsResponse.ok) {
      console.error('Failed to fetch contacts:', await contactsResponse.text())
      return res.status(500).send(getErrorHtml('Failed to process unsubscribe request'))
    }

    const contactsData = await contactsResponse.json()
    const contact = contactsData.data?.find(
      (c: { email: string }) => c.email.toLowerCase() === email.toLowerCase()
    )

    if (!contact) {
      // Email not found - might already be unsubscribed or never subscribed
      return res.status(200).send(getSuccessHtml())
    }

    // Update the contact to mark as unsubscribed
    const updateResponse = await fetch(
      `https://api.resend.com/audiences/${RESEND_AUDIENCE_ID}/contacts/${contact.id}`,
      {
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          unsubscribed: true,
        }),
      }
    )

    if (!updateResponse.ok) {
      console.error('Failed to update contact:', await updateResponse.text())
      return res.status(500).send(getErrorHtml('Failed to unsubscribe'))
    }

    return res.status(200).send(getSuccessHtml())
  } catch (error) {
    console.error('Unsubscribe error:', error)
    return res.status(500).send(getErrorHtml('An unexpected error occurred'))
  }
}

function getSuccessHtml(): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Unsubscribed - Patriot Ops Center</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      background-color: #0a0f1a;
      color: #e5e7eb;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
    }
    .container {
      max-width: 480px;
      text-align: center;
    }
    .icon {
      width: 64px;
      height: 64px;
      background-color: rgba(34, 197, 94, 0.1);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 24px;
    }
    .icon svg {
      width: 32px;
      height: 32px;
      color: #22c55e;
    }
    h1 {
      color: #d4af37;
      font-size: 24px;
      margin-bottom: 16px;
    }
    p {
      color: #9ca3af;
      line-height: 1.6;
      margin-bottom: 24px;
    }
    a {
      color: #d4af37;
      text-decoration: none;
    }
    a:hover {
      text-decoration: underline;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="icon">
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
      </svg>
    </div>
    <h1>You've been unsubscribed</h1>
    <p>You will no longer receive emails from the Patriot Ops Center waitlist. We're sorry to see you go.</p>
    <p><a href="https://poc-landing-page-five.vercel.app">Return to website</a></p>
  </div>
</body>
</html>
  `.trim()
}

function getErrorHtml(message: string): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Error - Patriot Ops Center</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      background-color: #0a0f1a;
      color: #e5e7eb;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
    }
    .container {
      max-width: 480px;
      text-align: center;
    }
    .icon {
      width: 64px;
      height: 64px;
      background-color: rgba(239, 68, 68, 0.1);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 24px;
    }
    .icon svg {
      width: 32px;
      height: 32px;
      color: #ef4444;
    }
    h1 {
      color: #ef4444;
      font-size: 24px;
      margin-bottom: 16px;
    }
    p {
      color: #9ca3af;
      line-height: 1.6;
      margin-bottom: 24px;
    }
    a {
      color: #d4af37;
      text-decoration: none;
    }
    a:hover {
      text-decoration: underline;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="icon">
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
      </svg>
    </div>
    <h1>Something went wrong</h1>
    <p>${message}. Please try again or contact support.</p>
    <p><a href="https://www.patriot-ops.com/">Return to website</a></p>
  </div>
</body>
</html>
  `.trim()
}
