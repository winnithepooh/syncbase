<p align="center">
  <a href="http://syncbase.tv">
    <img src="logo.svg">
  </a>
</p>

[![Lint](https://github.com/AndysonDK/syncbase/actions/workflows/lint.yml/badge.svg)](https://github.com/AndysonDK/syncbase/actions/workflows/lint.yml)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

I welcome any contribution, literally!

### How to contribute (will add a proper and more detailed guide later)

#### Project setup

- I highly recommend to use vscode, but it's also fine to use a different code editor!
- Have node installed, preferably a version that is minimum 14 (I'm using v14.18.1 LTS)
- Have yarn installed
- Have postgresql installed, also the user postgres needs to have the password postgres
- Have redis installed
- Clone this repo
- Run `yarn` inside of the root folder of the repo to install all necessary packages
- Make sure that the postgres instance and the redis instance are up and running before starting the node.js backend
- Two ways to run the node.js backend:
  - `yarn workspace @syncbase/server dev`
  - or `cd packages/server && yarn dev`
- Two ways to run the next.js frontend:
  - `yarn workspace @syncbase/web dev`
  - or `cd packages/web && yarn dev`

#### Contribution flow

- Fork this repo and submit a pull request pointing to the main branch of the original repo

### TODO

- Urql setup & Build register and login page and connect them to the user server api
- Properly implement CSRF protection
- Properly implement session cookie expiration
- Storybook
- Implement Urql graphcache
- Actually develop the project
- Deploy web on vercel and server and it's services on DO droplet and maybe some automatic deployment with gh actions
- Maybe add standard-version/semantic-release?
- Add more .md files to properly document the contribution process and attract contributors
- Add docker & docker-compose for development?
- Add tests e.g. jest for unit and integration tests and crypress for E2E tests

### Notes

- Use dataloder for relational data fetching
- Implement SEO optimizations later
- Implement OG meta tags later
- Datadog?
- Sentry?
