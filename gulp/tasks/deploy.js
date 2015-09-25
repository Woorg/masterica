import gulp        from 'gulp';
import runSequence from 'run-sequence';
import ghpages     from 'gulp-gh-pages';

gulp.task('deploy', () => (
		() => gulp.src('dist/**/*')
			.pipe(ghpages({branch: 'gh-pages', remoteUrl: 'https://github.com/Woorg/masterica.git'}))
));


