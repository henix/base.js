Strings.removeEnd = function(str, suffix) {
	if (this.endsWith(str, suffix)) {
		return str.substring(0, str.length - suffix.length);
	}
	return str;
};
