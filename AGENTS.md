# Repository Guidance

## Project

This is a small Angular 20 single-page application that renders a date invitation. It is browser-only: no backend, persistence, authentication, messaging, environment variables, or external API client exists in the tracked application source.

## Layout

- `src/main.ts` bootstraps `AppComponent`.
- `src/app/app.component.*` owns the root shell and renders `HomeComponent`.
- `src/app/home/` owns the invitation page and animated background.
- `src/app/home/yes-no-button/` owns the reusable Yes/No button presentation and click handler methods.
- `public/` contains static assets copied into the build.
- `angular.json`, `tsconfig*.json`, and `.editorconfig` define build, TypeScript, Angular compiler, and editor behavior.

## Working Rules

- Use standalone Angular components, as the existing components do; do not introduce NgModules without a concrete need.
- Keep page-specific UI within its feature directory and put global styles only in `src/styles.css`.
- Use component selectors in `app-<feature>` form and component filenames in `<feature>.component.{ts,html,css,spec.ts}` form.
- Preserve strict TypeScript and strict Angular template checks configured in `tsconfig.json`.
- Use two-space indentation and single quotes in TypeScript.
- Run `npm run build` after source, style, or build-config changes. Run `npm test` when changing specs or component behavior.
- Do not edit generated/cache output (`dist/`, `out-tsc/`, `.angular/cache/`) or `node_modules/`.

## Current Constraints

- `app.routes.ts` exports an empty route list; the root renders `HomeComponent` directly rather than through the router.
- The Yes/No template currently has no Angular event bindings, although its component exposes `onYesClick` and `onNoClick`.
- There are no project-specific lint, formatter, CI, deployment, or environment-variable configurations.

## Documentation

Read `docs/codebase/` before making architectural changes. It records verified stack, structure, integration, test, convention, and concern findings.
