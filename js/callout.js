function callout(){
  /*
  var regex1 = /\s*?\[%\s*?callout\s*?%\]\s*?/;
  var regex2 = /\s*?\[%\s*?callout\s+?style\s*?=\s*?["]{0,1}(.*?)["]{0,1}\s*?%\]\s*?/;
  var regex3 = /\s*?\[%\s*?endcallout\s*?%\]\s*?/;

  $('article p').each(function () {
    var ele = $(this);
    var text = ele.text();
    var match;
    if (match = text.match(regex2)) {
      ele.after('<div class="callout callout-' + match[1] + '">').remove();
    } else if (text.match(regex1)) {
      //ele.after('<div class="callout callout-primary">').remove();
      ele.get(0).outerHTML = '<div>';
    } else if (text.match(regex3)) {
      ele.get(0).outerHTML = '</div>';
      //ele.after('</div></div></div>').remove();
    }
    //if ()
    //if (ele.text() === '[% endcallout %]') alert('fuck');
  });
  */
  var ele = document.querySelector('article');
  if (ele === null) return false;

  var text = ele.innerHTML;
  text = text.replace(/<p>\s*?\[%\s*?callout\s*?%\]\s*?<\/p>/g, '<div class="callout callout-primary">');
  text = text.replace(/<p>\s*?\[%\s*?endcallout\s*?%\]\s*?<\/p>/g, '</div>');

  var reg = /<p>\s*?\[%\s*?callout\s+?style\s*?=\s*?["]{0,1}(.*?)["]{0,1}\s*?%\]\s*?<\/p>/;
  var style;
  while (style=reg.exec(text)) text=text.replace(reg, '<div class="callout callout-'+style[1]+'">');

  ele.innerHTML = text;

  //$('<p>[% endcallout %]</p>').html('</p>');
};callout();
