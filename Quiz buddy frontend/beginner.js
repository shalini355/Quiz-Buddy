// Core beginner quiz logic
const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));
const progressText = document.getElementById('progressText');
const scoreText = document.getElementById('score');
const progressBarFull = document.getElementById('progressBarFull');
const loader = document.getElementById('loader');
const game = document.getElementById('game');

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];
let questions = [];
let userAnswers = [];

// URL to the local JSON file with beginner-level questions
fetch('beginner-questions.json')
    .then((res) => {
        if (!res.ok) throw new Error('Failed to load questions');
        return res.json();
    })
    .then((loadedQuestions) => {
        questions = loadedQuestions.map((loadedQuestion) => {
            const formattedQuestion = {
                question: loadedQuestion.question,
                answer: loadedQuestion.answer
            };

            const answerChoices = [
                loadedQuestion.choice1,
                loadedQuestion.choice2,
                loadedQuestion.choice3,
                loadedQuestion.choice4
            ];

            // Assign choices in order
            answerChoices.forEach((choice, index) => {
                formattedQuestion['choice' + (index + 1)] = choice;
            });

            return formattedQuestion;
        });

        startGame();
    })
    .catch((err) => {
        console.error('Error fetching questions:', err);
        if (loader) loader.innerText = 'Unable to load questions. Please refresh.';
    });

// CONSTANTS
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 10;

function startGame() {
    questionCounter = 0;
    score = 0;
    userAnswers = [];
    availableQuestions = [...questions];
    if (game) game.classList.remove('hidden');
    if (loader) loader.classList.add('hidden');
    getNewQuestion();
}

function getNewQuestion() {
    if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score);
        localStorage.setItem('userAnswers', JSON.stringify(userAnswers));
        // Redirect to result page
        return window.location.assign('Resultpage.html');
    }
    questionCounter++;
    if (progressText) {
        progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`;
    }
    
    // Update the progress bar
    if (progressBarFull) {
        progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;
    }

    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    if (question) question.innerText = currentQuestion.question;

    choices.forEach((choice) => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });

    availableQuestions.splice(questionIndex, 1);
    acceptingAnswers = true;
}

choices.forEach((choice) => {
    choice.addEventListener('click', (e) => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target.classList.contains('choice-text') 
            ? e.target 
            : e.target.querySelector('.choice-text') || e.target;
        const selectedText = selectedChoice.innerText.trim();
        const isCorrect = selectedText === currentQuestion.answer.trim();
        const classToApply = isCorrect ? 'correct' : 'incorrect';

        userAnswers.push({
            question: currentQuestion.question,
            selectedAnswer: selectedText,
            correctAnswer: currentQuestion.answer,
            isCorrect: isCorrect
        });

        if (isCorrect) {
            incrementScore(CORRECT_BONUS);
        }

        const choiceContainer = selectedChoice.closest('.choice-container') || selectedChoice.parentElement;
        choiceContainer.classList.add(classToApply);

        setTimeout(() => {
            choiceContainer.classList.remove(classToApply);
            getNewQuestion();
        }, 800);
    });
});

function incrementScore(num) {
    score += num;
    if (scoreText) scoreText.innerText = score;
}
