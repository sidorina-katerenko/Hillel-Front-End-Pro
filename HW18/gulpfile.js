const gulp = require('gulp');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const sass = require('gulp-sass');

gulp.task('js', () => {
    return gulp.src('js/*.js')
        .pipe(babel())
        .pipe(uglify())
        .pipe(concat('build.js'))
        .pipe(gulp.dest('build'));
});

gulp.task('styles', () => {
    return gulp.src('scss/main.scss')
      .pipe(sass({outputStyle: 'compressed'}))
      .pipe(gulp.dest('build'));
});

gulp.task('watch', () => {
    return gulp.watch(['js/*.js', 'scss/*.scss'], {}, gulp.parallel('js', 'styles'));
});