/*
 * Thanks for liberize (https://github.com/liberize/liberize.github.com)
 */
requireFillScreen();

var entries = null;
var keyword = $.request.queryString['s'];

$('#keyword').text(keyword);
$('#searchbox1').val(keyword);
$('#searchbox2').val(keyword);
$('#searchlist').hide();

$('#more_google').attr('href', 'https://www.google.com.hk/search?q=' + keyword);
$('#more_gfsoso').attr('href', 'http://www.jwss.cc/?q=' + keyword);
$('#more_bing').attr('href', 'https://cn.bing.com/search?q=' + keyword);
$('#more_baidu').attr('href', 'https://www.baidu.com/s?wd=' + keyword);

function htmlEscape(s) {
	return String(s).replace(/[&<>"'\/]/g, function(s) {
		var entityMap = {
		"&": "&amp;",
		"<": "&lt;",
		">": "&gt;",
		'"': '&quot;',
		"'": '&#39;',
		"/": '&#x2F;'
		};
		return entityMap[s];
	});
}

function findEntries(q) {
	var matches = [];
	var rq = new RegExp(q, 'im');
	for (var i = 0; i < entries.length; i++) {
		var entry = entries[i];
		var title = $(entry.getElementsByTagName('title')[0]).text();
		var link = $(entry.getElementsByTagName('link')[0]).text();
		var content = $(entry.getElementsByTagName('description')[0]).text();          
		if (rq.test(title) || rq.test(content)) {
			matches.push({'title': title, 'link': link, 'content': content});
		}
	}
	var html = '';
	for (var i = 0; i < matches.length; i++) {
		var match = matches[i]; 
		html += '<li>';
		html += '<a href="' + match.link + '">' + htmlEscape(match.title) + '</a>';
		html += '</li>';
	}
	$('#searchlist').html(html);
	$('#searchlist').show();
}

$.get('/intro/feed.xml?r=' + (Math.random() * 99999999999), function(data) {
	entries = data.getElementsByTagName('item');
	findEntries(keyword);
});