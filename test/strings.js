if (typeof require !== 'undefined') {
	assert = require('assert');
	Strings = require('../dist/base.js').Strings;
} else {
	assert = QUnit.assert;
}

if (typeof test === 'undefined') {
	test = function(str, func) {
		func();
	};
}

test('startsWith', function() {
	var s = 'hello';
	assert.strictEqual(Strings.startsWith(s, 'he'), true);
	assert.strictEqual(Strings.startsWith(s, ''), true);
	assert.strictEqual(Strings.startsWith(s, 'hele'), false);
	assert.strictEqual(Strings.startsWith(s, 'e'), false);
});

test('endsWith', function() {
	var s = 'hello';
	assert.strictEqual(Strings.endsWith(s, 'llo'), true);
	assert.strictEqual(Strings.endsWith(s, ''), true);
	assert.strictEqual(Strings.endsWith(s, 'll'), false);
	assert.strictEqual(Strings.endsWith(s, 'jlo'), false);
});

test('removeEnd', function() {
	var s = 'hello';
	assert.strictEqual(Strings.removeEnd(s, 'llo'), 'he');
	assert.strictEqual(Strings.removeEnd(s, 'll'), 'hello');
});

test('escapeHtml', function() {
	assert.equal(Strings.escapeHtml('<a>'), '&lt;a&gt;');
});
