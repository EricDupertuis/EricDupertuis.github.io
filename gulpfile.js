gulp = require('gulp');
autoprefixer = require('gulp-autoprefixer');
concat = require('gulp-concat');
csslint = require('gulp-csslint');
cssnano = require('gulp-cssnano');
filesize = require('gulp-filesize');
imagemin = require('gulp-imagemin');
jslint = require('gulp-jslint');
plumber = require('gulp-plumber');
sass = require('gulp-sass');
uglify = require('gulp-uglify');
pngquant = require('imagemin-pngquant');

gulp.task('scss', function(){
  gulp.src('./assets/src/scss/main.scss')
    .pipe(plumber())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(csslint())
    .pipe(csslint.reporter())
    .pipe(cssnano())
    .pipe(gulp.dest('./assets/dist/css/'))
    .pipe(filesize());
});

gulp.task('js', function(){
  gulp.src('./assets/src/js/*.js')
    .pipe(plumber())
    .pipe(concat('main.js'))
    .pipe(jslint())
    .pipe(uglify())
    .pipe(gulp.dest('./assets/dist/js/'))
    .pipe(filesize())
});

gulp.task('img', function(){
  gulp.src('./assets/src/images/*')
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{removeViewBox: false}],
      use: [pngquant()]
    }))
    .pipe(gulp.dest('./assets/dist/images'));
});

gulp.task('default', function(){
    gulp.watch('./assets/src/images/*',['img']);
    gulp.watch('./assets/src/scss/*',['scss']);
    gulp.watch('./assets/src/js/*',['js']);
})
