# Progressive Real Estate Group — Website Redesign Project

This document is loaded automatically at the start of every Claude Code session. Read it carefully. It defines the project, the constraints, the workflow, and the standards. When in doubt, follow what's written here over general best practices.

---

## 1 · What this project is

A complete visual and content overhaul of **progressiverealestategroup.com**, the website for The Progressive Real Estate Group — a four-founder Twin Cities real estate brokerage operating under RE/MAX Results. The team's positioning is built around one specific commitment: **inclusive, equitable homeownership** ("the No Hate Pledge"), serving LGBTQ+ households, multilingual families, minority and first-generation buyers, and accessibility-conscious clients as the *standard*, not a niche.

The project's goal is to make the website actually reflect this — both visually and in content — and to build out a search-traffic moat around the long-tail, identity-led, neighborhood-specific keywords the major aggregators (Zillow, Redfin) don't bother optimizing for.

### The four founders

| Name | Role | Background | Notes |
|---|---|---|---|
| **Rodolfo Trujillo** | Co-Founder · Broker Associate | 20 years real estate, referral-driven business | Spanish-speaking; family-centered positioning |
| **Travis Callstrom** | Co-Founder | 27 years real estate | Lives with husband Bryan + 2 kids; central to the LGBTQ+ positioning |
| **Joe Mack** | Co-Founder | 11+ years real estate, prior decade in banking/mortgage | Financial-lens advisor; primary contact in current Lofty footer |
| **Jake Miller** | Co-Founder | 23 years (mortgage from 2003, RE license 2004) | Mortgage + construction background; straight-shooter positioning |

All four are **Co-Founders**. Anywhere the live site or content calls them "Agent" is wrong and needs to be corrected to "Co-Founder."

---

## 2 · The platform: Lofty (formerly Chime)

The site runs on **Lofty**, a real estate-specific CMS. This is the most important technical constraint in the entire project. Lofty is not WordPress, not Webflow, not custom code. It has rigid module structure and a small number of customization escape hatches.

### What you can customize in Lofty

1. **Global Custom Styles (CSS)** — CMS → Settings → Tools → Styles. **Hard 5,000 character limit.** Use ruthlessly compact CSS. CSS variables save characters; multi-selector rules save characters; whitespace and comments cost characters.
2. **Global Custom Scripts (JS)** — CMS → Settings → Tools → Scripts. No documented character limit. Useful for `Util.addStyle('https://cdn.jsdelivr.net/gh/...')` to load external CSS and bypass the 5K cap. **This is set up and live.** The repo is public at `github.com/baehlee/progressive-styles`; `styles/hosted.css` is served via jsDelivr. Lofty snippet: `Util.addStyle('https://cdn.jsdelivr.net/gh/baehlee/progressive-styles@main/styles/hosted.css?v=1');` — to ship a global style change, edit `hosted.css`, commit, push, and bump `?v=` if the CDN cache lags.

   **Privacy rule for the public repo:** the `content/` directory is **gitignored** and must never be pushed — it holds the competitive SEO strategy, founder bios with personal contact info + family names, and pre-publication blog drafts. That source lives locally only and goes into Lofty by hand; the public website is the only place it should ever appear, in final rendered form.
3. **Custom HTML Blocks** — Inside Lofty's page editor, between any two existing blocks. No size limit. Inline `<style>` tags inside these blocks work and don't count against the global CSS budget. This is the primary escape hatch for page-specific styling.
4. **Custom Landing Pages** — Brand-new pages outside the standard template. Used for the No Hate Pledge page, identity-led landing pages, and SEO area/neighborhood pages.
5. **Per-page SEO panel** — Meta title, meta description, focus keyword, social sharing image. Available on every page and every blog post.
6. **Areas tool** — CMS → Areas. Auto-generates pages for cities/neighborhoods with live MLS-filtered listings. Each area gets its own URL, SEO settings, and content blocks. **This is the single biggest SEO lever in the platform.**
7. **Blog editor** — Per-post SEO settings, scheduled publishing, categories, author attribution.

