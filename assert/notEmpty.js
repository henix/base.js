Assert.notEmpty = function(str, msg) {
	if (str.length === 0) {
		msg = msg ? ': ' + msg : '';
		Assert.fail('string is empty' + msg);
	}
};
