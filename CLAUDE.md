# OvioPlus Website — read this first, every session

This file exists because a prior chat session's history got deleted and its
context went with it. It's auto-loaded at the start of every Claude Code
session in this repo — treat it (and the Session Log at the bottom) as the
thing that survives a deleted session, and keep it that way.

## What this is

The marketing site for OvioPlus (`ovioplus.ai`), an AI receptionist SaaS for
restaurants. Next.js 15 + TypeScript + Tailwind, see `README.md` for the
stack/architecture summary (still accurate, no need to duplicate it here).

The **actual product is a sibling repo**, `ovioplus-platform` (GitHub
`ovioplus/ovioplus-platform`, local path `../ovioplus-platform`) — that repo
has `PLAN.md` (architecture) and `ROADMAP.md` (feature status) as its living
docs. **Pricing and plan copy in this repo must stay in sync with
`ovioplus-platform/src/features/billing/plans.ts`** — that file is the
enforced source of truth; this repo's `lib/constants.ts` `PRICING` array is a
copy of it for display and can drift (see Known loose ends).

## Standing rule: don't let history evaporate again

At the end of any session where you shipped, changed, or decided something
non-trivial:

1. Append a dated entry to the **Session Log** below — a few lines: what
   changed, **why** (commit messages already say *what*), what's still open,
   and any judgment call you made and the reasoning behind it.
2. If a change here has a counterpart in `ovioplus-platform` (pricing,
   feature claims, CTAs pointing at app routes), note whether the other repo
   was checked/updated to match, or flag that it still needs to be.
3. If you're leaving something mid-flight, say so explicitly — don't make
   the next session rediscover it by re-reading `git log`.

Do this even if the user didn't ask. It's a couple of minutes now; it's a
full re-audit later.

There's also a `git push` reminder: `.claude/hooks/pre-push-session-log-reminder.sh`
(tracked in this repo) prints a warning if the push carries real changes but
`CLAUDE.md` wasn't touched. It never blocks the push — it's a backstop, not a
gate. `.git/hooks/pre-push` is a thin wrapper that execs the tracked script;
`.git/hooks` itself isn't versioned, so after a fresh clone re-create that
wrapper once:
```
printf '#!/bin/sh\nexec "$(git rev-parse --show-toplevel)/.claude/hooks/pre-push-session-log-reminder.sh" "$@"\n' > .git/hooks/pre-push
chmod +x .git/hooks/pre-push
```

## Known loose ends (as of 2026-09-02 audit — verify still true before relying on this)

- **Commit `4d725eb`** ("update payment info") doesn't touch payment info —
  it strips every em-dash (—) from site copy sitewide, including page titles
  and meta descriptions (e.g. `app/layout.tsx`'s OG/Twitter titles and
  descriptions lost their punctuation). Almost certainly an accidental
  global find-replace. Flagged as a separate fix task; check it landed
  before assuming current copy is clean.
