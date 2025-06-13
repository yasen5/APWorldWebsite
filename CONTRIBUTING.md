# Contributing Guidelines (Non-Coding)

TODO add instructions for how to insert simple info

# Contributing Guidelines (Coding)

To contribute to this codebase, please follow the rules below:

## Branching Guidelines

### General Rules

- **Never commit directly to `main`.**
  - `main` should always contain stable, deployable code.
  - Direct commits can introduce bugs and break the build.

- **Create a new branch from `main` for every change.**
  - Keeps work isolated and avoids conflicts.
  - Makes code review and testing easier.
  - Maintains a clean and organized commit history.

- **Keep branch base up to date**
  - When writing to a branch for an extended period of time, rebase often to prevent merge conflicts
  - This can be accomplished using 
  ```bash
  git pull origin <branch-name> --rebase
  ```
  - Once you resolve any conflicts, use 
  ```bash
  git rebase --continue
  ```

### Branch Naming Convention

Use the following format when naming your branches:
`github-username/<issue-number-if-applicable>-<short-description>`

**Example:**

```bash
git checkout -b bob/123-add-sliding-animation
```

This naming convention helps:

- Keep branches easy to search and understand.
- Avoid naming collisions when multiple contributors are working on similar tasks.

## Commits

- Keep commits small and focused.
- Commit message format:

  ```
  Short summary (max 50 chars)

  Longer description if needed (wrap at 72 chars).
  ```

- Start messages with a verb: "Add", "Fix", "Update", etc. (This is standard)
- Keep commit message relevant to the issue, feature, etc. being addressed.

**Example:**

```bash
git add .
git commit -m "Fix Sliding Animation"
```

## Pull Requests

- Always open a pull request (PR) into `main`.
- PR title format: `Type: short description` (e.g., `Feature: add login endpoint`).
- PR description must explain:
  - What the change is
  - How it was implemented
- Link any related issues, this means **include associated Issue ID** with every PR.
  - This ensures that each change is linked to an issue, providing context for the change and ensuring thorough documentation of the change history in the Issue tracker.

## Merging

- For larger changes, do not merge your own PR without review.
- Resolve all merge conflicts before merging.

## Automated Testing

- The goal is to soon be able to add automated deployment of the website to test that no PRs break existing code.

## General

- Keep `main` always deployable.
- Use and respect `.gitignore`.
- Document anything non-obvious in code or README.