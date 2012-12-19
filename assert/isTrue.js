Assert.isTrue = function(cond, msg) {
	if (cond !== true) {
		msg = msg ? ': ' + msg : '';
		Assert.fail('condition ' + cond + ' is not true' + msg);
	}
};
