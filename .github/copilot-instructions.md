# GitHub Copilot instructions — AutoERP Automation Framework

Purpose: give AI coding agents just-enough repo context to be immediately productive.

- **Big picture:** Playwright-based E2E test framework with light API helpers and data seeding. Key folders: [domains](domains) (page objects + tests), [core](core) (shared helpers, OpenAI usage, logger), [tests](tests) (suite entry points), and [integration](integration) (cross-cutting flows).

- **How to run / verify:** follow [README.md](README.md). Common commands (see `package.json`):

  - `npm install`
  - `npx playwright install`
  - `npm test` (runs all Playwright tests)
  - `npm run smoke` and `npm run regression` (targeted suites)

- **Config & env:** runtime driven by env vars: `BASE_URL`, `API_URL`, `OPENAI_KEY` (see [README.md](README.md) and [playwright.config.ts](playwright.config.ts)). `APIClient` uses `process.env.API_URL` ([core/apiClient.ts](core/apiClient.ts)).

- **AI / OpenAI usage:** data generation lives in [core/aiDataGenerator.ts](core/aiDataGenerator.ts). It calls OpenAI chat completions and parses JSON from the response. Current model string used in code is `gpt-4.1` — preferred model for agents and data generation in this repo is **gpt-5-mini**. When updating OpenAI calls, change the `model` field in `core/aiDataGenerator.ts` and keep the existing call/response shape (create -> choices[0].message.content -> JSON.parse).

- **Conventions & patterns to follow:**
  - Page objects: `domains/<feature>/<feature>.page.ts`; tests next to pages: `domains/<feature>/<feature>.test.ts`.
  - API helpers live in domain folders or `core` (example: `workorder/workorder.api.ts`, `inventory/inventory.api.ts`).
  - Shared utilities in `core` (logger in [core/logger.ts](core/logger.ts), API client in [core/apiClient.ts](core/apiClient.ts)).
  - Seeds/data factory: look at `inventory/inventory.seed.ts` and consider `core/dataFactory.ts` for common helpers.

- **Playwright specifics:** `playwright.config.ts` sets `headless: true`, `screenshot: 'only-on-failure'`, `video: 'retain-on-failure'`, timeouts and retries. Tests rely on `baseURL` from env.

- **What to change and how:**
  - Make minimal, well-scoped edits. Update `core/aiDataGenerator.ts` to use `gpt-5-mini` when changing model; include a single-line comment noting the change.
  - If adding helpers, place them in `core/` and export for reuse (follow TypeScript style in current files).
  - For new page objects, follow naming pattern and add corresponding `*.test.ts` that exercises the common happy path.

- **Integration points & side-effects to watch:**
  - OpenAI usage requires `OPENAI_KEY` in environment; live runs may create costs.
  - API calls use `API_URL`; seeds modify backend state — prefer using `integration/` or sandbox endpoints when available.

- **Quick examples:**

  - Update model example (in `core/aiDataGenerator.ts`):

  ```ts
  // prefer gpt-5-mini for faster, consistent results
  const completion = await openai.chat.completions.create({
    model: "gpt-5-mini",
    messages: [{ role: "user", content: prompt }]
  });
  ```

- **Testing & PR checklist for AI-generated changes:**
  - Run `npm test` locally and ensure Playwright tests pass.
  - Update `README.md` if you added or changed required env vars.
  - Keep implementations small; include or update one domain-level test demonstrating behavior.

If anything in these notes is unclear or you want a different default model policy (org-level vs repo-level), tell me which preference to encode and I will update this file.
