// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
	let obj = {};
	let maxCount = 0;
	let currentChar = '';

	for (let char of str){
		obj[char] = obj[char] + 1 || 1;
	}

	for (let e in obj){
		if(obj[e] > maxCount ){
			maxCount = obj[e];
			currentChar = e;
		}
	}

	return currentChar;
}

module.exports = maxChar;
