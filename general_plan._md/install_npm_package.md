Full-Stack JavaScript / Node.js npm Package Guide

A practical npm package reference for a beginner-to-intermediate full-stack developer working with:

React

Vite

Node.js

Express

SQLite

REST APIs

Authentication

Testing

Security

Development tooling

Important: You do not need to install every package in this document. Install packages based on the feature your project actually needs.

1. Frontend — React

react

Definition: A JavaScript library for building user interfaces with components.

Use it for:

Components

State

Rendering UI

Building interactive pages

npm install react

react-dom

Definition: Provides the APIs needed to render React components into the browser DOM.

npm install react-dom

react-router-dom

Definition: A routing library for React applications.

Use it for:

/login

/register

/dashboard

/animal/:id

Navigation between pages

npm install react-router-dom

react-icons

Definition: Provides popular icon sets as React components.

npm install react-icons

2. Frontend Build Tool

vite

Definition: A fast development server and build tool for modern web applications.

Use it for:

Running your React development server

Building your production frontend

Environment variables such as VITE_API_URL

Usually installed when creating a Vite project.

npm install -D vite

@vitejs/plugin-react

Definition: Vite plugin that enables React-specific features such as JSX transformation and Fast Refresh.

npm install -D @vitejs/plugin-react

3. Styling

tailwindcss

Definition: A utility-first CSS framework for styling web applications.

npm install tailwindcss

Tailwind setup can differ depending on the version you use. Follow the official Tailwind documentation for the current Vite setup.

postcss

Definition: A tool for transforming CSS using JavaScript-based plugins.

npm install -D postcss

autoprefixer

Definition: A PostCSS plugin that automatically adds browser vendor prefixes to CSS rules when necessary.

npm install -D autoprefixer

4. Backend — Node.js / Express

express

Definition: A lightweight web framework for Node.js used to create servers and REST APIs.

Use it for:

Routes

Controllers

Middleware

REST APIs

HTTP requests and responses

npm install express

cors

Definition: Middleware that controls Cross-Origin Resource Sharing.

Use it when your frontend and backend run on different origins, such as:

Frontend: http://localhost:5173
Backend:  http://localhost:5000

npm install cors

dotenv

Definition: Loads environment variables from a .env file into process.env.

Use it for:

API configuration

Database paths

JWT secrets

Other configuration values

npm install dotenv

Example:

PORT=5000
JWT_SECRET=your_secret

cookie-parser

Definition: Middleware that parses cookies from incoming HTTP requests.

Useful for:

Authentication cookies

Session-related cookies

Reading HTTP cookies

npm install cookie-parser

5. Database — SQLite

better-sqlite3

Definition: A synchronous SQLite library for Node.js.

Use it for:

Creating SQLite databases

Running SQL queries

Reading and writing application data

npm install better-sqlite3

Common methods:

db.prepare("SELECT * FROM users").all();
db.prepare("SELECT * FROM users WHERE id = ?").get(id);
db.prepare("INSERT INTO users (...) VALUES (...)").run(...);

6. Authentication

bcrypt

Definition: A password-hashing library used to securely store passwords.

Use it for:

Registration:

const hashedPassword = await bcrypt.hash(password, 10);

Login:

const correct = await bcrypt.compare(password, user.password);

npm install bcrypt

Never store users' plain-text passwords in your database.

jsonwebtoken

Definition: A library for creating and verifying JSON Web Tokens (JWTs).

Use it for:

Authentication

Creating access tokens

Verifying authenticated requests

npm install jsonwebtoken

Example concept:

Login
  ↓
Verify email + password
  ↓
Create JWT
  ↓
Send/store token securely
  ↓
Protected API request
  ↓
Verify JWT

7. Validation

zod

Definition: A TypeScript-first schema validation library that can also be used in JavaScript.

Use it for:

Request body validation

Email validation

Password rules

API input validation

Replacing large amounts of manual validation

npm install zod

Example:

const registerSchema = z.object({
    username: z.string().min(3),
    email: z.string().email(),
    password: z.string().min(8)
});

validator

Definition: A collection of string validation and sanitization functions.

Use it for:

Email validation

URL validation

String checks

Sanitization

npm install validator

You generally don't need both zod and validator for every project. Choose based on your validation needs.

8. Security

helmet

Definition: Express middleware that helps set HTTP security headers.

npm install helmet

Typical use:

app.use(helmet());

express-rate-limit

Definition: Express middleware for limiting how many requests a client can make within a period.

Useful for:

Login endpoints

Registration endpoints

Preventing excessive API requests

npm install express-rate-limit

express-validator

Definition: Express middleware for validating and sanitizing request data.

npm install express-validator

If you use Zod for your project's validation strategy, you may not need this.

9. Development Tools

nodemon

Definition: Automatically restarts your Node.js server when files change.

npm install -D nodemon

Example package.json:

{
  "scripts": {
    "dev": "nodemon server.js"
  }
}

Then:

npm run dev

eslint

Definition: A static code analysis tool that finds problems and enforces JavaScript coding rules.

npm install -D eslint

Use it for:

Finding bugs

Detecting unused variables

Maintaining consistent code quality

prettier

Definition: An opinionated code formatter that automatically formats source code.

npm install -D prettier

Useful for keeping your code consistently formatted.

@eslint/js

Definition: Provides ESLint's core JavaScript configuration helpers.

npm install -D @eslint/js

10. Testing

vitest

Definition: A fast JavaScript/TypeScript testing framework designed to work especially well with Vite projects.

npm install -D vitest

Use it for:

Unit tests

Testing functions

