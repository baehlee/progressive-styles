# Progressive Real Estate Group — Redesign Project

This is the working repository for the redesign of [progressiverealestategroup.com](https://progressiverealestategroup.com).

## What this repo is

A collection of CSS files, HTML blocks, page templates, content drafts, and reference assets — all of which ultimately get pasted into the Lofty CMS by hand. **The repo is the source of truth; the live site is the deployed copy.** Always make changes here first, commit, then paste into Lofty.

## How to use it

### If you're working in the Claude.ai chat interface

Use the chat to generate or revise individual files. Save them into the appropriate folder in this repo, commit the change, and paste the relevant file into Lofty. Workflow stays simple.

### If you're using Claude Code (recommended once Phase 7+ starts)

1. **Install Claude Code:** [claude.com/claude-code](https://claude.com/claude-code) — follow the install instructions for your OS.
2. **Open a terminal in this folder:** `cd progressive-redesign`
3. **Start Claude Code:** `claude`
4. **Claude Code automatically reads `CLAUDE.md`** at session start. You don't need to explain the project — it already knows the platform, the constraints, the design system, the founders, and the phase status.
5. **Ask for what you need.** Examples that work well:
   - "Generate the Edina area page for Phase 8."
   - "Add the homepage hero block — Phase 2."
   - "Check the global CSS character count and tell me where I can save bytes."
   - "Draft three blog posts for the next month, one of each type."

Claude Code can read every file in the repo, write new files, commit to git, and run scripts. It cannot push anything to Lofty — that step is always you, manually pasting.

## Folder structure (the short version)

```
CLAUDE.md            ← The project bible. Read by Claude Code automatically.
README.md            ← This file.

styles/              ← All CSS. global.css is the live Lofty Custom Styles.
pages/               ← One folder per Lofty page or page type.
content/             ← Source content: bios, blog drafts, SEO research.
reference/           ← Assets, headshots, screenshots, team materials.
scripts/             ← Helper scripts (character count, etc.)
deliverables-pending/ ← Ready-to-paste files. Clear as items go live in Lofty.
```

Full structure and conventions are documented in `CLAUDE.md` section 6.

## Git + jsDelivr to escape Lofty's 5K CSS limit — ✅ SET UP

Lofty's Custom Styles field is capped at 5,000 characters. We bypass this by hosting the CSS in a GitHub repo and serving it via jsDelivr's free CDN, loaded from Lofty by a one-line script.

**Status:** Done. The repo is live and public at **https://github.com/baehlee/progressive-styles** (main branch). `styles/hosted.css` is the served file (it mirrors `global-full.css`, the uncompacted version, since the CDN isn't subject to the 5K cap).

**Paste this into Lofty → CMS → Settings → Tools → Scripts:**

```javascript
Util.addStyle('https://cdn.jsdelivr.net/gh/baehlee/progressive-styles@main/styles/hosted.css?v=1');
```

**To update the live site's global styles:** edit `styles/hosted.css`, commit, and push to `main`. jsDelivr serves the change globally within ~10 minutes.

**Important:** jsDelivr aggressively caches. If you push a CSS change and don't see it live within ~15 minutes, bump the version string in the Lofty script (`?v=1` → `?v=2`, etc.) — that forces a fresh fetch.

## Workflow for each phase

1. Pull the latest changes (`git pull`).
2. Work on the phase deliverable (in Claude Code or chat).
3. Save the deliverable to its folder. Drop a copy in `deliverables-pending/` with a clear filename.
4. Commit + push.
5. Open Lofty, paste the deliverable into the right place.
6. Preview, screenshot, publish.
7. Move the file out of `deliverables-pending/`. Commit.
8. Update `CLAUDE.md` section 5 phase status.

## What's NOT in this repo

- **Lofty backend access** — that's behind the team's login, not in here.
- **The MLS feed** — Lofty pulls this automatically, we don't touch it.
- **Live analytics or GSC data** — Google Search Console connects directly to Lofty's analytics tab.
- **The team's CRM data** — also in Lofty.
- **Brokerage compliance documents** — managed through RE/MAX Results, not us.

## Questions or stuck

Read `CLAUDE.md` first — most answers are there. If still stuck, the project context lives in the original Claude.ai chat thread.
