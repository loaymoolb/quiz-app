const quizData = [
  {
    question: 'Which of the following is an interpreted programming language?',
    a: 'C++',
    b: 'JavaScript',
    c: 'Pascal',
    d: 'Fortan',
    correct: 'b',
  },
  {
    question: 'What does SQL stand for?',
    a: 'Standard query language',
    b: 'Standard quick language',
    c: 'Structured question language',
    d: 'Structured query language',
    correct: 'd',
  },
  {
    question: 'Which SQL command retrieves data from a table?',
    a: 'SELECT',
    b: 'UPDATE',
    c: 'DELETE',
    d: 'RETRIEVE',
    correct: 'a',
  },
  {
    question: 'what is the most popular PC game in the world?',
    a: 'Counter-Strike: Global Offensive',
    b: 'Minecraft',
    c: 'Fortnite',
    d: 'League of Legends',
    correct: 'c',
  },
  {
    question: 'When was JavaScript first released?',
    a: '2001',
    b: '1997',
    c: '1990',
    d: '1995',
    correct: 'd',
  },
];

const answerEls = document.querySelectorAll(".answer");
const quiz = document.getElementById("quiz");

const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const continueBtn = document.getElementById('btn');


let currentQuiz = 0;
let answer = undefined;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers()
  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;

  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
} 

function getSelected() {

  let answer = undefined;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    } 
  });

  return answer;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

continueBtn.addEventListener('click', () => {
  
  const answer = getSelected();

  console.log(answer);

  if (answer) {
    if(answer === quizData[currentQuiz].correct) {
      score++;
    }

      currentQuiz++;
    
      if(currentQuiz < quizData.length) {
        loadQuiz();
      } else {
        quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions.</h2> <button onClick="location.reload()">Reload</button>`;
      }
    }
});