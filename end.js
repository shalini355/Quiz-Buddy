document.addEventListener('DOMContentLoaded', () => {
    const score = localStorage.getItem('mostRecentScore');
    const selectedLevel = sessionStorage.getItem('selectedLevel');
    const totalQuestions = getTotalQuestions(selectedLevel);
    let questions = [];
    let incorrectQuestions = [];

    // Fetch questions to get correct answers
    fetch(`${selectedLevel.toLowerCase()}-questions.json`)
        .then(res => res.json())
        .then(data => {
            questions = data;
            // Display results
            displayResults(score, questions, totalQuestions);
        })
        .catch(err => {
            console.error(err);
        });

    function getTotalQuestions(level) {
        switch(level) {
            case 'Beginner': return 10;
            case 'Intermediate': return 15;
            case 'Advanced': return 20;
            default: return 10; // Default value
        }
    }

    function displayResults(score, questions, totalQuestions) {
        const correctAnswers = questions.filter(q => q.answer === q.selectedAnswer).length;
        const incorrectAnswers = totalQuestions - correctAnswers;
        incorrectQuestions = questions.filter(q => q.answer !== q.selectedAnswer);

        document.getElementById('score').innerText = `Your Score: ${score}`;
        document.getElementById('correctAnswers').innerText = `Correct Answers: ${correctAnswers}`;
        document.getElementById('incorrectAnswers').innerText = `Incorrect Answers: ${incorrectAnswers}`;

        const incorrectQuestionsContainer = document.getElementById('incorrectQuestions');
        incorrectQuestionsContainer.innerHTML = '<h3>Incorrect Questions</h3>';
        incorrectQuestions.forEach(q => {
            incorrectQuestionsContainer.innerHTML += `
                <div>
                    <p><strong>Question:</strong> ${q.question}</p>
                    <p><strong>Your Answer:</strong> ${q.selectedAnswer}</p>
                    <p><strong>Correct Answer:</strong> ${q.answer}</p>
                </div>
                <hr>
            `;
        });
    }
});
