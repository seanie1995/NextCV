# AI Development Guidelines

## Branching Strategy
- **master**: Production-ready code only
- **dev**: Integration branch for testing features before release
- **feature branches**: Created from `dev` for new features or bug fixes
  - Naming convention: `feature/description` or `fix/description`
  - Always branch from `dev`, never from `master`
  - Merge back to `dev` via pull request

## Workflow
1. Start from `dev` branch: `git checkout dev`
2. Create feature branch: `git checkout -b feature/your-feature-name`
3. Develop and commit changes
4. Push branch: `git push -u origin feature/your-feature-name`
5. Open pull request targeting `dev` branch
6. After approval and CI passes, merge into `dev`
7. Periodically merge `dev` into `master` for releases

## Commit Messages
Follow Conventional Commits:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Formatting, missing semi-colons, etc.
- `refactor`: Code refactoring
- `test`: Adding or modifying tests
- `chore`: Build process or auxiliary tool changes

Format: `type(scope): description`

Example: `feat(auth): add login validation`

## Pull Request Requirements
- Target branch must be `dev`
- Include clear description of changes
- Link to related issues (if applicable)
- Pass all CI checks
- Require at least one approval from team member
- Squash and merge when appropriate

## Code Quality
- Follow project's linting and formatting rules
- Write unit tests for new functionality
- Update documentation when changing APIs
- Keep changes focused and atomic
- Remove debug statements and console.logs before merging

## Issue Tracking
- Create issues for all work (bugs, features, tasks)
- Reference issue numbers in branch names and commit messages
- Close issues via pull request descriptions (e.g., "Closes #123")

## Release Process
1. When ready for release, merge `dev` into `master`
2. Tag the merge commit on `master` with version number (e.g., `v1.2.0`)
3. Deploy from `master` branch
4. Hotfixes: Branch from `master`, fix, merge to both `master` and `dev`

## AI-Specific Guidelines
- When generating code, ensure it follows project conventions
- Test AI-generated code thoroughly before committing
- Document any AI-assisted decisions in commit messages
- Review AI suggestions for security and performance implications

## Git Best Practices
- **Never force push to shared branches** (`master`, `dev`)
- Use `git rebase` for clean history on feature branches before merging
- Pull with rebase: `git pull --rebase` instead of `git pull`
- Delete merged branches locally and remotely
- Use `.gitignore` - never commit node_modules, .env, build outputs

## Handling Conflicts
- Resolve conflicts in your feature branch, not in shared branches
- After resolving, test thoroughly before pushing
- Communicate with team when conflicts affect shared code

## Dependencies
- Verify new dependencies don't introduce vulnerabilities: `npm audit` or `npm audit fix`
- Pin critical dependencies in package.json for reproducibility
- Review bundle size impact of new dependencies

## Security
- Never commit secrets, API keys, or credentials - use environment variables
- Run security audits: `npm audit security`
- Validate and sanitize all user inputs
- Review AI-generated code for injection vulnerabilities

## Before Committing
1. Run linter: `npm run lint` (or equivalent)
2. Run typecheck: `npm run typecheck` (or equivalent)
3. Run tests: `npm test` (or equivalent)
4. Review changes: `git diff --staged`

## Version Control Etiquette
- Commit often with clear messages
- Don't commit broken code to shared branches
- Use work-in-progress commits sparingly, clean before PR