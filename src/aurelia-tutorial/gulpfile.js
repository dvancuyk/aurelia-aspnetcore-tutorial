/// <binding AfterBuild='_build' />
/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp');

var paths = {
    source: function(files) {
        return "code/**/" + files;
    },
    destination: 'wwwroot/'
};

gulp.task('build:js', function() {
    return gulp.src(paths.source('*.js'))
        .pipe(gulp.dest(paths.destination));
});

gulp.task('build:html', function() {
    return gulp.src(paths.source('*.html'))
            .pipe(gulp.dest(paths.destination));
});

gulp.task('_build', ['build:js', 'build:html']);