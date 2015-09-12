var gulp = require('gulp'),
    less = require('gulp-less'),
    rename = require('gulp-rename');

gulp.task('js', function () {
  gulp.src('src/**/*.js')
  .pipe(rename('fluid-labels.js'))
  .pipe(gulp.dest('dist/'));
});

gulp.task('less', function () {
  gulp.src('src/**/*.less')
  .pipe(less())
  .pipe(gulp.dest('dist/'));
});

gulp.task('build', ['js', 'less']);
gulp.task('default', ['build']);
gulp.task('watch', ['build'], function () {
  gulp.watch('src/**/*.js', ['js']);
  gulp.watch('src/**/*.less', ['less']);
});
