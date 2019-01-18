const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const csswring = require('csswring');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], () => {
  browserSync.init({
    server: './views/*',
  });

  gulp.watch('public/scss/*.scss', ['sass']);
  gulp.watch('views/*.ejs').on('change', browserSync.reload);
  gulp.watch('public/js/*.js').on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', () => {
  const processors = [csswring, autoprefixer({ browsers: ['last 5 version'] })];
  return gulp
    .src('public/scss/*.scss')
    .pipe(sass())
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss(processors))
    .pipe(gulp.dest('public/css'))
    .pipe(browserSync.stream());
});

gulp.task('default', ['serve', 'sass']);
