import gulp from 'gulp';
import babelify from 'babelify';
import browserify from 'browserify';
import source from 'vinyl-source-stream';
import browserSync from 'browser-sync';
import less from 'gulp-less';
import ghPages from 'gh-pages';
import gutil from 'gulp-util';
import fs from 'fs';

const sync = browserSync.create();

gulp.task('html', () => {
  gulp.src('src/**/*.html')
    .pipe(gulp.dest('dist'))
    .pipe(sync.reload({
      stream: true
    }));
});

gulp.task('json', () => {
  gulp.src('src/**/*.json')
    .pipe(gulp.dest('dist'))
    .pipe(sync.reload({
      stream: true
    }));
});

gulp.task('script', () => {
  browserify().transform(babelify.configure({
  presets: ["es2015", "react"] }))
    .bundle()
    .pipe(fs.createWriteStream("bundle.js"))
});

gulp.task('styles', ['fonts'], () => {
  gulp.src('src/styles/**/*.{css,less}')
    .pipe(less()
      .on('error', (error) => {
        gutil.log(gutil.colors.red('Error: ' + error.message));
        gutil.beep();
      }))
    .pipe(gulp.dest('dist'))
    .pipe(sync.reload({
      stream: true
    }));
});

// Fonts
gulp.task('fonts', () => {
  gulp.src('node_modules/font-awesome/fonts/*')
    .pipe(gulp.dest('dist/fonts/'));
});

gulp.task('build', ['html', 'script', 'styles', 'json']);

gulp.task("deploy", ["build"], () => {
  ghPages.publish("dist");
});

gulp.task('serve', ['build'], () => {
  sync.init({
    server: 'dist',
  });

  gulp.watch('src/**/*.html', ['html']);
  gulp.watch('src/**/*.json', ['json']);
  gulp.watch('src/**/*.{css,less}', ['styles']);
  gulp.watch('src/**/*.{js,jsx}', ['script'])
});

gulp.task('default', ['serve']);
