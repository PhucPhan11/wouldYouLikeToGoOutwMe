# External Integrations

## 1) Integration Inventory

| System | Type | Purpose | Auth model | Criticality | Evidence |
|---|---|---|---|---|---|
| Angular runtime/build tooling | Client framework and build toolchain | Renders and bundles the browser application | N/A | High | `package.json`, `angular.json` |
| `static.indigoimages.ca` | Public image URL | Source for the `.altheart` CSS background image | No application auth visible | Low | `src/app/home/home.component.css` |

No backend API clients, databases, queues, authentication providers, monitoring services, or analytics integrations were found in tracked application source.

## 2) Data Stores

| Store | Role | Access layer | Key risk | Evidence |
|---|---|---|---|---|
| None found | N/A | N/A | [TODO] Confirm whether any server-side system is intentionally outside this repository | `src/`, `package.json` |

## 3) Secrets and Credentials Handling

- Credential sources: none found; no `.env` template or environment reads exist.
- Hardcoding checks: no credentials were found in tracked source. The external image uses an HTTP URL embedded in CSS.
- Rotation or lifecycle notes: [TODO] No credential lifecycle documentation exists.

## 4) Reliability and Failure Behavior

- Retry/backoff behavior: none found.
- Timeout policy: none found.
- Circuit-breaker or fallback behavior: none found. The external CSS image has no application-level fallback.

## 5) Observability for Integrations

- Logging around external calls: none; no application HTTP/API call exists.
- Metrics/tracing coverage: none found.
- Missing visibility gaps: failures loading the HTTP image are not observable through application code.

## 6) Evidence

- `src/app/home/home.component.css`
- `package.json`
- `angular.json`
