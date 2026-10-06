#!/usr/bin/env bash
# Veröffentlicht den aktuellen Stand als Snapshot-Commit im öffentlichen Repo, ohne die private Historie.
# Aufruf: scripts/publish-public.sh [--check]   (--check: nur zeigen, was sich ändern würde)
set -euo pipefail

PUBLIC_REMOTE="git@github.com:tvollstaedt/vollstaedt-it.git"
# Deploy-Interna, fremde Firmenlogos, Zertifikate mit Nummern
EXCLUDE=(.gitlab-ci.yml deploy.js public/images/clients public/certs scripts/public)

ROOT="$(git rev-parse --show-toplevel)"
TARGET="$ROOT/work/public-repo"
CHECK_ONLY=false
[[ "${1:-}" == "--check" ]] && CHECK_ONLY=true

if [[ -n "$(git -C "$ROOT" status --porcelain)" ]]; then
  echo "Arbeitsstand nicht sauber, bitte erst committen." >&2
  exit 1
fi

if [[ ! -d "$TARGET/.git" ]]; then
  git clone -q "$PUBLIC_REMOTE" "$TARGET"
elif git -C "$TARGET" rev-parse -q --verify HEAD >/dev/null; then
  git -C "$TARGET" pull -q --ff-only
fi

STAGE="$(mktemp -d)"
trap 'rm -rf "$STAGE"' EXIT
git -C "$ROOT" archive HEAD | tar -x -C "$STAGE"
for path in "${EXCLUDE[@]}"; do
  rm -rf "${STAGE:?}/$path"
done
cp "$ROOT/scripts/public/README.md" "$STAGE/README.md"
cp "$ROOT/scripts/public/LICENSE" "$STAGE/LICENSE"

rsync -a --delete --exclude .git "$STAGE/" "$TARGET/"
git -C "$TARGET" add -A

if git -C "$TARGET" diff --cached --quiet; then
  echo "Keine Änderungen gegenüber dem letzten Snapshot."
  exit 0
fi

git -C "$TARGET" diff --cached --name-status
git -C "$TARGET" diff --cached --shortstat

if $CHECK_ONLY; then
  git -C "$TARGET" reset -q
  echo "Nur geprüft, nichts committet."
  exit 0
fi

read -r -p "Als Snapshot veröffentlichen? [y/N] " answer
if [[ "$answer" != "y" ]]; then
  git -C "$TARGET" reset -q
  echo "Abgebrochen, nichts gepusht."
  exit 1
fi

git -C "$TARGET" commit -q -m "Snapshot $(date +%F)"
git -C "$TARGET" push -q origin HEAD:main
echo "Veröffentlicht: $(git -C "$TARGET" rev-parse --short HEAD)"
