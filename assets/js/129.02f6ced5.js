(window.webpackJsonp=window.webpackJsonp||[]).push([[129],{302:function(n,e,l){"use strict";l.r(e);var a=l(0),s=Object(a.a)({},(function(){var n=this.$createElement,e=this._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[e("p",[this._v("Webpack\n提供打包功能与一套文件处理机制，通过生态的各种Loader与Plugin对代码进行预编译与打包\n常规配置\nEntry  入口文件\nOutput 出口路径\nModule  模块,webpack中任何文件都可以做一个模块，可以根据配置不同的Loader进行加载与打包\nChunk:代码块,可以根据配置，将所有模块代码合并成一个或多个代码块，按需加载，提高性能\nLoader  模块加载器，进行各种文件类型的加载与转换\nPlugin  扩展插件，可以通过Webpack相应的事件钩子，介入到打包过程中的任意环节，对代码按需修改\n工作流程\n读取配置文件，按命令初始化配置参数，创建Compiler对象\n调用插件的apply方法挂载插件建通，然后从入口文件开始执行编译\n按文件类型，调用相应的Loader对模块进行编译，触发各个时间点的时间，调用Plugin执行，再根据模块依赖查找到依赖模块，递归执行这里的流程。\n将编译后的代码包装成一个个代码块，按依赖于配置确定输出内容，然后通过Plugin进行文件修改\n最后根据Output把文件内容一一写入到指定的文件夹中\nLoader\n对webpack传入的字符串进行按需修改, 即插即用\n链式传递，基于NODE环境，有文件增删的较高权限，可同步也可异步\nBabel-loader\nbabylon将ES6/7解析成AST\nbabel-traverse对AST进行遍历转译，得到新的AST\n新的AST通过babel-generator转换成ES5\n常用Loader\nfile-loader  加载文件资源,移动/复制/命名等\nurl-loader  常用于加载图片，可将小图片转换成DATA Url\nbabel-loader\nts-loader, 编译TypeScript\nstyle-loader 将css代码以style标签形式插入到HTML中\ncss-loader 分析@import和 url(), 引用css文件\npostcss-loader  用于css的兼容性处理, 具有众多功能，如添加前缀，单位转换等\nless-loader / sass-loader : css预处理器\nPlugin\nPlugin可以监听webpack的事件，在相应时间点对打包内容进行修改\n事件流机制,让 Plugin可以干预整个生产过程中的每个步骤\n以观察者模式的的实现事件的订阅与广播的核心基础类Tapable\n常见Plugin\nUglifyJs   压缩混淆\nCommonChunk  代码分割\nProvidePlugin  自动加载模块\nhtml-webpack-plugin  加载HTM文件，并引入css/js文件\nextract-text-webapck-plugin / mini-css-extract-plugin 抽离样式,生成css文件\nDefinePlugin 定义全局变量\noptimize-css-assets-webpack-plugin  css代码去重\nwebpack-bundle-analyzer 代码分析\ncompression-webpack-plugin   使用gzip压缩js 和css\nhappypack  使用多进程，加速代码构建\nEnvironmentPlugin  定义环境变量\nDLLPlugin,DLLReferencePlugin  提前进行打包与缓存，比米娜每次重新编译\n重要类\nCompiler\n相当于Webpack实例，包含当前webpack的所有配置信息，在启动时完成创建，随生命周期传递\nCompilation\n编译实例，当文件发生改变，webpack就会创建一个新的Compulation对象，开始新的编译。通过它提供的API，可以建通每次编译过程中触发的事件钩子\n常见优化\n无用代码删除\n如UglifyJS\n摇树优化,消除被引用但未被使用的模块代码\n代码分割\n懒加载与异步加载\n可使用SplitChunksPlugin, 按页面/功能/文件修改频率拆分\nscope hoisting作用域提升\n分散的模块划分到同一作用域中,必满代码的重复引用\nwebpack编译优化\n热替换\n缩小编译范围\nmodules  指定模块路径，减少递归搜索\nmainFields 指定入口文件描述字段，减少搜索\nnoParse   避免对非模块化文件的加载\nincludes/exclude 指定搜索范文/排除\nalias  缓存目录，避免重复寻址\n多进程并发\nwebpack-parallel-uglify-plugin  多进程并发压缩js\nHappyPack  多进程并发文件的Loader解析\n第三方模块缓存   DLLPlugin  DLLReferencePlugin\n打包后分析   Webpack Analyse/webpack-bundle-analyzer 对打包后文件进行分析\nsource-map\n开发  cheap-module-eval-source-map\n生产  hidden-source-map")])])}),[],!1,null,null,null);e.default=s.exports}}]);