# Gumball.com

This is the theme for Gumball.com.

## Git Strategy

1. Create a new branch from `main` for each page. e.g. `git checkout -b homepage`
2. Make sure to rebase with `main` before creating a PR.
3. Create a PR and add ryansilva as a reviewer.

## Getting started

1. Make sure to install the Prettier VS Code extension.
2. Make sure you have [Shopify CLI](https://github.com/Shopify/shopify-cli) installed.
3. Make sure you have Tailwind CSS installed globally:
```sh
npm install -g tailwindcss
```

## Local Development

Use Shopify CLI to start a local development server:
```sh
shopify theme dev --store tbd-inc
```

In a separate terminal window, run the following command to watch and compile Tailwind CSS:
```sh
npx tailwind -i tw-input.css -o ./assets/_custom.css --watch --minify
```

## Tailwind CSS

We use `tw-` prefix for all custom Tailwind CSS classes.
The `tw-input.css` file is the source of truth for Tailwind CSS. All changes should be made in this file and then will be compiled to `_custom.css`.
