import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from '@react-email/components'

interface WaitlistConfirmationProps {
  email?: string
}

export default function WaitlistConfirmation({ email }: WaitlistConfirmationProps) {
  return (
    <Html>
      <Head />
      <Preview>Welcome to the Patriot Ops Center Waitlist - You're in!</Preview>
      <Body style={main}>
        <Container style={container}>
          {/* Header with Logo */}
          <Section style={headerSection}>
            <Img
              src="https://patriot-ops.com/logo.png"
              width="80"
              height="80"
              alt="Patriot Ops Center"
              style={logo}
            />
          </Section>

          {/* Main Content */}
          <Section style={contentSection}>
            <Heading style={heading}>You're on the list!</Heading>

            <Text style={paragraph}>
              Thank you for joining the Patriot Ops Center waitlist. We're building an AI-powered
              career transition platform specifically designed for military veterans like you.
            </Text>

            <Text style={paragraph}>
              We'll notify you as soon as we launch so you can be among the first to:
            </Text>

            <Section style={featureList}>
              <Text style={featureItem}>
                <span style={bullet}>★</span> Upload your DD214 and have AI extract your skills
              </Text>
              <Text style={featureItem}>
                <span style={bullet}>★</span> Translate your MOS into civilian career matches
              </Text>
              <Text style={featureItem}>
                <span style={bullet}>★</span> Generate ATS-optimized resumes
              </Text>
              <Text style={featureItem}>
                <span style={bullet}>★</span> Get matched with federal and civilian jobs
              </Text>
            </Section>

            <Text style={highlightBox}>
              Your service matters. Your skills are valuable. We're here to help you prove it.
            </Text>
          </Section>

          {/* Signature */}
          <Section style={signatureSection}>
            <Text style={signature}>
              — Bradley Baker
              <br />
              <span style={signatureTitle}>U.S. Army Veteran & Founder</span>
              <br />
              <span style={signatureCompany}>Patriot Ops Center</span>
            </Text>
          </Section>

          <Hr style={divider} />

          {/* Footer */}
          <Section style={footerSection}>
            <Text style={motto}>
              "This We'll Defend" — Your mission does not end with service, it evolves.
            </Text>

            <Text style={footerLinks}>
              <Link href="https://patriot-ops.com" style={link}>
                Website
              </Link>
              {' • '}
              <Link href="https://patriot-ops.com/privacy" style={link}>
                Privacy Policy
              </Link>
            </Text>

            <Text style={footerNote}>
              You're receiving this email because {email || 'you'} signed up for the Patriot Ops
              Center waitlist.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}

// Styles
const main = {
  backgroundColor: '#0a0f1a',
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
}

const container = {
  margin: '0 auto',
  padding: '40px 20px',
  maxWidth: '600px',
}

const headerSection = {
  textAlign: 'center' as const,
  marginBottom: '32px',
}

const logo = {
  margin: '0 auto',
}

const contentSection = {
  backgroundColor: '#111827',
  borderRadius: '12px',
  padding: '32px',
  border: '1px solid #1f2937',
}

const heading = {
  color: '#d4af37',
  fontSize: '28px',
  fontWeight: '700',
  textAlign: 'center' as const,
  margin: '0 0 24px 0',
}

const paragraph = {
  color: '#e5e7eb',
  fontSize: '16px',
  lineHeight: '1.6',
  margin: '0 0 16px 0',
}

const featureList = {
  backgroundColor: '#0d1321',
  borderRadius: '8px',
  padding: '20px',
  margin: '24px 0',
}

const featureItem = {
  color: '#e5e7eb',
  fontSize: '15px',
  lineHeight: '1.8',
  margin: '0 0 8px 0',
}

const bullet = {
  color: '#d4af37',
  marginRight: '8px',
}

const highlightBox = {
  color: '#d4af37',
  fontSize: '17px',
  fontWeight: '600',
  textAlign: 'center' as const,
  padding: '20px',
  backgroundColor: 'rgba(212, 175, 55, 0.1)',
  borderRadius: '8px',
  border: '1px solid rgba(212, 175, 55, 0.2)',
  margin: '24px 0 0 0',
}

const signatureSection = {
  marginTop: '32px',
}

const signature = {
  color: '#9ca3af',
  fontSize: '14px',
  lineHeight: '1.6',
}

const signatureTitle = {
  color: '#6b7280',
}

const signatureCompany = {
  color: '#d4af37',
  fontWeight: '600',
}

const divider = {
  borderColor: '#1f2937',
  margin: '32px 0',
}

const footerSection = {
  textAlign: 'center' as const,
}

const motto = {
  color: '#6b7280',
  fontSize: '13px',
  fontStyle: 'italic',
  margin: '0 0 16px 0',
}

const footerLinks = {
  color: '#6b7280',
  fontSize: '12px',
  margin: '0 0 16px 0',
}

const link = {
  color: '#d4af37',
  textDecoration: 'none',
}

const footerNote = {
  color: '#4b5563',
  fontSize: '11px',
  margin: '0',
}
