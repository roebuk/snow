var gulp = require('gulp'),
    to5 = require('gulp-6to5'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    plumber = require('gulp-plumber'),
    sourcemaps = require('gulp-sourcemaps'),
    jsFiles = './js/snow.js';


gulp.task('js', function() {
    return gulp.src(jsFiles)
        .pipe(plumber())
        .pipe(rename({suffix:'.min'}))
        .pipe(sourcemaps.init())
        .pipe(to5())
        .pipe(uglify())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('js'));
});

gulp.task('watch', function() {
    gulp.watch(jsFiles, ['js']);
});

gulp.task('default', ['watch']);
