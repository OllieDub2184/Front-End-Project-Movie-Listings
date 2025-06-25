# Accessibility Report

## Overview
This report evaluates the accessibility of the Movie Listings Project web application. The goal is to ensure the app is usable by as many people as possible, including those with disabilities, and to identify areas for improvement.

## Testing Tools Used
- Manual keyboard navigation
- Screen reader (VoiceOver on macOS)
- Chrome DevTools Accessibility panel
- Lighthouse Accessibility Audit

## Key Findings

### 1. Keyboard Navigation
- All interactive elements (search bar, navigation, pagination, movie cards, favorite buttons) are accessible via keyboard (Tab, Shift+Tab, Enter, Space).
- Focus indicators are visible and clear on all focusable elements.

### 2. Screen Reader Support
- Navigation landmarks and headings are used appropriately for structure.
- All buttons and links have descriptive text or `aria-label` attributes.
- Movie cards and favorite actions are announced clearly by screen readers.

### 3. Color Contrast
- Text and interactive elements meet WCAG AA contrast requirements.
- No critical contrast issues detected in the main UI.

### 4. Alternative Text
- All images (e.g., movie posters) include descriptive `alt` attributes.
- Decorative icons use `aria-hidden` where appropriate.

### 5. Responsive Design
- The app is fully responsive and usable on mobile, tablet, and desktop devices.
- No accessibility issues found on different screen sizes.

### 6. Forms and Validation
- The search bar is labeled and accessible.
- Error messages (if any) are announced to screen readers.

## Recommendations
- Regularly test with multiple screen readers and browsers.
- Continue to use semantic HTML and ARIA attributes for new features.
- Add skip-to-content links for improved navigation.
- Ensure all dynamic content updates are announced to assistive technologies.

## Conclusion
The Movie Listings Project demonstrates strong accessibility practices and meets most WCAG 2.1 AA guidelines. Ongoing testing and user feedback are recommended to maintain and improve accessibility as the app evolves.
