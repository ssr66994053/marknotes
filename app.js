var express = require('express');
var marked = require('marked');
var hljs = require('highlight.js');
var fs = require("fs");
var path = require('path');

var app = express();

var viewsDir = './views/';
var indexMD = 'index.md';

//增加的代码，用于个性化输出table
var renderer = new marked.Renderer();
renderer.table = function (header, body) {
    //增加bootstrap table式样
    return '<table class="table table-striped table-bordered">'+header+body+'</table>'
}
// marked配置
marked.setOptions({
    renderer: renderer,
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: true,
    smartLists: true,
    smartypants: false,
    highlight: function(code) { // 代码高亮配置
        return hljs.highlightAuto(code).value;
    }
});

//设置md文件渲染引擎
app.engine('md', function(path, options, callback) {
    // 读取文件
    fs.readFile(path, 'utf8', function(err, str) {
        if (err) return callback(err);
        //str = markdown.toHTML(str);
        str = marked(str);
        //增加HTML的页头
        var header = '<!DOCTYPE html>' +
            '<html lang="zh-CN">' +
            '<head>' +
            '<title>Mark-Note</title>' +
            '<link rel="stylesheet" href="http://cdn.bootcss.com/bootstrap/3.3.6/css/bootstrap.min.css">' +
            '<link rel="stylesheet" href="//cdn.bootcss.com/highlight.js/9.1.0/styles/monokai-sublime.min.css">' +
            '</head><body>';
        //增加bootstap基本布局
        var layoutHeader = '<div class="row">' +
            '<div class="col-md-2"></div>' +
            '<div class="col-md-8 col-sm-12 col-xs-12">';
        var layoutFooter = '</div>' +
            '<div class="col-md-2"></div>' +
            '</div>';

        //增加HTML的页底
        var footer = '<script src="http://cdn.bootcss.com/highlight.js/9.1.0/highlight.min.js"></script>' +
            '<script>hljs.initHighlightingOnLoad();</script>' +
            '</body></html>';
        //回调
        callback(null, header + layoutHeader + str + layoutFooter + footer);
    });
});
//设置静态资源文件夹
app.use(express.static('public'));

app.get('/', function(req, res, next) {
    res.render(indexMD, {
        layout: false
    });
});

app.get('/:title', function(req, res, next) {
    var urlPath = [req.params.title, '.md'].join('');
    var filePath = path.normalize(viewsDir + urlPath);
    fs.exists(filePath, function(exists) {
        if (!exists) {
            next();
        } else {
            res.render(urlPath, {
                layout: false
            });
        }
    });
});

app.get('*', function(req, res) {
    res.render('404.md', {
        status: 404,
        title: '404 NOT FOUND'
    });
});

var server = app.listen(3000, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('app listening at http://%s:%s', host, port);
});
