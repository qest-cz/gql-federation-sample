

# MonorepoWs

This project was generated using [Nx](https://nx.dev).

<p style="text-align: center;"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="450"></p>

🔎 **Smart, Fast and Extensible Build System**

## Adding capabilities to your workspace

Nx supports many plugins which add capabilities for developing different types of applications and different tools.

These capabilities include generating applications, libraries, etc as well as the devtools to test, and build projects as well.

Below are our core plugins:

- [React](https://reactjs.org)
  - `npm install --save-dev @nrwl/react`
- Web (no framework frontends)
  - `npm install --save-dev @nrwl/web`
- [Angular](https://angular.io)
  - `npm install --save-dev @nrwl/angular`
- [Nest](https://nestjs.com)
  - `npm install --save-dev @nrwl/nest`
- [Express](https://expressjs.com)
  - `npm install --save-dev @nrwl/express`
- [Node](https://nodejs.org)
  - `npm install --save-dev @nrwl/node`

There are also many [community plugins](https://nx.dev/community) you could add.

## Generate an application

Run `nx g @nrwl/react:app my-app` to generate an application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

## Generate a library

Run `nx g @nrwl/react:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are shareable across libraries and applications. They can be imported from `@monorepo-ws/mylib`.

## Development server

Run `nx serve my-app` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `nx g @nrwl/react:component my-component --project=my-app` to generate a new component.

## Build

Run `nx build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `nx test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `nx e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.



## ☁ Nx Cloud

### Distributed Computation Caching & Distributed Task Execution

<p style="text-align: center;"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-cloud-card.png"></p>

Nx Cloud pairs with Nx in order to enable you to build and test code more rapidly, by up to 10 times. Even teams that are new to Nx can connect to Nx Cloud and start saving time instantly.

Teams using Nx gain the advantage of building full-stack applications with their preferred framework alongside Nx’s advanced code generation and project dependency graph, plus a unified experience for both frontend and backend developers.

Visit [Nx Cloud](https://nx.app/) to learn more.

## How to add prisma to app
We have to create separate lib of prisma client for every using app. All npm commands have to set to global `package.json` of monorepo. Here is link where is tutorial what we have to install. `https://www.prisma.io/docs/getting-started/quickstart`

create lib:

`nx g @nrwl/node:lib ourName --buildable`

Now we have to create folder prisma with schema. File `schema.prisma` can use .env in our created lib.

After init schema we can run migration. We have to be in directory of our new lib.

`npx prisma migrate dev --name init`

Next we have to generate prisma client from our schema. Remove everything in src expect `index.ts` and run `yarn prisma generate --schema=./libs/prisma-article-client/prisma/schema.prisma`. Output is defined in `schema.prisma`. 

In `src/index.ts` define export of created directory (in my example `export * from "./generated"`)

Now we can import `PrismaClient` from this our lib.

My prisma client lib example you can find in `lib/prisma-article-app-client`

# Federation gateway
  If we want to run federation gateway when no run other application (subraphs) we can run it with supergraph.

  For creating supergraph i created separate application `update-supergraph-app`. This app is trying create supergraph in interval. 

  When we want to create supergraph, we have to prepare all subgraphs. I solve this with `rover subgraph introspect app_url > new_file.graphql`.

  When we run 

  app have to running.

  when we create all subraphs we have to create  config file for gateway. In src we create `supergraph-config.yml` where are define subgraphs and app url.

  subgraphs:
    users:
      routing_url: http://localhost:8080/graphql
      schema:
        file: ./services/userapp.graphql
      ....next apps

  No we can create super graph.
  `rover supergraph compose --config  'app_url' > new_file.graphql`

  # update-supergraph-app
  Application in interval try create all subgraphs. When some of apps aren´t running, remove this files. When are all apps running and are created subgraphs it try create supergraph. When is supergraph created, supergraph compare with actual version supergraph of gateway. When is diferent, update file 'supergraph.graphql' with content of new file. If new supergraph is same with actual supergraph, remove this new file becase are duplicated. 

# Gateway function
We tryload last supergraph, creta new gateway whith loaded schema. After run listen on server we run period function which check actual supergraphs. When is new, function change schema in gateway and restart server.










