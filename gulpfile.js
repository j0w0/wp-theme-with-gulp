const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const uglify = require("gulp-uglify");
const cleanCSS = require("gulp-clean-css");
const concat = require("gulp-concat");
const sourcemaps = require("gulp-sourcemaps");
const rename = require("gulp-rename");
const browserSync = require("browser-sync").create();

// const babel = require('gulp-babel');
// const terser = require('gulp-terser');
// const imagemin = require('gulp-imagemin');
// const pngquant = require('imagemin-pngquant');
// const webp = require('gulp-webp');
// const cache = require('gulp-cache');

const paths = {
  php: {
    src: "**/*.php",
  },
  styles: {
    src: "assets/scss/**/*.scss",
    dest: "dist/css",
  },
  scripts: {
    src: "assets/js/**/*.js",
    dest: "dist/js",
  },
  development: {
    proxy: "https://gulp-build.local/",
  },
};

function styles() {
  return gulp
    .src(paths.styles.src)
    .pipe(sourcemaps.init())
    .pipe(sass().on("error", sass.logError))
    .pipe(cleanCSS())
    .pipe(rename({ basename: "style", suffix: ".min" }))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest(paths.styles.dest))
    .pipe(browserSync.stream());
}

function scripts() {
  return gulp
    .src(paths.scripts.src)
    .pipe(sourcemaps.init())
    .pipe(concat("main.js"))
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.scripts.dest))
    .pipe(browserSync.stream());
}

function watchFiles() {
  gulp.watch(paths.styles.src, styles);
  gulp.watch(paths.scripts.src, scripts);
}

function browserSyncServe(done) {
  browserSync.init({
    proxy: paths.development.proxy,
    open: true,
  });
  gulp.watch(paths.php.src).on("change", browserSync.reload);
  done();
}

exports.default = gulp.series(gulp.parallel(styles, scripts));
exports.watch = gulp.series(
  gulp.parallel(styles, scripts),
  browserSyncServe,
  watchFiles
);
