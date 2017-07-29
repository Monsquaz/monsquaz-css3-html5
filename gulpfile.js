let gulp            = require('gulp');
let cssnano         = require('gulp-cssnano');
let sass            = require('gulp-sass');
let moduleImporter  = require('sass-module-importer');

gulp.task('css', function(){
  return gulp.src(['monsquaz.scss'])
    .pipe(sass({ importer: moduleImporter() }))
    .pipe(cssnano({
      autoprefixer: {
        browsers: [
          'last 2 versions',
          'safari >= 8',
          'ie >= 10',
          'ff >= 20',
          'ios 6',
          'android 4'
        ],
        add: true
      }
    }))
    .pipe(gulp.dest('css'));
});

gulp.task('default', function() {
  gulp.watch('*.scss', ['css']);
});
