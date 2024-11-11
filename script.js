document.addEventListener("DOMContentLoaded", () => {
    const quizzes = ['quiz1', 'quiz2', 'quiz3', 'quiz4', 'quiz5', 'quiz6']; // Add all quiz IDs
    
    quizzes.forEach(quizId => {
        const quizForm = document.getElementById(quizId);
        const submitButton = quizForm.querySelector('.submit-btn'); // Select by class
        const resultDiv = quizForm.nextElementSibling; // Ensure resultDiv is next to the form

        submitButton.addEventListener('click', () => {
            const formData = new FormData(quizForm);
            let score = 0;

            // Calculate score based on selected answers
            formData.forEach((value) => {
                switch (value) {
                    case 'never':
                        score += 0;
                        break;
                    case 'sometimes':
                        score += 1;
                        break;
                    case 'often':
                        score += 2;
                        break;
                    case 'always':
                        score += 3;
                        break;
                }
            });

            // Generate result based on quiz ID and score
            let result = '';
            switch (quizId) {
                case 'quiz1':
                    result = generateQuiz1Result(score);
                    break;
                case 'quiz2':
                    result = generateQuiz2Result(score);
                    break;
                case 'quiz3':
                    result = generateQuiz3Result(score);
                    break;
                case 'quiz4':
                    result = generateQuiz4Result(score);
                    break;
                case 'quiz5':
                    result = generateQuiz5Result(score);
                    break;
                case 'quiz6':
                    result = generateQuiz6Result(score);
                    break;
                default:
                    result = 'Unknown quiz';
            }

            // Display the result in the resultDiv
            resultDiv.innerHTML = `<h3>Your Result:</h3><p>${result}</p>`;
        });
    });
});

// Functions to generate results for each quiz (same as your original ones)
function generateQuiz1Result(score) {
    if (score <= 3) {
        return "You seem to manage stress quite well. Keep up the good work!";
    } else if (score <= 6) {
        return "You experience moderate stress. Consider incorporating more stress management techniques.";
    } else if (score <= 9) {
        return "Your stress levels are concerning. You may want to focus on self-care and relaxation strategies.";
    } else {
        return "You are experiencing high stress. It's important to take immediate steps to manage it.";
    }
}

// Generate Results for Quiz 2
function generateQuiz2Result(score) {
    if (score <= 3) {
        return "You have a good work-life balance. Keep prioritizing your personal time.";
    } else if (score <= 6) {
        return "Your work-life balance is moderate, but you could benefit from setting clearer boundaries.";
    } else if (score <= 9) {
        return "Work often interferes with your personal time. Consider finding ways to better separate the two.";
    } else {
        return "Work is dominating your life. It's crucial to take breaks and set boundaries.";
    }
}

// Generate Results for Quiz 3
function generateQuiz3Result(score) {
    if (score <= 3) {
        return "You maintain a positive mindset even during stressful times. Great job!";
    } else if (score <= 6) {
        return "You sometimes let negative thoughts creep in, but overall your mindset is stable.";
    } else if (score <= 9) {
        return "Negative thinking is affecting your stress levels. Try focusing on positive affirmations.";
    } else {
        return "You often struggle with a negative mindset. Consider seeking ways to improve your mental outlook.";
    }
}

// Generate Results for Quiz 4
function generateQuiz4Result(score) {
    if (score <= 3) {
        return "You cope well with stress and stay emotionally balanced.";
    } else if (score <= 6) {
        return "You manage stress moderately well, but there's room for improvement.";
    } else if (score <= 9) {
        return "Stress impacts your emotional state frequently. Consider working on stress-reduction techniques.";
    } else {
        return "Stress significantly affects your emotions. It's important to seek support and manage your stress better.";
    }
}

// Generate Results for Quiz 5
function generateQuiz5Result(score) {
    if (score <= 3) {
        return "You feel in control of your stress most of the time. Keep practicing healthy habits!";
    } else if (score <= 6) {
        return "You sometimes feel overwhelmed, but overall manage to stay in control.";
    } else if (score <= 9) {
        return "You often feel out of control when stressed. Focus on relaxation and coping strategies.";
    } else {
        return "Stress often feels unmanageable for you. Seek support and make self-care a priority.";
    }
}

// Generate Results for Quiz 6
function generateQuiz6Result(score) {
    if (score <= 3) {
        return "You have an excellent ability to balance work and personal life.";
    } else if (score <= 6) {
        return "You are doing okay, but there's room to improve your work-life balance.";
    } else if (score <= 9) {
        return "Work-life balance is a challenge for you. It might be time to reassess your priorities.";
    } else {
        return "Your work-life balance is significantly off. Take immediate steps to improve it.";
    }
}
