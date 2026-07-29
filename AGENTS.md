# Repository Guide

## Overview

This repository is a browser-only Angular 20 date-invitation application. It has no backend, API client, persistence layer, authentication, environment configuration, telemetry, or external service integration in tracked source.

The application presents a small routed flow:

```text
/ -> /success -> /date-selection -> /confirmation
```

## Architecture and Structure

```text
src/
  main.ts                         # Bootstraps AppComponent with appConfig.
  styles.css                      # Global theme tokens, shared UI classes, and heart animation.
  app/
    app.config.ts                 # Zone change detection and router providers.
    app.routes.ts                 # Four application routes.
    app.component.*               # Root shell: background plus RouterOutlet.
    shared/
      romantic-background/        # Shared, route-wide floating-heart background.
    home/                         # Landing invitation and Yes/No interaction.
      yes-no-button/              # Reusable interactive Yes/No button pair.
    success/                      # Success page and date-picker navigation.
    date-selection/               # Date, time, and activity selection page.
    confirmation/                 # Query-parameter-backed confirmation page.
public/
  heart.png                       # Static favicon asset.
```

`main.ts` bootstraps `AppComponent`. `AppComponent` renders `RomanticBackgroundComponent` and `RouterOutlet`, so the floating-heart background appears on every route. The feature components are standalone; each declares its own Angular imports in `@Component`.

## Routing and State Flow

`src/app/app.routes.ts` defines the current routes:

| Path | Component | Role |
|---|---|---|
| `` | `HomeComponent` | Landing invitation |
| `success` | `SuccessComponent` | Positive-response page |
| `date-selection` | `DateSelectionComponent` | Date-plan picker |
| `confirmation` | `ConfirmationComponent` | Chosen-plan summary |

- `YesNoButtonComponent` injects `Router`; Yes navigates to `/success`. No advances a local label/scale sequence, then navigates to `/success` after the final label.
- `SuccessComponent` injects `Router` and navigates to `/date-selection`.
- `DateSelectionComponent` owns its selected date, time, and activity locally. Its confirm action navigates to `/confirmation` with `date`, `time`, and `activity` query parameters.
- `ConfirmationComponent` reads those values once from `ActivatedRoute.snapshot.queryParamMap` and derives its display summary.

There is no shared state service, store, persistence, resolver, guard, or API call. Preserve the query-parameter contract if changing the handoff between date selection and confirmation.

## Styling

The application uses plain CSS, not SCSS or Tailwind.

- Keep global tokens, common layout classes, button styles, and the floating-heart animation in `src/styles.css`.
- Keep page- and component-specific styles in their co-located `.component.css` file.
- The active theme is the rose/pink CSS-variable palette in `:root` in `src/styles.css` (`--rose-*`, `--cream`, `--ink`, and shared shadow tokens).
- Shared classes include `.page-shell`, `.content-card`, `.eyebrow`, `.page-title`, and `.primary-button`.
- `RomanticBackgroundComponent` supplies markup only; the `.romantic-background`, `.floating-heart`, and related animation styles are global.
- `YesNoButtonComponent` includes inline SVG decoration and inline `style` attributes in its template. Preserve them when making focused UI changes unless the task explicitly includes their refactor.

## Existing Conventions

- Use standalone components with `@Component({ imports: [...] })`; do not add NgModules without a demonstrated need.
- Component files follow `<feature>.component.ts`, `.html`, `.css`, and `.spec.ts`, usually co-located by feature.
- Use `app-` selectors, PascalCase component classes and interfaces, and camelCase methods/properties.
- Existing TypeScript primarily uses single quotes and two-space indentation. Follow `.editorconfig`: two spaces, UTF-8, final newlines, and trimmed trailing whitespace.
- Use Angular template bindings for interaction: `(click)`, `[class...]`, `[style...]`, interpolation, and Angular control flow such as `@for`.
- Use `inject()` for the current component-level router dependencies, matching the existing route components.
- Keep strict TypeScript and Angular template settings in `tsconfig.json`; do not weaken them to bypass errors.
- Place static browser assets in `public/`; the Angular build copies that directory.
- Tests are co-located Jasmine/Karma specs using standalone `TestBed` imports. Router-dependent specs use `provideRouter([])` and spy on `Router.navigate`.

## Do and Don't

**Do**

- Trace the route and query-parameter flow before changing page navigation or confirmation data.
- Reuse the global CSS variables and shared classes before adding page-specific visual tokens.
- Keep the romantic background in the root shell so it remains visible across all routes.
- Update the affected co-located spec for behavior changes, especially navigation, selection state, or derived labels.
- Keep component styles within the 2 kB production warning budget configured in `angular.json` where feasible.

**Don't**

- Do not assume `app.routes.ts` is empty or render `HomeComponent` directly from the root.
- Do not introduce a server, database, authentication, environment variables, or external service without adding the required application configuration and documentation.
- Do not move date-selection state into a shared service unless the requirement needs state beyond the current route/query-parameter flow.
- Do not edit generated or dependency output: `dist/`, `out-tsc/`, `.angular/cache/`, or `node_modules/`.
- Do not use the README's Angular CLI 18.2.10 claim as the source of truth; the manifest declares Angular 20.2.x packages.

## Workflow Expectations

Before implementing a feature or opening a PR:

1. Inspect the affected route, component, co-located styles, and co-located spec; trace navigation and query parameters for flow changes.
2. Reuse the existing standalone-component, local-state, and CSS-variable patterns unless the feature requires a deliberate architectural change.
3. Run `npm run build` after changing source, templates, CSS, or Angular configuration.
4. Run `npm test` after changing component behavior or specs.
5. Review the diff to ensure generated files and unrelated application code were not modified.

## Current Code Realities

- `AppComponent` has a `title` field, but its template contains no heading. The existing app-component test still expects `Hello, WouldYouLike`, so that assertion is stale.
- No lint, formatter, CI workflow, deployment configuration, or E2E test runner is configured in tracked files.
- The production build sets a 2 kB warning and 4 kB error budget for each component stylesheet.
