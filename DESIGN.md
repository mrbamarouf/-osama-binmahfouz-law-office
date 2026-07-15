---
name: Osama Bin Mahfouz Law Office
description: Jeddah Daylight Legal Atelier identity for a bilingual Saudi law-office website.
colors:
  warm-ivory: "#F7F3EA"
  soft-white: "#FFFCF7"
  jeddah-limestone: "#DCCDB7"
  pale-olive-sage: "#B6BBA5"
  refined-olive: "#697052"
  deep-olive: "#394431"
  antique-brass: "#B58A47"
  warm-charcoal: "#2A2C27"
typography:
  display:
    fontFamily: "Noto Kufi Arabic, Manrope, sans-serif"
    fontSize: "clamp(2.4rem, 6vw, 5.8rem)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "normal"
  body:
    fontFamily: "IBM Plex Sans Arabic, Manrope, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.85
    letterSpacing: "normal"
rounded:
  sm: "6px"
  md: "10px"
  lg: "14px"
spacing:
  sm: "8px"
  md: "16px"
  lg: "32px"
  xl: "64px"
components:
  button-primary:
    backgroundColor: "{colors.deep-olive}"
    textColor: "{colors.soft-white}"
    rounded: "{rounded.sm}"
    padding: "14px 22px"
  button-secondary:
    backgroundColor: "{colors.soft-white}"
    textColor: "{colors.deep-olive}"
    rounded: "{rounded.sm}"
    padding: "14px 22px"
---

# Design System: Osama Bin Mahfouz Law Office

## 1. Overview

**Creative North Star: "Jeddah Daylight Legal Atelier"**

The system is luminous, architectural, and legally serious without becoming cold. Warm ivory and limestone carry most of the surface; olive provides authority; antique brass appears only as a precise line, pin, or accent.

The page should feel assembled from daylight, stone, papers, and quiet professional materials rather than from a generic legal template.

**Key Characteristics:**
- Editorial, asymmetric compositions.
- Large but readable Arabic headlines.
- Local architectural and material imagery.
- Thin dividers, restrained brass details, and tactile olive controls.
- Mobile sections designed as their own compact reading experience.

## 2. Colors

The palette is a daylight olive system, 65-70% warm light surfaces with deep olive used for authority and antique brass used sparingly.

### Primary
- **Deep Olive** (#394431): primary text emphasis, buttons, navigation state, and service selection.
- **Refined Olive** (#697052): secondary emphasis, tags, mobile contact bar, and hover states.

### Secondary
- **Antique Brass** (#B58A47): thin rules, small icon strokes, active markers, and logo adjacency.

### Neutral
- **Warm Ivory** (#F7F3EA): main page background.
- **Soft White** (#FFFCF7): elevated readable panels.
- **Jeddah Limestone** (#DCCDB7): borders, section bands, and material accents.
- **Pale Olive Sage** (#B6BBA5): quiet secondary surfaces.
- **Warm Charcoal** (#2A2C27): body copy and high-contrast text.

### Named Rules

**The Brass Restraint Rule.** Brass is a detail, never a broad background.

## 3. Typography

**Display Font:** Noto Kufi Arabic with Manrope fallback.
**Body Font:** IBM Plex Sans Arabic with Manrope fallback.

**Character:** The display face is geometric and formal, while the body face keeps Arabic paragraphs readable and calm.

### Hierarchy
- **Display** (700, `clamp(2.4rem, 6vw, 5.8rem)`, 1.15): hero and major section statements.
- **Headline** (700, `clamp(1.8rem, 4vw, 3.4rem)`, 1.2): section titles and page titles.
- **Title** (700, 1.25rem, 1.45): service names and compact headings.
- **Body** (400, 1rem, 1.85): paragraphs, legal text, and form descriptions.
- **Label** (600, 0.9rem, normal): navigation, controls, chips, and metadata.

### Named Rules

**The Arabic Integrity Rule.** Do not apply tracked letter spacing to Arabic text.

## 4. Elevation

Depth is mostly tonal and material: ivory against soft white, limestone borders, and image layers. Shadows are subtle and structural, used only to separate navigation overlays, mobile menu layers, and focused panels.

### Shadow Vocabulary
- **Soft Lift** (`0 18px 48px rgba(42, 44, 39, 0.10)`): large image panels and floating menu surfaces.

## 5. Components

### Buttons
- **Shape:** precise rectangle with small radius (6px).
- **Primary:** deep olive background, soft white text, brass hairline inset on focus.
- **Hover / Focus:** small lift, darkened olive, visible outline.
- **Secondary:** soft white background, limestone border, deep olive text.

### Cards / Containers
- **Corner Style:** small to medium radius only.
- **Background:** soft white or warm ivory.
- **Shadow Strategy:** tonal separation first; soft lift only for major image or menu layers.
- **Border:** thin limestone or pale olive strokes.
- **Internal Padding:** compact on mobile, generous on desktop.

### Inputs / Fields
- **Style:** soft white fields with limestone borders and deep olive text.
- **Focus:** olive border shift with brass outline.
- **Error / Disabled:** no aggressive red unless validation is added later.

### Navigation

Header is light, calm, and bordered with a thin olive or brass rule. On mobile, the menu becomes a full-screen ordered panel with direct phone and WhatsApp actions.

## 6. Do's and Don'ts

Do use local-feeling daylight architecture, precise olive controls, strong Arabic type, and compact mobile contact paths.

Don't use navy, gavels, handshakes, foreign lawyers, exaggerated gold, fake statistics, fake maps, heavy animation, glass effects, or repeated identical service cards.
