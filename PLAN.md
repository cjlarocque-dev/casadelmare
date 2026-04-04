# Casa Del Mare - Development Plan & Status

**Last Updated**: 2026-04-04  
**Current Focus**: Unit Tests for Explore the Area Section - ✅ COMPLETED

---

## Session Summary (2026-04-04)

### ✅ Completed: Unit Tests for "Explore the Area" Section

**Test Suite Created**: Comprehensive Jest test suite with 25 passing tests

**Files Added**:
- `casadelmare/tests/explore-links.test.js` - Main test suite (25 tests)
- `casadelmare/tests/README.md` - Test documentation
- `package.json` - NPM dependencies and scripts
- `jest.config.js` - Jest configuration
- `jest.setup.js` - TextEncoder polyfills for jsdom
- `PLAN.md` - This file (project planning)

**Test Results**: ✅ ALL 25 TESTS PASSING
```
Test Suites: 1 passed, 1 total
Tests:       25 passed, 25 total
Time:        ~1.8s
```

**What the Tests Validate**:
- ✓ 4 category cards exist (Restaurants, Beach Activities, Attractions, Nature & Wildlife)
- ✓ All links have valid href attributes
- ✓ All links open in new tabs (target="_blank")
- ✓ All links have descriptive, meaningful text
- ✓ All URLs use http/https protocol
- ✓ All venues have substantive descriptions (10+ characters)
- ✓ Links are accessible to screen readers
- ✓ Minimum link counts per category met (25+ total, 5+ restaurants, 3+ each other)

---

## Running Tests

```bash
# Install dependencies (first time)
npm install

# Run all tests
npm test

# Watch mode (re-runs on file changes)
npm run test:watch

# Coverage report
npm run test:coverage
```

**Test File**: `casadelmare/tests/explore-links.test.js`

---

## Project Overview

