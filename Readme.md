# MERN Advanced Auth (Email Verification + Password Reset)

Small authentication starter implementing email verification, password reset, JWT cookies and a modern frontend (Vite + React + Tailwind).

---

## Project structure (high level)

- backend/ — Express + Mongoose API, mail sending (Mailtrap), JWT cookie auth
  - controllers/, models/, routes/, middleware/, utils/, mailtrap/
  - index.js (server entry)
- frontend/ — Vite React app (Zustand store, Tailwind, Framer Motion)
  - src/components, src/pages, src/store, src/utils

---

## Features

Backend
- User sign up with hashed password (bcryptjs)
- Email verification flow (6-digit code + expiry)
- Login / logout using JWT stored in an HTTP cookie (cookie-based auth)
- Protected route (`/api/auth/check-auth`) using verifyToken middleware
- Forgot password -> send reset link with secure token and expiry
- Reset password and notify user via email on success
- Mail sending implemented via Mailtrap client module
- JWT generation and cookie setting helper
- Basic validation and error handling

Frontend
- Sign up, login, logout flows
- Email verification page (enter code)
- Forgot password and Reset Password pages (via token in URL)
- Protected dashboard route (redirects to login / verify as needed)
- Zustand global store for auth state (axios withCredentials)
- Password strength meter and UX polish (Framer Motion + Tailwind)
- Toaster notifications integration (react-hot-toast)

---

## Backend — required environment variables

Create `backend/.env` (or point dotenv to your file). Example variables the server expects:

- PORT=5000
- NODE_ENV=development or production
- MONGO_URI=mongodb://localhost:27017/mern-auth or use mongodb_atlas_URI
- CORS_ORIGIN=http://localhost:5173
- JWT_SECRET=your_super_secret_jwt_key
- COOKIE_SECURE=false    # true in production (HTTPS)
- MAILTRAP_TOKEN=your_mailtrap_api_token
- MAILTRAP_ENDPOINT=your_mailtrap_api_token

Make sure values match what `backend/mailtrap/mailtrap.config.js` expects.

---

## API (important endpoints)

Base: /api/auth

- POST /signup — { email, password, name } -> creates user, sets cookie, sends verification email
- POST /verify-email — { code } -> verifies account
- POST /login — { email, password } -> sets JWT cookie
- POST /logout — clears cookie
- GET /check-auth — protected, returns user (requires cookie)
- POST /forgot-password — { email } -> sends reset link to CLIENT_URL/reset-password/:token
- POST /reset-password/:token — { password } -> resets password

---

## Run locally (Windows)

1. Install dependencies (repo root):
- Backend & root deps:
  - Open a terminal in repo root:
    cd /your_project_root
    npm install

- Frontend deps:
    npm install --prefix frontend

2. Start backend in development:
- PowerShell (recommended):
    $env:NODE_ENV="development"; npx nodemon backend/index.js
- Or use cross-env by installing it and updating package.json `dev` script:
    npm i -D cross-env
    // change script: "dev": "cross-env NODE_ENV=development nodemon backend/index.js"
    npm run dev

3. Start frontend (Vite):
    npm run dev --prefix frontend
  or:
    cd frontend
    npm install
    npm run dev

Open browser at http://localhost:5173 (or port Vite reports).

---

## Build / Production

1. Build frontend:
    npm run build
  (script runs npm install in frontend then runs build)

2. Start server in production:
    set NODE_ENV=production && node backend/index.js
  (or configure production env vars and run via PM2 / Docker)

Server serves frontend static files from `frontend/dist` when NODE_ENV=production.

---

## Notes & tips

- On Windows the `NODE_ENV=...` inline assignment in package.json scripts is not portable. Use PowerShell env assignment, cross-env, or run node directly.
- JWT is stored in an HTTP cookie; axios is configured with `withCredentials: true` on the frontend — keep CORS origin and credentials settings aligned.
- Mailtrap used for development email testing; replace with real SMTP in production.
- Make sure `JWT_SECRET` is secure and not committed.
- If you see "Unauthorized - no token provided" ensure cookies are present (check sameSite / secure / domain settings in production).

---

If you want, I can:
- Update package.json dev script to be cross-platform
- Add simple API docs (Postman collection) or small diagram of flows
