# Tonsco Next.js Framework - Project Structure

```
Tonsco Portofolio Company/
│
├── framework/                          🆕 NEW NEXT.JS PROJECT
│   │
│   ├── public/                        📁 Static Assets (COPY FROM PARENT)
│   │   ├── images/                   ← Copy from ../images/
│   │   ├── tonscologo/               ← Copy from ../tonscologo/
│   │   └── partnerlogo/              ← Copy from ../partnerlogo/
│   │
│   ├── src/                          📁 Source Code
│   │   │
│   │   ├── app/                      📁 Next.js App Router
│   │   │   ├── layout.tsx           ✅ Root layout (Header + Footer)
│   │   │   ├── page.tsx             ✅ Home page
│   │   │   ├── globals.css          ✅ Global styles
│   │   │   │
│   │   │   ├── services/            📁 Services Page (Optional)
│   │   │   │   └── page.tsx         📝 To be created
│   │   │   │
│   │   │   └── contact/             📁 Contact Page (Optional)
│   │   │       └── page.tsx         📝 To be created
│   │   │
│   │   └── components/               📁 React Components
│   │       │
│   │       ├── Header/              ✅ Navigation Component
│   │       │   ├── index.tsx        ✅ Header logic & JSX
│   │       │   └── Header.module.css ✅ Header styles
│   │       │
│   │       ├── Footer/              ✅ Footer Component
│   │       │   ├── index.tsx        ✅ Footer logic & JSX
│   │       │   └── Footer.module.css ✅ Footer styles
│   │       │
│   │       ├── Hero/                ✅ Hero Section
│   │       │   ├── index.tsx        ✅ Hero component
│   │       │   └── Hero.module.css  ✅ Hero styles
│   │       │
│   │       ├── About/               ✅ About Section
│   │       │   ├── index.tsx        ✅ About component
│   │       │   └── About.module.css ✅ About styles
│   │       │
│   │       ├── ServicesOverview/    ✅ Services Grid
│   │       │   ├── index.tsx        ✅ Services component
│   │       │   └── ServicesOverview.module.css ✅ Styles
│   │       │
│   │       ├── Clients/             ✅ Client Logos Marquee
│   │       │   ├── index.tsx        ✅ Clients component
│   │       │   └── Clients.module.css ✅ Clients styles
│   │       │
│   │       └── CTA/                 ✅ Call-to-Action
│   │           ├── index.tsx        ✅ CTA component
│   │           └── CTA.module.css   ✅ CTA styles
│   │
│   ├── package.json                  ✅ NPM dependencies
│   ├── package-lock.json            (Generated after npm install)
│   ├── next.config.js               ✅ Next.js configuration
│   ├── tsconfig.json                ✅ TypeScript config
│   ├── .eslintrc.json               ✅ ESLint config
│   ├── .gitignore                   ✅ Git ignore rules
│   │
│   ├── node_modules/                (Generated after npm install)
│   ├── .next/                       (Generated after npm run dev/build)
│   │
│   ├── README.md                    ✅ Project overview
│   ├── SETUP_GUIDE.md               ✅ Detailed setup guide
│   ├── MIGRATION_COMPLETE.md        ✅ Complete documentation
│   ├── QUICK_START.md               ✅ Quick reference
│   ├── PROJECT_STRUCTURE.md         ✅ This file
│   └── setup.bat                    ✅ Windows setup script
│
├── images/                           📁 Original Images
├── tonscologo/                       📁 Original Logos
├── partnerlogo/                      📁 Original Partner Logos
├── styles/                           📁 Original CSS Files
├── scripts/                          📁 Original JavaScript Files
│
├── index.html                        📄 Original HTML
├── contact.html                      📄 Original HTML
└── services.html                     📄 Original HTML
```

## 🎯 Component Flow

```
User visits → layout.tsx (wraps everything)
                ↓
              Header (always visible)
                ↓
              page.tsx (home page)
                ↓
              - Hero
              - About
              - ServicesOverview
              - Clients
              - CTA
                ↓
              Footer (always visible)
```

## 📊 File Relationships

```
layout.tsx (Root)
    ├── imports Header component
    ├── imports Footer component
    ├── imports globals.css
    └── wraps {children}
        └── page.tsx (Home)
            ├── imports Hero
            ├── imports About
            ├── imports ServicesOverview
            ├── imports Clients
            └── imports CTA
```

