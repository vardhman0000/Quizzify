window.addEventListener('DOMContentLoaded', () => {
    // Load the loader HTML
    fetch('glassloader.html')
        .then(response => response.text())
        .then(html => {
            document.body.insertAdjacentHTML('afterbegin', html);
            // After 2 seconds, hide the loader and show the quiz content
            setTimeout(() => {
                document.querySelector('.loader-body').style.display = 'none';
                document.querySelector('.wrapper').style.display = 'block';
                triggerAnimaitons() ;
            }, 2000);
        });
});

let category = {
    Computers : 18,
    Mathematics : 19,
    Gadgets : 30,
    Nature : 23,
    Geography : 22,
    History : 23,
    Anime : 31,
    Animals : 27,
    Books : 10,
    Politics : 24,
    Art : 25,
    Film : 11
}

let quizHeading = document.getElementById('quizHead');
let categoryId;

let question = document.querySelector('.quesContainer') ;
let options = document.querySelector('.options') ;
let nextBtn = document.querySelector('.nextBtn') ;
let skipBtn = document.querySelector('.skipBtn') ;
let shareBtn = document.querySelector('.shareBtn') ;
let resultContainer = document.querySelector('.progress-wrapper') ;
let playAgain = document.querySelector('.play-again') ;
let correctAns = document.querySelector('.correct-ans') ;
let totalQues = document.querySelector('.total-questions') ;
let percentage = document.querySelector('.progress-circle') ;


let exitConfirmContainer = document.querySelector('.exit-confirm-container');
let exitYesBtn = document.querySelector('.exit-yes');
let exitNoBtn = document.querySelector('.exit-no');


let correctAnswer = "", correctScore = askedCount = 0, totalQuestion = 10;
let skippedCount = 0 ;
let quesIndex = 0 ;
let quesArr = [] ;
let incorrectScore = 0;

function eventListeners(){
    nextBtn.addEventListener('click', checkAnswer) ;
    nextBtn.addEventListener('click', loadNextQuestion) ;
}

document.addEventListener("DOMContentLoaded", () => { 
    let selectedCategory = localStorage.getItem('quizCategory');
    quizHeading.textContent = selectedCategory;
    quizHeading.style.color='black';
    categoryId = category[selectedCategory];
    // console.log(categoryId) ;

    loadQues() ;
    eventListeners() ;

    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('click', () => { 
            // console.log("Button Clicked!!") ;
            btn.classList.add('btn--translate--animation');
            // Remove the translate--animation class when the animation ends
            btn.addEventListener('animationend', () => {
                btn.classList.remove('btn--translate--animation');
            });
        });
    });

    
    playAgain.addEventListener('click', () => {
        
        document.querySelector('.wrapper').style.display = 'none';
        document.querySelector('.loader-body').style.display = 'flex';
        setTimeout(() => {
            document.querySelector('.loader-body').style.display = 'none';
            document.querySelector('.wrapper').style.display = 'block';
            triggerAnimaitons() ;
        }, 1500);

        // Reset variables
        quesIndex = 0;
        correctScore = 0;
        incorrectScore = 0;
        skippedCount = 0;
        askedCount = 0;
        let circularProgress = document.querySelector(".circular-progress"),
        progressValue = document.querySelector(".progress-value");
        progressValue.textContent = '0%';
        circularProgress.style.background = `conic-gradient(#5ed696 3.6deg, #ededed 0deg)`;

        // Hide result container
        resultContainer.style.display = 'none';

        // Load questions again
        loadQues();

        // Enable next button
        nextBtn.disabled = false;
    });

    skipBtn.addEventListener('click', () => { 
        skippedCount++ ;
        console.log(`Question Skipped & Count : ${skippedCount}`);
        loadNextQuestion() ;
    });

    document.querySelector('.cross-button').addEventListener('click', () => {
        // Redirect user to the homepage, and then scroll to the topics section
        exitConfirmContainer.style.display = 'flex' ;
    });
    exitYesBtn.addEventListener('click', () => { 
        window.location.href = 'index.html#topics';
     });
     exitNoBtn.addEventListener('click', () => { 
        exitConfirmContainer.style.display = 'none' ;
      });
});

