//formula A000124 of Sloane's OEIS from the problem is defined as follows:
function formula(input) {
	const sequence = [];
	let num = 1;
	for (let i = 1; i <= input; i++) {
		sequence.push(num);
		num += i;
	}
	return sequence.join("-");
}

// Input using readline
const readline = require("readline").createInterface({
	input: process.stdin,
	output: process.stdout,
});

// Input validation using readline
readline.question("Input : ", (input) => {
	input = parseInt(input);
	if (isNaN(input) || input <= 0) {
		console.log("Input salah! Input harus berupa angka positif.");
	} else {
		const output = formula(input);
		console.log("Output :", output);
	}
	readline.close();
});