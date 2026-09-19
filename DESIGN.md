---
name: Andrés Gacharná Portfolio
description: A daylight container yard where every shipped system is an ISO 6346 container.
colors:
  paint-crimson: "#d4123f"
  paint-crimson-deep: "#a50d30"
  paint-navy: "#1d3252"
  paint-navy-deep: "#142540"
  door-hardware: "#0d1a2e"
  paint-cobalt: "#1f4fa3"
  paint-green: "#2c6a47"
  paint-ochre: "#e0a526"
  paint-orange: "#d9661c"
  paint-slate: "#4c5561"
  paint-maroon: "#7b2433"
  yard: "#e3e2dc"
  yard-deep: "#d3d2ca"
  ink: "#16181d"
  ink-soft: "#3d4048"
  ink-mute: "#5b5e66"
  on-dark: "#f6f4ee"
  plate: "#cfd0cb"
  plate-edge: "#a9aba5"
  manifest-sheet: "#f4f3ef"
typography:
  display:
    fontFamily: "Big Shoulders Stencil, Arial Narrow, sans-serif"
    fontSize: "clamp(3.4rem, 9vw, 8.25rem)"
    fontWeight: 900
    lineHeight: 0.84
    letterSpacing: "-0.01em"
    fontVariation: "\"opsz\" 72"
  headline:
    fontFamily: "Big Shoulders Stencil, Arial Narrow, sans-serif"
    fontSize: "clamp(2.4rem, 5vw, 4rem)"
    fontWeight: 800
    lineHeight: 0.9
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Big Shoulders Stencil, Arial Narrow, sans-serif"
    fontSize: "clamp(1.6rem, 2.4vw, 2.1rem)"
    fontWeight: 800
    lineHeight: 0.95
  marking:
    fontFamily: "Big Shoulders Stencil, Arial Narrow, sans-serif"
    fontSize: "1.15rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.06em"
    fontFeature: "\"tnum\""
  lede:
    fontFamily: "Barlow, system-ui, sans-serif"
    fontSize: "1.3rem"
    fontWeight: 500
    lineHeight: 1.45
  body:
    fontFamily: "Barlow, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "1rem"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "0.04em"
  plate-label:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "0.8rem"
    fontWeight: 700
    letterSpacing: "0.16em"
rounded:
  handle: "3px"
spacing:
  gutter: "clamp(1rem, 4vw, 3rem)"
  max: "1320px"
  nav-h: "56px"
  stowage-gap: "4px"
components:
  handle:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-dark}"
    typography: "{typography.label}"
    rounded: "{rounded.handle}"
    padding: "0.55rem 0.9rem 0.55rem 0.8rem"
    height: "44px"
  handle-light:
    backgroundColor: "{colors.on-dark}"
    textColor: "{colors.ink}"
    rounded: "{rounded.handle}"
  handle-big:
    padding: "0.8rem 1.15rem 0.8rem 1rem"
    height: "52px"
  nav-link:
    textColor: "{colors.ink-soft}"
    typography: "{typography.label}"
    padding: "0.4rem 0.7rem"
  nav-link-active:
    textColor: "{colors.ink}"
  lang-toggle:
    backgroundColor: "{colors.yard}"
    textColor: "{colors.ink-soft}"
    rounded: "{rounded.handle}"
    height: "32px"
  lang-toggle-pressed:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-dark}"
  data-plate:
    backgroundColor: "{colors.plate}"
    textColor: "{colors.ink}"
    padding: "0.7rem 0.9rem 0.8rem"
  stowage-slot:
    typography: "{typography.label}"
    padding: "0.4rem 0.75rem"
    height: "2.9rem"
  owner-code-mark:
    backgroundColor: "{colors.paint-crimson}"
    textColor: "{colors.on-dark}"
    padding: "0.35rem 0.5rem 0.3rem"
---

# Design System: Andrés Gacharná Portfolio

## Overview

**Creative North Star: "The Container Yard"**

