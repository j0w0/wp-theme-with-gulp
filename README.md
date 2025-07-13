# Wordpress Theme + Gulp Starter

Starter Wordpress theme with Gulp build process.

Watch JavaScript, SCSS, and PHP files in this theme for changes, transform/minify, and utilize Browsersync for live reloading.

## Installation

Set up a local Wordpress environment or development server. I use [Local](https://localwp.com/) for local development.

Upload and activate this theme in wp-admin.

## Development

Start your Wordpress environment/server.

cd into theme directory

```bash
  cd j0w0-wp-theme-gulp
```

Install dependencies

```bash
  npm install
```

Watch files (JS, SCSS, PHP) and reload on update

```bash
  npm run dev
```

Or just use `gulp` to transform/minify JS and SCSS once without live reloading

```bash
  gulp
```
