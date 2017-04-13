var gulp = require('gulp');
var uglify = require('gulp-uglify');
var sass = require('gulp-ruby-sass');
var minimist = require('minimist');

var args = minimist(process.argv.slice(2));
console.log(args)

// JS圧縮
gulp.task('minify-js', function() {
    return gulp.src("js/*.js")
        .pipe(uglify())
        .pipe(gulp.dest('dist/js/'));
});

// sassコンパイル
gulp.task('sass', function() {
    return sass('scss/*.scss', {
        style: 'compressed',
        sourcemap: false,
        noCache: true
    }).on('error', sass.logError)
    .pipe(gulp.dest('dist/css/'));
});

// 以下を追加
gulp.task('watch', function() {
    gulp.watch('scss/*.scss', ['sass']);
});
