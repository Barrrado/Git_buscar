const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const sourcemaps = require('gulp-sourcemaps');

function compilaSass () {
    return gulp.src('src/sass/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist/css'))
    .pipe(cleanCSS({format: 'beautify'}))
    .pipe(gulp.dest('dist/css'))
    }
    function html () {
        return gulp.src('src/*.html')
        .pipe(gulp.dest('dist'))
        }
    function js () {
        return gulp.src('src/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
        }
        function watch () {
            gulp.watch('src/sass/*.scss', compilaSass);
            gulp.watch('src/*.html', html);
            gulp.watch('src/js/*.js', js);
            }
            exports.watch = watch;
            exports.default = gulp.series(watch);