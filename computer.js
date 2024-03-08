// let question = document.querySelector('.quesContainer') ;
// let options = document.querySelector('.options') ;
// let nextBtn = document.querySelector('.nextBtn') ;
// let skipBtn = document.querySelector('.skipBtn') ;
// let shareBtn = document.querySelector('.shareBtn') ;

// let correctAnswer = "", correctScore = askedCount = 0, totalQuestion = 10;
// console.log(`First : ${correctAnswer}`) ;

// function eventListeners(){
//     nextBtn.addEventListener('click', checkAnswer) ;
// }

// document.addEventListener("DOMContentLoaded", () => { 
//     loadQues() ;
//     eventListeners() ;

//  })

// async function loadQues(){
//     // const url = 'https://opentdb.com/api.php?amount=1'; 
//     const url = 'https://opentdb.com/api.php?amount=5&category=18&type=multiple';
//     // const url = 'https://opentdb.com/api.php?amount=10&type=boolean';
//     const result = await fetch(`${url}`) ;
//     const data = await result.json() ;
//     showQuestion(data.results[0]) ;
// }
// function showQuestion(data){
//     nextBtn.disabled = false ;
//     correctAnswer = data.correct_answer ;
//     console.log(`Second : ${correctAnswer}`) ;

//     let incorrectAnswer = data.incorrect_answers ;
//     // console.log(incorrectAnswer) ;

//     let optionList = incorrectAnswer ;
//     // Inserting Correct option in option list at random position
//     optionList.splice(Math.floor(Math.random() * (incorrectAnswer.length + 1)), 0, correctAnswer) ;
//     // console.log(optionList) ;

//     question.innerHTML = `${data.question}` ;

//     options.innerHTML = `
//         ${optionList.map((option, index) => `
//             <li class="opt${index+1}">
//                 <div class="retro-card">
//                     <div class="selected">
//                         <i class="fa-solid fa-circle-check" style="color: #21c46d;"></i>
//                     </div>
//                     <p class="head">${option}</p>
//                 </div>
//             </li>
//         `).join(" ")}
//     `;
//     selectOption();
// }

// function selectOption(){
//     // yha main deciding factor for an option being marked as selected is presence of "display--block" class, jo aage checkAnswer function me use hoga

//     options.querySelectorAll('li').forEach((option) => {
//         const card = option.querySelector('.retro-card');
//         const selected = card.querySelector('.selected');
        
//         card.addEventListener('click', () => {
//             const isSelected = selected.classList.contains('display--block');

//             if (isSelected) {
//                 // Deselect if already selected
//                 selected.classList.remove('display--block');
//                 card.classList.add('translate--animation');
//             } else {
//                 // Get all previously selected elements and hide the checkmark
//                 const previouslySelected = options.querySelectorAll('.selected');
//                 previouslySelected.forEach(prev => prev.classList.remove('display--block'));

//                 card.classList.add('translate--animation');
//                 selected.classList.toggle('display--block');
//             }
            
//         });
//         card.addEventListener('animationend', () => {
//             card.classList.remove('translate--animation');
//         });
//     });
//     checkAnswer();
// }
// function checkAnswer(){
//     nextBtn.disabled = true ;
//     if(options.querySelector('.display--block')){
//         let selectedAnswer = options.querySelector('.display--block').parentElement.querySelector('.head').textContent;
//         // console.log(`Selected Answer : ${typeof selectedAnswer.textContent}`);
//         // console.log(`Third Correct Answer : ${typeof correctAnswer}`) ;
//         // console.log(selectedAnswer)
//         if(selectedAnswer.trim() == HTMLDecode(correctAnswer)){
//             console.log("Correct!!") ;
//         }
//         else {
//             console.log("Incorrect!!") ;
//         }
//     }
// }

// function HTMLDecode(textString){
//     let doc = new DOMParser().parseFromString(textString, "text/html");
//     return doc.documentElement.textContent;
// }

let question = document.querySelector('.quesContainer');
let options = document.querySelector('.options');
let nextBtn = document.querySelector('.nextBtn');
let skipBtn = document.querySelector('.skipBtn');
let shareBtn = document.querySelector('.shareBtn');

let correctAnswer = "", correctScore = askedCount = 0, totalQuestion = 10;
let questionIndex = 0;
let questions = [];

function eventListeners() {
    nextBtn.addEventListener('click', loadNextQuestion);
}

document.addEventListener("DOMContentLoaded", () => {
    loadQuestions();
    eventListeners();
});

async function loadQuestions() {
    const url = 'https://opentdb.com/api.php?amount=5&category=18&type=multiple';
    const result = await fetch(url);
    const data = await result.json();
    questions = data.results;
    showQuestion();
}

function showQuestion() {
    let currentQuestion = questions[questionIndex];
    correctAnswer = currentQuestion.correct_answer;

    let incorrectAnswers = currentQuestion.incorrect_answers;
    incorrectAnswers.push(correctAnswer);
    incorrectAnswers.sort(() => Math.random() - 0.5);

    question.innerHTML = currentQuestion.question;

    options.innerHTML = incorrectAnswers.map((option, index) => `
        <li class="opt${index+1}">
            <div class="retro-card">
                <div class="selected">
                    <i class="fa-solid fa-circle-check" style="color: #21c46d;"></i>
                </div>
                <p class="head">${option}</p>
            </div>
        </li>
    `).join(" ");
}

function loadNextQuestion() {
    questionIndex++;
    if (questionIndex < questions.length) {
        showQuestion();
        nextBtn.disabled = true;
    } else {
        console.log("End of questions.");
        // You may want to handle the end of questions, for example, display a message or restart the quiz.
    }
}

function selectOption() {
    options.querySelectorAll('li').forEach((option) => {
        const card = option.querySelector('.retro-card');
        const selected = card.querySelector('.selected');

        card.addEventListener('click', () => {
            const isSelected = selected.classList.contains('display--block');

            if (isSelected) {
                selected.classList.remove('display--block');
                card.classList.add('translate--animation');
            } else {
                const previouslySelected = options.querySelectorAll('.selected');
                previouslySelected.forEach(prev => prev.classList.remove('display--block'));

                card.classList.add('translate--animation');
                selected.classList.toggle('display--block');
            }

        });
        card.addEventListener('animationend', () => {
            card.classList.remove('translate--animation');
        });
    });
}

function checkAnswer() {
    nextBtn.disabled = true;
    if (options.querySelector('.display--block')) {
        let selectedAnswer = options.querySelector('.display--block').parentElement.querySelector('.head').textContent;
        if (selectedAnswer.trim() == HTMLDecode(correctAnswer)) {
            console.log("Correct!!");
        } else {
            console.log("Incorrect!!");
        }
    }
}

function HTMLDecode(textString) {
    let doc = new DOMParser().parseFromString(textString, "text/html");
    return doc.documentElement.textContent;
}
