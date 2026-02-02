# Contributing to MERN Advanced Auth

Thank you for your interest in contributing to MERN Advanced Auth! We welcome contributions from developers of all skill levels. This document provides guidelines and instructions for getting started.

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- Git

### Fork and Clone

1. Fork the repository on GitHub
2. Clone your fork locally:
   ```bash
   git clone https://github.com/devwithmohit/Mern-Authentication.git
   cd mern-advanced-auth
   ```
3. Add upstream remote:
   ```bash
   git remote add upstream https://github.com/ORIGINAL_OWNER/mern-advanced-auth.git
   ```

### Setup Development Environment

#### Backend Setup

```bash
cd backend
npm install
cp .env.example .env  # Create and configure your .env file
npm run dev
```

**Required environment variables** (see `backend/.env`):

- `PORT=5000`
- `NODE_ENV=development`
- `MONGO_URI=mongodb://localhost:27017/mern-auth`
- `CORS_ORIGIN=http://localhost:5173`
- `JWT_SECRET=your_secret_key`
- `MAILTRAP_TOKEN=your_mailtrap_token`
- `MAILTRAP_ENDPOINT=your_mailtrap_endpoint`

#### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

The app will be available at `http://localhost:5173`

## Development Workflow

### Creating a Branch

1. Fetch the latest changes:
   ```bash
   git fetch upstream
   ```
2. Create a feature branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
   Use descriptive branch names (e.g., `feature/add-2fa`, `fix/email-verification-bug`)

### Making Changes

- Keep commits atomic and focused
- Write clear, descriptive commit messages
- Run tests before pushing (if applicable)
- Test your changes locally against both frontend and backend

### Code Style

- Follow existing code conventions in the project
- Use meaningful variable and function names
- Add comments for complex logic
- Ensure consistent indentation (2 spaces for JavaScript)

## Areas for Contribution

### Backend

- Authentication features (2FA, social login, etc.)
- Security improvements
- Database optimizations
- Error handling enhancements
- Unit tests
- API documentation

### Frontend

- UI/UX improvements
- New pages or components
- Performance optimizations
- Accessibility enhancements
- Form validation improvements
- Unit and integration tests

### Documentation

- Improve README and guides
- Add API documentation
- Create setup tutorials
- Document edge cases and solutions

## Testing

Before submitting your PR:

1. Test the complete auth flow (sign up, email verification, login, logout)
2. Test password reset functionality
3. Test protected routes
4. Verify error handling and validation
5. Test on different browsers if applicable

## Submitting a Pull Request

1. Push your branch to your fork:

   ```bash
   git push origin feature/your-feature-name
   ```

2. Open a Pull Request on the main repository with:

   - Clear title describing the change
   - Description of what was changed and why
   - Steps to test your changes
   - Screenshots (if UI changes)
   - Related issue numbers (if applicable)

3. Ensure your PR:
   - Has a clear commit history
   - Includes any necessary documentation updates
   - Passes all checks/tests
   - Doesn't introduce breaking changes without discussion

### PR Guidelines

- Reference related issues using `#issue_number`
- Keep PRs focused and reasonably sized
- Respond promptly to review feedback
- Keep the conversation professional and constructive

## Reporting Bugs

### Before Reporting

- Search existing issues to avoid duplicates
- Reproduce the bug in a clean environment

### Bug Report Template

```markdown
## Description

Brief description of the bug

## Steps to Reproduce

1. Step one
2. Step two
3. ...

## Expected Behavior

What should happen

## Actual Behavior

What actually happens

## Environment

- OS: (e.g., Windows 11, macOS 12)
- Node version:
- Browser: (if frontend issue)

## Logs/Screenshots

Attach relevant error messages or screenshots
```

## Feature Requests

Include:

- Clear description of the feature
- Use cases and why it would be valuable
- Possible implementation approach
- Examples from other projects (if applicable)

## Questions?

- Open an issue with the `question` label
- Be descriptive about what you're trying to do
- Include relevant code snippets or context

## Code of Conduct

- Be respectful and inclusive
- Provide constructive feedback
- Help others learn and grow
- Report inappropriate behavior to the maintainers

## License

By contributing, you agree that your contributions will be licensed under the same license as the project (see LICENSE file).

---

Thank you for contributing to making MERN Advanced Auth better! 🚀
