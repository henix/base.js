Assert.notPresent = function(obj, msg) {
	if ((typeof obj !== 'undefined') && (obj !== null)) {
		msg = msg ? ': ' + msg : '';
		Assert.fail('object is present' + msg);
	}
};
