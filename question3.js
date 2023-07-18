// Balance Bracket Problem
function BalancedBracket(inputString) {
	const stack = [];
	const bracketMap = {
		')': '(',
		'}': '{',
		']': '['
	};

	for (let char of inputString) {
		if (bracketMap[char]) {
			if (!stack.length || stack.pop() !== bracketMap[char]) {
				return "NO";
			}
		} else {
			stack.push(char);
		}
	}

	return stack.length === 0 ? "YES" : "NO";
}

const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout
});

readline.question("Input: ", function(input) {
	const inputString = input.replace(/\s+/g, '');
	const result = BalancedBracket(inputString);
	console.log(`Output: ${result}`);
	readline.close();
});
