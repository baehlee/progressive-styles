#!/usr/bin/env bash
# check-css-budget.sh
# ────────────────────────────────────────────────────────────
# Verifies that styles/global.css fits within Lofty's 5,000-character
# Custom Styles limit. Run before pasting global.css into Lofty.
#
# Usage:  bash scripts/check-css-budget.sh
# ────────────────────────────────────────────────────────────

set -euo pipefail

FILE="${1:-styles/global.css}"
LIMIT=5000

if [[ ! -f "$FILE" ]]; then
  echo "❌  File not found: $FILE"
  exit 1
fi

CHARS=$(wc -c < "$FILE")
HEADROOM=$((LIMIT - CHARS))

echo "─────────────────────────────────────────────"
echo "  Lofty Custom Styles budget check"
echo "─────────────────────────────────────────────"
echo "  File:     $FILE"
echo "  Size:     $CHARS chars"
echo "  Limit:    $LIMIT chars"

if (( HEADROOM >= 0 )); then
  echo "  Status:   ✅  FITS (${HEADROOM} chars of headroom)"
  echo "─────────────────────────────────────────────"
  exit 0
else
  OVER=$((-HEADROOM))
  echo "  Status:   ❌  OVER BUDGET by ${OVER} chars"
  echo "─────────────────────────────────────────────"
  echo ""
  echo "  Tips to compact:"
  echo "  · Shorten CSS variable names (--preg-ink → --I)"
  echo "  · Remove comments"
  echo "  · Combine selectors with shared rules"
  echo "  · Move page-specific rules to a Custom HTML block"
  echo "  · Drop low-impact polish (grain texture, subtle hovers)"
  exit 1
fi
