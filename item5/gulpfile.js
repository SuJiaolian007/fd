var gulp=require("gulp");//获取gulp
var browserSync=require("browser-sync").create();//浏览器同步监测
var reload=browserSync.reload;
var sass=require("gulp-sass");//获取gulp-sass

//定义任务编译scss文件
gulp.task("sass",function(){
    gulp.src("./scss/*.scss")
        .pipe(sass().on("error",sass.logError))
        .pipe(gulp.dest("css/"))
        .pipe(reload({stream:true}))
})

//定义任务监听html,scss是否发生改变后自动更新
gulp.task("server",["sass"],function(){
    browserSync.init({
        server:"./",
        startPath:"bmi.html"
    })
    gulp.watch("*.html").on("change",reload);
    gulp.watch("scss/*.scss",['sass'])
})
