# 🦸 Marvel Heroes

![](https://images.unsplash.com/photo-1618519764620-7403abdbdfe9?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)

_This is a simple app built using Next.js and TailwindCSS to be used as Kanastra's technical test. It works as a simulation so the user can check info about Marvel's characters._

## ℹ Requirements

- NodeJS (used v20.13.1 on development)
- NPM / Yarn

## 🤓 Technologies

Some of the techs used in this project:

- Next.js
- React Query
- TailwindCSS
- Recharts
- Jest
- Playwright

## ⚙️ Setup

First of all, you'll need to install the project's dependencies by running

```bash
npm install
```

Rename the `.env.example` file to `.env` and fill in both public and private keys for the API of [Marvel Developer Portal](https://developer.marvel.com/).

Then you can start the application using

```bash
npm run dev
```

After that you'll be up and running at http://localhost:3000 _(or the next available port)_

## 🚨 Tests

Test suites can be run using the following commands:

### Unit Tests

```bash
npm run test
```

or

```bash
npm run test:watch
```

### E2E Tests

```bash
npx playwright test
```

## 🚀 Build

A production build can be generated with

```bash
npm run build
```
