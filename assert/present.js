Assert.present = function(obj, msg) {
	if ((typeof obj === 'undefined') || (obj === null)) {
		msg = msg ? ': ' + msg : '';
		Assert.fail('object null or undefined' + msg);
	}
};
