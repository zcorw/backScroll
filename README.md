# backScroll

帮助你迅速添加页面滚动加载的功能。未来准备增加页面返回后保留上一次AJAX请求的数据，解决微信浏览器，Chrone PC版浏览器，在返回上一页面时，上一页面的AJAX代码会被刷新带来的困扰。

*	[快速上手](#快速上手)
*	[下载](#下载)
*	[配置](#配置)
*	[方法](#方法)

##快速上手

现在你需要创建一个div元素作为放置内容的地方。

    <div id="page">
        <ul>
            <!-- 加载容器 -->
        </ul>
        <!-- 加载指示器 -->
        <div class="infinite-scroll">
            <div class="infinite-preloader"></div>
            正在载入中...
        </div>
    </div>

引用jQuery库和back-scroll.min.js

    <script src="jquery.min.js"></script>
    <script src="back-scroll.min.js"></script>

然后调用JS初始化滚动加载插件,传入请求的url和参数

    $('#page').backScroll({
        action: '/get_data/',
        data:{cid: 1}
    });

这时滚动加载就已经初始化成功，滚动到底部看看效果吧！

##下载

* [back-scroll.js](https://raw.github.com/zcorw/backScroll/master/dist/back-scroll.min.js)

##配置

###container: "ul"(string)

设置加载内容放置的容器，写法与jQuery选择器一样。

###type: "post"(string)

设置ajax请求类型。

###action: null(string)

设置ajax请求url，该项必须填写。

###data: {}(object)

设置ajax发送到服务器的数据。

###pageKey: 'page'(string)

该插件内部会对当前页码进行自动计数，如果用户需要将当前页码发送到服务器，该参数可以设置代表页码的key值。

###heightOffset: 10(number)

设置页面结束前多少像素加载新页面。

###contentLoad: function(data){}(function)

设置模板生成方法,data是ajax返回数据。如果该项不进行设置，认为返回的是html，直接加载。

###beforeLoad: function(){}(function)

设置ajax请求前的动作。

###afterLoad：function(objectsRendered){}(function)

设置加载完成后执行的方法，objectsRendered是本次加载的jQuery对象。

###overLoad: function(data){return false}(function)

设置判断是否加载完成的方法，data是ajax返回数据，如果全部加载完成return true。

##方法

###$.fn.back-scroll('stop')

停止该容器加载

###$.fn.back-scroll('firstload')

手动进行首次加载

###$.fn.back-scroll('option',opts)

修改配置

