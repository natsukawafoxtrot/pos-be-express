# xprs

A minimalist Express.js v5 application scaffold written in **TypeScript**, designed to run on **Bun** and integrated with **MikroORM** for PostgreSQL. This project favors modern Node.js semantics (ESM), strong typing, and a clean separation between development and build workflows.

---

## Overview

`xprs` is intended as a lightweight backend foundation for APIs or internal services with the following characteristics:

* **Express v5** for HTTP routing and middleware
* **TypeScript** for static typing and maintainability
* **Bun** as the development runtime
* **MikroORM** as the ORM layer
* **PostgreSQL** as the primary database
* Native **ES Modules** (`"type": "module"`)

---

## Tech Stack

* **Runtime**: Bun
* **Language**: TypeScript
* **Framework**: Express 5
* **ORM**: MikroORM 6
* **Database**: PostgreSQL
* **Config Management**: dotenv

---

## Project Structure

```
.
├── src/
│   ├── index.ts        # Application entry point
│   ├── controller/     # Route and Controller
│   ├── databases/       # Database related (eg. Models, Repository, etc.)
├── dist/               # Compiled output (tsc)
├── package.json
├── tsconfig.json
└── .env
```

---

## Requirements

* **Bun** >= 1.x
* **PostgreSQL** >= 13

---

## Installation

Install dependencies using Bun:

```bash
bun install
```

---

## Environment Variables

Create a `.env` file in the project root:

```
```
---

## Available Scripts

### Development

Runs the application directly using Bun without a build step:

```bash
bun run dev
```

This executes:

```
bun run ./src/index.ts
```

### Build

Compiles the TypeScript source into JavaScript using `tsc`:

```bash
bun run build
```

Output will be emitted according to your `tsconfig.json` configuration (commonly `dist/`).

---

## Express + TypeScript Notes

* Express v5 typings are provided via `@types/express@5`
* The project uses ESM; imports must use full module syntax
* Custom request augmentation (e.g. `req.db`) should be handled via module augmentation

Example:

```ts
declare global {
  namespace Express {
    interface Request {
      db: MikroORM;
    }
  }
}
```

---

## License

ISC

---

## Author

Not specified
