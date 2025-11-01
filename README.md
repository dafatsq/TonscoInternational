# Tonsco International - Next.js Website

This is the Next.js version of the Tonsco International portfolio website. It provides a modern, fast, and SEO-optimized platform for showcasing pipeline and integrity services.

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm package manager

### Installation

1. Navigate to the framework folder:
```bash
cd framework
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

### Development

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Building for Production

Create an optimized production build:

```bash
npm run build
# or
yarn build
# or
pnpm build
```

### Starting Production Server

After building, start the production server:

```bash
npm run start
# or
yarn start
# or
pnpm start
```

## Project Structure

```
framework/
├── public/              # Static assets (images, logos, etc.)
│   ├── images/
│   ├── tonscologo/
│   └── partnerlogo/
├── src/
│   ├── app/            # Next.js App Router pages
│   │   ├── layout.tsx  # Root layout
│   │   ├── page.tsx    # Home page
│   │   ├── services/   # Services page
│   │   └── contact/    # Contact page
│   ├── components/     # Reusable React components
│   │   ├── Header/
│   │   ├── Footer/
│   │   ├── Hero/
│   │   └── ...
│   └── styles/         # CSS and style files
│       ├── globals.css
│       └── ...
├── package.json
├── next.config.js
└── tsconfig.json
```

## Features

- ⚡ Next.js 14 with App Router
- 🎨 Modern CSS with responsive design
- 📱 Mobile-first approach
- 🔍 SEO optimized
- 📊 Analytics ready
- 🚀 Optimized images and assets
- 💼 Professional UI/UX

## Learn More

To learn more about Next.js, check out the following resources:

- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)
- [Next.js GitHub repository](https://github.com/vercel/next.js/)

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
