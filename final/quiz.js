let score = 0;

// Correct answers for each question
const correctAnswers = {
    q1: 'C', // Question 1: Correct answer is C) Paris
    q2: 'C', // Question 2: Correct answer is C) Earth
    q3: 'B', // Question 3: Correct answer is B) Nitrogen
    q4: 'C', // Question 4: Correct answer is C) Diamond
    q5: 'B'  // Question 5: Correct answer is B) Albert Einstein
};

// Function to check the answer for Question 5
function checkAnswerQ5(answer) {
    if (answer === correctAnswers.q5) {
        score++;
    }
    alert(`Your score is: ${score}/5`);
}
