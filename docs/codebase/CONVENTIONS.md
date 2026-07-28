# Coding Conventions

## 1) Naming Rules

| Item | Rule | Example | Evidence |
|---|---|---|---|
| Files | Lowercase kebab-case Angular component name plus role suffix | `yes-no-button.component.ts` | `src/app/home/yes-no-button/` |
| Functions/methods | camelCase | `onYesClick`, `onNoClick` | `src/app/home/yes-no-button/yes-no-button.component.ts` |
| Types/classes | PascalCase | `HomeComponent`, `YesNoButtonComponent` | `src/app/home/home.component.ts`, `src/app/home/yes-no-button/yes-no-button.component.ts` |
| Constants/env vars | No application constants or environment variables found | [TODO] | `src/`, `package.json` |

## 2) Formatting and Linting

- Formatter: no formatter configuration found. EditorConfig specifies UTF-8, two-space indentation, trailing-whitespace trimming, final newlines, and single quotes for TypeScript.
- Linter: no lint script or linter configuration found.
- Most relevant enforced compiler rules: TypeScript `strict`, `noImplicitOverride`, `noPropertyAccessFromIndexSignature`, `noImplicitReturns`, `noFallthroughCasesInSwitch`, and Angular strict injection/template checking.
- Run commands: `npm run build` and `npm test`. [TODO] No repository lint command is configured.

## 3) Import and Module Conventions

- Import grouping/order: Angular imports appear before relative component imports; no automated ordering rule is configured.
- Alias vs relative import policy: current source uses relative imports; `tsconfig.json` declares no `paths` aliases.
- Public exports/barrel policy: none found. Components are imported directly from their file.

## 4) Error and Logging Conventions

- Error strategy by layer: bootstrap failures are caught and logged with `console.error`; no application error abstraction exists.
- Logging style and required context fields: button methods use simple `console.log` strings; no structured logging convention exists.
- Sensitive-data redaction rules: [TODO] No data handling or redaction policy exists in the repository.

## 5) Testing Conventions

- Test file naming/location rule: co-located `*.component.spec.ts`.
- Mocking strategy norm: components are compiled with Angular `TestBed` and imported as standalone components; no mocks are present in current specs.
- Coverage expectation: Karma coverage tooling is installed, but no threshold or reporting configuration is declared.

## 6) Evidence

- `.editorconfig`
- `tsconfig.json`
- `src/main.ts`
- `src/app/home/yes-no-button/yes-no-button.component.ts`
- `src/app/home/home.component.spec.ts`
