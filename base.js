(function() {

#inline Base

var Base = {
	Assert: Assert,
	AssertError: AssertError,
	Strings: Strings,
	Precond: Precond,
	ArgumentError: ArgumentError
};

if (typeof exports !== 'undefined') {
	if (typeof module !== 'undefined' && module.exports) {
		exports = module.exports = Base;
	}
} else if (typeof define === 'function') {
	define(function () {
		return Base;
	});
} else {
	window.Assert = Assert;
	window.AssertError = AssertError;
	window.Strings = Strings;
	window.Precond = Precond;
	window.ArgumentError = ArgumentError;
}

})();
