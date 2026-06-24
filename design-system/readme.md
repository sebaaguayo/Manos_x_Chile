# Manos x Chile — Design System

A brand & UI design system for **Manos x Chile** (wordmark: **manos CHILE**), a circular-economy
company based in **Chiloé, Patagonia, southern Chile**. The company **rescues plastic waste from the
region's beaches, coastlines and aquaculture industry** and transforms it into **"Ecomadera"** — a
durable, recycled-plastic lumber — and finished products: tablas (boards), estacones (posts),
benches, picnic tables, planters (maseteros/jardineras), and pallets.

All product copy is in **Chilean Spanish**.

> **2026 refresh.** This system was modernized from a thin, minimal first iteration to a **bolder,
> more vivid identity** driven by a new Figma direction (`hands_for_chilli.fig`): Be Vietnam Pro
> typography, a vivid green + ocean-blue palette, heavily beveled corners, and a signature outlined
> "ring" card. The value proposition now leads with **plástico rescatado y reciclado de playas**
> (plastic rescued and recycled from beaches).

## Sources

- **Figma:** `hands_for_chilli.fig` — the new modern direction (catalog page). Source of the type
  (Be Vietnam Pro), the vivid green `#0FBF62` / blue `#0066CC` palette, the beveled radii (cards 24,
  images 22, buttons 14), and the 3px ring + drop-shadow card treatment.
- **Codebase:** `Test - Antigravity/` — the original React + Vite marketing site (`manos-x-chile`),
  source of the content, product data, copy, and photography.
- **Logo:** `uploads/logo.png` — primary colored mark (hands-recycling symbol + leaf + wordmark).
- Site built by agency **El Faro** (Puerto Varas). Contact: Jmtoro@manosxchile.cl.

> The reader is not assumed to have access to the above; paths are recorded for traceability.

---

## CONTENT FUNDAMENTALS

**Language.** Chilean Spanish throughout. Keep accents correct (económica, durabilidad, Chiloé, CO₂).

