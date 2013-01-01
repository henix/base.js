(function() {

var entityMap = {
	"&": "&amp;",
	"<": "&lt;",
	">": "&gt;",
	'"': '&quot;',
	"'": '&#39;',
	"/": '&#x2F;'
};

function escapeChar(c) {
	return entityMap[c];
}

Strings.escapeHtml = function(str) {
	return str.replace(/[&<>"'\/]/g, escapeChar);
};

})();
