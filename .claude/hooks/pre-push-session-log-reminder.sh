#!/bin/sh
# Reminder-only pre-push hook. Never blocks the push.
#
# Nudges when this push carries real changes but CLAUDE.md's Session Log
# wasn't touched — the log is how project history survives a deleted chat
# session, so it's easy to forget to update on a quick session.

if git rev-parse --verify "@{push}" >/dev/null 2>&1; then
  range="@{push}..HEAD"
elif git rev-parse --verify "origin/main" >/dev/null 2>&1; then
  range="origin/main..HEAD"
else
  exit 0
fi

changed=$(git diff --name-only "$range" 2>/dev/null)
[ -z "$changed" ] && exit 0

if ! printf '%s\n' "$changed" | grep -qx 'CLAUDE.md'; then
  cat <<'EOF'

Reminder: this push doesn't touch CLAUDE.md.
If this session shipped or decided something non-trivial, add a dated
entry to CLAUDE.md's Session Log first -- it's what keeps the next
session (or a replacement for this one) from losing this context.

EOF
fi

exit 0
