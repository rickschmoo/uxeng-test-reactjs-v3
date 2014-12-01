var browserify = require('gulp-browserify');
var gulp = require('gulp');
var gutil = require('gulp-util');
var rename = require('gulp-rename');
var del = require('del');
var livereload = require('gulp-livereload');
var connect = require('gulp-connect');
var sass = require('gulp-sass');
var concat = require('gulp-concat');

// var jshint = require('gulp-jshint');

var paths = {
  output: 'www',
  htmlsrc: 'src/*.html',
  htmldest: 'www',
  jssrc: 'src/js/*.js',
  jsxsrc: 'src/jsx/*.jsx',
  jsdest: 'www/js',
  scsssrc: 'src/styles/*.scss',
  cssdest: 'www/css',
  assetssrc: 'src/assets/img/*.jpg',
  assetsdest: 'www/assets/img',
  datasrc: 'src/data/*',
  datadest: 'www/data',
  npm: './node_modules'
};

gulp.task('webserver', function() {
  connect.server({
    root: 'www',
    livereload: true,
    port: '8000'
  });
});

gulp.task('clean', function(cb) {
    del(['www/js', 'www/*.html'], cb);
});

// HTML
gulp.task('html', function() {
  return gulp.src('src/*.html')
    .pipe(gulp.dest('www'))
    .pipe(connect.reload());
});

// JSX
gulp.task('browserify', function() {
  var production = gutil.env.type === 'production';

  gulp.src(['src/app.js'], {read: false})

    // Browserify, and add source maps if this isn't a production build
    .pipe(browserify({
      debug: !production,
      transform: ['reactify'],
      extensions: ['.jsx']
    }))

    .on('prebundle', function(bundler) {
      // Make React available externally for dev tools
      bundler.require('react');
    })

    // Rename the destination file
    .pipe(rename('bundle.js'))

    // Output to the build directory
    .pipe(gulp.dest('www/js/'))

    .pipe(connect.reload());
});

// DATA
gulp.task("data", function() {
  return gulp.src('src/data/*.json')
     .pipe(gulp.dest(paths.datadest));
});

// IMAGES
gulp.task("assets", function() {
  return gulp.src('src/assets/img/*.jpg')
     .pipe(gulp.dest(paths.assetsdest));
});

// STYLES: SASS -> CSS
gulp.task("styles", function() {
  return gulp.src('src/styles/*.scss')
     .pipe(sass())
     .pipe(concat('styles.css'))
     .pipe(gulp.dest(paths.cssdest));
});

// Default Task
gulp.task('default', ['html', 'browserify', 'data', 'styles', 'assets', 'watch', 'webserver'] );

// Watch Files For Changes
gulp.task('watch', function() {

    livereload.listen();
    gulp.watch('src/*.html', ['html']);
    gulp.watch('src/*.js', ['browserify']);
    gulp.watch('src/jsx/*.jsx', ['browserify']);
    gulp.watch('src/styles/*.scss', ['styles']);

    gulp.watch(['www/**']).on('change', livereload.changed);
});

// // Lint Task
// gulp.task('lint', function() {
//     return gulp.src('js/*.js')
//         .pipe(jshint())
//         .pipe(jshint.reporter('default'));
// });
