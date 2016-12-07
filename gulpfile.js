var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();

gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./"
    });
    gulp.watch("sass/*.scss", ['sass']);
    gulp.watch(["*.html","js/*.*"]).on('change', browserSync.reload);
});


gulp.task('sass', function() {
    return gulp.src("sass/**/*.scss")
      .pipe(sass().on('error', sass.logError))
      .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade:false
      }))
      .pipe(gulp.dest('./css'))
      .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);
