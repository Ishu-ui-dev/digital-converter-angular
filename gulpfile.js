//require
var gulp = require('gulp'),
uglify = require('gulp-uglify'),
rename = require('gulp-rename'),
autoprefixer = require('gulp-uglify'),
compass = require('gulp-compass'),
concat = require('gulp-concat'),
plumber = require('gulp-plumber')
rename = require('gulp-rename')
autoprefixer = require('gulp-autoprefixer'),
browserSync = require('browser-sync'),
inject = require('gulp-inject'),
clean = require('gulp-clean'),
debug = require('gulp-debug')


 
var allCss = "src/**/*.css";
allJs =  "src/**/*.js";
vendorJs = [
			"node_modules/angular-file-saver/dist/angular-file-saver.min.js",
			"node_modules/angular-file-saver/dist/angular-file-saver.bundle.min.js"
		    ]


var config = {
    server: {
        baseDir: './build'
    },
    files: ['./build/**/*'],
    tunnel: false,
    host: 'localhost',
    port: 3000,
    logPrefix: 'frontend',
    watchTask: true
}

gulp.task('serve', function() {
   return setTimeout(function() {
        browserSync(config)
    })
})

gulp.task('allCss', function() {
   return gulp.src(allCss)
    .pipe(plumber())
    .pipe(concat('all.min.css'))
    .pipe(gulp.dest('build/css'))
})

gulp.task('allJs', function() {
   return gulp.src(allJs)
    .pipe(plumber())
    //.pipe(uglify())
    .pipe(concat('all.min.js'))
    .pipe(gulp.dest('build/js'))
})

gulp.task('vendorJs', function() {
   return gulp.src(vendorJs)
    .pipe(plumber())
    //.pipe(uglify())
    .pipe(concat('vendor.min.js'))
    .pipe(gulp.dest('build/js'))
})

gulp.task('html', function() {
    return gulp.src("src/*.html")
    .pipe(plumber())
    .pipe(gulp.dest('build/'))
})

gulp.task('assets', function() {
    return gulp.src('src/assets/images/*.*')
    .pipe(plumber())
    .pipe(gulp.dest('build/assets/images'))
})

gulp.task('allHtml', function() {
    return gulp.src('src/app/**/*.html')
    .pipe(gulp.dest('build/app'))
})

gulp.task('injectAll', ['allCss', 'allJs', 'vendorJs'], function() {
    return gulp.src('src/index.html')
    .pipe(debug())
     .pipe(inject(gulp.src(['build/js/vendor.min.js', 'build/js/all.min.js', 'build/css/all.min.css'], {read: false}), {ignorePath: 'build/',} ))
     .pipe(plumber())
    .pipe(gulp.dest('build')) 
})

//watch task
gulp.task('watch', function() {
    // gulp.watch([vendorCssPath], ['vendorCss']);
    gulp.watch(allCss, ['allCss']);
    // gulp.watch([vendorJsPath], ['vendorJS']);
    gulp.watch(allJs, ['allJs']);
	gulp.watch(vendorJs, ['vendorJs']);
    //gulp.watch('src/app/**/*.html', ['allHtml']);
    //gulp.watch("src/*.html", ['html']);
})

//default task
gulp.task('default', ['html', 'assets', 'allHtml', 'injectAll',  'serve', 'watch']);




