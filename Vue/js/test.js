/**
	* @param {string} s
	* @param {string} p
	* @return {boolean}
*/

// ['.' | character | '*']

var isMatch = function(s, p) {
	// p.length = 0, empty
	if (p === '') {
		return s === '';
	}

	// p.length = 1, check character or '.' matched
	if (p.length == 1 || p[1] != '*') {
		if (matchFirst(s, p)) {
			return isMatch(s.substr(1), p.substr(1));
		}
		else {
			return false;
		}
	}

	// p.length >= 2, * (Certainly matched, skip 2), check next
	while (matchFirst(s, p)) {
		if( isMatch(s, p.substr(2)) ) {
			return true;
		}
		s = s.substr(1);
	}
	return isMatch(s, p.substr(2));
};

// check first character matched
function matchFirst(s, p) {
	return s !== '' && (p[0] == '.' || s[0] == p[0]);
}
console.log(isMatch('baab','c*ba*b'))