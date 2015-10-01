import gulp         from 'gulp';
import plumber      from 'gulp-plumber';
import gutil        from 'gulp-util';
import gulpif       from 'gulp-if';
import rupture      from 'rupture';
import stylus       from 'gulp-stylus';
import autoprefixer from 'gulp-autoprefixer';
import cmq          from 'gulp-combine-media-queries';
import minifyCss    from 'gulp-minify-css';
import csscomb      from 'gulp-csscomb';
import rename       from 'gulp-rename';
import errorHandler from '../utils/errorHandler';
import paths        from '../paths';
import { browsers } from '../../package.json';

gulp.task('styles', () => (
	gulp.src('*.styl', {
			cwd: 'app/styles',
			nonull: true
		})
		.pipe(plumber({errorHandler: errorHandler}))
		.pipe(stylus({
			errors: true,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> bc6e3c0eda11faab3411cc4ac1075fe21a57c262
			use: rupture(),
			url: { name: 'datauri'},
=======
			url: { name: 'datauri', limit : false},
			use: rupture(),
>>>>>>> 41cba2e0dc9e584a78492875e4aca83878474bfc
<<<<<<< HEAD
=======
			url: { name: 'datauri', limit : false},
			use: rupture(),
=======
			use: rupture(),
			url: { name: 'datauri'},
>>>>>>> add responsive
>>>>>>> parent of 16382e2... update
=======
>>>>>>> bc6e3c0eda11faab3411cc4ac1075fe21a57c262
			sourcemap: gutil.env.debug ? {
				comment: false,
				inline: true
			} : false
		}))
		.pipe(autoprefixer(
			'Android >= ' + browsers.android,
			'Chrome >= ' + browsers.chrome,
			'Firefox >= ' + browsers.firefox,
			'Explorer >= ' + browsers.ie,
			'iOS >= ' + browsers.ios,
			'Opera >= ' + browsers.opera,
			'Safari >= ' + browsers.safari
		))
		.pipe(gulpif(!gutil.env.debug, cmq()))
		.pipe(gulpif(!gutil.env.debug, minifyCss()))
		.pipe(gulpif(gutil.env.csscomb, csscomb()))
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest(paths.styles))
));
