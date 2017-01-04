var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var browserify = require('browserify');
var babel = require('babelify');
var source = require('vinyl-source-stream');

gulp.task('styles', function(){
	gulp
		.src('index.scss')
		.pipe(sass())
		.pipe(rename('app.css'))
		.pipe(gulp.dest('public'));
})

gulp.task('assets', function(){
	gulp
		.src('assets/*')
		.pipe(gulp.dest('public'));
})

gulp.task('scripts', function(){
	browserify('./src/index.js')
		.transform(babel, {presets:['es2015']})
		.bundle()
		.pipe(source('index.js'))
		.pipe(rename('app.js'))
		.pipe(gulp.dest('public'));
})

gulp.task('default', ['styles', 'assets', 'scripts'])