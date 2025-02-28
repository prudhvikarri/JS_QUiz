const quizData = [
    {
        question: "Javascript is an _______ language? ",
        a:"Object-Oriented",
        b:"Object-Based",
        c: "Procedural",
        d:"None of the above",
        correct:"a",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "Which one of the following symbol is used for creating comments in the javascript:",
        a: "//",
        b: "\\",
        c: "\**\ ",
        d: "\**/",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "javascript",
        correct: "d",
    },
    {
        question: " Which of the following keywords is used to define a variable in Javascript?",
        a:"var",
        b:"let",
        c: "Both a & b",
        d:"None",
        correct:"c",
    },
    {
        question: " Which of the following methods is used to access HTML elements using Javascript?",
        a:"getElementById()",
        b:"getElementsByClass()",
        c: "Both a&b",
        d:"None",
        correct:"c",
    },
    {
        question: "What is the use of the <noscript> tag in Javascript?",
        a:"The <noscript> tag is displayed by non-Javascript browsers only.",
        b:"Clears all the cookies and cache",
        c: "Both a&b",
        d:"None",
        correct:"a",
    },
    {
        question: " Which of the following can be used to call a JavaScript Code Snippet?",
        a:"Function/Method",
        b:"Preprocessor",
        c: "Triggering Event",
        d:"RMI",
        correct:"a",
    },
    {
        question: "Which of the following is not an error in JavaScript? ",
        a:"Missing of Bracket",
        b:"Division by Zero",
        c: "Syntax error",
        d:"Missing of semicolons",
        correct:"b",
    }
];
const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
let currentQuiz = 0
let score = 0
loadQuiz()
function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }
       currentQuiz++
       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>Your Score is ${score}out of${quizData.length}</h2>
           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})

document.getElementById("hero").addEventListener(
    "click",
    () => {
      document.getElementById("welcome").hidden = true;
      document.getElementById("quiz").hidden = false;
    },
    false
  );
