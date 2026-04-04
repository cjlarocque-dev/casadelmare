# Casa Del Mare - "Explore the Area" Section Tests

## Overview

Comprehensive unit tests for validating all links in the "Explore the Area" section of the Casa Del Mare website. These tests ensure that all external venue links are properly formatted, accessible, and functioning correctly.

## Test Suite

**File**: `casadelmare/tests/explore-links.test.js`

### Test Coverage (25 tests)

#### Structure Validation (4 tests)
- ✓ Favorites section exists with correct ID
- ✓ Favorites-grid container is present
- ✓ Exactly 4 favorite cards (categories)
- ✓ Each card contains venue list

#### Card Titles (1 test)
- ✓ Correct section titles (Restaurants & Dining, Beach Activities, Attractions, Nature & Wildlife)

#### Links Structure (5 tests)
- ✓ All venue items have proper structure
- ✓ All links have href attribute
- ✓ All links open in new tab (target="_blank")
- ✓ All links have descriptive text
- ✓ All URLs use http:// or https://

#### Category Tests (4 tests)
- ✓ Restaurants & Dining section has links
- ✓ Beach Activities section has links
- ✓ Attractions section has links
- ✓ Nature & Wildlife section has links

#### URL Validation (2 tests)
- ✓ URLs are properly formatted
- ✓ Link text is descriptive and meaningful

#### Venue Descriptions (2 tests)
- ✓ All venues have descriptions
- ✓ Descriptions are substantive (10+ characters)

#### Accessibility (2 tests)
- ✓ Links have accessible text or aria-labels
- ✓ Links use meaningful text (not "click here", etc.)

#### Link Count Verification (5 tests)
- ✓ At least 20 total venue links
- ✓ Restaurants section has at least 5 links
- ✓ Beach Activities section has at least 3 links
- ✓ Attractions section has at least 3 links
- ✓ Nature & Wildlife section has at least 3 links

## Running the Tests

### Install Dependencies
```bash
npm install
```

### Run All Tests
```bash
npm test
```

### Run Tests in Watch Mode
```bash
npm run test:watch
```

### Run Tests with Coverage
```bash
npm run test:coverage
```

## Test Results

**Current Status**: ✅ **ALL 25 TESTS PASSING**

```
Test Suites: 1 passed, 1 total
Tests:       25 passed, 25 total
Snapshots:   0 total
```

## What the Tests Verify

1. **Structural Integrity**: Ensures the HTML structure matches expected classes and IDs
2. **Link Validity**: Confirms all links have proper href attributes and open in new tabs
3. **Content Quality**: Validates that venue names and descriptions are substantive
4. **Accessibility**: Checks that links are accessible to screen readers
5. **Completeness**: Ensures each category has sufficient venues
6. **URL Format**: Validates proper URL structure with protocols

## Technologies Used

- **Jest**: Testing framework
- **jsdom**: DOM implementation for Node.js environment
- **JSDOM Polyfills**: TextEncoder/TextDecoder support

## When to Run Tests

Run these tests whenever:
- Adding new venue links to the Explore the Area section
- Modifying HTML structure of the favorites section
- Updating venue descriptions or names
- Before deploying changes to production
- As part of CI/CD pipeline

## Adding New Tests

To add additional tests:
1. Add test cases to `casadelmare/tests/explore-links.test.js`
2. Follow existing test naming conventions
3. Use the `describe()` block structure for organization
4. Run `npm test` to verify
