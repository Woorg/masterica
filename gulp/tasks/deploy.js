import gulp        from 'gulp';
import runSequence from 'run-sequence';
<<<<<<< HEAD
import ghpages     from 'gulp-gh-pages';

gulp.task('deploy', () => (
	runSequence(
		'del',
		'build',
		() => gulp.src('dist/**/*').pipe(ghpages())
	)
=======
import ftp         from 'gulp-deploy-ftp';

gulp.task('deploy', () => (
		() => gulp.src('dist/**/*').pipe(ftp({
			host: '31.170.165.194',
			user: 'u178938601',
			password: '24B0kB3F4hW5',
			uploadPath: 'public_html/masterica'

		}))
>>>>>>> add responsive
));