The site is a daylight intermodal yard. The ground is pale concrete; on it stand painted steel containers, each one a thing he shipped. Every container carries real ISO 6346 markings (owner code, serial, a check digit computed by the standard's algorithm, size-type code), a flat CSC-style data plate that lists what is inside, and solid door handles, which are the only things on the page you can press. The hero is the door of his own navy container, marked with his owner code; the contact section is the last container in the row, painted the same navy.

Density is that of an industrial document: stenciled markings at display scale, condensed labels in engraved caps, ruled manifests, and body copy set plainly for reading. Color is full-strength paint, not accent: a paint owns an entire region (a door, a container side, a stowage bay swatch), and ink that reads on it is chosen per paint. Depth is almost absent; the only lifted things are handles and the container you are looking at.

The world explicitly refuses the dark card grid with a neon accent, glitch effects, fake terminals, and identical tag/link chips that make information and actions look the same.

**Key Characteristics:**
- Daylight concrete ground with ink text; paint arrives in whole regions, never as trim.
- Stenciled display type for markings; Barlow and Barlow Condensed for everything that is read.
- Pressable things are handles; information is flat plate text. The two never share a look.
- Vertical corrugation ribs on painted steel; engraved-plate labels on data.
- ISO 6346 codes are real: the check digit is computed, never typed.

## Colors

A full yard of container paints on pale concrete, each paint paired with the ink that reads on it.

### Primary
- **Owner Crimson** (paint-crimson): the brand accent. It marks identity in small doses: the active nav underline, text selection, caret, scrollbar thumb hover. As paint it owns the first project container (the store) and the first stowage bay. It is the only paint that appears outside a painted region (as underlines and selection). The AGCU owner-code mark in nav and footer is painted Door Navy, matching the hero.
- **Crimson Deep** (paint-crimson-deep): the role line in experience entries.

### Hero Door
- **Door Navy** (paint-navy): the hero container door, full-bleed across the first viewport.
- **Navy Rail** (paint-navy-deep): the door's top and bottom frame rails and the consignee plate border.
- **Door Hardware Navy** (door-hardware): locking rods, cam keepers, rod handles and the door seam drawn on the hero door.

### Secondary
- **Cobalt**, **Bottle Green**, **Ochre**, **Signal Orange**, **Slate**, **Maroon** (paint-cobalt, paint-green, paint-ochre, paint-orange, paint-slate, paint-maroon): project container sides and stowage bays (cobalt currently appears only in the stowage plan). Each region declares whether it takes light ink (on-dark) or dark ink (ink): ochre and orange take ink; navy, crimson, cobalt, green, slate and maroon take on-dark. Ochre also serves as the focus ring and the contact status line on ink; green is the "current role" live dot.

### Neutral
- **Yard Concrete** (yard): the page ground, the nav bar, the footer.
- **Deep Concrete** (yard-deep): the experience band, scrollbar track, language-toggle hover.
- **Ink** (ink): body text, section rules (2px), default handle paint.
- **Soft Ink** (ink-soft): secondary copy, intros, inactive nav links.
- **Muted Ink** (ink-mute): plate labels, metadata, stowage separators, notes.
- **Stencil White** (on-dark): text and markings on dark paint; the light handle.
- **Plate Metal** (plate) and **Plate Edge** (plate-edge): data plates, consignee plate, papers; the photo frame edge.
- **Manifest Paper** (manifest-sheet): the ruled experience manifest sheet.
- Rules are ink at 18% (hairline) and 55% (strong).

### Named Rules
**The Paint Owns Regions Rule.** A paint is applied to a whole region (a door, a container side, a stowage slot, a bay swatch) with its matching ink. Paint is never used as a thin accent border, a gradient, or a glow on a neutral card.

**The Declared Ink Rule.** Every painted region declares its reading ink (on-dark or ink). Ochre and orange carry ink; the dark paints carry stencil white.

## Typography

**Display Font:** Big Shoulders Stencil (with Arial Narrow)
**Body Font:** Barlow (with system-ui)
**Label/Mono Font:** Barlow Condensed (with Arial Narrow)

**Character:** Stencil is what is painted on steel: names, owner codes, section headings, company names. Barlow is what is read; Barlow Condensed is what is engraved or stamped: labels, handles, plate titles, stowage slots, proof lines.

### Hierarchy
- **Display** (900, clamp(3.4rem, 9vw, 8.25rem), 0.84, uppercase, opsz 72): the name on the hero door and the contact title; nowhere else.
- **Headline** (800, clamp(2.4rem, 5vw, 4rem), 0.9, uppercase): section headings, stenciled on the yard.
- **Title** (800, clamp(1.6rem, 2.4vw, 2.1rem), 0.95, uppercase): container names; the hero role line uses the same size in Barlow Condensed 600.
- **Marking** (Stencil 700, 1.15rem to clamp(1.4rem, 2.6vw, 2.2rem), 0.06em, tabular numerals): ISO owner codes, serials, check digits in a boxed cell, size-type codes.
- **Lede** (Barlow 500, 1.3rem, 1.45): hero and about lead paragraphs, max 60ch.
- **Body** (Barlow 400, 1.0625rem, 1.55): all reading copy, 62-68ch measure.
- **Label** (Barlow Condensed 700, 1rem, 0.04em, uppercase): handles, nav links, bay names, stowage slots, tech lists.
- **Plate label** (Barlow Condensed 700, 0.78-0.85rem, 0.16-0.18em, uppercase): engraved titles on plates and manifest column heads.

### Named Rules
**The Stencil Is Paint Rule.** Big Shoulders Stencil is used only for things that would be painted on steel: names, codes, headings, company names. It never sets a paragraph, a label, or a button.

## Layout

A single centered column (max 1320px) with a fluid gutter (clamp(1rem, 4vw, 3rem)) under a sticky 56px gate-sign nav. The hero door is full-bleed and fills the first viewport (100svh minus the nav). Sections are separated by 2px ink rules, not by background cards. Section headers are a two-column grid: stenciled heading left, a short intro (38-42ch) right, a 2px ink rule beneath.

Projects stack as rows of container (7fr) plus manifest on the yard (5fr); below 900px they stack. The stack is a stowage plan: each bay is a row with a 13rem name column and an auto-fill grid of slots (min 10.5rem) separated by a 4px gap. Experience is a ruled manifest with three columns (period 11rem / company 15rem / bullets) that collapses to one column below 1000px. Handles wrap in a row with 0.6-0.75rem gaps; below 520px they become a two-column grid with the primary handle spanning full width.

**The Legibility Over Hardware Rule.** Below 1180px the hero door hardware (seam, locking rods, cam keepers, rod handles) is hidden, because at narrower widths the door has no free column and the rods would cross the name, proof lines or consignee plate. Decoration yields to reading at every breakpoint.

## Elevation & Depth

The world is flat paint and flat metal. Depth comes from the physical construction of a container, drawn with inset rails (14px on the door, 10px on container sides) and corrugation ribs (a repeating 26px vertical rib pattern at 8-12% contrast), not from floating cards.

### Shadow Vocabulary
- **Handle at rest** (`box-shadow: 0 1px 0 rgba(255,255,255,0.18) inset, 0 2px 3px rgba(0,0,0,0.25)`): a solid object that can be grabbed.
- **Handle lifted** (`box-shadow: 0 1px 0 rgba(255,255,255,0.18) inset, 0 8px 16px rgba(0,0,0,0.28)`): hover, with a 2px rise; pressed returns to 0 with `0 1px 2px rgba(0,0,0,0.3)`.
- **Container in focus** (`box-shadow: ... 0 16px 28px rgba(22,24,29,0.22)`): the container side under hover or focus-within rises 4px and returns to full paint (at rest it is slightly desaturated, saturate(0.82)).

### Named Rules
**The Flat Plate Rule.** Plates (data plates, consignee plate, papers, manifest sheet) are flat: no shadow, no hover, no lift. They are stamped metal or paper, identified by a thin border and an inset engraved outline (1px at -7px offset).

**The Only Lift Rule.** Only two things ever leave the surface: handles, and the container the visitor is looking at. Nothing else casts a shadow.

## Shapes

Hard industrial geometry: square corners everywhere. The single radius is 3px, reserved for handles and the handle-like language toggle and menu button. Borders are structural: 2px ink section rules, 2px boxed check digits, a double border (2px plus 1px outline at 2px offset) for placards stenciled on a container face, and 2px dashed paint for "learning" stowage slots. Bullets are small solid squares, never dots or glyphs. The one circle is the green live indicator on the current role.

## Components

### Handles (buttons and action links)
The only pressable objects on the page: solid, grabbable, labeled.
- **Shape:** gently rounded steel (3px), minimum height 44px (52px for the big size).
- **Default:** ink paint with stencil-white label in Barlow Condensed 700 uppercase; a drawn line icon at 1.15em leads the label.
- **Light:** stencil-white paint with ink label; the primary action on dark paint (Email on the navy door and on the contact container).
- **Outbound:** every external link ends with the up-right arrow at 0.95em, 80% opacity, which shifts 2px up-right on hover.
- **Hover / Focus / Active:** rises 2px with a deeper shadow (220ms, ease-out cubic-bezier(0.16, 1, 0.3, 1)); pressed settles back; focus is a 3px ochre outline at 3px offset.
- **On ink:** on the contact container the default handle is lifted to #0d1a2e (door-hardware) with a 1px light hairline so it separates from the ink paint.

### Data Plates (information)
- **Style:** plate metal, 1px muted-ink border, engraved uppercase title in muted ink at wide tracking.
- **Contents:** tech lists as flat condensed text separated by muted slashes; cursor stays default. Never chips, never outlined pills, never anything a finger would try to press.
- **Consignee plate:** the profile photo on a white square inside a plate with a navy-rail border and an inset engraved outline; NAME / PORT rows as a definition list.

### Containers (project cards)
- **Side:** a painted region with corrugation, inset top/bottom rails, the ISO marking row (owner code AGCU, six-digit serial, boxed computed check digit), the stenciled name, and an optional placard.
- **Hatch:** the project image seen through the doors, grayscale, screened into the container's own paint; containers without imagery carry a huge stencil marking instead.
- **Manifest:** description, data plate and handles sit beside the container on the yard, not inside a card.

### Stowage Plan (tech stack)
- **Bays:** a small square swatch of the bay's paint beside a condensed uppercase bay name.
- **Slots:** solid paint with corrugation for production tech; 2px dashed paint outline for tech in progress. Square, flat, never raised, 4px apart. A legend explains solid vs dashed.

### Navigation
- **Style:** yard-colored sticky bar, 2px ink bottom rule, crimson owner-code mark plus condensed name at left.
- **Links:** condensed 600 uppercase in soft ink; hover darkens and shows a strong-rule underline; the current section carries a 3px crimson underline.
- **Language toggle:** a 2px ink-bordered segmented control (3px radius); the pressed language is ink with stencil-white text.
- **Mobile (below 960px):** the name hides, an ink MENU handle appears, and links open as a full-width stenciled list at 2rem with the current link in crimson.

### Hero Door (signature)
The navy container door: navy-deep frame rails, corrugation, ISO markings sprayed on at load (a 900-1100ms stencil-spray reveal: clip from left, blur 8px to 0), the stenciled name, a role line with the focus area reversed out in an ink-on-white block, three proof lines as a ruled list with square bullets, handles, and the consignee plate. Door hardware is drawn in flat hardware navy and hidden below 1180px.

## Do's and Don'ts

### Do:
- **Do** make every pressable thing a handle: solid paint, 3px radius, drawn SVG icon, uppercase condensed label, and the up-right arrow on every external link.
- **Do** keep information flat: tech lists, placards, plate rows and metadata are plain text on plate metal or paint, with a default cursor.
- **Do** give a paint a whole region and declare its ink (on-dark for navy, crimson, cobalt, green, slate, maroon; ink for ochre and orange).
- **Do** generate every ISO 6346 code with the computed check digit (owner code AGCU, serial padded to six digits, check digit from the standard's weighted sum mod 11 mod 10).
- **Do** use Big Shoulders Stencil only for painted markings and headings; set everything read in Barlow or Barlow Condensed.
- **Do** hide decorative hardware whenever it would cross text; below 1180px the door rods stand down.
- **Do** honor reduced motion: the spray reveal and all transitions collapse to near-zero.

### Don't:
- **Don't** make information look pressable: no tag chips, pills, raised boxes, or hover states on tech lists or plate contents.
- **Don't** make a pressable thing look like information: no bare text links for primary actions, no ghost buttons.
- **Don't** give plates a shadow, a hover or a lift.
- **Don't** use paint as a thin accent line, gradient or glow on a neutral card; the dark card grid with a neon accent is the rejected world.
- **Don't** type a check digit by hand or invent a non-ISO code format.
- **Don't** use glitch effects, fake terminals, typewriter or scramble text.
- **Don't** add radius other than 3px, and only on handles and handle-like controls.
