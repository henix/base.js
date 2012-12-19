Assert.isFalse = function(cond, msg) {
	if (cond !== false) {
		msg = msg ? ': ' + msg : '';
		Assert.fail('condition ' + cond + ' is not false' + msg);
	}
};
