var code = require('../main');
var expect = require('chai').expect;

describe('fizzbuzztest', function(){
	it('should return "FizzBuzz" when i = 15', function() {
	expect(code.fizzbuzztest(15)[15]).to.equal("FizzBuzz");
})

	it('should return "Buzz" when i % 5 === 0', function() {
	expect(code.fizzbuzztest(15)[5]).to.equal("Buzz");
})
	it('should return "Buzz" when i % 3 === 0', function() {
	expect(code.fizzbuzztest(15)[3]).to.equal("Fizz");
})
	it('should return "Buzz" when i % 3 === 0', function() {
	expect(code.fizzbuzztest(15)[8]).to.equal(8);
})

});