async function loadQues(){
    const url = `https://opentdb.com/api.php?amount=5&category=${categoryId}&type=multiple`;
    const result = await fetch(`${url}`) ;
    const data = await result.json() ;
    questions = data.results ;
    showQuestion() ;
}
function showQuestion(data){
    // nextBtn.disabled = false ;
    let currQues = questions[quesIndex] ;
    correctAnswer = currQues.correct_answer ;
    console.log(`Correct Answer : ${correctAnswer}`) ;


    let incorrectAnswer = currQues.incorrect_answers ;
    // console.log(incorrectAnswer) ;

    let optionList = incorrectAnswer ;
    // Inserting Correct option in option list at random position
    optionList.splice(Math.floor(Math.random() * (incorrectAnswer.length + 1)), 0, correctAnswer) ;
    // console.log(optionList) ;

    question.innerHTML = `${currQues.question}` ;

    options.innerHTML = `
        ${optionList.map((option, index) => `
            <li class="opt${index+1}">
                <div class="retro-card">
                    <div class="selected">
                        <i class="fa-solid fa-circle-check" style="color: #21c46d;"></i>
                    </div>
                    <p class="head">${option}</p>
                </div>
            </li>
        `).join(" ")}
    `;
    selectOption();
}

function loadNextQuestion(){
    quesIndex++ ;
    if (quesIndex < questions.length) {
      showQuestion();
    } 
    else {
        nextBtn.disabled = true;
        correctAns.textContent = correctScore;
        totalQues.textContent = questions.length;

        if (`${getPercentage()}` == 0) {
            resultContainer.style.display = "block";
            document.querySelector('.correct-count').textContent = correctScore;
            document.querySelector('.incorrect-count').textContent = incorrectScore;
            document.querySelector('.skipped-count').textContent = skippedCount;
            return;
        }

        setTimeout(() => {
            resultContainer.style.display = "block";
        }, 500);

        document.querySelector('.correct-count').textContent = correctScore;
        document.querySelector('.incorrect-count').textContent = incorrectScore;
        document.querySelector('.skipped-count').textContent = skippedCount;

        let circularProgress = document.querySelector(".circular-progress"),
            progressValue = document.querySelector(".progress-value");
        let progressStartValue = 0,
            progressEndValue = getPercentage(),
            speed = 50;
            console.log(`Percentage : ${getPercentage()}`) ;
            console.log(`Correct Answers : ${correctScore}`) ;

        let progress = setInterval(() => {
            progressStartValue++;
            progressValue.textContent = `${progressStartValue}%`;
            circularProgress.style.background = `conic-gradient(#5ed696 ${
            progressStartValue * 3.6
            }deg, #ededed 0deg)`;
            if (progressStartValue == progressEndValue) {
                clearInterval(progress);
            }
        }, speed);
    }
}
function getPercentage(){
    return ((correctScore/questions.length)*100) ;
}
function selectOption(){
    // yha main deciding factor for an option being marked as selected is presence of "display--block" class, jo aage checkAnswer function me use hoga

    options.querySelectorAll('li').forEach((option) => {
        const card = option.querySelector('.retro-card');
        const selected = card.querySelector('.selected');
        
        card.addEventListener('click', () => {
            const isSelected = selected.classList.contains('display--block');

            if (isSelected) {
                // Deselect if already selected
                selected.classList.remove('display--block');
                card.classList.add('translate--animation');
            } else {
                // Get all previously selected elements and hide the checkmark
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
    checkAnswer();
}


function checkAnswer(){
    // nextBtn.disabled = true ;
    if(options.querySelector('.display--block')){
        let selectedAnswer = options.querySelector('.display--block').parentElement.querySelector('.head').textContent;
        // console.log(`Selected element : ${selectedAnswer}`);
        if(selectedAnswer.trim() == HTMLDecode(correctAnswer)){
            correctScore++ ;
            console.log("Correct!!") ;
        }
        else {
            incorrectScore++ ;
            console.log("Incorrect!!") ;
        }
    }
}

function HTMLDecode(textString){
    let doc = new DOMParser().parseFromString(textString, "text/html");
    return doc.documentElement.textContent;
}


function triggerAnimaitons() {
    let container = document.querySelector('.container');
    let quesImg = document.querySelector('.ques');
    let quizContanier = document.querySelector('.quizContainer');
    let quiz1 = document.querySelector('.ques1');
    
    
    container.classList.add("slide-in-from-right");
    quizContanier.classList.add("slide-in-from-up");
    quiz1.classList.add("slide-in-from-up");
    nextBtn.classList.add("slide-in-from-up");
    skipBtn.classList.add("slide-in-from-up");
    // shareBtn.classList.add("slide-in-from-up");
    setTimeout(() => {
        quesImg.classList.add("slide-in-from-up-quesImg");
    }, 700);
}