- **Voice-minute mismatch**: `lib/constants.ts`'s `PRICING` says Pro = 300
  voice minutes, Scale = 1,500 — but `ovioplus-platform`'s enforced
  `plans.ts` grants only 200 / 500. The platform's numbers are
  cost-grounded (PR #14 there) and are almost certainly the correct ones;
  this repo's copy is stale. Flagged separately, verify it's been
  reconciled before trusting the pricing page.
- **Yearly billing toggle** (commit `8f61d68`, `Pricing.tsx`) is live on this
  site, but the platform-side yearly-Stripe-price + promo-code backend sits
  on an **unmerged** branch (`origin/advanced-pricing-yearly-promo` in
  `ovioplus-platform`, no PR). Right now the toggle is cosmetic-only.

## Session Log

<!-- Newest entry first. One entry per session that changed non-trivial state or made a decision worth remembering. Keep entries short. -->

### 2026-09-22 (later) — /trust page, EN + IT (PR #4)

A public AI Trust & Compliance page, since restaurants doing vendor diligence
ask "are you compliant?" and there was nowhere to send them. Ayoub drafted the
copy; it was already in the right hedged register ("we continuously review"),
claiming no certification we don't hold, so it survived mostly intact.

**The page asserts things that are not yet true in production.** It says guests
are told they're speaking with an AI (true only once `ovioplus-platform` PR #21
deploys) and that transcripts are deleted after 90 days (true only once PR #22
merges *and* `RETENTION_ENABLED=true`, since #22 ships inert on purpose). A
compliance page that overstates is worse than no compliance page, so **check
both before this goes live**, and re-check whenever the retention numbers move.
They appear in three places now: the platform's `retention.ts`, the privacy
policy in `lib/i18n/legal.ts`, and this page's `specifics` list in
`translations.ts`.

Beyond the draft I added a "what that means in practice" section with checkable
specifics plus direct links into Privacy, DPA and Cookies. Abstract trust
language gets discounted by procurement reviewers; handing over the documents
doesn't.

Incidental fix: the root layout applies a `%s | OvioPlus` title template and all
five legal pages set titles already ending in "| OvioPlus", so each rendered
"Privacy Policy | OvioPlus | OvioPlus" in tabs and search results. Fixed.

Left alone deliberately: `app/layout.tsx` defaults to "OvioPlus: AI Receptionist
| Never Miss a Bookings". The grammar is wrong, but the homepage title is an SEO
decision for Ayoub, not a silent fix.

### 2026-09-22 — Legal docs rewritten to match the product (PR #3)

A cold compliance-sales email (NORMQ) claimed to have "reviewed" the AI
touchpoints and quoted the AI Act's €35M/7% tier at us. That tier is for
prohibited practices under Art. 5, not transparency; Art. 50 sits at €15M/3%,
and Art. 99(6) caps SME fines at whichever of the percentage or the sum is
**lower**, which for us means 3% of turnover, not millions. The email contained
no actual finding, just our own marketing copy played back, and it switched to
Spanish for exactly the paragraph about fines. Template blast. **Don't pay it,
don't reply.**

They were still right by accident, and the audit it prompted found worse things
than the one they guessed at. The legal docs here were a competent *generic*
SaaS set that described a different product: `allerg` 0 hits, `OpenAI` 0,
`health` 0, `Article 9` 0. This PR adds the sub-processor list (Art. 28(2)
requires disclosure and a right to object, and we named none of the seven),
the Art. 9 health-data basis for allergy info, and retention periods that match
what the platform now actually enforces.

**Two things only Ayoub can answer**, both flagged in the PR: the docs say
`contact@ovioplus.com` and name `ovioplus.com` as the platform domain, while
CLAUDE.md and the app use `ovioplus.ai`; and the DPA identifies the controller
as just "OvioPlus" with no legal entity, registered address or VAT number. I
deliberately did not guess at either.

Not lawyer-reviewed. IT stays authoritative, EN is the translation.
Counterparts in `ovioplus-platform`: PR #21 (disclosure) and #22 (retention).

### 2026-09-05 — CI added, ESLint set up for the first time, dead copy removed

Added GitHub Actions CI (typecheck · lint · build on every push and PR).
It failed on its first run and was immediately worth it: this repo had a
`lint` script but **no ESLint config**, so `next lint` fell through to its
interactive setup wizard — passes locally by opening a prompt, fails in CI.
Nothing here had ever been linted. Added a flat config mirroring the
platform's, moved off the deprecated `next lint` to the ESLint CLI, and fixed
all 8 errors + 4 warnings. Two mattered: `Logo.tsx` called `useId()` after two
early returns (a conditional hook — real Rules-of-Hooks violation), and six
internal `<a href="/">` links were forcing full page reloads instead of
client-side navigation.

Also deleted ~130 lines of dead copy from `lib/constants.ts` — only `SITE` was
ever imported. The orphaned `PRICING` array still advertised 300/1,500 voice
minutes against the enforced 200/500, and it fooled me into flagging a
customer-facing pricing bug that never existed (the live page renders from
`translations.ts`, which was correct). **The loose end about a voice-minute
mismatch, below, is therefore resolved — it was never real.** Added a bare
`.env` to gitignore, which only covered `.env*.local`.

Earlier the same day: re-punctuated the copy broken by the em-dash-stripping
commit (`4d725eb`) without reintroducing em-dashes — the user finds them
AI-flavoured, so each spot got whatever punctuation fit (colon, comma, period,
semicolon), and `|` for bare page-title/brand pairs.

### 2026-09-02 — Audit + history-tracking setup

Prior Claude Code session(s)' chat history was deleted; user asked for an
audit of both repos plus a mechanism so this doesn't cost context again.
This repo (marketing site) is in good shape — SEO-polished, cookie-gated
GA4, pricing wired to the app's sign-up flow — but found and separately
flagged two concrete regressions/mismatches (see Known loose ends above):
the em-dash-stripping commit, and a voice-minutes number that no longer
matches what the platform repo actually enforces. Added this `CLAUDE.md` +
the Session Log convention; mirrored the same convention into
`ovioplus-platform/CLAUDE.md`.