Testing frontend/backend logic

supertest

Definition: A library for testing HTTP servers and API endpoints.

Useful for testing Express APIs:

POST /api/v1/auth/register
POST /api/v1/auth/login
GET  /api/v1/users

npm install -D supertest

@testing-library/react

Definition: A library for testing React components from the user's perspective.

npm install -D @testing-library/react

@testing-library/jest-dom

Definition: Provides custom DOM matchers that make assertions about HTML elements easier to write.

npm install -D @testing-library/jest-dom

11. API Development

axios

Definition: A promise-based HTTP client for browsers and Node.js.

It can be used instead of fetch().

npm install axios

Example:

const response = await axios.post(
    `${API_URL}/api/v1/auth/login`,
    {
        email,
        password
    }
);

You do not need Axios if the native fetch() API is enough for your project.

12. File Uploads

multer

Definition: Express middleware for handling multipart/form-data, commonly used for file uploads.

npm install multer

Useful for:

Profile pictures

Images

Documents

cloudinary

Definition: A cloud service SDK commonly used to upload, transform, and deliver images and other media.

npm install cloudinary

Only install this if your application actually needs cloud media storage.

13. Real-Time Applications

socket.io

Definition: A library for real-time, bidirectional communication between clients and servers.

Useful for:

Chat applications

Live notifications

Real-time dashboards

Multiplayer features

npm install socket.io

14. Database Alternatives

You do not install all of these if you're already using SQLite.

mongoose

Definition: An ODM (Object Data Modeling) library for MongoDB and Node.js.

npm install mongoose

Use it when your database is MongoDB.

pg

Definition: A PostgreSQL client for Node.js.

npm install pg

Use it when your database is PostgreSQL.

mysql2

Definition: A MySQL/MariaDB client for Node.js.

npm install mysql2

Use it when your database is MySQL or MariaDB.

15. Environment and Configuration

cross-env

Definition: Allows environment variables to be set consistently across operating systems in npm scripts.

npm install -D cross-env

It can be useful when npm scripts need environment variables that should work on Windows, macOS, and Linux.

16. Useful Developer Packages

concurrently

Definition: Runs multiple commands concurrently from one npm script.

Useful when you want to start:

React frontend
+
Express backend

with one command.

npm install -D concurrently

Example:

{
  "scripts": {
    "dev": "concurrently "npm run client" "npm run server""
  }
}

morgan

Definition: HTTP request logger middleware for Express.

Useful during development for seeing requests such as:

GET /api/v1/users
POST /api/v1/auth/login

npm install morgan

compression

Definition: Express middleware that compresses HTTP responses when appropriate.

npm install compression

Useful for production applications where response size and performance matter.

17. Recommended Packages for Your Current Project

For your current React + Vite + Express + SQLite + authentication project, you don't need everything above.

Frontend

npm install react-router-dom react-icons

Development:

npm install -D vite @vitejs/plugin-react eslint prettier

If you're using Tailwind, install the Tailwind packages required by the version/setup you're following.

Backend

npm install express cors dotenv cookie-parser better-sqlite3 bcrypt jsonwebtoken zod helmet express-rate-limit

Development:

npm install -D nodemon eslint prettier

Testing:

npm install -D vitest supertest

18. Packages You Should Learn First

Don't try to learn 30 packages at once.

For your current level, I'd prioritize them like this:

Level 1 — Core

express

react

react-router-dom

better-sqlite3

dotenv

cors

bcrypt

Level 2 — Authentication and validation

jsonwebtoken

zod

cookie-parser

Level 3 — Code quality

eslint

prettier

nodemon

Level 4 — Security

helmet

express-rate-limit

Level 5 — Testing

vitest

supertest

@testing-library/react

Level 6 — Specialized features

multer

socket.io

axios

morgan

compression

concurrently

19. Important Software Engineering Principle

Being a full-stack developer does not mean installing every popular npm package.

A professional approach is:

Problem
   ↓
Choose the simplest appropriate solution
   ↓
Install the required dependency
   ↓
Understand why you're using it
   ↓
Keep dependencies maintained

For example, if native fetch() handles your API requests well, you don't need Axios just because Axios is popular.

Likewise, if manual validation is small and clear, you don't necessarily need Zod immediately. As the application grows, a validation library can make your code easier to maintain.

20. Quick Reference

Package

Purpose

Priority

react

UI library

Essential

react-dom

React browser rendering

Essential

express

Backend/API framework

Essential

react-router-dom

React routing

Essential

better-sqlite3

SQLite database

Essential for SQLite

dotenv

Environment variables

Essential

cors

Cross-origin requests

Common

bcrypt

Password hashing

Essential for password auth

jsonwebtoken

JWT authentication

Common

cookie-parser

Cookie parsing

Common

zod

Schema validation

Recommended

helmet

Security headers

Recommended

express-rate-limit

Rate limiting

Recommended

nodemon

Auto-restart backend

Development

eslint

Code analysis

Recommended

prettier

Code formatting

Recommended

vitest

Testing

Recommended

supertest

API testing

Recommended

axios

HTTP client

Optional

multer

File uploads

Feature-specific

socket.io

Real-time communication

Feature-specific

morgan

HTTP logging

Development

compression

Response compression

Production

concurrently

Run multiple commands

Development

21. Before Installing a Package

Ask yourself:

What problem does this package solve?

Can I solve this with JavaScript/Node/React itself?

Is this package actively maintained?

Do I actually need it in this project?

Do I understand the basic purpose of the package?

Don't install a package just because another developer uses it.

Understanding why you use a dependency is more important than having a large package.json.