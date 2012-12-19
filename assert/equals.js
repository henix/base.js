Assert.equals = function(actuall, expected, msg) {
	if (actuall != expected) {
		msg = msg ? ': ' + msg : '';
		Assert.fail(actuall + ' != ' + expected + ' (expected)' + msg);
	}
};
