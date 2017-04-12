var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var babel = require('gulp-babel');
var browserSync = require('browser-sync').create();
var uglifycss = require('gulp-uglifycss');

// -------------  Gulp Task!

//Breowser-sync
gulp.task('browser-sync', function() {
	browserSync.init({
		server: {
			baseDir: "app"
		}
	})
});

// SASS
gulp.task('sass', function() {
	return gulp.src('./app/sass/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./app/css'))
		.pipe(browserSync.stream());
});

// Babel
// gulp.task('babel', function() {
// 	return gulp.src('./app/es2015/*.js')
// 	.pipe(babel({
//             presets: ['es2015']
//     }))
//     .pipe(gulp.dest('./app/js'));
// })

// CSS uglifycss
gulp.task('css', function () {
  gulp.src('./app/css/*.css')
    .pipe(uglifycss({
      "maxLineLen": 80,
      "uglyComments": true
    }))
    .pipe(gulp.dest('./app/css/mini'));
});


// -------------  Watch for change!
gulp.task('watch', function() {
	gulp.watch('./app/sass/**/*.scss', ['sass']);
	gulp.watch('./app/*.html').on('change', browserSync.reload);
	// gulp.watch('./app/js/*.js', ['babel']);
	gulp.watch('./app/js/*.js', browserSync.reload);
});

// ------------ Move files

// Default
gulp.task('default', ['sass', 'browser-sync', 'watch']);
