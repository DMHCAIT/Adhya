# 🌸 ADHYA Designer Studio - Quick Reference

## 🚀 Quick Start
```bash
cd designer-studio
npm run dev
# Open: http://localhost:3000
```

## 📁 Key Files to Edit

### Update Contact Info
- `components/Footer.tsx` (lines 35-40)
- `app/contact/page.tsx` (lines 23-55)

### Add Your Logo
- Place logo in: `public/logo.png`
- Update: `components/Header.tsx` (line 21)

### Update Text Content
- Home: `app/page.tsx`
- About: `app/about/page.tsx`
- Services: `app/services/page.tsx`
- etc.

### Add Images
- Create: `public/images/` folder
- Update: `app/collections/page.tsx`

### Change Colors
- `app/globals.css` (lines 1-50)

### Change Fonts
- `app/layout.tsx` (lines 7-16)

## 🎨 Design System

### Colors
- Background: White (`#ffffff`)
- Text: Black (`#171717`)
- Gray: `#6b7280` (secondary text)

### Typography
- Headings: Cormorant Garamond (serif)
- Body: Inter (sans-serif)
- Sizes: 
  - H1: 4xl-6xl
  - H2: 3xl-5xl
  - Body: base-lg

### Spacing
- Section padding: 16-32 (responsive)
- Container: max-w-7xl
- Grid gap: 8-12

## 🔧 Common Commands

```bash
# Development
npm run dev          # Start dev server
npm run build        # Build for production
npm start            # Run production build
npm run lint         # Check code

# Deployment
vercel               # Deploy to Vercel
```

## 📄 All Pages

| Page | File |
|------|------|
| Home | `app/page.tsx` |
| About | `app/about/page.tsx` |
| Services | `app/services/page.tsx` |
| Collections | `app/collections/page.tsx` |
| Design Process | `app/design-process/page.tsx` |
| Book Discussion | `app/book-discussion/page.tsx` |
| Testimonials | `app/testimonials/page.tsx` |
| FAQ | `app/faq/page.tsx` |
| Contact | `app/contact/page.tsx` |

## 🎯 URLs to Test

- http://localhost:3000
- http://localhost:3000/about
- http://localhost:3000/services
- http://localhost:3000/collections
- http://localhost:3000/design-process
- http://localhost:3000/book-discussion
- http://localhost:3000/testimonials
- http://localhost:3000/faq
- http://localhost:3000/contact

## 📦 Installed Packages

**Dependencies:**
- next (16.1.0)
- react (19.2.3)
- react-dom (19.2.3)
- framer-motion (12.23.26)
- lucide-react (0.562.0)
- clsx (2.1.1)

**Dev Dependencies:**
- typescript (5.x)
- tailwindcss (4.x)
- eslint (9.x)

## 🌐 Deploy to Vercel

```bash
# One-time setup
npm i -g vercel

# Deploy
vercel

# Production
vercel --prod
```

Or:
1. Push to GitHub
2. Import on vercel.com
3. Deploy automatically

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🎨 Tailwind Classes Used

**Layout:**
- `max-w-7xl mx-auto` - Container
- `container-padding` - Responsive padding
- `section-padding` - Vertical spacing

**Typography:**
- `heading-1`, `heading-2`, `heading-3`
- `body-text`
- `font-light` - Elegant thin weight

**Animations:**
- Framer Motion `motion.*` components
- `whileInView` for scroll animations
- `initial/animate` for transitions

## 🔍 Troubleshooting

**Issue:** Port 3000 in use
```bash
lsof -ti:3000 | xargs kill -9
```

**Issue:** Module not found
```bash
rm -rf node_modules
npm install
```

**Issue:** Build errors
```bash
npm run lint
# Fix errors, then:
npm run build
```

## 📚 Documentation

- Full Details: `PROJECT_SUMMARY.md`
- Setup Guide: `SETUP_COMPLETE.md`
- Package Info: `README.md`

## ✅ Before Going Live

- [ ] Update contact information
- [ ] Add real images
- [ ] Test all forms
- [ ] Test on mobile
- [ ] Check all pages load
- [ ] Update social links
- [ ] Test booking form
- [ ] Run `npm run build`

## 💡 Quick Tips

1. **Hot Reload**: Save files to see instant changes
2. **TypeScript**: Types help catch errors early
3. **Tailwind**: Use utility classes for styling
4. **Components**: Reuse Header/Footer/Button
5. **Animations**: Framer Motion handles all motion

---

**Need Help?** Check `PROJECT_SUMMARY.md` for detailed instructions.

**Website Ready!** 🌸 http://localhost:3000