**Voice & tone.** Confident, energetic, purpose-driven. Leads with the **beach-rescue story** and
*place* ("De la costa a tu proyecto", "Le damos una segunda vida al plástico del mar", "Desde Chiloé
para el mundo"), backed by hard technical credibility (ASTM/NCh, MPa, "950 kg/m³", IP65).

**Person.** **"nosotros" (we)** for the company ("Rescatamos…", "Transformamos…"); addresses the
customer as **"tú"** ("¿Tienes un proyecto en mente? Escríbenos.").

**Casing.**
- Headlines & section titles: **UPPERCASE** with wide tracking ("PRODUCTOS", "MATERIAS PRIMAS",
  "DE LA COSTA A TU PROYECTO"). Bold and punchy.
- Buttons: **UPPERCASE** Black weight, tracked ("COTIZAR", "VER CATÁLOGO").
- Product names: **UPPERCASE** Bold, tracked ("TABLA 15,5 CM × 5,6 CM × 290 CM").
- Section numbers as `01 / 02 / 03 / 04`.

**Vibe / specifics.**
- Short, declarative sentences. A strong claim + a supporting stat.
- Numbers as a rhetorical device: "500+ toneladas rescatadas", "25+ años", "50+ empleos", "-60% CO₂", "100% reciclado".
- Eco claims surface as pill tags: "Rescatado de playas", "100% reciclado", "Hecho en Chiloé".
- Notes use an asterisk convention: "*hay descuento según cantidad".

**Emoji:** none. Only a checkmark "✓" (success) and arrows "→" (links) appear as plain glyphs.

---

## VISUAL FOUNDATIONS

**Overall character.** Bold, vivid, friendly and modern. White canvas, heavily rounded corners,
strong color, heavy type. Confident rather than quiet — the durability and second-life story made visible.

**Color.** A vivid duo on a clean base.
- **Vivid green `#0FBF62`** (`--green-500`) — primary brand / eco accent: section headings, the `eco`
  button, green ring cards, stat numbers. Deepens to `#0BA152` / `#016C3F`.
- **Ocean blue `#0066CC`** (`--blue-500`) — energetic secondary: primary CTAs (COTIZAR), card rings,
  focus states, links. Nods to the beaches the plastic is rescued from. Deepens to `#0A4F9E`.
- **Neutrals:** warm ink `#272626` (text/headings) → `#797979` (muted) → `#D9D9D9` (borders /
  placeholders). Backgrounds `#FFFEFE` off-white with `#F6F7F8` section fills.
- A `--gradient-brand` (green→blue 120°) exists for accent surfaces; use sparingly.

**Type.** **Be Vietnam Pro**, exclusively (weights 400–900). The brand now leans **heavy** — Bold
(700) and Black (900). Headings and labels are **UPPERCASE with wide tracking** (0.12–0.22em; the
Figma uses up to 0.27em). Body is Medium (500). Geometric, sturdy letterforms that echo the product's
durability. No serif, no mono. *(Substitution note: matches the Figma exactly — Be Vietnam Pro is a
free Google Font.)*

**Spacing & layout.** Airy. Section vertical padding 5–8rem. `max-width: 1280px` container, `0 2rem`
gutters. Hero and large panels are **inset rounded cards** with the signature ring (not full-bleed
edge-to-edge).

**Corners — BEVELED.** This is the headline change. Buttons & inputs `14px`, tags pill/`full`, inner
images `22px`, **cards & panels `24px`**, large hero panels `28px`. Nothing is square anymore.

**Cards — the signature.** White (`#FFFEFE`), radius `24px`, with a **3px colored RING**
(`box-shadow: 0 0 0 3px <blue|green>`) plus a soft **drop shadow** (`0 4px 4px rgba(0,0,0,0.25)`).
Blue rings dominate; green rings mark eco/finished items. Interactive cards **lift** `translateY(-6px)`
and gain a deeper shadow; product images zoom `scale(1.06)`. (A plain hairline `ring="none"` card exists too.)

**Shadows.** Punchy and friendly. The brand drop shadow `0 4px 4px rgba(0,0,0,0.25)` rides under the
ring. Hover `0 12px 24px rgba(39,38,38,0.16)`. Modals `0 24px 70px rgba(39,38,38,0.34)`.

**Backgrounds & imagery.** Real, warm recycled-plastic product photography (dark textured lumber),
workshop/factory shots, and Chiloé coast/landscape. Heroes are photos under a dark warm overlay
(`rgba(39,38,38,0.30→0.62)`) inside a rounded ring panel. Photography is warm and natural.

**Motion.** Lively but controlled. `0.18–0.28s` transitions on transform, color, shadow. The
signature move is the **card hover-lift + image zoom**; buttons lift `-2px` with a small shadow on
hover. An `--ease-back` (slight overshoot) is available for playful entrances. No parallax, no infinite loops.

**Hover / press states.**
- Buttons: primary blue darkens `#0066CC → #0A4F9E` (eco green `#0FBF62 → #0BA152`) + lift; outlines fill in.
- Cards: lift + deeper shadow (ring stays).
- Inputs: border turns ocean-blue with a soft `0 0 0 3px` blue halo.

**Transparency / blur.** The sticky navbar uses a translucent white + backdrop blur. Hero overlay
and translucent pill tags over photos. Otherwise opaque.

---

## ICONOGRAPHY

The brand remains **deliberately icon-light**. Findings & approach:

- **No icon font / SVG icon set** in either the Figma or the codebase. Navigation, buttons and cards
  rely on **text alone** (bold, uppercase, tracked).
- The only recurring glyphs are a **checkmark "✓"** (success) and **arrows "→"** (links) — plain Unicode.
- Brand marks: the **logo** (`assets/logo.png`, colored) and the **El Faro** agency logo.

**Guidance for new work:** stay icon-light. If an interface genuinely needs icons, use a **bold,
rounded line set** to match the heavy beveled aesthetic — **Lucide** (2px stroke, rounded;
`https://unpkg.com/lucide@latest`) is the recommended CDN match. Flag any icon usage as an extension,
not a documented part of the brand. Never use emoji or thin/duotone icons.

---

## VISUAL ASSETS (`assets/`)

- `logo.png` — primary colored mark (hands + leaf + manos CHILE wordmark). **Use this.**
- `logo-flat.png` — alternate green workshop logo. `el_faro_logo.png`, `partners_banner.png` — agency / partner.
- `hero_banner.jpg`, `hero_chiloe.jpg`, `chiloe_landscape.jpg` — hero photography.
- `product_*.jpg` — catalog photography (picnic table, bench, pallet, planter, boards, posts).
- `factory_workers.jpg`, `factory_worker_tank.jpg` — process/workshop imagery.
- `value_sustainability.png`, `pattern_leaf_seamless.png` — supporting imagery / texture.

---

## INDEX / MANIFEST

**Root**
- `styles.css` — single entry point consumers link. `@import`s the token + font closure only.
- `tokens/` — `colors.css` (vivid green+blue), `typography.css` (Be Vietnam Pro, heavy/tracked),
  `spacing.css` (beveled radii + ring/shadow tokens), `fonts.css` (Be Vietnam Pro via Google Fonts).
- `assets/` — logos, hero & product photography, textures.
- `readme.md` — this file. `SKILL.md` — portable Agent-Skill manifest.

**Components** (`window.ManosXChileDesignSystem_d24107.<Name>`)
- `components/core/` — **Button** (blue/eco-green, beveled), **Tag** (pill), **SectionLabel**, **Card** (signature ring)
- `components/forms/` — **Input** (beveled box), **Select**
- `components/product/` — **ProductCard** (ring card + COTIZAR), **BenefitCard**, **Stat**

Each directory has a `<Name>.jsx` + `<Name>.d.ts` + `<Name>.prompt.md` and a `*.card.html` showcase.

**UI Kit**
- `ui_kits/website/` — the modernized marketing site: interactive **Home** (beach-rescue hero, impact
  strip, ring benefit cards, process) + **Catalog** (ring product grid with a live "Cotizar" flow).
  Files: `index.html`, `SiteChrome.jsx`, `HomeScreen.jsx`, `CatalogScreen.jsx`.

**Foundation cards** (`guidelines/cards/`) populate the Design System tab — Colors, Type, Spacing, Brand.

**Namespace:** `ManosXChileDesignSystem_d24107`
