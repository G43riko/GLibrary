const gulp = require("gulp");
const ts = require("gulp-typescript");
const babel = require("gulp-babel");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");
gulp.task("ts", function () {
    return gulp.src("src/ts/**/*.ts")
        .pipe(ts({
            noImplicitAny: true,
            module: "ES2015",
            lib: ["es6", "DOM"],
            target: "ES3"
        }))
        .pipe(babel({
            presets: ["env"]
        }))
        .pipe(concat("g-utils.min.js"))
        .pipe(uglify())
        .pipe(gulp.dest("out"))
});

gulp.task("default", ["ts"]);