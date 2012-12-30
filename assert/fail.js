function AssertError(msg) {
	this.message = msg;
}
AssertError.prototype = new Error();
AssertError.prototype.constructor = AssertError;
AssertError.prototype.name = 'AssertError';

Assert = {
	fail: function(msg) {
		throw new AssertError(msg);
	}
};
