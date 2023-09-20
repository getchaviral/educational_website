const questions = [
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        answer: "4"
    },
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        answer: "Paris"
    },
    {
       question: "Who is the prime minister of india",
       options: ["Narendra Modi", "Aditya Yogi", "Rajnath Singh", "Rahul Gandhi"],
       answer: "Narendra Modi"
  },
  {
     question: "2*7",
     options: ["9", "17", "14", "15"],
     answer: "14"
  },
  
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  const questionElement = document.getElementById("question");
  const optionsContainer = document.getElementById("options-container");
  const scoreElement = document.getElementById("score");
  const nextButton = document.getElementById("next-button");
  
  function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
  
    optionsContainer.innerHTML = "";
    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.className = "option";
        button.textContent = option;
        button.addEventListener("click", () => checkAnswer(option));
        optionsContainer.appendChild(button);
    });
  }
  
  function checkAnswer(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOption === currentQuestion.answer) {
        score++;
    }
  
    currentQuestionIndex++;
  
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        endGame();
    }
  }
  
  function endGame() {
    questionElement.textContent = "Quiz Completed!";
    optionsContainer.innerHTML = "";
    scoreElement.textContent = "Your Score: " + score;
    nextButton.style.display = "block";
  }
  
  nextButton.addEventListener("click", () => {
    currentQuestionIndex = 0;
    score = 0;
    scoreElement.textContent = "Score: 0";
    nextButton.style.display = "none";
    loadQuestion();
  });
  
  loadQuestion();