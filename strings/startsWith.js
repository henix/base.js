/* see http://stackoverflow.com/questions/646628/javascript-startswith */
/* benchmark: http://jsperf.com/js-startswith/6 */
Strings.startsWith = function(str, prefix) {
	return str.lastIndexOf(prefix, 0) === 0;
};
