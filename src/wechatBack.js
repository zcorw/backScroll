wechatBack = (function($){
    var _ids,_refresh;
    var _target = $(window);
    //初始化
    var init = function(ids,input){
        if(typeof ids == 'string'){
            _ids = [ids];
        }else{
            _ids = ids;
        }
        //以一个‘[data-back="wechat"]’属性的隐藏域作为是否刷新或第一次进入的标示，如果存在则是后退。
        if(input.val() != 1){
            _refresh = true;
            input.val(1);
            sessionStorage.clear();
            sessionStorage.setItem('chooseID',_ids[0]);
            sessionStorage.setItem('offsetTop',0);
        }else{
            _refresh = false;
            //取出本地储存的数据，放入对应的容器中
            for(var i in _ids){
                var template = sessionStorage.getItem('#'+_ids[i]);
                $('#'+_ids[i]).find('ul').html(template);
            }
            //选中之前激活的标签
            if(this.choose != null){
                var id = sessionStorage.getItem('chooseID');
                this.choose(id);
            }
            //滚动到之前的位置
            var offsetTop = sessionStorage.getItem('offsetTop');
            _target.scrollTop(offsetTop);
        }
        //监听事件
        for(var i in _ids){
            $('#'+_ids[i]).on('DOMNodeInserted',function(){
                var template = $(this).find('ul').html();
                sessionStorage.setItem('#'+this.id,template);
            });
        }
        $(_target).on('scroll',function(){
            sessionStorage.setItem('offsetTop',$(_target).scrollTop())
        });
    }
    //多标签时选择之前选中的标签
    this.choose = null;
    //多标签时切换标签记录当前激活标签
    var click = function(id){
        sessionStorage.setItem('chooseID',id);
    }
    return {
        init: init,
        click: click
    }
})(jQuery)
