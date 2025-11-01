# Tonsco Next.js Framework Setup Guide

## Project Structure Created

The Next.js framework has been set up in the `framework` folder with the following structure:

```
framework/
├── public/                 # Static assets (copy from parent folder)
│   ├── images/
│   ├── tonscologo/
│   └── partnerlogo/
├── src/
│   ├── app/
│   │   ├── layout.tsx     # Root layout with Header and Footer
│   │   ├── page.tsx       # Home page
│   │   ├── globals.css    # Global styles
│   │   ├── services/
│   │   │   └── page.tsx   # Services page (to be created)
│   │   └── contact/
│   │       └── page.tsx   # Contact page (to be created)
│   └── components/
│       ├── Header/        # Header component with navigation
│       ├── Footer/        # Footer component
│       ├── Hero/          # Hero section (to be created)
│       ├── About/         # About section (to be created)
│       ├── ServicesOverview/ # Services overview (to be created)
│       ├── Clients/       # Clients marquee (to be created)
│       └── CTA/           # Call-to-action section (to be created)
├── package.json
├── next.config.js
├── tsconfig.json
└── README.md
```

## Installation Steps

### 1. Install Dependencies

Navigate to the framework folder and install all dependencies:

```powershell
cd framework
npm install
```

This will install:
- Next.js 14
- React 18
- TypeScript
- ESLint

### 2. Copy Static Assets

Copy the images and logos from the parent directory to the framework's public folder:

```powershell
# From the framework directory
# Copy images
xcopy "..\images" "public\images\" /E /I /Y

# Copy logos
xcopy "..\tonscologo" "public\tonscologo\" /E /I /Y
xcopy "..\partnerlogo" "public\partnerlogo\" /E /I /Y
```

### 3. Complete Remaining Components

The framework has been set up with:
- ✅ Package.json and configuration files
- ✅ Root layout with Header and Footer
- ✅ Global CSS with all styles
- ✅ Header component with navigation
- ✅ Footer component
- ✅ Home page structure

Still needed (can be added progressively):
- Hero component
- About component
- ServicesOverview component
- Clients component
- CTA component
- Services page
- Contact page

### 4. Run Development Server

Once dependencies are installed:

```powershell
npm run dev
```

The site will be available at http://localhost:3000

### 5. Build for Production

To create an optimized production build:

```powershell
npm run build
npm run start
```

## Component Creation Pattern

Each component follows this structure:

```typescript
// Example: src/components/Hero/index.tsx
'use client' // Add this if component uses hooks or browser APIs

import Image from 'next/image'
import Link from 'next/link'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Component content */}
    </section>
  )
}
```

With corresponding CSS module:
```css
/* src/components/Hero/Hero.module.css */
.hero {
  /* Styles */
}
```

## Key Differences from Static HTML

1. **Images**: Use Next.js Image component
   ```tsx
   <Image src="/images/photo.jpg" alt="..." width={800} height={600} />
   ```

2. **Links**: Use Next.js Link component
   ```tsx
   <Link href="/services">Services</Link>
   ```

3. **Client-side JavaScript**: Mark components with `'use client'`
   ```tsx
   'use client'
   import { useState, useEffect } from 'react'
   ```

4. **Styling**: Use CSS Modules or global styles
   - Global: `src/app/globals.css`
   - Modules: `Component.module.css`

## Benefits of This Setup

- ⚡ **Performance**: Automatic code splitting and optimization
- 🔍 **SEO**: Server-side rendering for better search rankings
- 📱 **Responsive**: All existing responsive designs preserved
- 🎨 **Styling**: CSS modules prevent style conflicts
- 🖼️ **Images**: Automatic image optimization
- 🚀 **Fast Refresh**: See changes instantly during development
- 📦 **TypeScript**: Type safety and better developer experience

## Next Steps

1. Install dependencies: `npm install`
2. Copy assets to public folder
3. Create remaining components (Hero, About, etc.)
4. Test in development mode
5. Build and deploy to production

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## Troubleshooting

### Port already in use
```powershell
# Kill process on port 3000
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

### Clear Next.js cache
```powershell
Remove-Item -Recurse -Force .next
npm run dev
```

### Module not found errors
```powershell
Remove-Item -Recurse -Force node_modules
Remove-Item package-lock.json
npm install
```
