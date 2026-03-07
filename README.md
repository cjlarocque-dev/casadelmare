# casadelmare

Casa Del Mare - A brochure website for a luxury beachfront vacation rental in North Myrtle Beach, SC.

## Overview

This is a single-page website built with vanilla HTML5, CSS3, and JavaScript. The site showcases a raised beachfront property on intercoastal waters, featuring a photo gallery, local attractions and dining recommendations, guest reviews, and contact information.

**Live Site**: https://www.familybeachtrips.com

## Features

- Responsive mobile-first design with hamburger navigation
- Horizontal scrolling photo gallery
- "Explore the Area" sections: Restaurants & Dining, Beach Activities, Attractions, Nature & Wildlife
- Guest reviews section
- Integrated Google Maps with property location
- Vacasa property management integration
- Full SEO optimization with schema markup

## Getting Started

### View the Site
Simply open `index.html` in a web browser, or visit https://www.familybeachtrips.com

### Make Changes
- **Content**: Edit `index.html` for text, links, and sections
- **Styling**: Modify `css/style.css` (uses CSS variables for colors)
- **Interactivity**: Update `js/script.js` for dynamic behavior
- **Images**: Add photos to the `/pictures/` directory (referenced in gallery and hero sections)

## Next Steps for Search Engine Visibility

After deploying the site, complete these SEO tasks to improve visibility:

### 1. Submit to Google Search Console
- Go to https://search.google.com/search-console/
- Add your property (www.familybeachtrips.com)
- Upload/submit the `sitemap.xml` file
- Verify domain ownership (choose preferred method: DNS record, HTML file, or tag)
- Monitor indexing status and fix any crawl errors

### 2. Submit to Bing Webmaster Tools
- Visit https://www.bing.com/webmasters/
- Add your site (www.familybeachtrips.com)
- Submit `sitemap.xml` for indexing
- Verify site ownership
- Monitor crawl activity and search queries

### 3. Set Up Google Analytics
- Create a Google Analytics account at https://analytics.google.com/
- Create a new property for your website
- Add the tracking code to your site (add to `<head>` in index.html)
- Track visitor behavior, traffic sources, and conversion metrics
- Monitor which sections/features are most popular

### 4. Monitor Search Rankings
- Use Google Search Console to track keyword rankings and search traffic
- Check Bing Webmaster Tools for performance metrics
- Monitor rankings for key terms: "beach rental North Myrtle Beach", "vacation home intercoastal", etc.
- Track organic traffic and user engagement over time
- Adjust content strategy based on performance data

## SEO Features Implemented

- ✓ Meta tags (description, keywords)
- ✓ Open Graph tags for social sharing
- ✓ JSON-LD VacationRental schema markup
- ✓ sitemap.xml with all page sections
- ✓ robots.txt for search engine crawling
- ✓ Mobile-responsive design
- ✓ Fast-loading vanilla HTML/CSS/JS (no frameworks)

## File Structure

```
casadelmare/
├── index.html              # Main page (single-page app)
├── css/
│   └── style.css          # All styling (uses CSS variables)
├── js/
│   └── script.js          # Hamburger menu interactivity
├── pictures/              # Property photos
│   ├── dock-canal.jpg
│   ├── hottub.jpg
│   └── IMG_3719.JPG
├── sitemap.xml            # SEO sitemap
├── robots.txt             # Search engine crawler guide
├── CNAME                  # Custom domain config
└── .github/
    └── copilot-instructions.md  # Developer guidelines
```

## Deployment

This site is automatically deployed to GitHub Pages when you push to the `main` branch. The custom domain (www.familybeachtrips.com) is configured via the `CNAME` file.

## Property Information

- **Name**: Casa Del Mare
- **Address**: 325 52nd Ave North, North Myrtle Beach, SC 29582
- **Managed By**: Vacasa (https://www.vacasa.com/unit/129066)
- **Type**: Raised beach house on intercoastal waters
- **Features**: Waterfront, Hot Tub, Direct Water Access
