var gulp = require("gulp");
var uglifycss = require('gulp-uglifycss');
var rename = require("gulp-rename");
var concat = require("gulp-concat");
var watch = require("gulp-watch");



gulp.task("css",function (){
	console.log("hi there");
	gulp.src("src/*.css") 	
	.pipe(rename({
     suffix: ".min"
    }))
	.pipe(concat ("all.css"))
	.pipe(uglifycss())
    .pipe(gulp.dest('./dist/'))
    // .pipe(gulp.dest("build"));
    
})

gulp.task('default', function () {
	gulp.watch("src/*.css", ["css"]);
});










// }); 18664634353 ex306