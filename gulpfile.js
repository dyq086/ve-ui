let gulp = require("gulp");
let rename = require("gulp-rename");
let del = require("del");

gulp.task("copy", function() {
  return gulp
    .src(["lib/temp/**/*.css"])
    .pipe(
      rename(function(path) {
        let name = path.dirname.replace("lib/", "");
        path.dirname = "styles";
        path.basename = name;
        path.extname = ".css";
      })
    )
    .pipe(gulp.dest("lib/"));
});

gulp.task("del", function(cb) {
  del(["lib/temp"]);
  cb()
});

gulp.task("default", gulp.series("copy", "del",function (done) {
  done()
}));
