import gulp        from 'gulp';
import runSequence from 'run-sequence';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
import ghpages     from 'gulp-gh-pages';

gulp.task('deploy', () => (
	runSequence(
		'del',
		'build',
		() => gulp.src('dist/**/*').pipe(ghpages())
	)
=======
>>>>>>> parent of 16382e2... update
=======
>>>>>>> bc6e3c0eda11faab3411cc4ac1075fe21a57c262
import ftp         from 'gulp-deploy-ftp';

gulp.task('deploy', () => (
		() => gulp.src('dist/**/*').pipe(ftp({
			host: '31.170.165.194',
			user: 'u178938601',
			password: '24B0kB3F4hW5',
			uploadPath: 'public_html/masterica'

		}))
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> bc6e3c0eda11faab3411cc4ac1075fe21a57c262
=======
import ghpages     from 'gulp-gh-pages';

gulp.task('deploy', () => (
	runSequence(
		'del',
		'build',
		() => gulp.src('dist/**/*').pipe(ghpages({branch: 'dist'}))
	)
>>>>>>> 41cba2e0dc9e584a78492875e4aca83878474bfc
<<<<<<< HEAD
=======
>>>>>>> add responsive
>>>>>>> parent of 16382e2... update
=======
>>>>>>> bc6e3c0eda11faab3411cc4ac1075fe21a57c262
));