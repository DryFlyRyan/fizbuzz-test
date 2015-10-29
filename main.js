module.exports = {
	fizzbuzztest: function(f, s, inc) {
		var start = (s || 0);
		var step = (inc || 1);
		var arr = [];
		for (var i = start; i <= f; i += step) {
			if (i % 3 === 0 && i % 5 === 0 && i !== 0) {
				arr.push("FizzBuzz");
			} else if (i % 3 === 0 && i !== 0) {
				arr.push("Fizz");
			} else if (i % 5 === 0 && i !== 0) {
				arr.push("Buzz");
			} else {
				arr.push(i);
			}
		}
		console.log("test");
		return arr;
	}
}
