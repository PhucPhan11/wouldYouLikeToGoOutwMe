# Copilot Instructions

## Application Context

This is a browser-only Angular 20 date-invitation application. Tracked source contains no backend, API client, database, authentication, persistence, environment configuration, telemetry, or external service integration.

The runtime path is:

```text
src/main.ts
  -> AppComponent
     -> RomanticBackgroundComponent + RouterOutlet
        -> routed page component
```

`AppComponent` owns the shared floating-heart background and the router outlet. Do not move the background into an individual page: it must remain visible on every route.

## Routes and Navigation

`src/app/app.routes.ts` defines:

- `/` -> `HomeComponent`
- `/success` -> `SuccessComponent`
- `/date-selection` -> `DateSelectionComponent`
- `/confirmation` -> `ConfirmationComponent`

Use the existing imperative `Router` pattern for user-driven page navigation:

- `YesNoButtonComponent`: Yes navigates to `/success`; No updates local label/scale state and navigates to `/success` at its final label.
- `SuccessComponent`: navigates to `/date-selection`.
- `DateSelectionComponent`: owns selected date, time, and activity as component-local state; it passes `date`, `time`, and `activity` as query parameters when navigating to `/confirmation`.
- `ConfirmationComponent`: reads those query parameters from `ActivatedRoute.snapshot.queryParamMap`.

There is no shared state service or persistence. Preserve the current query-parameter names and values when changing the date-selection-to-confirmation handoff.

## Components and Files

- Use standalone components with imports declared in `@Component`; do not introduce NgModules without a concrete requirement.
- Keep each feature in a co-located `<feature>.component.ts`, `.html`, `.css`, and `.spec.ts` group.
- `src/app/shared/romantic-background/` contains the shared presentational background component.
- `src/app/home/yes-no-button/` contains the reusable Yes/No interaction.
- Use `app-` selectors, PascalCase classes/interfaces, and camelCase methods/properties.
- Follow existing TypeScript style: two-space indentation and single quotes. Respect `.editorconfig`.
- Continue using `inject()` for the existing component-level `Router` and `ActivatedRoute` dependencies.
- Prefer Angular template bindings and control flow (`(click)`, `[class...]`, `[style...]`, interpolation, and `@for`) over direct DOM manipulation.

## Styling

This project uses CSS, not SCSS or Tailwind.

- Put global theme variables, common visual classes, and global animation in `src/styles.css`.
- Put page/component-specific visual rules in the matching co-located `.component.css`.
- Reuse the `:root` rose/pink CSS variables (`--rose-*`, `--cream`, `--ink`) and shared shadow tokens defined in `src/styles.css`.
- Reuse `.page-shell`, `.content-card`, `.eyebrow`, `.page-title`, and `.primary-button` rather than duplicating their rules.
- The global stylesheet owns `.romantic-background`, `.floating-heart`, and `@keyframes float-heart`.
- The Yes/No template deliberately contains inline SVG decoration and inline styles. Do not alter them unless the requested change includes that presentation.

## Quality and Safety

- Preserve strict TypeScript and Angular compiler settings in `tsconfig.json`; do not loosen compiler checks to bypass errors.
- Use static assets from `public/`; Angular copies them into the build.
- For source, template, CSS, or Angular configuration changes, run `npm run build`.
- For component behavior or spec changes, update the relevant co-located Jasmine/Karma spec and run `npm test`.
- Router component specs use standalone `TestBed`, `provideRouter([])`, and `Router.navigate` spies; follow that pattern for navigation behavior.
- Do not modify generated or dependency directories: `dist/`, `out-tsc/`, `.angular/cache/`, or `node_modules/`.
- Do not introduce unconfigured external services, environment variables, or persistence layers.
- Keep component styles within the `angular.json` production style budget where feasible: 2 kB warning and 4 kB error.

## Known Code Reality

- The README reports Angular CLI 18.2.10, but `package.json` declares Angular 20.2.x dependencies.
- The current `AppComponent` template has no heading, while its co-located spec still expects `Hello, WouldYouLike`; treat that assertion as stale when working on the root component.
- No repository-specific lint, formatter, CI/deployment workflow, or E2E test runner is configured.
