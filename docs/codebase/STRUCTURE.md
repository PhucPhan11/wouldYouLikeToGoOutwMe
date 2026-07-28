# Codebase Structure

## 1) Top-Level Map

| Path | Purpose | Evidence |
|---|---|---|
| `src/` | Angular application source, root document, global styles, and bootstrap | `angular.json`, `src/main.ts` |
| `src/app/` | Root component, application providers, routes, and UI features | `src/app/app.component.ts`, `src/app/app.config.ts` |
| `src/app/home/` | Invitation-page feature and its animated-background styles | `src/app/home/home.component.ts` |
| `src/app/home/yes-no-button/` | Child button component with its template, styles, and spec | `src/app/home/yes-no-button/yes-no-button.component.ts` |
| `public/` | Static files copied into the build output | `angular.json`, `public/heart.png` |
| `.vscode/` | VS Code launch/task integration for `npm start` and `npm test` | `.vscode/launch.json`, `.vscode/tasks.json` |
| `docs/codebase/` | Verified repository-discovery documentation | `docs/codebase/ARCHITECTURE.md` |
| `angular.json` | Angular workspace build, serve, test, assets, and budget configuration | `angular.json` |

## 2) Entry Points

- Main runtime entry: `src/main.ts`, which calls `bootstrapApplication(AppComponent, appConfig)`.
- Secondary entry points: none found.
- Entry selection: the `build` target identifies `src/main.ts` as the browser entry; `npm start` runs Angular's dev server.

## 3) Module Boundaries

| Boundary | What belongs here | What must not be here |
|---|---|---|
| Root shell (`src/app/app.component.*`) | Application composition and root selector | Page-specific button presentation | `src/app/app.component.ts`, `src/app/app.component.html` |
| App config/routes (`app.config.ts`, `app.routes.ts`) | Application-wide providers and route declarations | Feature template/style markup | `src/app/app.config.ts`, `src/app/app.routes.ts` |
| Home feature (`src/app/home/`) | Invitation layout, title, background animation, and composition of the button child | Root bootstrap and global provider registration | `src/app/home/home.component.ts`, `src/app/home/home.component.html` |
| Button feature (`src/app/home/yes-no-button/`) | Yes/No control template, style, and component methods | Parent page layout and application configuration | `src/app/home/yes-no-button/yes-no-button.component.ts` |

## 4) Naming and Organization Rules

- File naming pattern: Angular component triplets use lowercase kebab-case feature names plus `.component`, such as `yes-no-button.component.ts`; their co-located specs use `.component.spec.ts`.
- Directory organization pattern: a small component tree, with the `home` page feature nested under `src/app` and a child component nested below it.
- Import conventions: relative imports are used; no TypeScript path aliases are configured.

## 5) Evidence

- `src/main.ts`
- `src/app/app.component.ts`
- `src/app/home/home.component.ts`
- `angular.json`
