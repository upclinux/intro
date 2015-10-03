(function (){
  var ele = document.querySelector('article');
  if (ele === null) return false;

  var text = ele.innerHTML;
  var style;
  var reg,reg2;
  // Callout start
  text = text.replace(/<p>\s*?\[%\s*?callout\s*?%\]\s*?<\/p>/g, '<div class="callout callout-primary">');
  reg = /<p>\s*?\[%\s*?callout\s*?%\]\s*?(.*?)<\/p>/;
  while (style=reg.exec(text)) {
    text=text.replace(reg, '<div class="callout callout-primary"><h4>'+style[1]+'</h4>');
  }

  reg = /<p>\s*?\[%\s*?callout\s+?style\s*?=\s*?["]{0,1}(.*?)["]{0,1}\s*?%\]\s*?<\/p>/;
  var reg2 = /<p>\s*?\[%\s*?callout\s+?style\s*?=\s*?["]{0,1}(.*?)["]{0,1}\s*?%\]\s*?(.*?)<\/p>/;
  while (style=reg.exec(text)) {
    text=text.replace(reg, '<div class="callout callout-'+style[1]+'">');
  }
  while (style=reg2.exec(text)) {
    text=text.replace(reg2, '<div class="callout callout-'+style[1]+'"><h4>'+style[2]+'</h4>');
  }

  // endcallout
  text = text.replace(/<p>\s*?\[%\s*?endcallout\s*?%\]\s*?<\/p>/g, '</div>');
  text = text.replace(/\s*?\[%\s*?endcallout\s*?%\]\s*?<\/p>/g, '</p></div>');

  ele.innerHTML = text;
})();
