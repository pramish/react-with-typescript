## react-typescript boilerplate

#### What is this repository for?

- Boilerplate for any **_React projects that uses TypeScript_**.

### How do I get set up?

#### Requirements

- If you're required to have multiple node version, please use `nvm` to manage your node version. Link to nvm is [Link to installing NVM.](https://github.com/nvm-sh/nvm#installing-and-updating)
- node version: v14 . ^ . ^
- npm version: 7 . ^ . ^
- Please `Do not delete yarn.lock.`

#### Installation

1. Please use `yarn`. Please do not use `npm`.
2. Clone the repo using remote url.
3. Run `yarn` to install all the dependencies.

#### Running your application

- Run `yarn start` to run your local environment.
- Run `yarn build` to build your local environment to make production ready. It is mostly used while deploying.
- Once started your client server will be running on `http://localhost:3000`.

#### Running your application using yarn

- Run `yarn start` to get the react up and running without docker container.
- Go to `localhost:3000` to access the client server for development.

- Run `yarn run docker-build-development` to build your docker image from the root of your project folder to build for development.
- Run `yarn run docker-run-development` to run your react application in development mode.
- Run `yarn run docker-stop-development` to stop your docker image in development mode.
- Run `yarn run docker-build-production` to build your docker image from the root of your project folder to build for production.
- Run `yarn run docker-run-production` to run your react application in production mode.
- Run `yarn run docker-stop-production` to stop your docker image in development mode.

#### Running your application using Docker

- Run `yarn start` to get the react up and running without docker container.
- Go to `localhost:3000` to access the client server for development.

- Run `docker-compose -f docker-compose.dev.yml build` to build your docker image from the root of your project folder to build for development.
- Run `docker-compose -f docker-compose.dev.yml up` to run your react application in development mode.
- Run `docker-compose -f docker-compose.dev.yml down` to stop your docker image in development mode.
- Run `docker-compose -f docker-compose.prod.yml build` to build your docker image from the root of your project folder to build for production.
- Run `docker run -p 80:80 --name react-app get-help-with-resume__client__production` to run your react application in production mode.
- Run `docker-compose -f docker-compose.prod.yml down` to stop your docker image in development mode.

#### Contributing Guidelines

- Create your development branch from master. Naming convention for your local branch is as below.

```
Branch Name: [feature]/[fix]/[app_name]-[Ticket Number]-[Ticket Title]
For example: feature/[app_name]-41-Create-README-file
```

- While committing your changes you have to follow the following naming convention.

```
Commit Message: [feature]/[fix]/[app_name]-[Ticket Number]: [Ticket Description of around 25-30 words.]
For example: feature/[app_name]-41: Created a README file where there are some guidelines to follow to setup our development environment, folder structure is still required to add more, and have to add more on the contributing guidelines as well.
```

### Please note that you have to change the name of your application on all of the docker file.

### Who do I talk to?

- Pramish Luitel - [hello@pramishluitel.com](hello@pramishluitel.com)
