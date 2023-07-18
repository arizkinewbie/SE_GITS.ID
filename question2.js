// Read input from stdin
function readInput() {
	const rl = require('readline').createInterface({
		input: process.stdin,
		output: process.stdout
	});
	const lines = [];
	return new Promise((resolve) => {
		rl.on('line', (line) => {
			lines.push(line);
		}).on('close', () => {
			//Separate player score and GITS score
			const playerScores = lines[1].split(' ').map(Number);
			const gitsScores = lines[3].split(' ').map(Number);
			resolve({
				playerScores,
				gitsScores
			});
		});
	});
}

function denseRanking(scores, gitsScores) {
	const uniqueScores = Array.from(new Set(scores)).sort((a, b) => b - a);
	const rankings = [];
	////Merge the GITS scores with the list of player scores and sort them
	for (const gitsScore of gitsScores) {
		const combinedScores = [...uniqueScores, gitsScore].sort((a, b) => b - a);
		const rank = combinedScores.indexOf(gitsScore) + 1;
		rankings.push(rank);
	}
	return rankings;
}

async function main() {
	const {
		playerScores,
		gitsScores
	} = await readInput();
	const result = denseRanking(playerScores, gitsScores);
	console.log(result.join(' '));
}

// call main function
main();