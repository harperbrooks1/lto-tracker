# Deployment Checklist

Use this checklist before deploying to production.

## ✅ Pre-Deployment Verification

### Code Quality
- [ ] All TypeScript files compile without errors (`npm run type-check`)
- [ ] ESLint passes with no errors (`npm run lint`)
- [ ] No unused imports or variables
- [ ] All components have proper TypeScript types

### Content
- [ ] Site name and URL are correct in `src/config/site.ts`
- [ ] Brand colors match your design in `tailwind.config.ts`
- [ ] Transaction data in `src/data/transactions.json` is accurate
- [ ] FAQ items in `src/data/faqs.json` are up to date
- [ ] Related articles in `src/data/articles.json` are current
- [ ] Footer disclaimer is accurate
- [ ] Contact information (hotline, email) is correct

### SEO
- [ ] Page titles and descriptions are optimized
- [ ] Open Graph images are set (or placeholders removed)
- [ ] Canonical URLs point to production domain
- [ ] Sitemap includes all important pages
- [ ] Robots.txt allows indexing

### Functionality
- [ ] All navigation links work
- [ ] Tracker tool validates input correctly
- [ ] Search returns expected results
- [ ] FAQ accordion expands/collapses
- [ ] Mobile menu opens and closes
- [ ] All CTAs (buttons) navigate to correct pages

### Accessibility
- [ ] All images have alt text (or are decorative)
- [ ] Form inputs have labels
- [ ] Focus states are visible
- [ ] Color contrast meets WCAG AA standards
- [ ] Keyboard navigation works throughout

### Performance
- [ ] No console errors in browser
- [ ] Images are optimized (SVGs are fine as-is)
- [ ] No blocking JavaScript
- [ ] Fonts load properly

### Mobile Responsiveness
- [ ] Test on mobile device or browser dev tools
- [ ] Navigation menu works on small screens
- [ ] Touch targets are at least 48x48px
- [ ] Text is readable without zooming
- [ ] No horizontal scrolling

## 📦 Deployment Steps

### 1. Local Build Test
```bash
npm install
npm run build
npm start
```
- Visit http://localhost:3000
- Click through all pages
- Test the tracker with example searches
- Verify no runtime errors

### 2. Commit to Git
```bash
git status
git add .
git commit -m "Ready for production deployment"
git push origin main
```

### 3. Deploy to Vercel
- Go to https://vercel.com
- Import your GitHub repository
- Vercel auto-detects Next.js settings
- Click "Deploy"
- Wait ~2 minutes for build to complete

### 4. Verify Production Deployment
- [ ] Homepage loads correctly
- [ ] `/lto-tracker` page works
- [ ] All links navigate properly
- [ ] Tracker tool functions as expected
- [ ] No console errors
- [ ] Sitemap is accessible at `/sitemap.xml`
- [ ] Robots.txt is accessible at `/robots.txt`

### 5. Connect Custom Domain
- In Vercel dashboard → Settings → Domains
- Add `theltoportal.ph` and `www.theltoportal.ph`
- Update DNS records with your registrar
- Wait for DNS propagation (10-30 minutes)
- Verify HTTPS is working

### 6. Post-Deployment
- [ ] Test on real mobile device
- [ ] Run Lighthouse audit (aim for 90+ scores)
- [ ] Submit sitemap to Google Search Console
- [ ] Monitor Vercel analytics for errors

## 🔧 Common Build Issues

### Issue: TypeScript errors during build
**Solution:** Run `npm run type-check` locally and fix errors before pushing.

### Issue: Import errors
**Solution:** Verify all imports use the `@/` alias correctly and files exist.

### Issue: Missing dependencies
**Solution:** Ensure `package.json` is committed and includes all required packages.

### Issue: Environment variables required
**Solution:** This project should NOT require any environment variables. If Vercel asks for them, something is wrong — review the code.

## 📊 Performance Targets

- **Lighthouse Performance:** 90+
- **First Contentful Paint:** < 1.5s
- **Largest Contentful Paint:** < 2.5s
- **Cumulative Layout Shift:** < 0.1
- **Time to Interactive:** < 3.5s

## 🚀 Post-Launch Monitoring

### Week 1
- Check Vercel logs daily for errors
- Monitor user behavior if analytics are set up
- Test on multiple devices and browsers
- Collect user feedback

### Ongoing
- Update transaction data as needed
- Add new FAQ items based on user questions
- Publish new articles regularly
- Keep dependencies updated (run `npm update` monthly)

---

**Ready to deploy?** Work through this checklist, commit your code, and deploy to Vercel. If you encounter any issues, refer to the Troubleshooting section in README.md.
