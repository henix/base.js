Assert.between = function(actuall, start, end, msg) {
	if ((actuall < start) || (actuall > end)) {
		msg = msg ? ': ' + msg : '';
		Assert.fail(actuall + ' is not between [' + start + ',' + end + ']' + msg);
	}
};
