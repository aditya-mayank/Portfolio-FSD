# Portfolio — Aditya Mayank

## Design Rationale

This personal portfolio is built around a fixed left sidebar navigation coupled with a main scrollable content area. Having persistent navigation allows visitors to jump seamlessly between different sections without losing their place on the page. Typography, spacing, and color schemes are managed through centralized CSS custom properties (`:root` variables). This setup makes global styling adjustments straightforward while keeping visual rhythm consistent across all sections of the site.

## Layout Technique Justification

Flexbox serves as the core layout technique throughout the application. It was selected because it naturally excels at one-dimensional alignment and distribution. Components such as navigation links, skill badges, portfolio cards, and contact form inputs use Flexbox to manage alignment and flex growth cleanly, avoiding the need for heavy external UI frameworks.

For multi-column sections, percentage-based flex-basis rules provide predictable grid layouts that adapt smoothly to varying viewports. Media queries handle responsive adjustments: at tablet widths, multi-column rows expand into full width, and at mobile widths, the fixed sidebar transforms into a slide-out overlay while layout blocks collapse into a single-column vertical flow.

## Known Limitations

- Typing effects rely on an external CDN library (`Typed.js`), requiring an active internet connection to load.
- Contact form submissions use `FormSubmit` as a lightweight third-party endpoint rather than a dedicated backend API.
- The CV download button points to a local static PDF file within the repository structure.