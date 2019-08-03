var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var cleancss = require('gulp-clean-css');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();
var autoPrefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');
var tinypngs = require('gulp-tinypng-compress');







/*************************
    DEFAULT TASKS
**************************/

/* Serve */
function serve(done) {
    browserSync.init({
        server: {
            baseDir: './src'
        }
    })
    done();
}

/* Sass Compiler */
function sassCompile(done) {
    gulp.src('./src/assets/sass/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'expanded'
        }).on('error', sass.logError))
        .pipe(autoPrefixer('last 10 versions'))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./src/assets/css'))
        .pipe(browserSync.reload({
            stream: true
        }));
    done();
}

/* Reload */
function reload(done) {
    browserSync.reload();
    done();
}

/* Watch Files */
function watchFiles(done) {
    gulp.watch('./src/assets/sass/**/*.scss', sassCompile);
    gulp.watch('./src/*.html', reload);
    gulp.watch('./src/assets/js/**/*.js', reload);
    done();
}





/*************************
    DIST TASKS
**************************/

/* Optimize Images */
function distImageOptimize(done) {
    gulp.src('./src/assets/images/**/*.{png,jpg,jpeg}')
        .pipe(tinypngs({
            key: 'xYMAfkMBuKzyZZdshqwIuYfv8I8bmWBe',
            sigFile: './src/images/.tinypng-sigs',
            log: true
        }))
        .pipe(gulp.dest('./dist/assets/images'));

    gulp.src('./src/assets/images/**/*.{gif,ico,svg}')
        .pipe(gulp.dest('./dist/assets/images'));

    done();
}


/* Move Fonts */
function distFonts(done) {
    gulp.src('./src/assets/fonts/*').pipe(gulp.dest('./dist/assets/fonts'));
    done();
}


/* Move css with minify */
function distCss(done) {
    gulp.src('./src/assets/css/**/*.css')
        .pipe(cleancss())
        .pipe(gulp.dest('./dist/assets/css'));

    gulp.src('./src/assets/css/style.css')
        .pipe(cleancss())
        .pipe(gulp.dest('./dist/assets/css'));

    done();
}


/* Move js with minify */
function distJs(done) {
    gulp.src('./src/assets/js/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/assets/js'));
    done();
}


/* Move HTML files */
function distHTML(done) {
    gulp.src('./src/*.html')
        .pipe(gulp.dest('dist'));

    done();
}


function copyPluginFile(done) {
    gulp.src('./src/assets/js/jquery.autodecor.js')
        .pipe(gulp.dest('./'));

    gulp.src('./src/assets/js/jquery.autodecor.js')
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./'));

    gulp.src('./src/assets/css/autodecor.css')
        .pipe(gulp.dest('./'));

    gulp.src('./src/assets/css/autodecor.css')
        .pipe(cleancss())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./'));

    done();
}


/* Tasks */
gulp.task("default", gulp.parallel(serve, sassCompile, watchFiles));
gulp.task("dist", gulp.series(copyPluginFile, gulp.parallel(distImageOptimize, distFonts, distCss, distJs, distHTML)));