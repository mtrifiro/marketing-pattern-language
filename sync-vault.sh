#!/usr/bin/env bash
# Sync publishable folders from the Obsidian vault into content/.
#
# The vault is the source of truth; content/ is a committed copy so that the
# GitHub Actions runner (which has no access to the vault) can build the site.
# Run this before every commit that should ship new writing.

set -euo pipefail

VAULT="${VAULT:-$HOME/Vaults/Marketing Pattern Language}"
DEST="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/content"

# Folders that go public. Everything else in the vault (_book, _retired,
# _explorations, _templates, _resources, _clippings) stays private.
PARTS=(
  "0 Frontmatter"
  "1 Market Structure"
  "2 GTM Systems"
  "3 Operations"
  "4 Craft"
)

if [[ ! -d "$VAULT" ]]; then
  echo "error: vault not found at '$VAULT'" >&2
  echo "hint: override with VAULT=/path/to/vault $0" >&2
  exit 1
fi

echo "syncing from: $VAULT"

for part in "${PARTS[@]}"; do
  if [[ ! -d "$VAULT/$part" ]]; then
    echo "warning: skipping missing folder '$part'" >&2
    continue
  fi
  # --delete so notes removed or renamed in the vault disappear from the site.
  rsync -a --delete \
    --exclude '.DS_Store' \
    --exclude '*.base' \
    --exclude '.obsidian' \
    "$VAULT/$part/" "$DEST/$part/"
  printf '  %-22s %s notes\n' "$part" "$(find "$DEST/$part" -name '*.md' | wc -l | tr -d ' ')"
done

# Drop any part folder that is no longer in PARTS (e.g. after a rename),
# without touching index.md or anything Quartz owns.
while IFS= read -r existing; do
  name="$(basename "$existing")"
  keep=false
  for part in "${PARTS[@]}"; do
    [[ "$name" == "$part" ]] && keep=true && break
  done
  if [[ "$keep" == false ]]; then
    echo "  removing stale folder: $name"
    rm -rf "$existing"
  fi
done < <(find "$DEST" -mindepth 1 -maxdepth 1 -type d)

echo "total: $(find "$DEST" -name '*.md' | wc -l | tr -d ' ') notes in content/"
