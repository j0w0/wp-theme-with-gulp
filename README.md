# Wordpress Theme + Gulp Starter

Starter Wordpress theme with Gulp build process.

Watch JavaScript, SCSS, and PHP files in this theme for changes, transform/minify, and utilize Browsersync for live reloading.

## Installation

Upload and activate this theme in wp-admin.

## Development

Set up a local Wordpress environment or development server. I use [Local](https://localwp.com/) for local development.

Start your Wordpress environment/server.

Update `paths.development.proxy` in `gulpfile.js` with your local environment URL.

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
