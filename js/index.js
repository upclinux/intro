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
    generateContent();
    backToTop();
    fixTables();
//}).bind('DOMNodeInserted', function() {
    fixLinks();
});

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
        $('body').scrollspy({ target: '#content' });
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

/**
 * 防止页面太小
 */
function requireFillScreen() {
    $('html,body').css('height','100%');
    $('#main').css('height', 'auto').css('min-height', '60%');
}

/**
 * 处理文章内表格
 */
function fixTables() {
    $('.post-content table').each(function() {
        if (!$(this).hasClass('table'))
            $(this).addClass('table table-striped table-bordered');
    });
}

/**
 * 处理页面链接
 */
function fixLinks() {
    $('a[href^="http"]').each(function() {
        $(this).attr('target', '_blank');
    });

    $('article a[href^="http"]').each(function() {
        var h = $(this).html();
        $(this).html(h + '<i class="fa fa-external-link external-link"></i>');
    });
}
