# Copilot Instructions

## Repository Context

This is a single Angular 20 browser application for a date-invitation UI. Its only runtime path is:

`src/main.ts` -> `AppComponent` -> `HomeComponent` -> `YesNoButtonComponent`

The application is component-only. Do not assume a server, API, database, auth provider, message bus, telemetry platform, environment configuration, or routing flow exists: none is present in the tracked source. `app.routes.ts` is empty.

## Implementation Conventions

- Use standalone components with `imports` declared in `@Component`.
- Follow the existing component layout: each feature uses matching `.component.ts`, `.component.html`, `.component.css`, and `.component.spec.ts` files.
- Keep a feature's styles and template next to its component. Use `src/styles.css` only for application-wide styling.
- Use `app-` selectors, PascalCase component classes, camelCase methods/properties, two spaces, and single quotes in TypeScript.
- Retain TypeScript and Angular strictness from `tsconfig.json`; do not weaken compiler checks to bypass errors.
- Prefer Angular template event bindings for UI interactions rather than inline script or direct DOM manipulation.
- Use static assets from `public/`; Angular copies that directory into the application build.

## Quality Gates

- For source, template, CSS, or Angular configuration changes, run `npm run build`.
- For changes to a component's behavior, update its co-located Jasmine/Karma spec and run `npm test`.
- Do not modify generated or dependency directories: `dist/`, `out-tsc/`, `.angular/cache/`, or `node_modules/`.
- Do not introduce unconfigured external services or environment variables without also adding the corresponding configuration and documentation.

## Known Baseline Issues

- `AppComponent` imports `RouterOutlet` but its template does not use it.
- `home.component.css` has malformed `!important` placement, and two component stylesheets exceed the configured 2 kB warning budget.
- The README says Angular CLI 18.2.10, while the manifest uses Angular 20.2.x.

Consult `docs/codebase/` for the verified architecture and open questions before expanding the application.
