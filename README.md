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

## Using [Tailwindcss](https://tailwindui.com/documentation)

For managing styling and css builds:

```bash
$ yarn add -D tailwindcss postcss-cli autoprefixer
$ npm i --save-dev tailwindcss postcss-cli autoprefixer
```

Then add css build to **package.json** scripts section:

```json
"scripts": {
    "start": "yarn run build:twcss && react-scripts start",
    "build": "yarn run build:twcss && react-scripts build",
    ...
    "build:twcss": "postcss src/styles/tailwind.css -o src/styles/main.css"
  }
```

Debugging post css error: *dddd*:

**_autoprefixer_** package breaks **_PostCss_** and should be uninstalled and downgraded:

```bash
$ yarn remove autoprefixer
$ npm un autoprefixer
```

Then;

```
$ yarn add -D autoprefixer@9.8.6
$ npm i --save-dev autoprefixer@9.8.6
```

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
