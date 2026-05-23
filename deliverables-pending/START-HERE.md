# START HERE — Progressive Real Estate, status & to-do

_Last updated: 2026-05-22. This is the master catalog of what's built and the
ordered checklist of what YOU need to do in Lofty. Future Claude Code sessions:
read this + `notes-local.md` + `CLAUDE.md` first._

Everything is built, committed, and pushed to `github.com/baehlee/progressive-styles`.
Nothing deploys automatically — each item is a **hand-paste into Lofty**. The
paste-ready files are in this `deliverables-pending/` folder.

---

## 0 · Global CSS — already current, no action

Your Lofty Scripts snippet is pinned to commit `cc27306` and is **up to date** —
`hosted.css` hasn't changed since (later commits only added page blocks, not CSS).
This snippet already includes: the brand foundation, the sitewide stock-module
legibility fixes (§21), and the footer fix (§14). **Nothing to do here** unless a
future CSS change ships a new SHA.

Current snippet (for reference):
```js
Util.addStyle('https://cdn.jsdelivr.net/gh/baehlee/progressive-styles@cc27306239f982090b2a47e55276c731f390b4ca/styles/hosted.css');
```

---

## 1 · Status of every page

| Page | Built? | In Lofty? | What to do |
|---|---|---|---|
| Global CSS (hosted.css) | ✅ | ✅ live (`cc27306`) | Nothing |
| Homepage hero | ✅ | ✅ live | Nothing |
| Homepage "Work With Us" | ✅ | ✅ live | Nothing |
| Homepage "Trusted Experts" | ✅ | ❓ verify | Paste if not already (see §2) |
| Homepage overrides block | ✅ | — | **Skip** — superseded by hosted.css §21 |
| Team page | ✅ | ✅ live | Nothing |
| No Hate Pledge | ✅ | ✅ live | Nothing |
| Sell page | ✅ | ❓ verify | Confirm it's live; paste + hide stock if not |
| LGBTQ+ realtor page | ✅ | ❌ pending | **Paste** (§3) |
| Spanish-speaking realtor | ✅ | ❌ pending | **Paste** (§3) |
| First-time buyer | ✅ | ❌ pending | **Paste** (§3) |
| Relocating to Twin Cities | ✅ | ❌ pending | **Paste** (§3) |
| Mortgage pre-approval | ✅ | ❌ pending | **Paste** (§3) |
| 10 Areas pages | ✅ | ❌ pending | **Create in Areas tool + paste** (§4) |
| SEO meta — all pages | ✅ sheet ready | ❌ pending | **Enter in SEO panels** (§5) |
| Blog | ❌ not built | — | Next build task (not your job to paste yet) |

> You told me you haven't done the new pastes/SEO/identity pages — so focus on
> §3, §4, §5 below. §2 is just a quick verification.

---

## 2 · Quick verify (2 minutes)

