# Income Coding

The project is intended to serve as a template for socialmedia-like web apps.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

* docker - It is used as a tool for eaiser development
* docker-compose - It may not or may be part of the docker installation

### Local development

Following setps run in the terminal to start your local development:

```
docker-compose up
```

When you need to modify deps.ts file in deno-api project you also need to rebuild its Dockerfile. You can accomplish that by running:

```
docker-compose up --build
```
*This is needed to re-cache deno dependencies in the container.*

### Recommended extensions for VSCode

* Deno | denoland - Deno linting, type checking, formatting etc.
* ES7 React/Redux/GraphQL/React-Native snippets | dsznajder - React snippets, whisper

## Built With

* [Deno](https://deno.land/) - The secure typescript runtime used for B-E API
* [Mongo](https://www.mongodb.com/) - The first NoSQL database used by the API
* [Create React App](https://create-react-app.dev/) - A tool for building application with React library used for F-E

## Authors

* **Petr Kubicek** - [KubicekPetr](https://github.com/KubicekPetr)
* **Andrei Bucur** - [Abucur980](https://github.com/Abucur980)
