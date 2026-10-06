const BRIEF_PATHS = /^\/(auftragseingang|angular)\/?$/;
const CODE_PATTERN = /^[A-Za-z0-9_-]{1,32}$/;

let briefCode: string | null = null;

/**
 * Runs at startup, before any analytics: the code is removed from the address bar
 * so it never ends up in a page view, and it is kept in memory only.
 */
export function takeBriefCode(): void {
  const url = new URL(window.location.href);
  if (!BRIEF_PATHS.test(url.pathname) || !url.searchParams.has('k')) {
    return;
  }
  const code = url.searchParams.get('k') ?? '';
  briefCode = CODE_PATTERN.test(code) ? code : null;
  url.searchParams.delete('k');
  window.history.replaceState(
    window.history.state,
    '',
    url.pathname + url.search + url.hash,
  );
}

export function getBriefCode(): string | null {
  return briefCode;
}
