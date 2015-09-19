$(function() {
  var shareurl = encodeURIComponent(window.location.href);
  var title = encodeURIComponent($('#post-title').text());
  $('.share').tooltip({ container : 'body'});
  $('.share').each(function () {
    $(this).bind('click', $(this).data('target'), function(e) {
      var url;
      switch (e.data) {
        case 'twitter':
          url='https://twitter.com/intent/tweet?text=' + title + '%20' + shareurl;
          break;
        case 'facebook':
          url='https://www.facebook.com/sharer/sharer.php?u=' + shareurl + '&t=' + title;
          break;
        case 'linkedin':
          url='https://www.linkedin.com/shareArticle?source=&title=' + title + '&summary=&mini=true&url=' + shareurl;
          break;
        case 'weibo':
          url='http://service.weibo.com/share/share.php?url=' + shareurl + '&title=' + title;
          break;
        case 'copyurl':
          if (window.clipboardData) {
            window.clipboardData.setData("Text", window.location.href);
          } else {
            window.prompt('You are not using IE so you need to copy it yourself.', window.location.href);
          }
          return;
        default:
          return;
      }
      window.open(url);
    });
  });
});