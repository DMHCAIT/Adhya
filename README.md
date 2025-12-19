# ADHYA Designer Studio Website

A premium designer studio website built with Next.js, Tailwind CSS, and Framer Motion, exclusively for women and children's designer wear.

## 🌟 Features

- **Modern Tech Stack**: Next.js 15, React, TypeScript, Tailwind CSS
- **Smooth Animations**: Framer Motion for elegant page transitions and scroll animations
- **Fully Responsive**: Mobile-first design that looks stunning on all devices
- **SEO Optimized**: Built-in SEO with Next.js metadata and semantic HTML
- **Fast Performance**: Optimized images and server-side rendering
- **Premium Design**: Editorial layouts with luxury spacing and typography

## 📄 Pages

1. **Home** - Hero section, services overview, why choose us
2. **About Us** - Studio philosophy, vision, and mission
3. **Services** - Women's wear, children's wear, mother-daughter combos, handcrafted work
4. **Collections** - Image gallery of designer collections
5. **Design Process** - 5-step journey from consultation to delivery
6. **Book Design Discussion** - Appointment booking with form
7. **Testimonials** - Client reviews and experiences
8. **FAQ** - Common questions with accordion interface
9. **Contact** - Contact information and inquiry form

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# Navigate to project directory
cd designer-studio

# Install dependencies (already done)
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 15 (React) |
| Styling | Tailwind CSS |
| Animations | Framer Motion |
| Icons | Lucide React |
| Language | TypeScript |
| Fonts | Cormorant Garamond, Inter |

## 📦 Project Structure

```
designer-studio/
├── app/
│   ├── about/
│   ├── services/
│   ├── collections/
│   ├── design-process/
│   ├── book-discussion/
│   ├── testimonials/
│   ├── faq/
│   ├── contact/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Button.tsx
│   └── PageTransition.tsx
└── public/
```

## 🎨 Design Features

- **Typography**: Elegant serif headings with Cormorant Garamond
- **Color Scheme**: Clean white background with black text (luxury editorial style)
- **Animations**: Fade-in on scroll, smooth page transitions
- **Spacing**: Generous white space for premium feel
- **Interactions**: Subtle hover effects on buttons and cards

## 📱 Responsive Design

- Mobile: Stacked layout, hamburger menu
- Tablet: 2-column grids
- Desktop: Multi-column layouts with max-width containers

## 🔄 Future Enhancements

To add more advanced features:

### Backend & Booking System
```bash
npm install @supabase/supabase-js
```
- Create Supabase project for bookings database
- Implement real-time appointment scheduling
- Add admin dashboard

### Image Management
```bash
npm install cloudinary
```
- Upload collection images to Cloudinary
- Automatic image optimization
- Gallery with lightbox

### 3D Visuals (Optional)
```bash
npm install @splinetool/react-spline
```
- Add 3D fabric animations
- Interactive hero sections

### CMS Integration
```bash
npm install @sanity/client next-sanity
```
- Sanity CMS for content management
- Update collections without developer
- Manage testimonials and FAQs

## 🚢 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect your GitHub repo to Vercel for automatic deployments.

### Environment Variables

Create `.env.local` for any API keys:

```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
# Add Supabase, Cloudinary, etc. keys here when ready
```

## 📞 Support

For questions or support, contact: info@adhyastudio.com

## 📄 License

© 2024 ADHYA Designer Studio. All rights reserved.

---

Built with ❤️ using Next.js and modern web technologies