## 🎨 Styling Architecture

```
globals.css (Global)
    ├── CSS Variables
    ├── Reset Styles
    ├── Utility Classes (.container, .btn, etc.)
    └── Global Animations

Component.module.css (Scoped)
    └── Component-specific styles
        └── Scoped to that component only
```

## 🔄 Data Flow (Example)

```
ServicesOverview/index.tsx
    ↓
services array (data)
    ↓
.map() over services
    ↓
Render ServiceCard for each
    ↓
Apply ServicesOverview.module.css styles
```

## 📁 Key Directories Explained

### `/public`
- Static files accessible at root URL
- `/public/images/photo.jpg` → `http://localhost:3000/images/photo.jpg`
- No processing, served as-is
- ⚠️ **Action Required**: Copy assets from parent directory

### `/src/app`
- Next.js App Router pages
- Each folder = route
- `page.tsx` = actual page component
- `layout.tsx` = wrapper for pages

### `/src/components`
- Reusable React components
- Each component in its own folder
- Includes `.tsx` (logic) and `.module.css` (styles)

## 🚀 Build Output

```
After npm run build:

framework/
├── .next/                    (Build output)
│   ├── server/              (Server-side code)
│   ├── static/              (Static assets)
│   └── cache/               (Build cache)
│
└── out/                     (If using static export)
    └── Ready to deploy
```

## 📦 Dependencies Structure

```
package.json
    ├── dependencies (Production)
    │   ├── next
    │   ├── react
    │   └── react-dom
    │
    └── devDependencies (Development)
        ├── typescript
        ├── @types/node
        ├── @types/react
        └── eslint
```

## 🎯 Import Paths

```typescript
// Absolute imports (recommended)
import Header from '@/components/Header'
import Hero from '@/components/Hero'

// Relative imports
import Header from '../../components/Header'
import Hero from '../../components/Hero'

// CSS imports
import './Component.module.css'
import '../app/globals.css'
```

## 🔧 Configuration Files

```
tsconfig.json
    └── TypeScript compiler settings
    └── Path aliases (@/*)

next.config.js
    └── Next.js build settings
    └── Webpack customization

.eslintrc.json
    └── Code quality rules
    └── Next.js specific linting

package.json
    └── Dependencies
    └── Scripts (dev, build, start)
```

## 📝 Naming Conventions

```
Files:
- Components: PascalCase (Header.tsx, Hero.tsx)
- CSS Modules: PascalCase.module.css
- Pages: lowercase (page.tsx, layout.tsx)
- Utilities: camelCase (utils.ts, helpers.ts)

Folders:
- Components: PascalCase (Header/, Footer/)
- Pages: lowercase (services/, contact/)

Variables:
- Components: PascalCase (const Header = ...)
- Functions: camelCase (const fetchData = ...)
- Constants: UPPER_SNAKE_CASE (const API_URL = ...)
```

## 🎨 CSS Module Example

```typescript
// Component.tsx
import styles from './Component.module.css'

export default function Component() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Hello</h1>
    </div>
  )
}

// Component.module.css
.container {
  padding: 2rem;
}

.title {
  color: blue;
}

// Compiles to unique class names:
// .Component_container__abc123
// .Component_title__def456
```

## 🌐 URL Structure

```
http://localhost:3000/           → src/app/page.tsx
http://localhost:3000/services   → src/app/services/page.tsx
http://localhost:3000/contact    → src/app/contact/page.tsx
http://localhost:3000/images/x.jpg → public/images/x.jpg
```

## ✅ Setup Checklist

- [ ] 1. Navigate to `framework` folder
- [ ] 2. Run `npm install` or `setup.bat`
- [ ] 3. Copy assets to `public/` folder
- [ ] 4. Run `npm run dev`
- [ ] 5. Open http://localhost:3000
- [ ] 6. Verify all components render
- [ ] 7. Check images load correctly
- [ ] 8. Test navigation
- [ ] 9. Check mobile responsiveness
- [ ] 10. Build with `npm run build`

---

**This structure provides:**
- 🎯 Clear organization
- 📦 Component reusability
- 🎨 Scoped styling
- ⚡ Performance optimization
- 🔧 Easy maintenance
- 📱 Mobile-first design
