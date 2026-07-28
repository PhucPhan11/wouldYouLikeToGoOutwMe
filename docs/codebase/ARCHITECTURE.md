# Architecture

## 1) Architectural Style

- Primary style: standalone Angular component tree for a static, browser-rendered UI.
- Why this classification: `main.ts` bootstraps one root component; the root directly composes `HomeComponent`, which composes `YesNoButtonComponent`. No service, data-access, domain-model, backend, worker, or integration module exists in tracked source.
- Primary constraints:
  - The current application renders the page directly; `routes` is an empty array.
  - All interaction and presentation state is local to components; no persistence or shared state exists.
  - Assets are bundled from `public/`, and component styles are subject to Angular production style budgets.

## 2) System Flow

```text
Browser -> src/main.ts -> AppComponent -> HomeComponent -> YesNoButtonComponent -> rendered DOM/CSS/SVG
```

1. The browser loads `src/index.html`, whose body hosts `<app-root>`.
2. `src/main.ts` bootstraps `AppComponent` with `appConfig`.
3. `appConfig` installs Zone event coalescing and the Angular router provider; `app.routes.ts` currently supplies no routes.
4. `AppComponent` directly renders `<app-home>`.
5. `HomeComponent` renders the invitation, animated heart markup, and `<app-yes-no-button>`.
6. `YesNoButtonComponent` renders the two styled buttons and inline SVG decorations. Its TypeScript includes logging methods, but the template does not bind click events to them.

## 3) Layer/Module Responsibilities

| Layer or module | Owns | Must not own | Evidence |
|---|---|---|---|
| Bootstrap | Start the standalone Angular application and surface bootstrap errors to the browser console | Page presentation | `src/main.ts` |
| App configuration | Global Zone and router providers | Feature UI state | `src/app/app.config.ts` |
| Root composition | Root selector and immediate page composition | Routing behavior, because its template does not contain a router outlet | `src/app/app.component.ts`, `src/app/app.component.html` |
| Home UI | Invitation content, background animation, and button-child placement | Data access or persistence | `src/app/home/home.component.*` |
| Button UI | Button visual treatment and local handler methods | Cross-component state or business workflow | `src/app/home/yes-no-button/yes-no-button.component.*` |

## 4) Reused Patterns

| Pattern | Where found | Why it exists |
|---|---|---|
| Standalone components | All three component classes | Components declare their own dependency imports rather than using an NgModule | `src/app/app.component.ts`, `src/app/home/home.component.ts`, `src/app/home/yes-no-button/yes-no-button.component.ts` |
| Co-located component assets | Each component directory | Template, styles, and spec share a component basename | `src/app/home/yes-no-button/` |
| CSS/SVG-driven decoration | Home and button templates/styles | The visual experience is implemented locally without a third-party UI library | `src/app/home/home.component.html`, `src/app/home/yes-no-button/yes-no-button.component.html` |

## 5) Domain, Data, and Infrastructure Boundaries

- Main business domain: a single date-invitation presentation. The only observable actions are Yes/No button methods that log messages.
- Public API: the Angular component selectors `app-root`, `app-home`, and `app-yes-no-button`; there is no HTTP API, public library API, or route endpoint.
- Domain models: none found.
- Persistence layer: none found.
- Messaging/background processing: none found.
- Infrastructure layer: Angular browser bootstrap, builder, and static-asset pipeline only.
- Shared libraries/utilities: none beyond Angular/RxJS packages; no application-level utility module was found.

## 6) Configuration Strategy

Build and runtime wiring is declarative in `angular.json`, while TypeScript and Angular compiler strictness is in `tsconfig.json`. `app.config.ts` is the application-provider composition point. No environment configuration, deployment configuration, or CI pipeline is present.

## 7) Known Architectural Risks

- The router is configured and `RouterOutlet` is imported, but no routes or outlet are used; it adds unused framework surface and may confuse future routing work.
- The visual layer combines substantial inline SVG and CSS in two components, with both stylesheets already over the configured warning budget. This makes UI changes less localized and creates build warnings.

## 8) Evidence

- `src/index.html`
- `src/main.ts`
- `src/app/app.config.ts`
- `src/app/app.component.ts`
- `src/app/home/home.component.ts`
- `src/app/home/yes-no-button/yes-no-button.component.ts`
- `angular.json`
