# Supa Sailrs Stack

Based on the [supa-fly-stack](https://github.com/rphlmr/supa-fly-stack) with some notable changes:

- new accounts are not marked as _confirmed_ in Supabase by default. You have to click the link in the e-Mail!
  > **Note:** it's good to have your own [eMail Server](https://docker-mailserver.github.io/docker-mailserver/latest) b/c Supabase has rate limits these days
- passwords are optional 🎉 It's totally possible to register and login without having to specify a password at all!
- we strive to have all the Remix future flags enabled
- all the tech we love ❤️

Learn more about [Remix Stacks](https://remix.run/stacks).

## What's in the stack

- [_future proof_](https://remix.run/docs/en/main/pages/v2) Remix.run application
- [HMR and Hot Data Revalidation](https://remix.run/docs/en/main/other-api/dev-v2) with Remix CLI (v2)
- Production-ready [Supabase Database](https://supabase.com/)
- Email/Password and/or Magic Link Authentication and [cookie-based sessions](https://remix.run/docs/en/v1/api/remix#createcookiesessionstorage)
- GraphQL via Supabase' [pg_graphql](https://supabase.github.io/pg_graphql) and [Apollo Client](https://www.apollographql.com/docs/react/)
- [GraphQL Code Generator](https://the-guild.dev/graphql/codegen)
- Prometheus Endpoint for collecting metrics
- database migrations with [Prisma](https://prisma.io)
- Styling with [Tailwind](https://tailwindcss.com/) and [class variance authority](https://github.com/joe-bell/cva)
- PWA with [@sailrs/pwa](https://github.com/sailrs-io/pwa)
- COMING SOON: persisted state management and complete offline support via [zustand](https://github.com/pmndrs/zustand)
- [GitHub Actions](https://github.com/features/actions) to deploy on merge to production and staging environments
- End-to-end testing with [Cypress](https://cypress.io)
- Local third party request mocking with [MSW](https://mswjs.io)
- Unit testing with [Vitest](https://vitest.dev) and [Testing Library](https://testing-library.com)
- Code formatting with [Prettier](https://prettier.io)
- Linting with [ESLint](https://eslint.org)
- Static Types with [TypeScript](https://typescriptlang.org)
- [Fly.io deployment](https://fly.io) with [Docker](https://www.docker.com/products/docker-desktop/)
- Healthcheck endpoint for [Fly backups region fallbacks](https://fly.io/docs/reference/configuration/#services-http_checks)

Not a fan of bits of the stack? Fork it, change it, and use `npx create-remix --template your/repo`! Make it your own.

## Install

```
npx create-remix --template sailrs-io/supa-sailrs-stack

```

## Development

- Create a [Supabase Database](https://supabase.com/) (free tier gives you 2 projects/databases)
  > **Note:** Only one for playing around with Supabase or 2 for `staging` and `production`
- Visit https://supabase.com/dashboard/project/{PROJECT}/settings/api to find your _Project API Keys_
- copy `.env.example` to `.env` and fill in the required values

- This step only applies if you've opted out of having the CLI install dependencies for you:

  ```sh
  npx remix init
  ```

- Initial setup:

  ```sh
  npm run setup
  ```

- Start dev server:

  ```sh
  npm run dev
  ```

## Deployment

> Do what you know if you are a Fly.io expert.

This Remix Stack comes with two GitHub Actions that handle automatically deploying your app to production and staging environments.

Prior to your first deployment, you'll need to do a few things:

- [Install Fly](https://fly.io/docs/getting-started/installing-flyctl/)

- Sign up and log in to Fly

  ```sh
  fly auth signup
  ```

  > **Note:** If you have more than one Fly account, ensure that you are signed into the same account in the Fly CLI as you are in the browser. In your terminal, run `fly auth whoami` and ensure the email matches the Fly account signed into the browser.

- Create two apps on Fly, one for staging and one for production:

  ```sh
  fly apps create supa-fly-stack-template
  fly apps create supa-fly-stack-template-staging  # ** not mandatory if you don't want a staging environnement **
  ```

  > **Note:** For production app, make sure this name matches the `app` set in your `fly.toml` file. Otherwise, you will not be able to deploy.

  - Initialize Git.

  ```sh
  git init
  ```

- Create a new [GitHub Repository](https://repo.new), and then add it as the remote for your project. **Do not push your app yet!**

  ```sh
  git remote add origin <ORIGIN_URL>
  ```

- Add a `FLY_API_TOKEN` to your GitHub repo. To do this, go to your user settings on Fly and create a new [token](https://web.fly.io/user/personal_access_tokens/new), then add it to [your repo secrets](https://docs.github.com/en/actions/security-guides/encrypted-secrets) with the name `FLY_API_TOKEN`.

- Add a `SESSION_SECRET`, `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE`,`SUPABASE_ANON_PUBLIC`, `SERVER_URL` and `DATABASE_URL` to your fly app secrets

  > **Note:** To find your `SERVER_URL`, go to [your fly.io dashboard](https://fly.io/apps/supa-fly-stack-template-3a36)

  To do this you can run the following commands:

  ```sh
  # production (--app name is resolved from fly.toml)
  fly secrets set SESSION_SECRET=$(openssl rand -hex 32)
  fly secrets set SUPABASE_URL="https://{YOUR_INSTANCE_NAME}.supabase.co"
  fly secrets set SUPABASE_SERVICE_ROLE="{SUPABASE_SERVICE_ROLE}"
  fly secrets set SUPABASE_ANON_PUBLIC="{SUPABASE_ANON_PUBLIC}"
  fly secrets set DATABASE_URL="postgres://postgres:{POSTGRES_PASSWORD}@db.{YOUR_INSTANCE_NAME}.supabase.co:5432/postgres"
  fly secrets set SERVER_URL="https://{YOUR_STAGING_SERVEUR_URL}"

  # staging (specify --app name) ** not mandatory if you don't want a staging environnement **
  fly secrets set SESSION_SECRET=$(openssl rand -hex 32) --app supa-fly-stack-template-staging
  fly secrets set SUPABASE_URL="https://{YOUR_STAGING_INSTANCE_NAME}.supabase.co" --app supa-fly-stack-template-staging
  fly secrets set SUPABASE_SERVICE_ROLE="{STAGING_SUPABASE_SERVICE_ROLE}" --app supa-fly-stack-template-staging
  fly secrets set SUPABASE_ANON_PUBLIC="{STAGING_SUPABASE_ANON_PUBLIC}" --app supa-fly-stack-template-staging
  fly secrets set DATABASE_URL="postgres://postgres:{STAGING_POSTGRES_PASSWORD}@db.{STAGING_YOUR_INSTANCE_NAME}.supabase.co:5432/postgres" --app supa-fly-stack-template-staging
  fly secrets set SERVER_URL="https://{YOUR_STAGING_SERVEUR_URL}" --app supa-fly-stack-template-staging

  ```

  If you don't have openssl installed, you can also use [1password](https://1password.com/generate-password) to generate a random secret, just replace `$(openssl rand -hex 32)` with the generated secret.

Now that everything is set up you can commit and push your changes to your repo. Every commit to your `main` branch will trigger a deployment to your production environment, and every commit to your `dev` branch will trigger a deployment to your staging environment.

> **Note:** To deploy manually, just run `fly deploy` (It'll deploy app defined in fly.toml)

## GitHub Actions

> DISCLAIMER : Github actions ==> I'm not an expert about that. Read carefully before using it

We use GitHub Actions for continuous integration and deployment. Anything that gets into the `main` branch will be deployed to production after running tests/build/etc. Anything in the `dev` branch will be deployed to staging.

👉 **You have to add some env secrets for cypress.** 👈

Add a `SESSION_SECRET`, `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE`,`SUPABASE_ANON_PUBLIC`, `SERVER_URL` and `DATABASE_URL` to [your repo secrets](https://docs.github.com/en/actions/security-guides/encrypted-secrets)

## Testing

### Cypress

We use Cypress for our End-to-End tests in this project. You'll find those in the `cypress` directory. As you make changes, add to an existing file or create a new file in the `cypress/e2e` directory to test your changes.

We use [`@testing-library/cypress`](https://testing-library.com/cypress) for selecting elements on the page semantically.

To run these tests in development, complete your `.env` and run `npm run test:e2e:dev` which will start the dev server for the app as well as the Cypress client. Make sure the database is running in docker as described above.

We also have a utility to auto-delete the user at the end of your test. Just make sure to add this in each test file:

```ts
afterEach(() => {
  cy.cleanupUser();
});
```

That way, we can keep your test db clean and keep your tests isolated from one another.

### Vitest

For lower level tests of utilities and individual components, we use `vitest`. We have DOM-specific assertion helpers via [`@testing-library/jest-dom`](https://testing-library.com/jest-dom).

### Type Checking

This project uses TypeScript. It's recommended to get TypeScript set up for your editor to get a great in-editor experience with type checking and auto-complete. To run type checking across the whole project, run `npm run typecheck`.

### Linting

This project uses ESLint for linting. That is configured in `.eslintrc.js`.

### Formatting

We use [Prettier](https://prettier.io/) for auto-formatting in this project. It's recommended to install an editor plugin (like the [VSCode Prettier plugin](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)) to get auto-formatting on save. There's also a `npm run format` script you can run to format all files in the project.

## Start working with Supabase

You are now ready to go further, congrats!

To extend your Prisma schema and apply changes on your supabase database :

- Make your changes in [./app/database/schema.prisma](./app/database/schema.prisma)
- Prepare your schema migration
  ```sh
  npm run db:prepare-migration
  ```
- Check your migration in [./app/database/migrations](./app/database)
- Apply this migration to production

  ```sh
  npm run db:deploy-migration
  ```

## If your token expires in less than 1 hour (3600 seconds in Supabase Dashboard)

If you have a lower token lifetime than me (1 hour), you should take a look at `REFRESH_ACCESS_TOKEN_THRESHOLD` in [./app/modules/auth/session.server.ts](./app/modules/auth/session.server.ts) and set what you think is the best value for your use case.

## Supabase RLS

You may ask "can I use RLS with Remix".

The answer is "Yes" but It has a cost.

Using Supabase SDK server side to query your database (for those using RLS features) adds an extra delay due to calling a Gotrue rest API instead of directly calling the Postgres database (and this is fine because at first Supabase SDK is for those who don't have/want backend).

In my benchmark, it makes my pages twice slower. (~+200ms compared to a direct query with Prisma)

## Supabase login with magic link

In order to make the register/login with magic link work, you will need to add some configuration to your Supabase.
You need to add the site url as well as the redirect urls of your local, test and live app that will be used for oauth
To do that navigate to Authentication > URL configiration and add the folowing values:

- https://localhost:3000/oauth/callback
- https://localhost:3000/reset-password
- https://staging-domain.com/oauth/callback
- https://staging-domain.com/reset-password
- https://live-domain.com/oauth/callback
- https://live-domain.com/reset-password

https://supabase.com/partners/integrations/prisma
https://supabase.github.io/pg_graphql
https://www.prisma.io/docs/guides/database/supabase
