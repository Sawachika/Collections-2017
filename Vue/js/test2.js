/**
	* @param {string} s
	* @return {number}
*/

var calculate = function(s) {
	var result = 0, sign = 1, stack = [];
	var sum = 0;

	for (var i = 0; i < s.length; i++) {
		// skip space character
		if (s[i] == ' ') {
			continue;
		}

		// is number
		if (!isNaN(s[i])) {
			sum = sum * 10 + parseInt(s[i]);
			
		}
		else {
			result += sign * sum;
			sum = 0; // initial
			switch (s[i]) {
				case '+':
					sign = 1;
				break;

				case '-':
					sign = -1;
				break;

				case '(':
					stack.push(result);
					stack.push(sign);
					result = 0; // initial
					sign = 1; // initial
				break;

				case ')':
					if (stack.length) {
						// sign(from stack) * result + result(from stack)
						result = stack.pop() * result + stack.pop();
					}
				break;
			}
		}
	}
	// add lastest sum
	return result + sign * sum;
};