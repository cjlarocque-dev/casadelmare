# Copilot Instructions for Casa Del Mare

This is a vanilla HTML/CSS/JavaScript brochure website for a beachfront vacation rental property, hosted on GitHub Pages.

## Project Overview

- **Hosting**: GitHub Pages (deployed from main branch)
- **Custom Domain**: www.familybeachtrips.com (configured via CNAME file)
- **Tech Stack**: Vanilla HTML5, CSS3, JavaScript (no build tools/frameworks)
- **Property**: Casa Del Mare, 325 52nd Ave North, North Myrtle Beach, SC 29582

## Key Architectural Patterns

### Single-Page Structure
- **index.html** is the only page. All sections are anchor-linked (#gallery, #favorites, #reviews, #contact)
- Navigation menu toggles visibility of sections via smooth scrolling
- No routing or multi-page logic needed

### Responsive Design
- **Mobile-first approach**: Base CSS is mobile, breakpoints expand for larger screens
- **Breakpoints**: Hamburger menu switches to horizontal layout at 768px+
- **Gallery**: Uses horizontal scroll on all devices (flex layout with `overflow-x: auto`)
- **Layouts**: Contact section stacks vertically on mobile (<768px), side-by-side on desktop

### Color Scheme (CSS Variables)
Define all colors as CSS custom properties in `:root`:
```css
--primary-color: #0077be (Ocean Blue)
--secondary-color: #00d4ff (Cyan)
--accent-color: #ff6b35 (Coral)
--light-bg: #e0f7ff (Light Sky Blue)
--sand-color: #fff8e7 (Sand)
```
Always use variables when styling; avoid hardcoded hex values.

### Typography
- **Body text**: Comfortaa (regular weight for body content)
- **Headings**: Dancing Script (weight 700)
- **Hero title only**: Pacifico (special decorative font)
- **Fonts loaded from Google Fonts**: via `<link>` in HTML HEAD (not @import in CSS)
  - Ensure preconnect links to `fonts.googleapis.com` and `fonts.gstatic.com` are present
  - All fonts referenced must be in the HEAD `<link>` tag query string

### Components

**Hamburger Menu**:
- HTML structure: `<div class="hamburger">` with three `.bar` children for animation
- JavaScript: Toggle `.active` class to show/hide menu
- CSS: Position fixed, slides from left (-100% to 0) on small screens
- Auto-closes when: link clicked, or user clicks outside nav-container

**Venue Lists**:
- Used across all "Explore the Area" subsections (Restaurants, Activities, Attractions, Nature/Wildlife)
- CSS classes: `.venue-list`, `.venue-item`, `.venue-name`, `.venue-description`
- Links open in new tab (`target="_blank"`)
- Separator borders between items

**Gallery**:
- Horizontal scrolling layout (flex with `overflow-x: auto`)
- Images: 300px width × 300px height with `object-fit: cover`
- Smooth scroll behavior enabled
- Auto-populates from `/pictures/` folder (all jpg/JPG files are referenced)

**Contact Section**:
- Embedded Google Map iframe (responsive, stacks on mobile)
- Right column contains contact info and Vacasa booking link
- Links to Vacasa property manager: https://www.vacasa.com/unit/129066

### Sections & IDs
Each major section has a unique ID for navigation:
- `#home` or top of page (hero)
- `#gallery`
- `#favorites` (houses all "Explore the Area" subsections)
- `#reviews`
- `#contact`

## Image Management

**Storage**: All property photos stored in `/pictures/` directory
- Path from HTML: `pictures/filename.jpg`
- Path from CSS: `../pictures/filename.jpg` (one level up from css/)
- Formats: JPG/jpg (hero background), JPG/jpg (gallery items)
- Current images: dock-canal.jpg, hottub.jpg, IMG_3719.JPG

**Hero Background**:
- Image URL used as CSS background with gradient overlay for readability
- Overlay color: `rgba(0, 119, 190, 0.7)` and `rgba(0, 212, 255, 0.7)`
- Property: `background: linear-gradient(...), url('../pictures/dock-canal.jpg')`

## SEO & Metadata

**Meta Tags** (in HEAD):
- Description: Describes property and location
- Keywords: Beach rental keywords
- Open Graph: For social media sharing (og:title, og:description, og:image, og:url, og:type)
- Twitter Card: summary_large_image

**Schema Markup**:
- JSON-LD VacationRental schema embedded in HEAD `<script type="application/ld+json">`
- Includes: name, description, address, contact point, amenities, price range
- Helps search engines understand property details

**Sitemap & Robots**:
- `sitemap.xml`: Lists all sections with priority and change frequency
- `robots.txt`: Guides crawlers; allows public content, references sitemap

## Git Workflow

**Commits**: Include `Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>` trailer in all commits.

**Deployment**: Main branch is automatically deployed to GitHub Pages via GitHub's built-in Pages workflow.

## Common Tasks

### Adding a New Subsection to "Explore the Area"
1. Add new `.favorite-card` div inside `.favorites-grid` with ID (e.g., `id="activities"`)
2. Add nav link in navbar: `<a href="#activities" class="nav-link">Activities</a>`
3. Use `.venue-list` > `.venue-item` > `.venue-name` + `.venue-description` structure
4. Style inherits from `.favorite-card h3`, `.venue-list`, `.venue-item` classes

### Modifying Colors
1. Update CSS variable in `:root` block (lines 7-15 of style.css)
2. All affected elements automatically update via `var(--color-name)`
3. No hardcoded colors in component styles

### Adding Pictures to Gallery
1. Place image file in `/pictures/` directory
2. Add new `.gallery-item` div with `<img src="pictures/filename.jpg">` in gallery section
3. Height/width set by CSS (300px × 300px)

### Updating Property Contact Info
1. Update JSON-LD schema in HEAD (streetAddress, addressLocality, etc.)
2. Update contact section HTML with new info
3. Update meta tags (og:image, og:description) if relevant
4. Test with Google Rich Results Test: https://search.google.com/test/rich-results

## Testing

No automated tests. Manual testing required:
- **Responsive**: Test at 480px, 768px, and desktop widths
- **Navigation**: Verify hamburger menu opens/closes and links work
- **Images**: Ensure hero background and gallery images load correctly
- **Links**: Test Vacasa link, venue links, and Google Maps integration
- **SEO**: Use Google Rich Results Test to validate schema markup
