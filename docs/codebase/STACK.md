# Technology Stack

## 1) Runtime Summary

| Area | Value | Evidence |
|---|---|---|
| Primary language | TypeScript, with HTML and CSS component templates/styles | `src/main.ts`, `src/app/home/home.component.html`, `src/app/home/home.component.css` |
| Runtime + version | Browser application built with Angular 20.2.x; the project does not pin a Node.js version | `package.json`, `angular.json` |
| Package manager | npm with lockfile version 3 | `package.json`, `package-lock.json` |
| Module/build system | Angular application builder (`@angular/build:application`) with ES2022 TypeScript modules | `angular.json`, `tsconfig.json` |

## 2) Production Frameworks and Dependencies

| Dependency | Version | Role in system | Evidence |
|---|---:|---|---|
| `@angular/core`, `@angular/common`, `@angular/compiler` | `^20.2.2` | Component framework and runtime | `package.json` |
| `@angular/platform-browser` | `^20.2.2` | Browser bootstrap/runtime | `package.json`, `src/main.ts` |
| `@angular/router` | `^20.2.2` | Router provider and route types; routes are currently empty | `package.json`, `src/app/app.config.ts`, `src/app/app.routes.ts` |
| `@angular/animations`, `@angular/forms` | `^20.2.2` | Installed Angular capabilities; no tracked source usage was found | `package.json` |
| `rxjs` | `~7.8.0` | Installed reactive utility library; no tracked source usage was found | `package.json` |
| `zone.js` | `~0.15.1` | Angular change-detection polyfill | `package.json`, `angular.json` |

## 3) Development Toolchain

| Tool | Purpose | Evidence |
|---|---|---|
| Angular CLI / `@angular/build` | Serve, build, test, and production budgets | `package.json`, `angular.json` |
| TypeScript `~5.9.2` | Strict compilation targeting ES2022 | `package.json`, `tsconfig.json` |
| Jasmine / Karma | Browser unit tests, Chrome launch, coverage instrumentation | `package.json`, `angular.json` |
| EditorConfig | Two-space indentation, UTF-8, final newline, single TypeScript quotes | `.editorconfig` |

## 4) Key Commands

```bash
npm install
npm start
npm run build
npm test
```

`npm run watch` builds continuously using the development configuration. The build command produces `dist/would-you-like`; production defaults to output hashing and has a 500 kB initial-bundle warning / 1 MB error budget. Component styles have a 2 kB warning / 4 kB error budget.

## 5) Environment and Config

- Config sources: `angular.json`, `tsconfig.json`, `tsconfig.app.json`, `tsconfig.spec.json`, `.editorconfig`, and `package.json`.
- Required env vars: none found; there is no committed environment template and no environment-variable read in `src/`.
- Deployment/runtime constraints: a browser runtime with Angular's Zone.js polyfill. [TODO] The supported Node.js version and deployment host are not specified.

## 6) Evidence

- `package.json`
- `package-lock.json`
- `angular.json`
- `tsconfig.json`
- `.editorconfig`
