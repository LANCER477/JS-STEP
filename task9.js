let score = 0;

const answer1 = prompt(" What is 2 + 2? (1: 3, 2: 4, 3: 5)");
if (answer1 === "2") score += 2;

const answer2 = prompt(" Who? (1: I, 2: I am, 3: Odessa)");
if (answer2 === "3") score += 2;

const answer3 = prompt("Hellp (1: 6, 2: Hello, 3: 8)");
if (answer3 === "2") score += 2;

console.log(`You scored ${score} points.`);
