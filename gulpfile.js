var gulp = require("gulp");
runSequence = require("gulp-sequence");
var rename = require("gulp-rename");
var del = require("del");
gulp.task("copy", function() {
  return gulp
    .src(["lib/temp/**/*.css"])
    .pipe(
      rename(function(path) {
        var name = path.dirname.replace("lib/", "");
        path.dirname = "styles";
        path.basename = name;
        path.extname = ".css";
      })
    )
    .pipe(gulp.dest("lib/"));
});

gulp.task("del", function(cb) {
  del(["lib/temp"], cb);
});
gulp.task("default", function(done) { 
  runSequence(["copy"], ["del"], done);
});
