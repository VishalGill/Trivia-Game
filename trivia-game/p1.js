// MVP Goals
// To have a UI of the game
// To Display the Score
// To Display the name of the Player
// To Ask a questions and give multiple choice answers

// Stretch Goals
// To have a Restart, Exit, Next button
// To add animation/sounds to the UI
// To give hints
// To showcase progress (Ex. if you're on question 7 and there are 10 questions total - it will display 7/10 on the UI)

// // psuedocode
// // Step 1: Load Start Page: Click to Play. Enter Player Name. Display playername/score on each window.
// // Step 1B: Rules Page *Stretch Goal*
// //Step 2: Enter game, Display Question, Give the player the ability to pick an answer out of 4 anstions
// //step 3: if correct, showcase green and then can proceed to next question, if wrong, showcase red and proceed to next question.
// //step 3B: display -> Q#/totalQ# *Stretch Goal*
// //step 4: Once all the questions are answered, display score and state the quiz is over.

// Selectors
// let questionContainer = document.getElementById('container');
let nextButton = document.getElementById('next');
let question = document.getElementById('question');
let ans1 = document.getElementById('ans1');
let ans2 = document.getElementById('ans2');
let ans3 = document.getElementById('ans3');
let ans4 = document.getElementById('ans4');

// Questions/Answers DO ARRAYS
let questions = [
	{
		q: 'How many coding languages are there?',
		options: ['Over 700', '227', 'around 350', '67'],
		answer: 0,
	},
	{
		q: 'what was the first coding language?',
		options: ['PHP', 'FORTRAN', 'RUBY ON RAILS', 'PYTHON'],
		answer: 1,
	},
	{
		q: "According to Stack Overflow's 2020 developer survey, what is the most used programming language in the world?",
		options: ['JavaScript', 'Python', 'HTML/CSS', 'Java'],
		answer: 0,
	},
	{
		q: 'Which programming language is used to style your webpage?',
		options: ['Python', 'HTML', 'CSS', 'React'],
		answer: 2,
	},
	{
		q: 'What was the first-ever computer game?',
		options: ['Spacewar', 'Tetris', 'Snake', 'PacMan'],
		answer: 1,
	},
];

//   const question = document.getElementById("question");

// question.innerText = questions[0].q;
// ans1.innerText = questions[0].options[0];
// ans2.innerText = questions[0].options[1];
// ans3.innerText = questions[0].options[2];
// ans4.innerText = questions[0].options[3];

// question.innerText = questions[1].q;
// ans1.innerText = questions[1].options[0];
// ans2.innerText = questions[1].options[1];
// ans3.innerText = questions[1].options[2];
// ans4.innerText = questions[1].options[3];

// question.innerText = questions[2].q;
// ans1.innerText = questions[2].options[0];
// ans2.innerText = questions[2].options[1];
// ans3.innerText = questions[2].options[2];
// ans4.innerText = questions[2].options[3];

// question.innerText = questions[3].q;
// ans1.innerText = questions[3].options[0];
// ans2.innerText = questions[3].options[1];
// ans3.innerText = questions[3].options[2];
// ans4.innerText = questions[3].options[3];

// question.innerText = questions[4].q;
// ans1.innerText = questions[4].options[0];
// ans2.innerText = questions[4].options[1];
// ans3.innerText = questions[4].options[2];
// ans4.innerText = questions[4].options[3];

//if statement if this text = this text then style.background = green else style.background = red

//ans1.style.background-color= green
//ans1.style.background-color= red
//grabbing the variable saved to ans 1 accessing style property - setting it to green if correct.

//render function
/* 
grab brick @ array[0] 
set to null
replace it with brick 1
*/
let index = 0;
nextButton.addEventListener('click', () => {
	console.log(index);
	

	if (index == 5) {
		index = 0;
	}
	

    question.innerText = questions[index].q;
		ans1.innerText = questions[index].options[0];
		ans2.innerText = questions[index].options[1];
		ans3.innerText = questions[index].options[2];
		ans4.innerText = questions[index].options[3];
        index++;
});

console.log(index);
