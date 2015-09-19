/*
 * Thanks for liberize (https://github.com/liberize/liberize.github.com)
 */

var entries = null;
var keyword = $.request.queryString['s'];

$('#keyword').val(keyword);
$('#keyword2').val(keyword);
$('#keywordlabel').text(keyword);

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

function formatDate(date) {
	var matches = date.match(/(\d{1,2}) ([A-Za-z]{3}) (\d{4})/);
	return matches[2] + ' ' + matches[1] + ', ' + matches[3];
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
			var updated = formatDate($(entry.getElementsByTagName('pubDate')[0]).text());
			matches.push({'title': title, 'link': link, 'date': updated, 'content': content});
		}
	}
	var html = '';
	for (var i = 0; i < matches.length; i++) {
		var match = matches[i]; 
		html += '<li>';
		html += '<span class="text-muted">' + match.date + '</span>';
		html += '<h3><a href="' + match.link + '">' + htmlEscape(match.title) + '</a></h3>';
		html += '</li>';
	}
	$('#searchlist').html(html);
	$('#searchlist').show();
}

$.get('/feed.xml?r=' + (Math.random() * 99999999999), function(data) {
	entries = data.getElementsByTagName('item');
	findEntries(keyword);
});