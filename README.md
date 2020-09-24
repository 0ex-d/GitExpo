# GitExpo (Front-end)

A Github code explorer that uses the Github Graphql Api for searching and filtering interesting projects.

## Usage

Use your favorite package manager to install project dependencies:

```bash
$ yarn
$ npm install
```

Then run the project with:

```bash
$ yarn start
$ npm start
```

## Code formatting: Prettier, Linter

This project requires a typescript linter which can be installed:

```bash
$ yarn add -D @typescript-eslint/parser @typescript-eslint/eslint-plugin
$ npm i --save-dev @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

Refer to **_.eslintrc.js_** file for more info on prettier.

## User Requirements

- Be able to filter by Language, Technologies etc as already on Github explorer (repeated functionality).
- Be able to MULTI SELECT languages to combine for example: *Typescript, Javascript, Go, CSS*.
- Choices by the user should be stored in localstorage of the browser so the next time he comes to the page he will see the result of the exact selection he has done.
- Colored tags for technologies using react-select like.

## Technologies

- React
- Typescript
- Apollo Client (Graphql)
- React-select package
- Tailwindcss package