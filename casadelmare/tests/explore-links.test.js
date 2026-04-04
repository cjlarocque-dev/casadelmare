/**
 * Unit tests for "Explore the Area" section links
 * Verifies all external links are valid, properly formatted, and open in new tabs
 */

describe('Explore the Area Section - Links Validation', () => {
  let doc;

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
  });

  describe('Structure Validation', () => {
    test('should have favorites section with correct ID', () => {
      const favoritesSection = doc.querySelector('#favorites');
      expect(favoritesSection).not.toBeNull();
      expect(favoritesSection.classList.contains('favorites')).toBe(true);
    });

    test('should have favorites-grid container', () => {
      const grid = doc.querySelector('.favorites-grid');
      expect(grid).not.toBeNull();
    });

    test('should have exactly 4 favorite cards', () => {
      const cards = doc.querySelectorAll('.favorite-card');
      expect(cards.length).toBe(4);
    });

    test('should have venue-list in each favorite card', () => {
      const cards = doc.querySelectorAll('.favorite-card');
      cards.forEach(card => {
        const venueList = card.querySelector('.venue-list');
        expect(venueList).not.toBeNull();
      });
    });
  });

  describe('Card Titles', () => {
    test('should have correct card titles', () => {
      const cards = doc.querySelectorAll('.favorite-card h3');
      const titles = Array.from(cards).map(card => card.textContent);
      
      expect(titles).toContain('Restaurants & Dining');
      expect(titles).toContain('Beach Activities');
      expect(titles).toContain('Attractions');
      expect(titles).toContain('Nature & Wildlife');
    });
  });

  describe('Links Structure', () => {
    test('all venue items should have proper structure', () => {
      const venueItems = doc.querySelectorAll('.venue-item');
      expect(venueItems.length).toBeGreaterThan(0);
      
      venueItems.forEach(item => {
        const link = item.querySelector('a.venue-name');
        const description = item.querySelector('p.venue-description');
        
        expect(link).not.toBeNull();
        expect(description).not.toBeNull();
      });
    });

    test('all links should have href attribute', () => {
      const links = doc.querySelectorAll('#favorites a.venue-name');
      
      links.forEach(link => {
        expect(link.getAttribute('href')).not.toBeNull();
        expect(link.getAttribute('href').length).toBeGreaterThan(0);
      });
    });

    test('all links should have target="_blank"', () => {
      const links = doc.querySelectorAll('#favorites a.venue-name');
      
      links.forEach(link => {
        expect(link.getAttribute('target')).toBe('_blank');
      });
    });

    test('all links should have non-empty text content', () => {
      const links = doc.querySelectorAll('#favorites a.venue-name');
      
      links.forEach(link => {
        expect(link.textContent.trim().length).toBeGreaterThan(0);
      });
    });

    test('all links should have href starting with http:// or https://', () => {
      const links = doc.querySelectorAll('#favorites a.venue-name');
      
      links.forEach(link => {
        const href = link.getAttribute('href');
        expect(href.startsWith('http://') || href.startsWith('https://')).toBe(true);
      });
    });
  });

  describe('Specific Category Tests', () => {
    test('Restaurants & Dining section should have links', () => {
      const restaurantCard = Array.from(doc.querySelectorAll('.favorite-card'))
        .find(card => card.querySelector('h3').textContent === 'Restaurants & Dining');
      
      const links = restaurantCard.querySelectorAll('a.venue-name');
      expect(links.length).toBeGreaterThan(0);
    });

    test('Beach Activities section should have links', () => {
      const activitiesCard = Array.from(doc.querySelectorAll('.favorite-card'))
        .find(card => card.querySelector('h3').textContent === 'Beach Activities');
      
      const links = activitiesCard.querySelectorAll('a.venue-name');
      expect(links.length).toBeGreaterThan(0);
    });

    test('Attractions section should have links', () => {
      const attractionsCard = Array.from(doc.querySelectorAll('.favorite-card'))
        .find(card => card.querySelector('h3').textContent === 'Attractions');
      
      const links = attractionsCard.querySelectorAll('a.venue-name');
      expect(links.length).toBeGreaterThan(0);
    });

    test('Nature & Wildlife section should have links', () => {
      const natureCard = Array.from(doc.querySelectorAll('.favorite-card'))
        .find(card => card.querySelector('h3').textContent === 'Nature & Wildlife');
      
      const links = natureCard.querySelectorAll('a.venue-name');
      expect(links.length).toBeGreaterThan(0);
    });
  });

  describe('URL Validation', () => {
    test('all URLs should be properly formatted', () => {
      const links = doc.querySelectorAll('#favorites a.venue-name');
      
      links.forEach(link => {
        const href = link.getAttribute('href');
        // Basic URL validation - should start with protocol and have domain
        expect(href).toMatch(/^https?:\/\/.+\..+/);
      });
    });

    test('should have descriptive link text (not just numbers or empty)', () => {
      const links = doc.querySelectorAll('#favorites a.venue-name');
      
      links.forEach(link => {
        const text = link.textContent.trim();
        // Check that text is not just numbers or very short
        expect(text.length).toBeGreaterThan(2);
        // Should not be just a number
        expect(isNaN(text)).toBe(true);
      });
    });
  });

  describe('Venue Descriptions', () => {
    test('all venue items should have descriptions', () => {
      const venueItems = doc.querySelectorAll('.venue-item');
      
      venueItems.forEach(item => {
        const description = item.querySelector('p.venue-description');
        expect(description).not.toBeNull();
        expect(description.textContent.trim().length).toBeGreaterThan(0);
      });
    });

    test('descriptions should be substantive (at least 10 characters)', () => {
      const descriptions = doc.querySelectorAll('.venue-description');
      
      descriptions.forEach(desc => {
        expect(desc.textContent.trim().length).toBeGreaterThanOrEqual(10);
      });
    });
  });

  describe('Accessibility', () => {
    test('links should have aria-label or descriptive text content', () => {
      const links = doc.querySelectorAll('#favorites a.venue-name');
      
      links.forEach(link => {
        const hasAriaLabel = link.getAttribute('aria-label');
        const hasTextContent = link.textContent.trim().length > 0;
        
        expect(hasAriaLabel || hasTextContent).toBe(true);
      });
    });

    test('links should not be empty (have meaningful text)', () => {
      const links = doc.querySelectorAll('#favorites a.venue-name');
      
      links.forEach(link => {
        const text = link.textContent.trim();
        expect(text.length).toBeGreaterThan(0);
        expect(text).not.toBe('click here');
        expect(text).not.toBe('link');
      });
    });
  });

  describe('Link Count Verification', () => {
    test('should have at least 20 total venue links', () => {
      const links = doc.querySelectorAll('#favorites a.venue-name');
      expect(links.length).toBeGreaterThanOrEqual(20);
    });

    test('Restaurants section should have at least 5 links', () => {
      const restaurantCard = Array.from(doc.querySelectorAll('.favorite-card'))
        .find(card => card.querySelector('h3').textContent === 'Restaurants & Dining');
      const links = restaurantCard.querySelectorAll('a.venue-name');
      expect(links.length).toBeGreaterThanOrEqual(5);
    });

    test('Beach Activities section should have at least 3 links', () => {
      const activitiesCard = Array.from(doc.querySelectorAll('.favorite-card'))
        .find(card => card.querySelector('h3').textContent === 'Beach Activities');
      const links = activitiesCard.querySelectorAll('a.venue-name');
      expect(links.length).toBeGreaterThanOrEqual(3);
    });

    test('Attractions section should have at least 3 links', () => {
      const attractionsCard = Array.from(doc.querySelectorAll('.favorite-card'))
        .find(card => card.querySelector('h3').textContent === 'Attractions');
      const links = attractionsCard.querySelectorAll('a.venue-name');
      expect(links.length).toBeGreaterThanOrEqual(3);
    });

    test('Nature & Wildlife section should have at least 3 links', () => {
      const natureCard = Array.from(doc.querySelectorAll('.favorite-card'))
        .find(card => card.querySelector('h3').textContent === 'Nature & Wildlife');
      const links = natureCard.querySelectorAll('a.venue-name');
      expect(links.length).toBeGreaterThanOrEqual(3);
    });
  });
});
