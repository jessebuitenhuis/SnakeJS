var gulp = require('gulp');
var ts = require('gulp-typescript');
var concat = require('gulp-concat');

gulp.task('scripts', function(){
	return gulp.src('app/**/*.ts')
		.pipe(ts({
			target: 'es5',
			module: 'system'
		}))
		.pipe(gulp.dest('./built'));
});

gulp.task('watch', ['scripts'], function(){
	gulp.watch('app/**/*.ts', ['scripts']);
});