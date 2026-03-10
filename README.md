# casadelmare

Casa Del Mare - A brochure website for a luxury beachfront vacation rental in North Myrtle Beach, SC.

## Overview

This is a single-page website built with vanilla HTML5, CSS3, and JavaScript. The site showcases a raised beachfront property on intercoastal waters, featuring a photo gallery, local attractions and dining recommendations, guest reviews, amenities showcase, and contact information.

**Live Site**: https://www.familybeachtrips.com  
**Property Site**: https://www.familybeachtrips.com/casadelmare/

## Features

- Responsive mobile-first design with hamburger navigation
- Horizontal scrolling interactive photo gallery with lightbox modal
- About Casa Del Mare section with amenities grid
- "Explore the Area" sections: Restaurants & Dining, Beach Activities, Attractions, Nature & Wildlife
- Guest reviews section with ratings
- Integrated Google Maps with property location
- Vacasa property management integration
- Full SEO optimization with schema markup
- Custom domain support (www.familybeachtrips.com)
- Multi-property ready architecture

## Getting Started

### View the Site
Simply visit https://www.familybeachtrips.com or open `casadelmare/index.html` in a web browser.

### Make Changes
- **Content**: Edit `casadelmare/index.html` for text, links, and sections
- **Styling**: Modify `casadelmare/css/style.css` (uses CSS variables for colors)
- **Interactivity**: Update `casadelmare/js/script.js` for dynamic behavior
- **Images**: Add photos to the `casadelmare/pictures/` directory (referenced in gallery and hero sections)

## Architecture

The site has been restructured to support multiple properties:
- Root `/` serves a redirect to `/casadelmare/` via meta refresh
- All Casa Del Mare files are in the `/casadelmare/` directory
- Future properties can be added in separate directories (e.g., `/nextproperty/`)
- Relative paths in CSS and JS work correctly from the subdirectory

## SEO Features Implemented

- ✓ Meta tags (description, keywords, og:*, twitter:*)
- ✓ Canonical URL tags
- ✓ Open Graph tags for social sharing
- ✓ Twitter Card tags for social previews
- ✓ JSON-LD VacationRental schema markup
- ✓ sitemap.xml with all page sections (/casadelmare/ paths)
- ✓ robots.txt for search engine crawling
- ✓ Mobile-responsive design
- ✓ Fast-loading vanilla HTML/CSS/JS (no frameworks)
- ✓ Google Analytics integration (GA4)

## File Structure

```
casadelmare/ (root)
├── index.html                    # Root redirect (meta refresh to /casadelmare/)
├── sitemap.xml                   # SEO sitemap (updated with /casadelmare/ URLs)
├── robots.txt                    # Search engine crawler guide
├── CNAME                         # Custom domain config (www.familybeachtrips.com)
├── TODO.md                       # Project task tracking
├── google5f6c330166025ba6.html  # Google Search Console verification
└── casadelmare/                  # Casa Del Mare property files
    ├── index.html                # Main page (single-page app)
    ├── css/
    │   └── style.css             # All styling (uses CSS variables)
    ├── js/
    │   └── script.js             # Hamburger menu + lightbox interactivity
    └── pictures/                 # Property photos (25+ images)
        ├── dock-canal.jpg
        ├── hottub.jpg
        ├── cdm-front.jpg
        ├── cdm-living-room.jpg
        ├── cdm-kitchen.jpg
        ├── cdm-mbr.jpg
        ├── cdm-deck.jpg
        ├── cdm-back-patio.jpg
        └── ... (additional property images)
```

## Deployment

This site is automatically deployed to GitHub Pages when you push to the `main` branch. The custom domain (www.familybeachtrips.com) is configured via the `CNAME` file.

### To Update Search Engines After Deployment
1. Visit Google Search Console and re-submit sitemap.xml (paths changed to /casadelmare/)
2. Submit updated sitemap to Bing Webmaster Tools
3. Monitor for crawl errors or warnings

## Property Information

- **Name**: Casa Del Mare
- **Address**: 325 52nd Ave North, North Myrtle Beach, SC 29582
- **Managed By**: Vacasa (https://www.vacasa.com/unit/129066)
- **Type**: Raised beach house on intercoastal waters
- **Bedrooms**: 5 | **Bathrooms**: 2 | **Max Occupancy**: 17
- **Features**: Waterfront, Hot Tub, Direct Intercoastal Water Access, Game Room, Full Kitchen
- **Distance to Beach**: Less than 5 minutes walk to Cherry Grove Beach

## Next Steps

Planned enhancements in TODO.md:
- Fix remaining SEO validation issues
- Create property template for adding new rentals
- Add Welcome, House Guide, Referral Rewards, Return Guest Discounts sections
- Implement Guest Wall with photo uploads and form collection
- Optimize site performance (images, caching, minification)
- Monitor analytics and search rankings

## Developer Notes

- Relative paths in CSS reference parent directory: `../pictures/`
- HTML/JS image references from root: `pictures/` or `casadelmare/pictures/`
- Google Fonts loaded via preconnect links in HEAD (not @import in CSS)
- Hero background image uses gradient overlay for text readability
- Mobile hero doesn't use `background-attachment: fixed` (unsupported on mobile)
- Schema markup simplified to property-level (no Room/containsPlace nesting)
- See `.github/copilot-instructions.md` for detailed developer guidelines
