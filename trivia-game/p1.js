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
let questionContainer = document.getElementById('container')
let nextButton = document.getElementById('next');
let question = document.getElementById('question');
let ans1 = document.getElementById('ans1');
let ans2 = document.getElementById('ans2');
let ans3 = document.getElementById('ans3');
let ans4 = document.getElementById('ans4');

// Questions/Answers DO ARRAYS
let container = {
	questions: [
		{
			q: 'What is Ga?',
			options: ['GA1, GA2, GA3, GA4'],
			answer: 1,
		},
		{
			q: 'What is Ga?',
			options: ['GA1, GA2, GA3, GA4'],
			answer: 1,
		},
		{
			q: 'What is Ga?',
			options: ['GA1, GA2, GA3, GA4'],
			answer: 1,
		},
	],





