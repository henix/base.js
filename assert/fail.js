function AssertError(msg) {
	this.name = 'AssertError';
	this.message = msg;
}
AssertError.prototype = new Error();
AssertError.prototype.constructor = AssertError;

Assert = {
	fail: function(msg) {
		throw new AssertError(msg);
	}
};
