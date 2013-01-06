Assert.present = function(obj, msg) {
	if ((typeof obj === 'undefined') || (obj === null)) {
		if (typeof msg == 'function') {
			msg = msg();
		}
		msg = msg ? ': ' + msg : '';
		Assert.fail('object null or undefined' + msg);
	}
};
