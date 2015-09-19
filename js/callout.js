function callout(){
  var ele = document.querySelector('article');
  if (ele === null) return false;

  var text = ele.innerHTML;
  text = text.replace(/<p>\s*?\[%\s*?callout\s*?%\]\s*?<\/p>/g, '<div class="callout callout-primary">');
  text = text.replace(/<p>\s*?\[%\s*?endcallout\s*?%\]\s*?<\/p>/g, '</div>');

  var reg = /<p>\s*?\[%\s*?callout\s+?style\s*?=\s*?["]{0,1}(.*?)["]{0,1}\s*?%\]\s*?<\/p>/;
  var style;
  while (style=reg.exec(text)) text=text.replace(reg, '<div class="callout callout-'+style[1]+'">');

  ele.innerHTML = text;
};callout();
