
var assert = require('assert');
var num = require('../');

test('simple exponent', function() {
	var input = '1142040000000000e-26'
	var expected = '0.0000000000114204'

	assert(num(input).eq(expected))
});
