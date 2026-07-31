# TheLTOPortal.ph - LTO Tracker Web Application

Production-ready Next.js web application for tracking and understanding LTO (Land Transportation Office) transaction statuses in the Philippines.

**Live Site (after deployment):** https://theltoportal.ph

---

## 📋 Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Deployment to Vercel](#deployment-to-vercel)
- [Deployment to WordPress](#deployment-to-wordpress)
- [Maintenance Guide](#maintenance-guide)
- [Upgrading the Project](#upgrading-the-project)
- [Common Tasks](#common-tasks)
- [Troubleshooting](#troubleshooting)

---

## Overview

This is a **production-ready** web application built specifically for TheLTOPortal.ph. It includes:

- **Homepage** with hero, features, and call-to-action
- **LTO Tracker** tool (interactive search by plate number, MV file, or license)
- **SEO-optimized** pages with metadata, Open Graph, structured data
- **FAQ section** with accordion UI
- **Related articles** grid
- **Responsive design** that works beautifully on mobile, tablet, and desktop
- **Accessibility-compliant** components (WCAG guidelines)
- **Performance-optimized** for excellent Lighthouse scores

### Key Features

✅ **Zero environment variables** — deploys immediately  
✅ **No database required** (first version uses JSON data layer)  
✅ **Mobile-first** responsive design  
✅ **Large touch targets** for elderly users  
✅ **Clean, government-inspired** visual design  
✅ **SEO-ready** with sitemap, robots.txt, structured data  
✅ **Easy to maintain** — non-technical friendly

---

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Deployment:** Vercel (primary), WordPress integration (future)
- **No authentication, no database, no backend services**

---

## Project Structure

```
theltoportal-tracker/
├── public/                      # Static assets (icons, images)
│   ├── icon.svg                 # App icon
│   └── robots-note.txt          # Note about auto-generated files
├── src/
│   ├── app/                     # Next.js App Router pages
│   │   ├── layout.tsx           # Root layout (Header + Footer)
│   │   ├── page.tsx             # Homepage
│   │   ├── lto-tracker/
│   │   │   └── page.tsx         # LTO Tracker page
│   │   ├── not-found.tsx        # 404 page
│   │   ├── robots.ts            # Robots.txt generator
│   │   ├── sitemap.ts           # Sitemap.xml generator
│   │   ├── manifest.ts          # Web manifest
│   │   ├── icon.svg             # Favicon
│   │   └── globals.css          # Global CSS + Tailwind
│   ├── components/              # React components
│   │   ├── layout/              # Header, Footer
│   │   ├── ui/                  # Button, Badge, Container, LinkButton
│   │   ├── tracker/             # TrackerTool, ResultCard, Timeline
│   │   ├── sections/            # Hero, FAQ, Articles, Explanation
│   │   └── seo/                 # JsonLd, Breadcrumbs
│   ├── config/
│   │   └── site.ts              # Site-wide configuration (URLs, branding)
│   ├── data/                    # JSON data (transactions, FAQs, articles)
│   │   ├── transactions.json
│   │   ├── faqs.json
│   │   └── articles.json
│   ├── lib/                     # Business logic and utilities
│   │   ├── search-service.ts    # Data access layer (swap for API later)
│   │   ├── validation.ts        # Input validation
│   │   ├── status-info.ts       # Status helper functions
│   │   ├── schema.ts            # Structured data generators
│   │   └── utils.ts             # Shared utilities
│   └── types/
│       └── index.ts             # TypeScript type definitions
├── .gitignore
├── .eslintrc.json
├── next.config.ts               # Next.js configuration
├── tailwind.config.ts           # Tailwind CSS configuration
├── tsconfig.json                # TypeScript configuration
├── postcss.config.mjs           # PostCSS configuration
├── package.json                 # Dependencies and scripts
└── README.md                    # This file
```

---

## Getting Started

### Prerequisites

- **Node.js** version 18.17 or higher
- **npm** version 9.0 or higher

### Installation

1. **Clone or download** this project to your computer.

2. **Open a terminal** in the project folder.

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Run the development server:**

   ```bash
   npm run dev
   ```

5. **Open your browser** and go to:

   ```
   http://localhost:3000
   ```

You should see the homepage. Navigate to `/lto-tracker` to test the tracker tool.

### Available Scripts

```bash
npm run dev         # Start development server
npm run build       # Build for production
npm start           # Start production server (after build)
npm run lint        # Check code quality
npm run type-check  # Check TypeScript types
```

---

## Deployment to Vercel

Vercel is the recommended hosting platform. Deployment is **instant and requires zero configuration**.

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository.
2. Push your project code to that repository:

   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

### Step 2: Deploy to Vercel

1. Go to [Vercel](https://vercel.com) and sign up (free account is fine).
2. Click **"New Project"**.
3. Import your GitHub repository.
4. Vercel will auto-detect Next.js settings. **Do not change anything.**
5. Click **"Deploy"**.

That's it! Vercel will build and deploy your site in ~2 minutes.

### Step 3: Connect Your Custom Domain

1. In your Vercel project dashboard, go to **Settings → Domains**.
2. Add `theltoportal.ph` and `www.theltoportal.ph`.
3. Follow Vercel's instructions to update your DNS records with your domain registrar.

Once DNS propagates (usually 10-30 minutes), your site will be live at `https://theltoportal.ph`.

### Automatic Deployments

Every time you push a new commit to GitHub, Vercel will automatically rebuild and redeploy your site. No manual steps required.

---

## Deployment to WordPress

You can integrate this tracker tool into your existing WordPress site. There are two approaches:

### Option 1: Embed via iframe (Easiest)

After deploying to Vercel:

1. In WordPress, create a new page or post.
2. Add a **Custom HTML block**.
3. Insert:

   ```html
   <iframe
     src="https://theltoportal.ph/lto-tracker"
     width="100%"
     height="1200"
     frameborder="0"
     style="border: none;"
   ></iframe>
   ```

4. Publish the page.

The tracker will appear embedded in your WordPress page.

**Pros:** Simple, no code changes.  
**Cons:** The tracker runs on a separate domain (Vercel), not natively in WordPress.

### Option 2: Full WordPress Integration (Advanced)

For a native WordPress experience, you would:

1. Convert the React components into WordPress blocks (Gutenberg) or a custom plugin.
2. Serve the data layer (JSON) via WordPress REST API endpoints.
3. Use a WordPress-friendly build tool like `@wordpress/scripts`.

This requires a WordPress developer. If you're interested in this approach, contact a developer familiar with WordPress + React.

---

## Maintenance Guide

This project is designed to be **extremely easy to maintain** for non-technical users. Here's what you can safely edit:

### 1. Site Information (Name, URL, Contact)

**File:** `src/config/site.ts`

```typescript
export const siteConfig = {
  name: 'TheLTOPortal',
  fullName: 'TheLTOPortal.ph',
  title: 'LTO Portal Philippines - Your Guide to LTO Services',
  description: '...',
  url: 'https://theltoportal.ph', // ← Change this
  ltoHotline: '1342',              // ← Change this
  ltoOfficialSite: 'https://lto.gov.ph',
  ltoEmail: 'info@lto.gov.ph',
  twitterHandle: '@theltoportal',
  locale: 'en_PH',
  // ...
};
```

After editing, save the file, commit, and push to GitHub. Vercel will auto-deploy.

### 2. Brand Colors

**File:** `tailwind.config.ts`

Look for the `primary` color section (~line 15-25). Change the values to your preferred hex colors:

```typescript
primary: {
  600: '#1e40af',  // Main brand blue ← Change this
  700: '#1e3a8a',
  // ...
},
```

### 3. Transaction Data (Search Results)

**File:** `src/data/transactions.json`

This is where search results come from. Add, edit, or remove transaction records here. Each record looks like:

```json
{
  "id": "txn-001",
  "searchType": "plate",
  "searchValue": "ABC1234",
  "transactionType": "Motor Vehicle Registration Renewal",
  "currentStatus": "for-release",
  ...
}
```

**Important:** Keep the structure identical. Only change the *values*, not the *keys*.

### 4. FAQ Items

**File:** `src/data/faqs.json`

Add or edit frequently asked questions:

```json
{
  "id": "faq-1",
  "question": "What is the LTO Tracker?",
  "answer": "The LTO Tracker is...",
  "category": "general"
}
```

### 5. Related Articles

**File:** `src/data/articles.json`

Add articles that appear in the "Related Articles" section:

```json
{
  "id": "art-1",
  "title": "How to Renew Your Vehicle Registration",
  "excerpt": "A complete guide...",
  "slug": "renew-vehicle-registration",
  "category": "Registration",
  "readTime": 8,
  "publishedAt": "2026-06-15"
}
```

### 6. Adding the SEO Article

**File:** `src/components/sections/ArticlePlaceholder.tsx`

Look for the comment block that says:

```
ARTICLE CONTENT PLACEHOLDER
```

Replace the placeholder `<div>` with your article HTML or JSX. Keep the surrounding structure intact.

---

## Upgrading the Project

### Upgrading Dependencies

Run this command once every few months to keep dependencies up to date:

```bash
npm update
```

Then test locally (`npm run dev`) and push to GitHub. Vercel will redeploy with the new versions.

### Adding a Real API (Future Upgrade)

Right now, data comes from JSON files. To connect a real LTO API:

1. **Open:** `src/lib/search-service.ts`
2. **Find the function:** `searchTransaction`
3. **Replace the body** with a `fetch()` call to your API:

   ```typescript
   export async function searchTransaction(
     type: SearchType,
     sanitizedValue: string
   ): Promise<TransactionResult | null> {
     const response = await fetch(
       `https://your-api.com/search?type=${type}&value=${sanitizedValue}`
     );
     const data = await response.json();
     return data ? mapToResult(data) : null;
   }
   ```

The rest of the app will continue working without changes.

### Adding a Database (Future Upgrade)

If you want to store transaction history or user searches:

1. Add a database (e.g., PostgreSQL via Vercel Postgres, Supabase, or PlanetScale).
2. Set up environment variables in Vercel.
3. Create API routes in `src/app/api/` to handle database queries.
4. Update `search-service.ts` to call your API routes.

This requires a developer, but the architecture is ready for it.

---

## Common Tasks

### How do I change the homepage hero text?

**File:** `src/app/page.tsx`  
Look for the `<h1>` and `<p>` tags around line 20-30.

### How do I add a new FAQ?

**File:** `src/data/faqs.json`  
Add a new object to the `faqs` array.

### How do I update the footer disclaimer?

**File:** `src/components/layout/Footer.tsx`  
Look for the `<p>` tag with "Disclaimer:" around line 70.

### How do I add a new page?

1. Create a new folder in `src/app/` (e.g., `src/app/about/`).
2. Inside that folder, create a `page.tsx` file.
3. Write your page content using React/JSX.
4. The page will automatically be available at `/about`.

Example:

```tsx
// src/app/about/page.tsx
export default function AboutPage() {
  return (
    <div className="py-16">
      <h1 className="text-4xl font-bold">About Us</h1>
      <p className="mt-4">This is the about page.</p>
    </div>
  );
}
```

### How do I change the navigation menu?

**File:** `src/config/site.ts`  
Look for the `navigationLinks` array around line 50.

---

## Troubleshooting

### The build fails on Vercel

1. Check the **Vercel deployment logs** for error messages.
2. Common causes:
   - TypeScript errors (run `npm run type-check` locally)
   - Missing files or broken imports
   - Syntax errors in JSON data files

3. Fix the error locally, commit, and push again.

### Styles don't look right

1. Make sure Tailwind CSS is working. Run:

   ```bash
   npm run dev
   ```

2. Check the browser console for errors.
3. Verify `tailwind.config.ts` and `postcss.config.mjs` are unchanged.

### The tracker tool shows "No results found" for everything

1. Check `src/data/transactions.json` — make sure it has transaction records.
2. Verify the `searchValue` matches what you're searching for (case-insensitive matching is already handled).
3. Check the browser console for JavaScript errors.

### I pushed to GitHub but Vercel didn't redeploy

1. Check the **Vercel dashboard** — sometimes builds are queued.
2. Manually trigger a redeploy from the Vercel project page.
3. Verify your GitHub repository is still connected to Vercel.

---

## Support

If you need help:

1. **Check this README first** — most questions are answered here.
2. **Check the code comments** — every file has explanatory comments.
3. **Hire a developer** if you need custom features or advanced changes.

---

## License

This project is proprietary and built specifically for TheLTOPortal.ph. All rights reserved.

---

## Summary

This is a **production-ready**, **zero-config**, **Vercel-deployable** Next.js application built for non-technical owners. You can:

- Edit site content by changing JSON files
- Deploy to Vercel with one click
- Integrate into WordPress via iframe
- Upgrade to a real API or database later without breaking anything

The architecture is clean, the code is well-documented, and everything is designed to be **easy to maintain and grow**.

**Ready to deploy? Follow the Vercel deployment steps above. ✅**
