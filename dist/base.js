/**
 * Array.map
 *
 * https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array/map
 */
// Production steps of ECMA-262, Edition 5, 15.4.4.19
// Reference: http://es5.github.com/#x15.4.4.19
if (!Array.prototype.map) {
	Array.prototype.map = function(callback, thisArg) {

		var T, A, k;

		if (this === null) {
			throw new TypeError(" this is null or not defined");
		}

		// 1. Let O be the result of calling ToObject passing the |this| value as the argument.
		var O = Object(this);

		// 2. Let lenValue be the result of calling the Get internal method of O with the argument "length".
		// 3. Let len be ToUint32(lenValue).
		var len = O.length >>> 0;

		// 4. If IsCallable(callback) is false, throw a TypeError exception.
		// See: http://es5.github.com/#x9.11
		if ({}.toString.call(callback) != "[object Function]") {
			throw new TypeError(callback + " is not a function");
		}

		// 5. If thisArg was supplied, let T be thisArg; else let T be undefined.
		if (thisArg) {
			T = thisArg;
		}

		// 6. Let A be a new array created as if by the expression new Array(len) where Array is
		// the standard built-in constructor with that name and len is the value of len.
		A = new Array(len);

		// 7. Let k be 0
		k = 0;

		// 8. Repeat, while k < len
		while(k < len) {

			var kValue, mappedValue;

			// a. Let Pk be ToString(k).
			//   This is implicit for LHS operands of the in operator
			// b. Let kPresent be the result of calling the HasProperty internal method of O with argument Pk.
			//   This step can be combined with c
			// c. If kPresent is true, then
			if (k in O) {

				// i. Let kValue be the result of calling the Get internal method of O with argument Pk.
				kValue = O[ k ];

				// ii. Let mappedValue be the result of calling the Call internal method of callback
				// with T as the this value and argument list containing kValue, k, and O.
				mappedValue = callback.call(T, kValue, k, O);

				// iii. Call the DefineOwnProperty internal method of A with arguments
				// Pk, Property Descriptor {Value: mappedValue, : true, Enumerable: true, Configurable: true},
				// and false.

				// In browsers that support Object.defineProperty, use the following:
				// Object.defineProperty(A, Pk, { value: mappedValue, writable: true, enumerable: true, configurable: true });

				// For best browser support, use the following:
				A[ k ] = mappedValue;
			}
			// d. Increase k by 1.
			k++;
		}

		// 9. return A
		return A;
	};      
}
/**
 * Array.indexOf
 *
 * https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array/indexOf
 */
if (!Array.prototype.indexOf) {
	Array.prototype.indexOf = function (searchElement /*, fromIndex */ ) {
		"use strict";
		if (this === null) {
			throw new TypeError();
		}
		var t = Object(this);
		var len = t.length >>> 0;
		if (len === 0) {
			return -1;
		}
		var n = 0;
		if (arguments.length > 0) {
			n = Number(arguments[1]);
			if (n != n) { // shortcut for verifying if it's NaN
				n = 0;
			} else if (n !== 0 && n != Infinity && n != -Infinity) {
				n = (n > 0 || -1) * Math.floor(Math.abs(n));
			}
		}
		if (n >= len) {
			return -1;
		}
		var k = n >= 0 ? n : Math.max(len - Math.abs(n), 0);
		for (; k < len; k++) {
			if (k in t && t[k] === searchElement) {
				return k;
			}
		}
		return -1;
	};
}
/**
 * Object.keys
 *
 * https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Object/keys
 */
if (!Object.keys) {
	Object.keys = (function () {
		var hasOwnProperty = Object.prototype.hasOwnProperty,
        hasDontEnumBug = !({toString: null}).propertyIsEnumerable('toString'),
        dontEnums = [
			'toString',
			'toLocaleString',
			'valueOf',
			'hasOwnProperty',
			'isPrototypeOf',
			'propertyIsEnumerable',
			'constructor'
        ],
        dontEnumsLength = dontEnums.length;

		return function (obj) {
			if (typeof obj !== 'object' && typeof obj !== 'function' || obj === null) throw new TypeError('Object.keys called on non-object');

			var result = [];

			for (var prop in obj) {
				if (hasOwnProperty.call(obj, prop)) result.push(prop);
			}
 
			if (hasDontEnumBug) {
				for (var i=0; i < dontEnumsLength; i++) {
					if (hasOwnProperty.call(obj, dontEnums[i])) result.push(dontEnums[i]);
				}
			}
			return result;
		};
	})();
}
/**
 * Array.filter
 *
 * https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array/filter
 */
if (!Array.prototype.filter) {
	Array.prototype.filter = function(fun /*, thisp */) {
		"use strict";
 
		if (this === null)
			throw new TypeError();
 
		var t = Object(this);
		var len = t.length >>> 0;
		if (typeof fun != "function")
			throw new TypeError();
 
		var res = [];
		var thisp = arguments[1];
		for (var i = 0; i < len; i++) {
			if (i in t) {
				var val = t[i]; // in case fun mutates this
				if (fun.call(thisp, val, i, t))
					res.push(val);
			}
		}

		return res;
	};
}
/**
 * String.trim()
 *
 * https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/String/Trim
 */
if(!String.prototype.trim) {
	String.prototype.trim = function () {
		return this.replace(/^\s+|\s+$/g,'');
	};
}
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

Precond = {
	fail: function(msg) {
		throw new ArgumentError(msg);
	},
	check: function(cond, msg) {
		if (!cond) {
			this.fail(msg);
		}
	}
};
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
Assert.notPresent = function(obj, msg) {
	if ((typeof obj !== 'undefined') && (obj !== null)) {
		msg = msg ? ': ' + msg : '';
		Assert.fail('object is present' + msg);
	}
};
Assert.notEmpty = function(str, msg) {
	if (str.length === 0) {
		msg = msg ? ': ' + msg : '';
		Assert.fail('string is empty' + msg);
	}
};
Assert.between = function(actuall, start, end, msg) {
	if ((actuall < start) || (actuall > end)) {
		msg = msg ? ': ' + msg : '';
		Assert.fail(actuall + ' is not between [' + start + ',' + end + ']' + msg);
	}
};
Assert.present = function(obj, msg) {
	if ((typeof obj === 'undefined') || (obj === null)) {
		msg = msg ? ': ' + msg : '';
		Assert.fail('object null or undefined' + msg);
	}
};
Assert.equalsIgnoreCase = function(actuall, expected, msg) {
	if (actuall.toLowerCase() !== expected.toLowerCase()) {
		msg = msg ? ': ' + msg : '';
		Assert.fail(actuall + ' !=(ignore case) ' + expected + ' (expected)' + msg);
	}
};
Assert.equals = function(actuall, expected, msg) {
	if (actuall != expected) {
		msg = msg ? ': ' + msg : '';
		Assert.fail(actuall + ' != ' + expected + ' (expected)' + msg);
	}
};
Assert.isFalse = function(cond, msg) {
	if (cond !== false) {
		msg = msg ? ': ' + msg : '';
		Assert.fail('condition ' + cond + ' is not false' + msg);
	}
};
Assert.isTrue = function(cond, msg) {
	if (cond !== true) {
		msg = msg ? ': ' + msg : '';
		Assert.fail('condition ' + cond + ' is not true' + msg);
	}
};
