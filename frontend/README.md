# Blog recipes

The blog recipes web app.
Current tech-stack:

* Next.js,
* TypeScript,
* Strapi,
* Chakra UI and Emotion (CSS in JS)
* Vercel,
* Heroku

## Requirements
* node === 16.14.2,
* git >= 2.36.0.

## Deploy on Vercel
For deploying the frontend app we use the Vercel platform.

## Deploy on Heroku
For deploying the backend app strapi we use the Heroku.

## Installation
I highly recommend using yarn as a package manager.

```bash
yarn install
# or
npm install
```

## Development
Download Environment Variables created for the Development Environment into a local development setup using Vercel CLI:

```
vercel env pull .env.local
```

Running the development server:

```bash
yarn dev
# or
npm run dev
```
Open http://localhost:3000 with your browser to see the result.

## Deploy

Automatic deploy on vercel server