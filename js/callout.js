function callout(){
  var text=$('article').html();
  text=text.replace(/<p>\s*?\[%\s*?callout\s*?%\]\s*?<\/p>/g, '<div class="callout callout-primary">');
  text=text.replace(/<p>\s*?\[%\s*?endcallout\s*?%\]\s*?<\/p>/g, '</div>');

  var reg=/<p>\s*?\[%\s*?callout\s+?style\s*?=\s*?["]{0,1}(.*?)["]{0,1}\s*?%\]\s*?<\/p>/;
  var style;
  while (style=reg.exec(text)) text=text.replace(reg, '<div class="callout callout-'+style[1]+'">');
  $('article').html(text);
};callout();
