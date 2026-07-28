# Codebase Concerns

## 1) Top Risks (Prioritized)

| Severity | Concern | Evidence | Impact | Suggested action |
|---|---|---|---|---|
| Medium | The root spec expects markup that no longer exists | `src/app/app.component.spec.ts`, `src/app/app.component.html` | The component test suite is likely to fail or validate obsolete behavior | Align the spec with the current root composition when behavior changes are next made |
| Medium | Intended Yes/No handlers are not bound in the template | `src/app/home/yes-no-button/yes-no-button.component.ts`, `src/app/home/yes-no-button/yes-no-button.component.html` | Button clicks have no observable Angular behavior | [ASK USER] Define the expected Yes and No outcomes, then bind and test them |
| Medium | Build warnings show malformed CSS and style-budget overruns | `src/app/home/home.component.css`, `src/app/home/yes-no-button/yes-no-button.component.css`, `angular.json` | Style defects and growing UI code are not caught as build failures | Correct invalid CSS and decide whether to refactor or adjust a deliberate budget |
| Low | README reports Angular CLI 18.2.10 while the manifest uses Angular 20.2.x | `README.md`, `package.json` | Setup guidance is inaccurate | Update the README to match the installed toolchain |

## 2) Technical Debt

| Debt item | Why it exists | Where | Risk if ignored | Suggested fix |
|---|---|---|---|---|
| Unused router surface | Router provider and `RouterOutlet` import remain although the page is rendered directly and routes are empty | `src/app/app.config.ts`, `src/app/app.routes.ts`, `src/app/app.component.ts` | Future contributors may assume routing is functional | [ASK USER] Confirm planned routing; either add route/outlet usage or remove unused setup |
| Inline SVG and duplicated visual CSS | Button visuals are fully embedded in the template and CSS | `src/app/home/yes-no-button/yes-no-button.component.html`, `src/app/home/yes-no-button/yes-no-button.component.css` | UI maintenance and bundle/style-budget pressure grow | Extract/reuse assets only if the design expands |
| No lint command | No linter configuration or package script is present | `package.json`, repository root | Formatting and code-quality consistency rely on review/build only | [ASK USER] Decide whether linting should be added |

## 3) Security Concerns

| Risk | OWASP category | Evidence | Current mitigation | Gap |
|---|---|---|---|---|
| Mixed-content-capable external image URL | A02: Security Misconfiguration | `src/app/home/home.component.css` uses `http://static.indigoimages.ca/...` | None found | Use a local asset or an HTTPS source, subject to asset ownership/availability |
| No security policy or automated dependency/security configuration found | N/A | repository scan output, repository root | npm lockfile records dependency versions | No documented reporting process or automated scanning configuration |

## 4) Performance and Scaling Concerns

| Concern | Evidence | Current symptom | Scaling risk | Suggested improvement |
|---|---|---|---|---|
| Two component stylesheets exceed the 2 kB warning budget | Build output; `angular.json`; home/button CSS | `npm run build` emits warnings | Further visual changes may breach the 4 kB error budget | Refactor shared/decorative CSS or intentionally revise the budget |
| Continuously animated decorative elements | `src/app/home/home.component.html`, `src/app/home/home.component.css` | Multiple hearts animate indefinitely | Increased browser animation work on constrained devices | [TODO] Profile on supported target devices before changing behavior |

## 5) Fragile/High-Churn Areas

| Area | Why fragile | Churn signal | Safe change strategy |
|---|---|---|---|
| Home and button presentation | Dense CSS and inline SVG control the complete visual experience | Historical commits introduce the home page, buttons, heart effect, and wrapper color; no commits in the last 90 days were reported by the scan | Make focused template/style changes and build after each logical change |
| Build configuration | Angular 20 migration is the latest substantive application commit | `git log` shows `feat: migrate to angular 20` | Preserve configured targets and budgets; validate builds after dependency/config updates |

## 6) `[ASK USER]` Questions

1. [ASK USER] What should occur when a visitor selects Yes or No: visual feedback only, navigation, or a persisted/communicated response?
2. [ASK USER] Is routing planned for this application, or should the unused router configuration and import be removed?
3. [ASK USER] Which Node.js LTS version and deployment platform should contributors target?
4. [ASK USER] Should the project adopt linting and CI, and if so, which quality gates are required?

## 7) Evidence

- `README.md`
- `package.json`
- `angular.json`
- `src/app/app.component.spec.ts`
- `src/app/app.component.html`
- `src/app/home/home.component.css`
- `src/app/home/yes-no-button/yes-no-button.component.*`
- Repository scan output generated on 2026-07-28
