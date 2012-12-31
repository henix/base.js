/**
 * like IllegalArgumentException
 * Indicates some user input is bad
 */
function ArgumentError(message) {
	this.name = 'ArgumentError';
	this.message = message;
}
ArgumentError.prototype = new Error();
ArgumentError.prototype.constructor = ArgumentError;

var Precond = {
	fail: function(msg) {
		throw new ArgumentError(msg);
	},
	check: function(cond, msg) {
		if (!cond) {
			this.fail(msg);
		}
	}
};
