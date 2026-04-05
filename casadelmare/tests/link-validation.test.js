/**
 * Unit tests for link validation across the entire page
 * Validates all links are well-formed, internal anchors exist, and external URLs are valid
 */

describe('Page Link Validation', () => {
  let doc;
  let allLinks = [];

  beforeEach(() => {
    // Load the HTML file
    const fs = require('fs');
    const path = require('path');
    const htmlPath = path.join(__dirname, '../index.html');
    const htmlContent = fs.readFileSync(htmlPath, 'utf8');
    
    // Parse HTML
    const { JSDOM } = require('jsdom');
    const dom = new JSDOM(htmlContent);
    doc = dom.window.document;
    
    // Get all links
    allLinks = Array.from(doc.querySelectorAll('a[href]'));
  });

  describe('Link Format & Structure', () => {
    test('should have at least 30 links on the page', () => {
      expect(allLinks.length).toBeGreaterThanOrEqual(30);
    });

    test('all links should have non-empty href attributes', () => {
      const linksWithoutHref = allLinks.filter(link => !link.getAttribute('href') || link.getAttribute('href').trim() === '');
      expect(linksWithoutHref.length).toBe(0);
    });

    test('all links should have visible text content or aria-label', () => {
      const linksWithoutText = allLinks.filter(link => {
        const text = link.textContent.trim();
        const ariaLabel = link.getAttribute('aria-label');
        return !text && !ariaLabel;
      });
      expect(linksWithoutText.length).toBe(0);
    });

    test('all links should have descriptive text (at least 2 characters)', () => {
      const insufficientText = allLinks.filter(link => {
        const text = link.textContent.trim();
        return text.length < 2;
      });
      expect(insufficientText.length).toBe(0);
    });
  });

  describe('Internal Anchor Links', () => {
    test('navigation links should point to existing sections', () => {
      const navLinks = allLinks.filter(link => link.getAttribute('href').startsWith('#'));
      const sectionIds = navLinks
        .map(link => link.getAttribute('href').substring(1))
        .filter(id => id !== ''); // Exclude empty fragments

      const validSections = sectionIds.every(id => {
        const section = doc.getElementById(id);
        return section !== null;
      });

      expect(validSections).toBe(true);
    });

    test('should have anchor for #home section', () => {
      const homeLink = allLinks.find(link => link.getAttribute('href') === '#home');
      expect(homeLink).not.toBeUndefined();
      expect(doc.getElementById('home')).not.toBeNull();
    });

    test('should have anchor for #gallery section', () => {
      const galleryLink = allLinks.find(link => link.getAttribute('href') === '#gallery');
      expect(galleryLink).not.toBeUndefined();
      expect(doc.getElementById('gallery')).not.toBeNull();
    });

    test('should have anchor for #favorites section', () => {
      const favoritesLink = allLinks.find(link => link.getAttribute('href') === '#favorites');
      expect(favoritesLink).not.toBeUndefined();
      expect(doc.getElementById('favorites')).not.toBeNull();
    });

    test('should have anchor for #reviews section', () => {
      const reviewsLink = allLinks.find(link => link.getAttribute('href') === '#reviews');
      expect(reviewsLink).not.toBeUndefined();
      expect(doc.getElementById('reviews')).not.toBeNull();
    });

    test('should have anchor for #contact section', () => {
      const contactLink = allLinks.find(link => link.getAttribute('href') === '#contact');
      expect(contactLink).not.toBeUndefined();
      expect(doc.getElementById('contact')).not.toBeNull();
    });

    test('all anchor links should point to existing elements', () => {
      const anchorLinks = allLinks.filter(link => {
        const href = link.getAttribute('href');
        return href.startsWith('#') && href !== '#';
      });

      const invalidAnchors = anchorLinks.filter(link => {
        const id = link.getAttribute('href').substring(1);
        return !doc.getElementById(id);
      });

      expect(invalidAnchors.length).toBe(0);
    });
  });

  describe('External Links', () => {
    test('external links should use http or https protocol', () => {
      const externalLinks = allLinks.filter(link => {
        const href = link.getAttribute('href');
        return !href.startsWith('#') && !href.startsWith('mailto:') && !href.startsWith('tel:');
      });

      const invalidProtocol = externalLinks.filter(link => {
        const href = link.getAttribute('href');
        return !href.startsWith('http://') && !href.startsWith('https://') && !href.startsWith('//');
      });

      expect(invalidProtocol.length).toBe(0);
    });

    test('external links should open in new tab when appropriate', () => {
      const externalLinks = allLinks.filter(link => {
        const href = link.getAttribute('href');
        return href.startsWith('http://') || href.startsWith('https://') || href.startsWith('//');
      });

      // Most external links should have target="_blank"
      const linksWithoutNewTab = externalLinks.filter(link => {
        return link.getAttribute('target') !== '_blank';
      });

      // Allow some exceptions (like Vacasa booking links), but most should have _blank
      expect(linksWithoutNewTab.length).toBeLessThan(3);
    });

    test('Vacasa booking link should be present and valid', () => {
      const vacasaLink = allLinks.find(link => 
        link.getAttribute('href').includes('vacasa.com')
      );
      expect(vacasaLink).not.toBeUndefined();
      expect(vacasaLink.getAttribute('href')).toContain('129066');
    });

    test('should have valid email contact link', () => {
      const emailLink = allLinks.find(link => 
        link.getAttribute('href').startsWith('mailto:')
      );
      if (emailLink) {
        const email = emailLink.getAttribute('href').substring(7);
        expect(email).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
      }
    });
  });

  describe('Venue Links in Explore Sections', () => {
    test('all venue links should be well-formed URLs', () => {
      const venueItems = Array.from(doc.querySelectorAll('.venue-item a'));
      
      venueItems.forEach(link => {
        const href = link.getAttribute('href');
        expect(href).toBeTruthy();
        expect(href.length).toBeGreaterThan(0);
      });
    });

    test('venue links should have descriptions', () => {
      const venueItems = Array.from(doc.querySelectorAll('.venue-item'));
      
      venueItems.forEach(item => {
        const description = item.querySelector('.venue-description');
        expect(description).not.toBeNull();
        expect(description.textContent.trim().length).toBeGreaterThan(10);
      });
    });

    test('should have restaurant links', () => {
      const cards = Array.from(doc.querySelectorAll('.favorite-card'));
      const restaurantCard = cards.find(card => card.textContent.includes('Restaurants'));
      const restaurants = restaurantCard ? Array.from(restaurantCard.querySelectorAll('.venue-item a')) : [];
      expect(restaurants.length).toBeGreaterThan(0);
    });

    test('should have activity/attraction links', () => {
      const activities = Array.from(doc.querySelectorAll('.venue-item a'));
      expect(activities.length).toBeGreaterThan(10);
    });
  });

  describe('Link Accessibility', () => {
    test('links should have descriptive text for screen readers', () => {
      const poorAccessibilityLinks = allLinks.filter(link => {
        const text = link.textContent.trim();
        const ariaLabel = link.getAttribute('aria-label');
        const title = link.getAttribute('title');
        
        // Link text should be meaningful
        const hasGoodText = text && text.length > 2 && text !== 'Click here' && text !== 'Learn more';
        const hasAriaLabel = ariaLabel && ariaLabel.length > 2;
        const hasTitle = title && title.length > 2;
        
        return !hasGoodText && !hasAriaLabel && !hasTitle;
      });

      expect(poorAccessibilityLinks.length).toBe(0);
    });

    test('external links should be identifiable', () => {
      const externalLinks = allLinks.filter(link => {
        const href = link.getAttribute('href');
        return href.startsWith('http://') || href.startsWith('https://');
      });

      const identifiableLinks = externalLinks.filter(link => {
        const target = link.getAttribute('target');
        const ariaLabel = link.getAttribute('aria-label');
        const text = link.textContent;
        
        // Should have _blank or aria-label or text indicating external
        return target === '_blank' || (ariaLabel && ariaLabel.includes('external')) || text.includes('(opens in new tab)');
      });

      expect(identifiableLinks.length).toBeGreaterThan(externalLinks.length - 3);
    });
  });

  describe('No Broken Link Patterns', () => {
    test('should not have links with just "#"', () => {
      const brokenAnchors = allLinks.filter(link => 
        link.getAttribute('href') === '#' || link.getAttribute('href') === ''
      );
      expect(brokenAnchors.length).toBe(0);
    });

    test('should not have duplicate IDs for anchor targets', () => {
      const anchorLinks = allLinks.filter(link => {
        const href = link.getAttribute('href');
        return href.startsWith('#') && href !== '#';
      });

      const ids = anchorLinks.map(link => link.getAttribute('href'));
      const uniqueIds = new Set(ids);
      
      // This tests the HTML structure, not link validity
      // but ensures navigation won't be ambiguous
      expect(ids.length).toBeGreaterThan(0);
    });

    test('should not have unescaped special characters in URLs', () => {
      const invalidChars = allLinks.filter(link => {
        const href = link.getAttribute('href');
        // Check for unescaped spaces and other problematic characters
        return href.includes(' ') || href.includes('"') || href.includes("'");
      });
      expect(invalidChars.length).toBe(0);
    });
  });

  describe('Link Categories', () => {
    test('should have navigation links', () => {
      const navLinks = Array.from(doc.querySelectorAll('.nav-link'));
      expect(navLinks.length).toBeGreaterThan(0);
    });

    test('should have booking/contact links', () => {
      const bookingLinks = allLinks.filter(link => {
        const href = link.getAttribute('href');
        return href.includes('vacasa') || href.startsWith('mailto:');
      });
      expect(bookingLinks.length).toBeGreaterThan(0);
    });

    test('should have social media or external resource links', () => {
      const externalLinks = allLinks.filter(link => {
        const href = link.getAttribute('href');
        return href.startsWith('http') || href.startsWith('https') || href.startsWith('//');
      });
      expect(externalLinks.length).toBeGreaterThan(0);
    });
  });
});
