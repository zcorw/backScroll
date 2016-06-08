// 引入 node 的 fms 模块
var fms = require('fms')

fms.run({
    // Server 启动在 3000 端口
    port: 3000,
    read: ['/demo/']
})

fms.ajax({
    type: 'POST',
    title: '获取颜值节目列表',
    url: '/get_face/',
    request: {
        cid: 1
    },
    res: {
        ok: {
            list:[
                {
                    url: "test.html",
                    _url: "该节目跳转链接",
                    image: "ex/head1.jpg",
                    _image: "节目头像",
                    author: "桐桐宝宝",
                    _author: "主播妮称",
                    number: "16.7万",
                    _number: "在线人数",
                    webname: "虎牙",
                    _webname: "直播平台名称拼音"
                },
                {
                    url: "http://www.qq.com",
                    _url: "该节目跳转链接",
                    image: "ex/head2.jpg",
                    _image: "节目头像",
                    author: "萱儿",
                    _author: "主播妮称",
                    number: "5633",
                    _number: "在线人数",
                    webname: "美拍",
                    _webname: "直播平台名称拼音"
                },
                {
                    url: "http://www.baidu.com",
                    _url: "该节目跳转链接",
                    image: "ex/head1.jpg",
                    _image: "节目头像",
                    author: "桐桐宝宝",
                    _author: "主播妮称",
                    number: "16.7万",
                    _number: "在线人数",
                    webname: "虎牙",
                    _webname: "直播平台名称拼音"
                },
                {
                    url: "http://www.qq.com",
                    _url: "该节目跳转链接",
                    image: "ex/head2.jpg",
                    _image: "节目头像",
                    author: "萱儿",
                    _author: "主播妮称",
                    number: "5633",
                    _number: "在线人数",
                    webname: "美拍",
                    _webname: "直播平台名称拼音"
                },
                {
                    url: "http://www.baidu.com",
                    _url: "该节目跳转链接",
                    image: "ex/head1.jpg",
                    _image: "节目头像",
                    author: "桐桐宝宝",
                    _author: "主播妮称",
                    number: "16.7万",
                    _number: "在线人数",
                    webname: "虎牙",
                    _webname: "直播平台名称拼音"
                },
                {
                    url: "http://www.qq.com",
                    _url: "该节目跳转链接",
                    image: "ex/head2.jpg",
                    _image: "节目头像",
                    author: "萱儿",
                    _author: "主播妮称",
                    number: "5633",
                    _number: "在线人数",
                    webname: "美拍",
                    _webname: "直播平台名称拼音"
                }
            ],
            status: 1,
            page: 1,
            pagetotal: 5
        },
        err: {
            status: "error",
            msg: "请先登录"
        }
    }
})

fms.ajax({
    type: 'POST',
    title: '获取游戏节目列表',
    url: '/get_game/',
    request: {
        cid: 2
    },
    res: {
        ok: {
            list:[
                {
                    url: "http://www.baidu.com",
                    _url: "该节目跳转链接",
                    image: "ex/head1.jpg",
                    _image: "节目头像",
                    author: "桐桐宝宝",
                    _author: "主播妮称",
                    number: "16.7万",
                    _number: "在线人数",
                    title: "Sli群星联赛NB.Y vs EHOME",
                    _title: "节目名称",
                    webname: "zhanqi",
                    _webname: "直播平台名称拼音"
                }
            ],
            status: 1,
            _status: "请求状态,1成功，0失败",
            page: 1,
            _page: "当前页码",
            pagetotal: 1,
            _pagetotal: "总页码数"
        },
        err: {
            status: "error",
            msg: "请先登录"
        }
    },
    timeout: 1000
})

