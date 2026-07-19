# AIMate Branding Design

## Goal

Rebrand the deployed website as `AIMate`. No user-facing page, email, browser
title, onboarding copy, download filename, or navigation link may display the
upstream project name.

## Scope

- Use `AIMate` as the default and configured site name.
- Replace user-facing Chinese and English upstream-brand copy with `AIMate`.
- Replace the browser title, login fallback, setup wizard title, onboarding
  content, email fallback, and user-facing configuration examples.
- Remove upstream GitHub, version-check, sponsor, and promotional links from the
  website. Keep legal/compliance document access functional through local pages
  or neutral labels.
- Add an AIMate wordmark/logo and favicon suitable for light and dark UI.
- Rename generated user-visible export filenames to `aimate-*`.

## Compatibility Boundary

The following values remain unchanged because they are implementation or wire
contracts rather than branding:

- database and Docker service names;
- Redis/local-storage keys;
- API object names and WebSocket subprotocols;
- `sub2api-data` and `sub2api-bundle` import/export format identifiers;
- upstream repository references in source documentation and license records.

These values must not be rendered as product branding in the deployed UI.

## Delivery

Use a custom image built from this fork. The production compose file will pin
that image by immutable version or digest. Existing PostgreSQL, Redis, account
credentials, Nginx, TLS, and the unrelated `steam-auth.lightslice.cn` site are
preserved.

## Verification

- Frontend tests and production build pass.
- Built frontend assets contain no visible upstream-brand copy, excluding
  explicitly allowlisted protocol/storage identifiers.
- Login, dashboard, administration, account import, API-key usage help, and
  legal pages display AIMate on desktop and mobile.
- `https://ai.toolmate.cn/` and `/health` return 200 after deployment.
- Existing API key requests continue to route successfully.
