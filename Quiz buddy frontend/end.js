// Standalone end.js helper
document.addEventListener('DOMContentLoaded', () => {
    const score = localStorage.getItem('mostRecentScore') || '0';
    const rawScore = localStorage.getItem('rawScore');
    let userAnswers = [];

    try {
        userAnswers = JSON.parse(localStorage.getItem('userAnswers')) || [];
    } catch(e) {
        userAnswers = [];
    }

    const scoreEl = document.getElementById('score');
    if (scoreEl) {
        scoreEl.innerText = rawScore ? `${score}% (${rawScore})` : `${score}%`;
    }

    const correctAnswers = userAnswers.filter(q => q.isCorrect).length;
    const incorrectAnswers = userAnswers.length - correctAnswers;

    const correctEl = document.getElementById('correctAnswers');
    if (correctEl) correctEl.innerText = `Correct Answers: ${correctAnswers}`;

    const incorrectEl = document.getElementById('incorrectAnswers');
    if (incorrectEl) incorrectEl.innerText = `Incorrect Answers: ${incorrectAnswers}`;

    const incorrectContainer = document.getElementById('incorrectQuestions');
    if (incorrectContainer) {
        incorrectContainer.innerHTML = '<h3>Incorrect Questions Review</h3>';
        const incorrectList = userAnswers.filter(q => !q.isCorrect);
        if (incorrectList.length === 0) {
            incorrectContainer.innerHTML += '<p class="text-success">Perfect score! No incorrect answers.</p>';
        } else {
            incorrectList.forEach(q => {
                incorrectContainer.innerHTML += `
                    <div>
                        <p><strong>Question:</strong> ${q.question}</p>
                        <p><strong>Your Answer:</strong> ${q.selectedAnswer || '(None)'}</p>
                        <p><strong>Correct Answer:</strong> ${q.correctAnswer}</p>
                    </div>
                    <hr>
                `;
            });
        }
    }
});