| Property | Details |
|----------|---------|
| **Name** | Casa Del Mare |
| **Address** | 325 52nd Ave North, North Myrtle Beach, SC 29582 |
| **Live Site** | https://www.familybeachtrips.com |
| **Tech Stack** | Vanilla HTML5/CSS3/JavaScript |
| **Hosting** | GitHub Pages + Custom Domain |
| **Property Manager** | Vacasa (unit #129066) |

---

## Pending Tasks (Priority Order)

### 🔴 High Priority

**1. Fix remaining SEO issues**
- Resolve schema validation errors in Google Search Console
- Verify canonical URLs are correct
- Check og:url tags for all sections
- Validate schema.org VacationRental markup compliance
- Status: `pending`

**2. Create next property template**
- Document scaffolding process for adding new properties
- Create template directory structure
- Update sitemap/robots generation for multi-property setup
- Document copy/image requirements
- Status: `pending`

**3. Add new website sections** (5 sections)
- (1) Welcome section with property intro
- (2) House Guide with instructions/tips
- (3) Referral Rewards program info
- (4) Return Guest Discounts info
- (5) Guest Wall with photo upload feature
  - Form fields: Email, First Name, Last Name, City, State, Phone Number, Photo Upload
  - Recommended backend: Formspree or Basin (simple form + file uploads)
- Status: `pending`

### 🟡 Medium Priority

**4. Add owners note section**
- Create "A Note from the Owners" section
- Share owner's message, story, or welcome to guests
- Can place after Welcome section or as standalone feature
- Status: `pending`

**5. Document Casa Del Mare name**
- Explain why property is named "Casa Del Mare" (House of the Sea)
- Include significance/inspiration behind the name
- Can be integrated into owners note or as separate feature
- Status: `pending`

**6. Optimize site performance**
- Implement image optimization (WebP conversion, lazy loading)
- Add browser caching headers
- Minify CSS/JS
- Measure Core Web Vitals via Google PageSpeed Insights
- Status: `pending`

### 🟢 Low Priority

**7. Generate printable QR code**
- Create QR code linking to https://www.familybeachtrips.com/casadelmare/index.html
- Make suitable for printing on promotional materials and signage
- Status: `pending`

**8. Monitor analytics and rankings**
- Set up monthly GA4 reports
- Track organic search traffic
- Monitor keyword rankings in Google Search Console
- Document trends
- Status: `pending`

---

## Architecture & Structure

```
casadelmare/
├── index.html                  # Main property page (single-page)
├── css/
│   └── style.css              # All styling (uses CSS variables)
├── js/
│   └── script.js              # Hamburger menu + lightbox interactivity
├── pictures/                  # Property photos (25+ images)
│   ├── dock-canal.jpg
│   ├── hottub.jpg
│   ├── cdm-front.jpg
│   └── ... (additional images)
└── tests/
    ├── explore-links.test.js  # ✅ 25 passing tests
    └── README.md              # Test documentation

root/
├── package.json               # NPM dependencies & scripts
├── jest.config.js            # Jest test framework config
├── jest.setup.js             # jsdom polyfills
├── .gitignore                # Git exclusions
├── PLAN.md                   # This file
├── README.md                 # Project overview
├── TODO.md                   # Original task list (archived)
└── CNAME                     # Custom domain config
```

---

## Key Architectural Patterns

### Single-Page Design
- All sections anchor-linked (#gallery, #favorites, #reviews, #contact)
- Smooth scrolling navigation
- Hamburger menu for mobile (toggles with .active class)

### Responsive Mobile-First
- Base CSS is mobile, breakpoints expand for larger screens
- Breakpoint at 768px for hamburger → horizontal layout
- Gallery: horizontal scroll on all devices

### Color Scheme (CSS Variables)
```css
--primary-color: #0077be (Ocean Blue)
--secondary-color: #00d4ff (Cyan)
--accent-color: #ff6b35 (Coral)
--light-bg: #e0f7ff (Light Sky Blue)
--sand-color: #fff8e7 (Sand)
```

### Typography
- **Headings**: Dancing Script (weight 700)
- **Body Text**: Comfortaba (regular)
- **Hero Title Only**: Pacifico (special decorative)
- **Fonts**: Google Fonts via preconnect links in HEAD

### Components
- **Hamburger Menu**: Fixed, slides left (-100% to 0), .active class toggle
- **Venue Lists**: Used in all explore sections (.venue-list > .venue-item)
- **Gallery**: Horizontal scroll (flex overflow-x: auto), 300x300px images
- **Contact**: Google Maps iframe (responsive stacking on mobile)

---

## SEO & Metadata

- ✓ Meta tags (description, keywords, og:*, twitter:*)
- ✓ Canonical URL tags
- ✓ Open Graph tags for social sharing
- ✓ Twitter Card tags
- ✓ JSON-LD VacationRental schema markup
- ✓ sitemap.xml (updated with /casadelmare/ paths)
- ✓ robots.txt for crawler guidance
- ✓ Google Analytics (GA4)
- ⚠️ Schema validation errors remain (pending fix)

---

## Deployment

**Hosting**: GitHub Pages (main branch auto-deploys)  
**Custom Domain**: www.familybeachtrips.com (configured via CNAME)  
**DNS**: GoDaddy pointing to GitHub Pages

### Webmaster Tools
- Google Search Console: https://search.google.com/search-console/
- Bing Webmaster Tools: https://www.bing.com/webmasters/
- Google Analytics: https://analytics.google.com/

---

## Development Notes

- Relative paths in CSS: `../pictures/` (one level up)
- HTML/JS image refs: `pictures/` or `casadelmare/pictures/`
- Google Fonts: preconnect links in HEAD (not @import in CSS)
- Hero background: gradient overlay with image for text readability
- Mobile hero: no `background-attachment: fixed` (unsupported on mobile)
- Schema markup: simplified to property-level (no Room nesting)
- No build tools required - pure vanilla HTML/CSS/JS

---

## Git Workflow

All commits include Copilot co-author trailer:
```
Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>
```

Recent commits:
```
9feaf24 - Add unit tests for Explore the Area section links
          (25 passing tests, Jest config, .gitignore)
```

---

## Next Steps (Recommended Order)

1. **Continue with SEO fixes** - Address Google Search Console warnings
2. **Create property template** - Enable multi-property support
3. **Implement new sections** - Welcome, House Guide, Referral Rewards, Guest Wall
4. **Performance optimization** - Image optimization and caching
5. **Analytics setup** - Monthly reporting and trend tracking

---

## Quick Reference - Common Tasks

### Adding a New Venue Link
1. Find the appropriate category section in `casadelmare/index.html`
2. Add `<div class="venue-item">` with link and description
3. Run `npm test` to verify tests still pass

### Modifying Colors
1. Edit CSS variables in `style.css` `:root` block
2. All elements automatically update via `var(--color-name)`

### Updating Property Info
1. Edit `casadelmare/index.html` HTML content
2. Update JSON-LD schema in HEAD for consistency
3. Update meta tags if relevant

### Running Tests Before Deployment
```bash
npm test
git push  # Triggers automatic GitHub Pages deployment
```

---

## Session Notes

**Duration**: ~30 minutes  
**Focus**: Creating automated tests for data quality assurance  
**Outcome**: 25 passing tests provide confidence that venue links section maintains integrity  
**Impact**: Quality gate prevents broken links and missing descriptions before deployment

**Key Achievement**: The test suite transforms a manual validation process into automated checks, saving time and reducing human error when maintaining the Explore the Area section.