### What you can't customize in Lofty

- **The IDX search, listings detail pages, market snapshot widget, mortgage calculator, and home valuation form** — these are hardwired to Lofty's MLS feed and CRM. You can *restyle* them with CSS, but you cannot replace the logic or swap them for custom modules.
- **The page URL structure for IDX pages.**
- **Anything via API.** Lofty does not expose an API for pushing CSS, HTML, or content into the CMS from outside. **Every artifact this project produces must ultimately be pasted into Lofty by a human.** Claude Code accelerates *production* of those artifacts; it cannot deploy them.

### Lofty support contact

`1-855-981-7557` — for plan/feature questions only. Advanced Website Customizations (Custom Styles + Scripts) requires a paid tier above Starter. Confirm the team is on the right plan before pasting anything.

---

## 3 · Domain and live URLs

- **Production site:** `https://progressiverealestategroup.com`
- **Lofty backend hostname:** `progressiveteam.results.net` (the same site, served via Lofty's hosting; do not change this)
- **Brokerage parent:** RE/MAX Results — `https://results.net`
- **Office address:** 7700 France Ave S #230, Edina, MN 55435
- **Primary phone (Joe Mack, listed in current footer):** +1 (952) 484-7071

The site is licensed in Minnesota and Wisconsin. Primary market is the Twin Cities metro; secondary market includes Hudson, WI and other western Wisconsin areas (the team has a personal/family connection to the area — Travis has a Wisconsin cabin, multiple founders have family roots there).

---

## 4 · Design system — this is non-negotiable

Every artifact you produce must use these exact values. The earlier work establishes them; do not redefine them.

### Color palette (CSS variables, prefixed `--preg-`)

```css
--preg-ink:     #0A1F3D;   /* deep navy — primary surface, headings, footer */
--preg-ink-2:   #14315A;   /* slightly lifted navy */
--preg-sky:     #3D88BD;   /* logo sky blue — accent only, used sparingly */
--preg-sky-2:   #6FAED9;
--preg-canvas:  #F4EEE3;   /* warm cream — primary background */
--preg-paper:   #FBF8F1;   /* slightly lighter cream — card surfaces */
--preg-ember:   #B86A3E;   /* terracotta — action color, italic emphasis */
--preg-ember-2: #D38A5C;
--preg-char:    #1B1815;   /* primary text */
--preg-mute:    #6E695F;   /* secondary text */
--preg-rule:    #D9D1BE;   /* warm border */
```

When writing compact CSS for the 5K budget, single-character variable names are fine: `--I` (ink), `--S` (sky), `--C` (canvas), `--P` (paper), `--E` (ember), `--E2` (ember-2), `--t` (text), `--m` (mute), `--r` (rule), `--d` (display font), `--f` (sans font).

### Typography

- **Display:** Fraunces (variable font: opsz, wght, SOFT axes). Used for all headings and large display numbers. Italic + soft axis = the terracotta-colored emphasis we use as the signature accent.
- **Body:** Manrope (variable font: wght). Used for body, UI, labels, captions.
- **Loaded from:** Google Fonts via `@import` at the top of the global CSS.

Use the full variable font import only on the unconstrained pages. For the 5K-capped global CSS, use the trimmed import: `Fraunces:wght@300..700&family=Manrope:wght@400..600`.

### Voice & copy direction

The team is veteran (80+ combined years), and their voice is plain-spoken, slightly Midwestern, mission-forward without being preachy. Copy guidelines:

- **Short sentences.** No "luxury lifestyle experiences." No "your journey home starts here." No corporate AI slop.
- **Specific beats polished.** Name what makes each founder different — Rodolfo's referral business, Travis's family + LGBTQ+ positioning, Joe's mortgage background, Jake's construction knowledge.
- **The No Hate Pledge as the north star.** State it plainly on the homepage and the dedicated mission page. Let it inform tone everywhere else without repetition.
- **Italic emphasis** in display headings is the signature move — terracotta colored, soft axis. Use it once per major heading, never more.

---

## 5 · The 8-phase rollout

The redesign rolls out in eight phases. Each phase produces visible improvement; the site is always publishable between phases.

| Phase | Description | Status | Deliverable type |
|---|---|---|---|
| **1** | Global CSS foundation | ✅ Complete. jsDelivr hosting now live (see below) — the full uncompacted CSS can serve from the CDN, bypassing the 5K cap. | `styles/global.css` (5K inline) + `styles/hosted.css` (CDN) |
| **2** | Homepage hero replacement (4-founder video grid) | 🟡 Deliverable ready (`pages/homepage/hero.html`): 4 welcome videos wired (youtube-nocookie embeds), Lofty-validator-clean (lowercase svg `viewbox`, no empty iframe `src`), hi-res face-centered headshots (720×828, served via CDN). Only pending: human paste into Lofty + confirm the two button slugs (`/search`, `/team`). | Custom HTML block |
| **3** | Homepage "Trusted Experts" + "Work With Us" rewrites | 🟡 Deliverables ready (`pages/homepage/trusted-experts.html` + `work-with-us.html`). Trusted Experts = branded "why us" band (italic-terracotta heading, 80+/4/MN&WI/No-Hate stat strip, 4 general tiles Buying/Selling/Start-to-finish/Built-for-everyone). Work With Us = full-bleed navy closing CTA (4 founder portraits, hero-echoing "place to belong," CTAs → `/evaluation` + `/team`). Scoped #ids, no inline SVG, verified at 390px + desktop. Pending: human pastes both into Lofty + hides the two stock sections they replace. | Custom HTML blocks |
| **4** | Team page rebuild with real bios + video integration | 🟡 Deliverable ready (`pages/team/team.html`): four founders as alternating photo/bio rows, each headshot a click-to-play welcome video (same embeds + lightbox as the hero), ≤150-word web bios (in `content/founders/web-versions.md`), roles read "Co-Founder". Scoped `#preg-team`, mobile-first (verified 1440 + 390px), lightbox verified, no inline SVG, hardened against the hosted.css global button/heading rules. Pending: human pastes under the stock `md-agent-search` "OUR AGENTS" module on /team (and optionally hides it). | Custom HTML blocks + content |
| **5** | No Hate Pledge dedicated landing page | 🟡 Deliverable ready (`pages/mission/no-hate-pledge.html`, scoped `#preg-pledge`): navy hero ("No hate. No exceptions."), the formal mission statement signed by the four founders, a "who we serve" grid (LGBTQ+, Spanish-speaking/multilingual, first-gen, minority/immigrant, accessibility-conscious), a fair-housing note, and a navy CTA band linking /listing + /sell + /team. SEO keyword "inclusive real estate agent minneapolis" woven in. Mobile-first (verified 1440 + 390px), no inline SVG, dark-band text + CTA hardened against the hosted.css global rules. Pending: human creates a /no-hate-pledge custom landing page and pastes it. | Custom landing page |
| **6** | Sell page rewrite (currently empty) | ⏳ Pending | Custom HTML blocks + content |
| **7** | First identity landing page (LGBTQ+ relocation as template) | ⏳ Pending | Custom landing page |
| **8** | SEO foundation: Areas pages + identity pages buildout + blog cadence | ⏳ Pending | Bulk content generation |

**Phase 8 is where Claude Code earns its keep.** Phases 2-7 are individually scoped (one block, one page at a time); Phase 8 is bulk production work — ~10 city pages, ~10-15 neighborhood pages, ~6 identity landing pages, plus an ongoing blog schedule.

When asked to work on a phase, update the status line in this file as part of the work.

---

## 6 · Folder structure

```
progressive-redesign/
├── CLAUDE.md                          ← This file. Read first, every session.
├── README.md                          ← Quick setup + workflow for the human
│
├── styles/
│   ├── global.css                     ← The live Lofty Custom Styles content (5K cap)
│   ├── global-full.css                ← The uncompacted version (for reference/rebuilds)
│   └── hosted.css                     ← The version served via jsDelivr if/when set up
│
├── pages/
│   ├── homepage/
│   │   ├── hero.html                  ← Custom HTML block: hero replacement (Phase 2)
│   │   ├── overrides.html             ← Custom HTML block: page-specific style overrides
│   │   └── trusted-experts.html       ← Custom HTML block: replacement for the 4-tile section
│   ├── team/
│   ├── buy/
│   ├── sell/
│   ├── mission/                       ← No Hate Pledge page (Phase 5)
│   ├── areas/                         ← One file per Twin Cities area (Phase 8)
│   │   ├── minneapolis.html
│   │   ├── edina.html
│   │   └── ...
│   ├── identity-landing/              ← LGBTQ+, Spanish-speaking, first-time buyer, etc.
│   └── blog/
│
├── content/
│   ├── founders/                      ← Source bios (long + web-length versions)
│   ├── blog-drafts/                   ← Drafted blog posts before they go into Lofty
│   └── seo/                           ← Meta tag tables, keyword research, SEO strategy doc
│
├── reference/
│   ├── assets/                        ← Headshots, logo, badge — extracted from team materials
│   ├── videos/                        ← The four welcome videos (or notes about them)
│   └── screenshots/                   ← Snapshots of the live site for "before" comparison
│
├── scripts/                           ← Bulk-generation helpers, character counters, etc.
│
└── deliverables-pending/              ← Anything ready for the human to paste into Lofty,
                                        but not yet pasted. Cleared as items go live.
```

When producing a deliverable, write it to its final folder *and* drop a copy in `deliverables-pending/` with a filename that makes the destination clear: e.g., `deliverables-pending/PASTE-INTO-Lofty-homepage-hero-block.html`.

---

## 7 · Standards for every deliverable

### Mobile-first — NON-NEGOTIABLE

**Most of this client's visitors are on mobile.** Every deliverable must be designed and verified at phone widths first, desktop second. Concretely:

- Build layouts that reflow to a single column on small screens; never rely on a desktop-only grid.
- Test mentally (and visually when possible) at **~390px** width, not just 1440px. Headlines must not overflow; tap targets ≥ 44px; full-width buttons on small screens are fine and preferred.
- Use fluid sizing (`clamp()`, `%`, `vw`) over fixed pixel widths. Avoid fixed heights that clip content when text wraps on narrow screens.
- Full-bleed sections that break out of Lofty's constrained block wrapper use `margin-left/right: calc(50% - 50vw)` on the section, with an inner `max-width` wrapper to keep content aligned — see `pages/homepage/hero.html` for the reference pattern.
- Never ship a block without confirming its mobile breakpoint. If a visual check isn't possible, state that explicitly in the deliverable's blockers.

### CSS

- **Always check character count** for anything destined for Lofty's global Custom Styles. Hard cap is 5,000. Use `wc -c styles/global.css` as a check.
- **Use the `--preg-` prefix** for any new variables to avoid colliding with Lofty's own (or use single-char variables for the 5K-capped file).
- **`!important` is required** on most selectors because we're overriding Lofty's own stylesheets which load after ours. This is not bad practice in this context — it's necessary.
- **Use attribute selectors generously:** `[class*="listing-card"]` catches Lofty's varying class naming (`listing-card`, `ListingCard`, `listing-card__inner`) without needing to know the exact name.

### Custom HTML blocks

- **Inline `<style>` tags are fine and preferred** — they're scoped to the page where the block lives, which means we can write expansive page-specific CSS without touching the global budget.
- **No external JS dependencies** unless explicitly necessary. Lofty pages have their own JS environment and we don't want conflicts.
- **Self-contained.** Each block file should render correctly if pasted into a blank Lofty Custom HTML block. Don't depend on other blocks being present on the page.
- **Comment the destination at the top.** Every block file starts with a comment block stating exactly which page it goes on and which existing block it replaces (if any).

### Content / copy

- **Founder bios** have two lengths: long (the original press-kit-style, kept for reference and email signatures) and web (max 150 words per founder, used on the Team page).
- **Roles are always "Co-Founder."** Never "Agent." When grabbing copy from the existing site, fix this everywhere it appears.
- **Pages must have SEO meta** drafted alongside the page: meta title (≤60 chars), meta description (140-160 chars), focus keyword, recommended URL slug. Write these in a comment block at the top of the page's HTML file.

### Image and media

- **Use the headshots in `reference/assets/headshot-*.jpg`** — those are the production photos cropped from the Team page screenshot. Do not generate new headshots.
- **The logo + badge** are in `reference/assets/badge.png` and `reference/assets/logo.png`. The badge (round Minnesota-shaped emblem) is the more flexible mark for use in headers.
- **The four welcome videos** (`reference/videos/Welcome_*.mp4`) are the team's strongest asset and are featured prominently on the homepage and Team page. They need to be hosted somewhere streamable — likely Vimeo or YouTube unlisted — before they can be embedded in Lofty. Note in any deliverable whether the video embed is real or a placeholder pending hosting.

---

## 8 · SEO foundation (cheat sheet)

The full SEO strategy lives at `content/seo/strategy.md`. The TL;DR for Claude Code:

- **Areas pages first** (Phase 8.A). Order: Minneapolis, St. Paul, Edina, Plymouth, Eden Prairie, Bloomington, Maple Grove, Wayzata, Hopkins, Hudson WI. Each is 600-1,200 words of original content. Then tier-two neighborhood pages within Minneapolis and St. Paul.
- **Identity landing pages second** (Phase 8.B). Each is 1,200-2,000 words. URLs:
  - `/lgbtq-realtor-twin-cities`
  - `/spanish-speaking-realtor`
  - `/first-time-home-buyer-twin-cities`
  - `/relocating-to-twin-cities`
  - `/no-hate-pledge`
  - `/mortgage-pre-approval-help`
- **Blog cadence:** 2-4 posts per month, three rotating types — Market Pulse (Joe/Jake), Neighborhood Deep-Dive (any founder), Process & Mission (each founder one per quarter).
- **Per-page SEO checklist** must be completed for every page: meta title, meta description, focus keyword, URL slug, alt text on images, internal links to 3+ other pages, at least 1 outbound authority link.

---

## 9 · How to work on a new task

When the human asks you to take on a new task:

1. **Identify which phase it belongs to** and check the current status table in section 5.
2. **Read any existing files in the relevant folder** before generating new content. Don't duplicate or contradict.
3. **For CSS work:** write to the appropriate `styles/` file, check character count, and produce a clean deliverable in `deliverables-pending/`.
4. **For page work:** write the HTML to its `pages/...` folder, with a header comment naming the destination Lofty page and any block it replaces.
5. **For content work:** write to `content/` first as a draft, and only generate the final HTML block once the copy is approved.
6. **Update this CLAUDE.md** when you complete a phase or change a meaningful constraint.
7. **Surface any blockers** at the end of the response — anything that needs a human action before the deliverable can go live (videos to host, plan upgrades to confirm, headshots to re-shoot, etc.).

---

## 10 · Out of scope for now

- **Migrating off Lofty.** The team is committed to Lofty for the foreseeable future. Do not propose Webflow/WordPress/custom-build migrations unless the human explicitly raises it.
- **Building a CRM or transaction management system.** Lofty handles this. Stay on the website.
- **Paid advertising.** This project is organic / SEO / brand. Paid is a separate workstream.
- **Generating new photography or video.** Use the assets we have. If we need more, the deliverable is a shot list for the team to capture, not AI-generated imagery.

---

## 11 · Working context

This file was created at the start of the project. The human partner you're working with is acting as the contact/intermediary with the founders — they have full authority to approve copy and design direction. The founders themselves see the work at major milestones (typically after each phase ships).

When in doubt, ask the human one focused clarifying question rather than guessing. The cost of clarifying is small; the cost of building the wrong thing is large because every deliverable has to be hand-pasted into Lofty.
