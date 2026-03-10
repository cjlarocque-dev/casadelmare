# Casa Del Mare Website - TODO

## Completed
- [x] Create HTML skeleton with semantic structure
- [x] Create CSS stylesheet with responsive design
- [x] Implement hamburger menu navigation
- [x] Setup GitHub Pages configuration
- [x] Implement beachy color scheme
- [x] Create interactive photo gallery with lightbox
- [x] Add amenities/about section
- [x] Implement SEO optimization (meta tags, schema, sitemap, robots.txt)
- [x] Set up custom domain (www.familybeachtrips.com)
- [x] Populate all content sections (restaurants, activities, attractions, reviews)
- [x] Fix Google Fonts loading issues
- [x] Fix mobile hero background display
- [x] Fix Google Search Console schema validation errors
- [x] Reorganize site structure for multi-property support (/casadelmare/)

## Pending

### High Priority
- [ ] **Fix remaining SEO issues** - Resolve schema validation errors and Google Search Console warnings. Verify canonical URLs, og:url tags, and schema.org VacationRental markup compliance after site restructuring.
- [ ] **Create next property template** - Document scaffolding process for adding new properties. Create template directory structure, update sitemap/robots generation, and document copy/image requirements.
- [ ] **Add new website sections** - Implement 5 new sections: (1) Welcome section with property intro, (2) House Guide with instructions/tips, (3) Referral Rewards program info, (4) Return Guest Discounts, (5) Guest Wall with photo upload feature (requires email and backend form handling). 
  - **For Guest Wall backend:** GitHub Pages doesn't support backend services. Options: (a) Formspree/Basin (easiest, no coding), (b) Netlify/Vercel Functions (serverless), (c) Separate backend (Heroku/Railway/DigitalOcean), (d) Firebase (all-in-one BaaS). **Recommended:** Formspree or Basin - simple form + file uploads.

### Medium Priority
- [ ] **Optimize site performance** - Implement image optimization (WebP conversion, lazy loading), add browser caching headers, minify CSS/JS, and measure Core Web Vitals via Google PageSpeed Insights.

### Low Priority
- [ ] **Generate printable QR code** - Create a QR code linking to https://www.familybeachtrips.com/casadelmare/index.html suitable for printing on promotional materials and signage.
- [ ] **Monitor analytics and rankings** - Set up monthly GA4 reports, track organic search traffic, monitor keyword rankings in Google Search Console, and document trends.

---

## Notes
- Site is currently served from `/casadelmare/` with root `index.html` redirecting via meta refresh
- Relative paths in CSS and JS remain unchanged and work correctly
- All images stored in `/casadelmare/pictures/` directory
- Schema markup simplified to remove Room/containsPlace structure to resolve Google validation errors
