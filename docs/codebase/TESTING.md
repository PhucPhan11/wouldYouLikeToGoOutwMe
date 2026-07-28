# Testing Patterns

## 1) Test Stack and Commands

- Primary test framework: Jasmine `~5.2.0` run by Karma `~6.4.0`.
- Assertion/mocking tools: Jasmine expectations; Angular `TestBed`; Karma Chrome launcher, Jasmine adapter, HTML reporter, and coverage package.
- Commands:

```bash
npm test
# No separate unit, integration/e2e, or coverage script is configured.
```

`angular.json` selects the `@angular/build:karma` builder and loads `zone.js/testing`.

## 2) Test Layout

- Test file placement pattern: co-located with each component.
- Naming convention: `<component>.component.spec.ts`.
- Setup files and where they run: no custom setup file; each spec creates a `TestBed` configuration in `beforeEach`.

## 3) Test Scope Matrix

| Scope | Covered? | Typical target | Notes |
|---|---|---|---|
| Unit | Partially | Component creation and root title/markup assertions | Three component specs exist; button behavior is not asserted | 
| Integration | No | [TODO] | No API, persistence, or cross-system test is present |
| E2E | No | [TODO] | README describes `ng e2e` as requiring an added platform package; none is installed |

## 4) Mocking and Isolation Strategy

- Main mocking approach: no mocks; tests compile actual standalone components using `TestBed`.
- Isolation guarantees: each spec constructs its fixture during `beforeEach`.
- Common failure mode in tests: `app.component.spec.ts` asserts an `<h1>` containing `Hello, WouldYouLike`, but the current root template contains only `<app-home>`.

## 5) Coverage and Quality Signals

- Coverage tool + threshold: `karma-coverage` is installed; no coverage threshold or report command is configured.
- Current reported coverage: [TODO] No coverage output is committed or configured as a script.
- Known gaps/flaky areas: click methods have no template bindings or behavior tests; the root-template assertion is stale relative to `app.component.html`.

## 6) Evidence

- `package.json`
- `angular.json`
- `tsconfig.spec.json`
- `src/app/app.component.spec.ts`
- `src/app/home/home.component.spec.ts`
- `src/app/home/yes-no-button/yes-no-button.component.spec.ts`
- `README.md`
