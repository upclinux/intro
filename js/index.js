/*
 Thanks for http://www.cnblogs.com/xufeiyang/articles/3247623.html for request
 Thanks for Gaohaoyang, at https://github.com/Gaohaoyang/gaohaoyang.github.io
 */

$.request = (function () { 
    var apiMap = {}; 
    function request(queryStr) { 
        var api = {}; 
        if (apiMap[queryStr]) { return apiMap[queryStr]; } 
        api.queryString = (function () { 
            var urlParams = {}; 
            var e, 
            d = function (s) { return decodeURIComponent(s.replace(/\+/g, " ")); }, 
            q = queryStr.substring(queryStr.indexOf('?') + 1), 
            r = /([^&=]+)=?([^&]*)/g; 
            while (e = r.exec(q))     urlParams[d(e[1])] = d(e[2]);
            return urlParams; 
        })(); 
        api.getUrl = function () { 
            var url = queryStr.substring(0, queryStr.indexOf('?') + 1); 
            for (var p in api.queryString) { url += p + '=' + api.queryString[p] + "&";        } 
            if (url.lastIndexOf('&') == url.length - 1) { return url.substring(0, url.lastIndexOf('&')); } 
            return url; 
        } 
        apiMap[queryStr] = api; 
        return api; 
    } 
    $.extend(request, request(window.location.href)); 
    return request; 
})();

$(document).ready(function() {
    categoryDisplay();
    generateContent();
    backToTop();
});

/**
 * 分类展示
 * 点击右侧的分类展示时
 * 左侧的相关裂变展开或者收起
 * @return {[type]} [description]
 */
function categoryDisplay() {
    return false;
    
    /*only show All*/
    $('.post-list[data-list-cate!=All]').hide();
    /*show category when click categories list*/
    $('.categories-list-item').click(function() {
        var cate = $(this).data('cate'); //get category's name

        $('.post-list[data-list-cate!=' + cate + ']').hide(250);
        $('.post-list[data-list-cate=' + cate + ']').show(400);
        
        $('#categorization').text(cate);
    });
    
    var s=$.request.queryString['c'];
    if (s) { 
        $('.categories-list-item[data-cate='+s+']').click(); 
    }
}

/**
 * 回到顶部
 */
function backToTop() {
    // 滚页面才显示返回顶部
    $(window).scroll(function() {
        if ($(window).scrollTop() > 100) {
            $("#top").fadeIn(500);
        } else {
            $("#top").fadeOut(500);
        }
    });
    // 点击回到顶部
    $("#top").click(function() {
        $("html,body").animate({
            scrollTop: "0"
        }, 500);
    });

    // 初始化 tip
    $(function() {
        $('[data-toggle="tooltip"]').tooltip();
    });
}

/**
 * 侧边目录
 */
function generateContent() {
    $('#markdown-toc').addClass('hidden-md').addClass('hidden-lg');
    if (typeof $('#markdown-toc').html() === 'undefined') {
        $('#content').hide();
    } else {
        $('#content').html('<ul class="nav" id="myaffix">' + $('#markdown-toc').html() + '</ul>');
        $('body').scrollspy({ target: '#content' })
        $('#myaffix').affix({
            offset: {
                top: function () {
                    return $('#content').data('index') ? 
                        370 + $('#faq').outerHeight(true)
                        : 200;
                },
                bottom: function () {
                    return (this.bottom = $('footer').outerHeight(true) + 150);
                }
            }
        });
    }
}
