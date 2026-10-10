# Finance tracker collaboration guardrails

## Start every task from current remote state
- Run `git status --short` first. Never discard uncommitted work.
- Run `git fetch origin --prune` to update remote-tracking refs for **all branches** before editing. Fetch is not the same as merging every branch into your work.
- Choose the branch for the environment: `cloud` for Codex Cloud / mobile-driven cloud tasks; `remote` for work on Pratham's Mac. Honor an explicitly requested branch.
- If the environment is unclear, inspect the current branch and task context; ask only if the choice remains ambiguous.
- Switch only with a clean worktree, or preserve changes explicitly. Use `git pull --ff-only origin <branch>` before work. If branches diverge, inspect and reconcile; never force-push, reset, or silently overwrite.
- Concurrent tasks should use an isolated worktree and a task branch based on the latest `origin/cloud` or `origin/remote`, then merge / PR into the appropriate preview branch.
- Do not automatically merge all remote branches. Review their differences and bring in only relevant changes.

## Master is curated
- `master` is the production version. Do not promote `cloud` or `remote` changes to master unless Pratham explicitly requests promotion.
- Before promotion, fetch again, compare the actual diff, preserve both branches' work, resolve conflicts deliberately, and verify the resulting site.
- Initial site bootstrap and hosting setup are authorized by the original website request.

## Preview publishing
- One GitHub Pages deployment serves master at `/fin-tracker/`, cloud at `/fin-tracker/cloud/`, and remote at `/fin-tracker/remote/`.
- The Pages workflow assembles all three branch snapshots on pushes. Editing a preview branch must not change root production content.
- Tracker storage is intentionally shared between the three paths on the same origin; export before testing resets or imports. Devices do not sync automatically.
- Shared workflow / guardrail changes must be reconciled across all three branches. Do not alter deployment rules casually.

## Content and implementation
- Keep the site minimal, static and accessible. Preserve the fixed white theme, Apple system fonts, wide content, 15px body text, default browser link styling, and home page of plain article-link lists; do not collapse it into a single long page. Relative asset URLs must work under all three paths.
- Use primary sources for CFA rules, admissions, research and job responsibilities. Recheck changing facts. Label salary planning bands as estimates, separate fixed pay / CTC / bonus, and never invent company salary disclosures.
- Keep articles short, preserve source links and image attribution, and keep finance-facing business decisions central to the career plan.
- User-entered tracker data stays browser-local. Render it with textContent, validate imports and permit only http/https links. Do not commit personal backups or credentials.
- Verify syntax, tracker persistence/import/export, responsive rendering and audio behavior for meaningful changes.
- Commits: `<type>: <subject>` with no scope or co-author tag. Git identity: Pratham Mishra / mishrapratham.codeit@gmail.com.

## Browser verification
- Always use Firefox for browser computer use. Do not switch to Safari or another browser.
