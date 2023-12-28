# Clienteling typescript service template

This project contains the boilerplate of L'Occitane Clienteling services.

It is a Node.js project written in Typescript.

## Prerequisites

-   Node.js / npm : you can install them from [https://nodejs.org/](https://nodejs.org/).

## Installation

-   Download sources

```bash
git clone git@github.com:loccitane-group/typescript-service-template.git
cd typescript-service-template
```

-   Install dependencies

```bash
npm ci
```

---

## Usage

-   Run the app in development mode

```bash
npm start
```

-   Build the app in _/dist_ folder

```bash
npm run build
```

---

## Project structure

-   `.github/` : The deployment pipeline supported by env variable
-   `.husky/` : scripts which lint and format the staged files before committing
-   `src/` : The application source code
    -   `routes/` : Service routes
    -   `index.ts` : The app entry point
    -   `server.ts` : The init function to run the server
-   `tests/` : The unit and integration tests

## Authors

[The Clienteling Team](mailto:central.clienteling@loccitane.com)
