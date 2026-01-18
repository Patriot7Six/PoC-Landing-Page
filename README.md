# Patriot Ops Center - Landing Page

A "coming soon" landing page for Patriot Ops Center - the AI-powered career transition platform for military veterans. This page is designed to capture waitlist signups before the main application launches.

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons
- **Resend** - Email collection API

## Local Development

### Prerequisites

- Node.js 18+
- npm 9+

### Setup

1. Navigate to the landing page directory:

```bash
cd landing-page
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:3001`

### Build

To create a production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## Deploying to Vercel

This landing page is designed to be deployed separately from the main Patriot Ops Center application.

### Environment Variables

You'll need to set the following environment variable in Vercel:

| Variable         | Description                              |
| ---------------- | ---------------------------------------- |
| `RESEND_API_KEY` | Your Resend API key for email collection |

### Resend Setup

Before deploying, you need to set up Resend:

1. Create an account at [resend.com](https://resend.com)
2. Create an audience called "waitlist" (or update the API endpoint with your audience name)
3. Verify your domain for sending emails
4. Copy your API key to use as `RESEND_API_KEY`

### Option 1: Deploy via Vercel CLI

1. Install Vercel CLI globally:

```bash
npm install -g vercel
```

2. Navigate to the landing page directory:

```bash
cd landing-page
```

3. Deploy:

```bash
vercel
```

4. Follow the prompts:
   - Set up and deploy? **Yes**
   - Which scope? **Select your account/team**
   - Link to existing project? **No** (create new)
   - Project name? **patriot-ops-landing** (or your preference)
   - Directory? **./** (current directory)
   - Override settings? **No** (vercel.json handles this)

5. Set environment variables:

```bash
vercel env add RESEND_API_KEY
```

6. For production deployment:

```bash
vercel --prod
```

### Option 2: Deploy via Vercel Dashboard

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "Add New..." → "Project"
3. Import from Git repository
4. Configure:
   - **Root Directory**: `landing-page`
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Add environment variable:
   - `RESEND_API_KEY` = your Resend API key
6. Click "Deploy"

## Custom Domain Setup

After deploying to Vercel:

1. Go to your project settings in Vercel
2. Navigate to "Domains"
3. Add your domain (e.g., `www.patriot-ops.com`)
4. Configure DNS settings as instructed:
   - For apex domain: Add an A record pointing to `76.76.21.21`
   - For www subdomain: Add a CNAME record pointing to `cname.vercel-dns.com`

## Project Structure

```
landing-page/
├── api/
│   └── waitlist.ts         # Vercel serverless function for email collection
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Header.tsx      # Navigation header
│   │   ├── Hero.tsx        # Hero section with "Coming Soon" badge
│   │   ├── Stats.tsx       # Key statistics
│   │   ├── Features.tsx    # Feature preview grid
│   │   ├── HowItWorks.tsx  # Step-by-step guide
│   │   ├── AIShowcase.tsx  # AI capabilities demo
│   │   ├── Founder.tsx     # Founder message
│   │   ├── WaitlistCTA.tsx # Email signup form
│   │   └── Footer.tsx      # Footer with links
│   ├── App.tsx             # Main app component
│   ├── main.tsx            # Entry point
│   └── index.css           # Global styles
├── index.html              # HTML template
├── package.json
├── tailwind.config.js
├── tsconfig.json
├── vite.config.ts
├── vercel.json             # Vercel configuration
├── .env.example            # Environment variable template
└── README.md
```

## Features

This "coming soon" landing page includes:

- **Hero Section** - "Coming Soon" badge with waitlist CTA
- **Stats Section** - Key value propositions
- **Features Preview** - All planned features showcased
- **How It Works** - 4-step explanation of the platform
- **AI Showcase** - Demo of MOS translation and skill extraction
- **Founder Section** - Personal message from Bradley Baker
- **Waitlist Signup** - Email collection via Resend API

## Customization

### Colors

The color palette is defined in `tailwind.config.js`:

- **Navy**: Dark blue tones for backgrounds
- **Gold**: Accent color for CTAs and highlights
- **Tactical**: Green tones for secondary accents

### Email Template

The waitlist confirmation email is defined in `api/waitlist.ts`. Customize the HTML template to match your branding.

## When the App Launches

When you're ready to launch the main app, you can:

1. Update the landing page to redirect to the app
2. Change CTAs from "Join Waitlist" to "Sign Up" / "Sign In"
3. Add the pricing section back
4. Or simply point the domain to your main application

## License

Proprietary - Patriot Ops Center
