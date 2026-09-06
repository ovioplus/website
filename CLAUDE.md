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
