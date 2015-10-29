module.exports = {
	fizzbuzztest: function(f, s, inc) {
		var start = (s || 1);
		var step = (inc || 1);
		for (var i = start; i <= f; i + step) {
			if (i % 3 === 0 && i % 5 === 0) {
				return "FizzBuzz";
			} else if (i % 3 === 0) {
				return "Fizz";
			} else if (i % 5 === 0) {
				return "Buzz";
			} else {
					return i;
			}
		}
	}
}