Open the live site and confirm these already look right (they should):
- **Homepage** "Trusted Experts" band — branded cream tiles ("Veteran guidance,
  minus the pressure" + 4 tiles). If it still looks like the old stock band, paste
  `PASTE-INTO-Lofty-homepage-trusted-experts-block.html` and hide the stock one.
- **Sell page** — should show "Know what it's worth. Get every dollar." If it still
  shows the old stock "Sell My Home" banner, paste `PASTE-INTO-Lofty-sell-page-block.html`
  and hide the stock `md-sell-banner` + `md-sell-process` modules.

---

## 3 · Paste the 5 identity landing pages (highest SEO value)

For EACH: Lofty → create a **new Custom Landing Page** → set its URL slug (below) →
add ONE Custom HTML / Code block → paste the file → then set its SEO from the sheet
(§5) → add to nav/footer links if you want.

| Slug | File |
|---|---|
| `/lgbtq-realtor-twin-cities` | `PASTE-INTO-Lofty-lgbtq-realtor-page.html` |
| `/spanish-speaking-realtor` | `PASTE-INTO-Lofty-spanish-speaking-realtor.html` |
| `/first-time-home-buyer-twin-cities` | `PASTE-INTO-Lofty-first-time-home-buyer-twin-cities.html` |
| `/relocating-to-twin-cities` | `PASTE-INTO-Lofty-relocating-to-twin-cities.html` |
| `/mortgage-pre-approval-help` | `PASTE-INTO-Lofty-mortgage-pre-approval-help.html` |

Each has a founder welcome-video that plays in a lightbox (no upload needed — the
videos and headshots load from the CDN). These are the pages that rank because the
competition is thin, so they're worth doing first.

---

## 4 · Create the 10 Areas pages

Areas pages are different — use **Lofty CMS → Areas**:
1. Add the area (e.g. "Minneapolis, MN"). Lofty auto-creates the page, its URL, the
   **live MLS listings module**, and the **market-data widget** (median price, days
   on market, etc. — that's why our blocks have NO prices; let the widget handle them).
2. Add a Custom HTML block in the area's content section and paste the matching file.
3. Set the area's SEO from the sheet (§5).

Build in this order (biggest SEO lever first):

| Order | Area | File |
|---|---|---|
| 1 | Minneapolis | `PASTE-INTO-Lofty-area-minneapolis.html` |
| 2 | St. Paul | `PASTE-INTO-Lofty-area-st-paul.html` |
| 3 | Edina | `PASTE-INTO-Lofty-area-edina.html` |
| 4 | Plymouth | `PASTE-INTO-Lofty-area-plymouth.html` |
| 5 | Eden Prairie | `PASTE-INTO-Lofty-area-eden-prairie.html` |
| 6 | Bloomington | `PASTE-INTO-Lofty-area-bloomington.html` |
| 7 | Maple Grove | `PASTE-INTO-Lofty-area-maple-grove.html` |
| 8 | Wayzata | `PASTE-INTO-Lofty-area-wayzata.html` |
| 9 | Hopkins | `PASTE-INTO-Lofty-area-hopkins.html` |
| 10 | Hudson, WI | `PASTE-INTO-Lofty-area-hudson-wi.html` |

---

## 5 · Enter SEO meta for every page

Open `SEO-META-SHEET-all-pages.md` (in this folder) and work down it. For each page,
enter the Meta title, Meta description, Focus keyword, and confirm the slug in Lofty's
per-page SEO panel. It also covers the **stock pages** that currently show Lofty's
default title (`/about`, `/listing`, `/evaluation`, `/snapshot`, etc.) and a one-time
**site-wide SEO Setup checklist** (favicon, social image, Google Search Console,
sitemap, robots.txt, Google Business Profile).

Tip: set each landing/area page's SEO right after you paste it (§3, §4) so you don't
have to revisit — then do the stock pages + the site-wide checklist as a final sweep.

---

## 6 · Suggested order for your next Lofty session

1. **Verify** Trusted Experts + Sell are live (§2).
2. **Paste the 5 identity pages** (§3), setting SEO for each as you go.
3. **Build the 10 Areas pages** in the Areas tool (§4), setting SEO for each.
4. **Final SEO sweep**: stock pages + the site-wide checklist (§5).
5. Tell the next Claude session you're ready for the **blog** (the last build task).

---

## 7 · What was built today (catalog of commits)

All on `main`, pushed:

| Commit | What |
|---|---|
| `885f3ec` | Phase 3: homepage Trusted Experts + Work With Us rewrites |
| `a95e222` | Homepage legibility pass (real `md-*` selectors) |
| `abdea68` | Sitewide stock-module legibility (hosted.css §21) + fixed Work With Us heading |
| `c78844d` | Phase 4: Team page rebuild (founder rows + welcome videos) |
| `cc27306` | Footer legibility fix (hosted.css §14) + Phase 5 No Hate Pledge page |
| `e46f970` | Phase 6: Sell page rewrite |
| `99b8792` | Phase 7: LGBTQ+ identity page (template for the rest) |
| `595de97` | Phase 8: Areas — Minneapolis template + St. Paul + Edina |
| `0e290f2` | Phase 8: remaining 7 tier-one Areas pages |
| `c901e9d` | Phase 8: 4 remaining identity pages (Spanish, first-time, relocating, mortgage) |
| `6ef259a` | Phase 8: SEO meta master sheet for all pages |

**Net result:** Phases 1–7 complete; Phase 8 nearly complete (all Areas + identity
pages + the SEO sheet built; only the blog remains to build). All design work is
hardened against Lofty's quirks (the global CSS heading/button traps, no inline SVG,
mobile-first, full-bleed) and verified at desktop + mobile.
