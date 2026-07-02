  const questions = [
      {
        question: "Aşağıdakilerden hangisi uçabilir?",
        answers: ["Penguen", "Kedi", "Köpek", "Güvercin"],
        correct: 3,
      },
      {
        question: "Hangi hayvanın 2 tane ayağı vardır?",
        answers: ["Balina", "Koyun", "İnek", "Tavuk"],
        correct: 3,
      },
      {
        question: "Hangisi toprakta yetişmez?",
        answers: ["Çiçek", "Ağaç", "Oyuncak", "Çimen"],
        correct: 2,
      },
      {
        question: "Hangisi tatlı değildir?",
        answers: ["Biber", "Kavun", "Elma", "Karpuz"],
        correct: 0,
      },
      {
        question: "Hangisi ormanların kralıdır?",
        answers: ["Eşşek", "Maymun", "Zürafa", "Aslan"],
        correct: 3,
      },
      {
        question: "En hızlı hayvan hangisidir?",
        answers: ["Tavşan", "Çita", "Zürafa", "Zürafa"],
        correct: 1,
      },
      {
        question: "Ülkemizde kaç mevsim vardır?",
        answers: ["1", "4", "3", "2"],
        correct: 1, // düzeltildi, doğru cevap "4"
      },
      {
        question: "Hangisi kırmızı renktir?",
        answers: ["Domates", "Muz", "Erik", "Armut"],
        correct: 0,
      },
      {
        question: "Çimen hangi renktir?",
        answers: ["Yeşil", "Sarı", "Kırmızı", "Pembe"],
        correct: 0,
      },
      {
        question: "Güneş hangi renktir?",
        answers: ["Yeşil", "Sarı", "Kırmızı", "Pembe"],
        correct: 1,
      }
    ];
    
    let currentQuestionIndex = 0;
    let score = 0;
    let timer;
    let timeLeft = 10;
    
    const questionElement = document.getElementById("question");
    const answerButtons = document.querySelectorAll(".answer");
    const nextButton = document.getElementById("next-button");
    const scoreContainer = document.getElementById("score-container");
    const scoreDisplay = document.getElementById("score");
    const messageElement = document.getElementById("message");
    const timerElement = document.getElementById("timer");
    
    function startTimer() {
      clearInterval(timer);
      timeLeft = 10;
      timerElement.textContent = `Kalan Süre: ${timeLeft}`;
      timer = setInterval(() => {
        timeLeft--;
        timerElement.textContent = `Kalan Süre: ${timeLeft}`;
        if (timeLeft === 0) {
          clearInterval(timer);
          answerButtons.forEach(btn => btn.disabled = true);
          messageElement.textContent = "Süre doldu!";
          messageElement.style.color = "#ff9800";
          nextButton.click(); // Otomatik geç
        }
      }, 1000);
    }
    
    function showQuestion() {
      clearInterval(timer);
      startTimer();
      messageElement.textContent = ""; // Önceki mesajı sil
      const current = questions[currentQuestionIndex];
      questionElement.textContent = current.question;
    
      answerButtons.forEach((btn, index) => {
        btn.textContent = current.answers[index];
        btn.disabled = false;
        btn.classList.remove("correct", "wrong");
        btn.onclick = () => selectAnswer(index);
      });
    }
    
    function selectAnswer(selected) {
      clearInterval(timer);
      let correctIndex = questions[currentQuestionIndex].correct;
    
      answerButtons.forEach((btn, index) => {
        btn.disabled = true;
        if (index === correctIndex) {
          btn.classList.add("correct");
        }
        if (index === selected && selected !== correctIndex) {
          btn.classList.add("wrong");
        }
      });
    
      if (selected === correctIndex) {
        score++;
        messageElement.textContent = "Doğru cevap!";
        messageElement.style.color = "#4caf50";
      } else {
        messageElement.textContent = "Yanlış cevap!";
        messageElement.style.color = "#f44336";
      }
    }
    
    nextButton.addEventListener("click", () => {
      currentQuestionIndex++;
      if (currentQuestionIndex < questions.length) {
        showQuestion();
      } else {
        showScore();
      }
    });
    
    function showScore() {
      document.getElementById("question-container").style.display = "none";
      scoreContainer.style.display = "block";
      scoreDisplay.textContent = `${score} / ${questions.length}`;
      localStorage.setItem("lastScore", score);
    }
    
    showQuestion();
    


  