---
description: Repository Information Overview
alwaysApply: true
---

# Patriot Ops Center Landing Page Information

## Summary
A "coming soon" landing page for **Patriot Ops Center**, an AI-powered career transition platform for military veterans. This project is a focused web application designed to capture waitlist signups via email before the full platform launch.

## Structure
- **api/**: Vercel serverless functions, specifically `waitlist.ts` for handling email collection via the Resend API.
- **src/**: Main application source code.
  - **components/**: Modular UI sections (Hero, Stats, Features, AI Showcase, etc.).
  - **App.tsx**: Main React application shell.
  - **main.tsx**: Client-side entry point.
- **public/**: Static assets like favicons and images.
- **dist/**: Production build output (generated).

## Language & Runtime
**Language**: TypeScript  
**Version**: Node.js 18+, npm 9+  
**Build System**: Vite  
**Package Manager**: npm

## Dependencies
**Main Dependencies**:
- `react`: ^18.2.0
- `react-dom`: ^18.2.0
- `framer-motion`: ^11.15.0 (Animations)
- `lucide-react`: ^0.468.0 (Icons)

**Development Dependencies**:
- `vite`: ^7.3.1
- `typescript`: ^5.3.3
- `tailwindcss`: ^3.4.1
- `@vercel/node`: ^5.5.23
- `postcss`, `autoprefixer`

## Build & Installation
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Create production build
npm run build

# Preview production build locally
npm run preview
```

## Main Files & Resources
- **src/main.tsx**: The primary entry point for the React application.
- **api/waitlist.ts**: Serverless function for Resend email integration.
- **vercel.json**: Vercel configuration including build commands, output directory, and security headers.
- **tailwind.config.js**: Custom theme configuration for Navy, Gold, and Tactical color palettes.
- **.env.example**: Template for the required `RESEND_API_KEY`.

## Usage & Operations
The application is designed for deployment on **Vercel**. Key operations involve configuring the `RESEND_API_KEY` environment variable and deploying via the Vercel CLI or Dashboard.

**Deployment Command**:
```bash
# Using Vercel CLI
vercel --prod
```

## Validation
**Quality Checks**:
- `tsc`: TypeScript type checking is integrated into the build process (`tsc && vite build`).
- Security headers (HSTS, XSS protection) are configured in `vercel.json`.
