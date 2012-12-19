Assert.equalsIgnoreCase = function(actuall, expected, msg) {
	if (actuall.toLowerCase() !== expected.toLowerCase()) {
		msg = msg ? ': ' + msg : '';
		Assert.fail(actuall + ' !=(ignore case) ' + expected + ' (expected)' + msg);
	}
};
