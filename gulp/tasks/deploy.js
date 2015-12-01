import gulp        from 'gulp';
import runSequence from 'run-sequence';
import ftp         from 'gulp-deploy-ftp';

gulp.task('deploy', () => (
		() => gulp.src('dist/**/*').pipe(ftp({
			host: 'xx.xxx.xxx.xxx',
			user: '---',
			password: '---',
			uploadPath: 'public_html/masterica'

		}))
));
