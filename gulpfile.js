var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jshintReporter = require('jshint-stylish');
var watch = require('gulp-watch');
var shell = require('gulp-shell');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');


var paths = {
	'src':['./models/**/*.js','./routes/**/*.js', 'keystone.js', 'package.json']

,
	'style': {
		all: './public/styles/**/*.scss',
		output: './public/styles/'
	}

};

// gulp lint
gulp.task('lint', function(){
	gulp.src(paths.src)
		.pipe(jshint())
		.pipe(jshint.reporter(jshintReporter));
});

// gulp watcher for lint
gulp.task('watch:lint', function () {
	gulp.watch(paths.src, ['lint']);
});
 

gulp.task('watch:sass', function () {
	gulp.watch(paths.style.all, ['sass']);
});

gulp.task('sass', function(){
	gulp.src(paths.style.all)
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest(paths.style.output));
		console.log('a');
});


gulp.task('runKeystone', shell.task('node keystone.js'));
gulp.task('watch', [

  'watch:sass',
  'runKeystone',
  'watch:lint'
]);

gulp.task('default', ['watch', 'runKeystone']);
