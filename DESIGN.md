---
name: Sanskriti Community
colors:
  surface: "#f9f9f9"
  surface-dim: "#dadada"
  surface-bright: "#f9f9f9"
  surface-container-lowest: "#ffffff"
  surface-container-low: "#f3f3f4"
  surface-container: "#eeeeee"
  surface-container-high: "#e8e8e8"
  surface-container-highest: "#e2e2e2"
  on-surface: "#1a1c1c"
  on-surface-variant: "#554336"
  inverse-surface: "#2f3131"
  inverse-on-surface: "#f0f1f1"
  outline: "#887364"
  outline-variant: "#dbc2b0"
  surface-tint: "#8f4e00"
  primary: "#8f4e00"
  on-primary: "#ffffff"
  primary-container: "#ff9933"
  on-primary-container: "#693800"
  inverse-primary: "#ffb77a"
  secondary: "#056e00"
  on-secondary: "#ffffff"
  secondary-container: "#8dfc75"
  on-secondary-container: "#067500"
  tertiary: "#4b53bc"
  on-tertiary: "#ffffff"
  tertiary-container: "#a5abff"
  on-tertiary-container: "#3036a0"
  error: "#ba1a1a"
  on-error: "#ffffff"
  error-container: "#ffdad6"
  on-error-container: "#93000a"
  primary-fixed: "#ffdcc2"
  primary-fixed-dim: "#ffb77a"
  on-primary-fixed: "#2e1500"
  on-primary-fixed-variant: "#6d3a00"
  secondary-fixed: "#8dfc75"
  secondary-fixed-dim: "#72de5c"
  on-secondary-fixed: "#012200"
  on-secondary-fixed-variant: "#035300"
  tertiary-fixed: "#e0e0ff"
  tertiary-fixed-dim: "#bfc2ff"
  on-tertiary-fixed: "#00006e"
  on-tertiary-fixed-variant: "#3239a3"
  background: "#f9f9f9"
  on-background: "#1a1c1c"
  surface-variant: "#e2e2e2"
typography:
  display-lg:
    fontFamily: Poppins
    fontSize: clamp(2rem, 6.25vw, 3rem)
    fontWeight: "700"
    lineHeight: "1.2"
  headline-md:
    fontFamily: Poppins
    fontSize: clamp(1.5rem, 4vw, 2rem)
    fontWeight: "600"
    lineHeight: "1.3"
  title-sm:
    fontFamily: Poppins
    fontSize: 20px
    fontWeight: "600"
    lineHeight: "1.4"
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: "400"
    lineHeight: "1.6"
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: "400"
    lineHeight: "1.6"
  label-caps:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: "600"
    lineHeight: "1.2"
    letterSpacing: 0.05em
rounded:
  DEFAULT: 0.25rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1200px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 48px
  section-gap: 80px
---

## Brand & Style

The design system is rooted in the philosophy of global kinship, blending traditional Indian cultural signifiers with a modern, professional NGO framework. The style is **Corporate Modern with Ethnocentric Accents**, prioritizing clarity, trust, and a vibrant community spirit.

The aesthetic leverages a high-contrast white base to ensure the symbolic saffron, green, and navy colors feel intentional and energetic rather than overwhelming. The interface should feel transparent and accessible, utilizing generous whitespace to allow bilingual content to breathe. Visuals should prioritize authentic, high-resolution photography of real community impact, avoiding generic stock imagery in favor of "human-first" storytelling.

## Colors

This palette is designed for high visibility and WCAG AA compliance.

- **Primary (Saffron):** Used for primary actions, highlights, and energy. It represents transformation and service.
- **Secondary (Deep Green):** Used for impact metrics, success states, and growth-related content.
- **Tertiary (Navy Blue):** (#4b53bc) Used for headers, footers, and authoritative typography to ground the design in stability and trust.
- **Background:** A pure white (#FFFFFF) background is mandatory to maintain high legibility for complex bilingual scripts.

## Typography

The typography system is dual-purpose, optimized for both Latin and Devanagari scripts.

- **Bilingual Balance:** Devanagari script requires more vertical space than Latin; therefore, a minimum `line-height` of 1.6 is enforced for all body text to prevent vowel markers (matras) from clashing.
- **Poppins:** Used for headlines and "Donate" buttons for its friendly geometric curves and excellent Devanagari rendering.
- **Inter:** Used for functional UI elements and long-form body text due to its high legibility and neutral tone.
- **Hierarchy:** Use Navy Blue for headlines to establish authority, and Saffron for sub-headings to maintain warmth.

## Layout & Spacing

The design system utilizes a **12-column fluid grid** for desktop and a **4-column grid** for mobile.

- **Pillar Layout:** Core NGO initiatives should be displayed in a 3-column "Pillar" configuration on desktop, stacking vertically on mobile.
- **Rhythm:** An 8px linear scale governs all padding and margins.
- **Sectioning:** Large vertical gaps (80px+) are used between major content blocks to ensure the bilingual text doesn't feel cluttered.
- **Safe Areas:** Maintain a minimum 16px margin on mobile devices to ensure readability on edge-to-edge screens.

## Elevation & Depth

This design system uses a **Tonal Layering** approach combined with subtle **Ambient Shadows**.

- **Surface:** All primary containers use the white background.
- **Elevation 1 (Cards):** Used for impact stories and pillar cards. A very soft, diffused Navy Blue tint shadow (`rgba(0, 0, 128, 0.05)`) with a 12px blur radius and 4px vertical offset.
- **Elevation 2 (Interactive):** Used for "Donate" buttons on hover. Increase shadow spread and opacity to provide tactile feedback.
- **Outlines:** In lieu of heavy shadows, use 1px borders in a very light grey (#F0F0F0) to define sections without adding visual weight.
- **Glassmorphism:** "Glass Cards utilize a glassmorphism effect with an 85% opaque white background, a 12px backdrop blur, and a soft ambient shadow (`--shadow-glass`) to create transparent elevation."

## Shapes

The shape language is **Rounded (0.5rem)**, striking a balance between the seriousness of an NGO and the approachability of a community-focused organization.

- **Buttons:** Use `rounded-lg` (.5rem or .75rem) for a friendly, modern feel.
- **Cards:** Use `rounded-lg` (.5rem or .75rem) with overflow-hidden to clip imagery cleanly.
- **Impact Counters:** Circular or highly rounded containers to draw the eye to statistics.

## Components

- **Donate Button (दान करें):** The high-visibility primary action. Background: Saffron (#FF9933), Text: White (#FFFFFF). It should be the most prominent element in any header or hero section.
- **Pillar Cards:** Three-column cards representing the NGO's core missions. Each card includes a top-weighted authentic image, a Title in Navy Blue, and a short bilingual description.
- **Impact Counters:** Large-scale numbers in Deep Green (#056e00) to represent transparency and results. Accompanied by a label in Navy Blue.
- **Bilingual Toggle:** A clean, pill-shaped switch in the navigation bar allowing users to jump between Hindi and English seamlessly.
- **Social Proof / Testimonials:** Use a "Quote Card" style with a small circular avatar of the community member, using the Deep Green as a left-border accent to denote growth and positivity.
- **Input Fields:** Minimalist design with a Tertiary (#4b53bc) bottom border that transitions to a Saffron focus state.
