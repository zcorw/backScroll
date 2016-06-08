(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory(require('jquery'));
    } else {
        factory(root.jQuery);
    }
}(this, function($) {
     var defaults = {
        'container': 'ul',  //加载内容的容器
        'type': 'post', //请求方式
        'action': null, //请求链接
        'data': {},     //表单提交的参数
        'pageKey': 'page',
        'contentLoad': null,    //ajax返回json转html码（data:ajax返回值),默认为null，这个时候表示请求返回就是html，无需转换
        'beforeLoad': function(){},     //ajax请求前动作
        'afterLoad': function(objectsRendered){},   //列表加载后动作（objectsRendered:刚载入的对象）
        'overLoad': function(data){return false},   //判断数据是否已经全部加载结束，结束返回true（data:ajax返回值),默认不会结束
        'heightOffset': 10		//距离底部多少像素开始载入
     };
     function ObjScroll(frame,opts){
         this.frame = frame;
         this.target = $(window);
         this.opts = opts;

         //设置基本状态
         this.page = 1;
         this.isScroll = false; //是否开启滚动监听
         this.isLoad = false; //是否正在载入
         this.isOver = false; //是否全部加载完成

         this.init();
     }
     //初始化，绑定滚动事件
     ObjScroll.prototype.init = function(){
         var s = this;
         var target = this.target;
         var frame = this.frame;
         s.isScroll = true;
         $(target).scroll(function(event){
            if (s.isScroll === true&&s.isOver !== true){
                if(s.isLoad !== true){
                    var mayLoadContent = $(target).scrollTop()+s.opts.heightOffset >= $(document).height() - $(target).height();
                    if(mayLoadContent){
                        s.loadContent();
                    }
                }
            }else {
                event.stopPropagation();
            }
         });
     }
     //加载数据
     ObjScroll.prototype.loadContent = function(){
         var s = this;
         var target = this.target;
         var opts = this.opts;
         var frame = this.frame;
         opts.beforeLoad();
         $(frame).children().attr('rel', 'loaded');
         this.isLoad = true;
         var data = opts.data;
         data[opts.pageKey] = this.page;
         $.ajax({
              type: opts.type,
              url: opts.action,
              data: data,
              success: function(data){
                  if(opts.contentLoad === null){
                      $(frame).append(data);
                  }else{
                      $(frame).append(opts.contentLoad(data));
                  }
                  var objectsRendered = $(frame).children('[rel!=loaded]');
                  opts.afterLoad(objectsRendered);
                  s.page++;
                  if(opts.overLoad(data)){
                      s.isOver = true;
                  }else{
                      s.isLoad = false;
                  }
              }
         });

     }
     //暂停加载（通过$.objectScroll("stop")执行）
     ObjScroll.prototype.stopScroll = function(){
         this.isScroll = false;
     }
     //首次加载（通过$.objectScroll("first")执行）
     ObjScroll.prototype.firstLoad = function(){
         if(this.isOver !== true&&this.isLoad !== true&&this.page == 1){
             this.loadContent();
         };
     }
     //更改opts.data
     ObjScroll.prototype.changeOpts = function(opts){
         this.opts = $.extend({},this.opts,opts);
     }
     //取出当前的基础状态
     ObjScroll.prototype.getStatus = function(){
         var statusJSON = {
             data: JSON.stringify(this.opts.data),
             page: this.page,
             isScroll: this.isScroll,
             isLoad: this.isLoad,
             isOver: this.isOver
         }
         return JSON.stringify(statusJSON);
     }
     //设置基础状态
     ObjScroll.prototype.setStatus = function(statusSTR){
         var statusJSON = JSON.parse(statusSTR);
         this.changeData
     }
     $.fn.backScroll = function(params){
         return this.each(function() {
             var scroll = $(this).data('scroll');
             if (!scroll) {
                 var options = $.extend({},defaults,params);
                 scroll = new ObjScroll($(this).find(options['container']), options);
                 $(this).data('scroll', scroll);
             }else{
                if(typeof params == 'string'){
                     switch(params){
                         case 'stop':
                             scroll.stopScroll();
                             break;
                         case 'firstload':
                             scroll.firstLoad();
                             break;
                         case 'option':
                             scroll.changeOpts(arguments[1]);
                             break;
                         default:
                              scroll.init();
                     }
                 }
             }
        });
     }
}))
