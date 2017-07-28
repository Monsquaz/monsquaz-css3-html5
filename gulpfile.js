let gulp    = require('gulp');
let cssnano = require('gulp-cssnano');
let sass    = require('gulp-sass');

gulp.task('default', function(){
  return gulp.src(['*.scss'])
    .pipe(sass())
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
