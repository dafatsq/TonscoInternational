# Quick Start Guide - Tonsco Next.js

## 🚀 3 Steps to Run

### 1. Install & Setup
```powershell
cd framework
.\setup.bat
```
**OR manually:**
```powershell
cd framework
npm install
xcopy "..\images" "public\images\" /E /I /Y
xcopy "..\tonscologo" "public\tonscologo\" /E /I /Y
xcopy "..\partnerlogo" "public\partnerlogo\" /E /I /Y
```

### 2. Start Development
```powershell
npm run dev
```
Open: **http://localhost:3000**

### 3. Build Production
```powershell
npm run build
npm start
```

## 📦 What's Included

| Component | Status | Location |
|-----------|--------|----------|
| Header | ✅ Complete | `src/components/Header/` |
| Footer | ✅ Complete | `src/components/Footer/` |
| Hero | ✅ Complete | `src/components/Hero/` |
| About | ✅ Complete | `src/components/About/` |
| Services | ✅ Complete | `src/components/ServicesOverview/` |
| Clients | ✅ Complete | `src/components/Clients/` |
| CTA | ✅ Complete | `src/components/CTA/` |
| Home Page | ✅ Complete | `src/app/page.tsx` |

## 🛠️ Common Commands

```powershell
# Development
npm run dev           # Start dev server

# Production
npm run build        # Build for production
npm start            # Start production server

# Code Quality
npm run lint         # Check code quality

# Clean & Reinstall
Remove-Item node_modules -Recurse -Force
Remove-Item package-lock.json
npm install
```

## 📁 Add New Page

Create: `src/app/newpage/page.tsx`
```typescript
export default function NewPage() {
  return (
    <main>
      <h1>New Page</h1>
    </main>
  )
}
```
Access: `http://localhost:3000/newpage`

## 📁 Add New Component

Create: `src/components/MyComponent/index.tsx`
```typescript
import styles from './MyComponent.module.css'

export default function MyComponent() {
  return (
    <div className={styles.container}>
      <h2>My Component</h2>
    </div>
  )
}
```

Create: `src/components/MyComponent/MyComponent.module.css`
```css
.container {
  padding: 2rem;
}
```

Use in page:
```typescript
import MyComponent from '@/components/MyComponent'

export default function Page() {
  return <MyComponent />
}
```

## 🎨 Styling Tips

### Use Global Classes
```tsx
<button className="btn btn-primary">Click Me</button>
```

### Use CSS Modules
```tsx
<div className={styles.myClass}>Content</div>
```

### Combine Both
```tsx
<div className={`container ${styles.myClass}`}>Content</div>
```

## 🖼️ Images

### Using Next.js Image
```tsx
import Image from 'next/image'

<Image 
  src="/images/photo.jpg"
  alt="Description"
  width={800}
  height={600}
/>
```

### Background Images (CSS)
```css
.hero {
  background-image: url('/images/bg.jpg');
}
```

## 🔗 Links

### Internal Links
```tsx
import Link from 'next/link'

<Link href="/services">Services</Link>
```

### External Links
```tsx
<a href="https://example.com" target="_blank" rel="noopener">
  External Link
</a>
```

## 🎯 Environment Variables

Create `.env.local`:
```env
NEXT_PUBLIC_API_URL=https://api.example.com
NEXT_PUBLIC_SITE_URL=https://tonsco.com
```

Use in code:
```typescript
const apiUrl = process.env.NEXT_PUBLIC_API_URL
```

## 📱 Responsive Breakpoints

```css
/* Mobile First - already set in globals.css */
@media (max-width: 600px) { /* Mobile */ }
@media (max-width: 900px) { /* Tablet */ }
@media (max-width: 1024px) { /* Desktop */ }
```

## 🐛 Troubleshooting

### TypeScript Errors?
```powershell
npm install
# Restart VS Code
```

### Port 3000 Busy?
```powershell
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

### Clear Cache
```powershell
Remove-Item .next -Recurse -Force
npm run dev
```

### Images Not Loading?
1. Check files in `public/` folder
2. Verify path starts with `/`
3. Restart dev server

## 🚀 Deploy to Vercel

```powershell
npm install -g vercel
vercel
```

## 📚 Learn More

- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [TypeScript](https://www.typescriptlang.org/docs/)

## ✅ Checklist

- [ ] Run `npm install` or `setup.bat`
- [ ] Copy assets to `public/` folder
- [ ] Start dev server (`npm run dev`)
- [ ] Test on http://localhost:3000
- [ ] Check mobile responsiveness
- [ ] Build for production (`npm run build`)
- [ ] Deploy to hosting

---

**Need help?** Check:
- `README.md` - Project overview
- `SETUP_GUIDE.md` - Detailed setup
- `MIGRATION_COMPLETE.md` - Full documentation
