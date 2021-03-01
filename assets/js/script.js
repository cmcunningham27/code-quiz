//Declared variables to be used for later
var go = document.querySelector("#start-quiz");
var counter = 75;
var timer = document.querySelector("#countDown");
var myInterval;
var quizArea = document.querySelector("#quiz-cards");
var h1 = document.querySelector("h1");
var quizP = document.querySelector("#main");
var listBox = document.createElement("div");
var list = document.createElement("ol");
var answerButtons = document.createElement("button");
var intro = document.createElement("p");
var alert = document.createElement("p");
var initials = document.createElement("p");
var input = document.createElement("input");
var submit = document.createElement("button");
var highScores = document.createElement("ol");
var oldScore = document.createElement("li");
var scores = document.createElement("li");
var goBack = document.createElement("button");
var clear = document.createElement("button");
var answerText;
var correct;
var listItem;
var randomQuestion;

//Creates Array for random questions to be generated
var questions = [
    {
        text: "_________________ is a function that will be called whenever the specified event is delivered to the target.",
        answers: [
            {
                text: "Math.random()",
                correct: "no"
            },
            {
                text: "addEventListener()",
                correct: "yes"
            },
            {
                text: "multiply()",
                correct: "no"
            },
            {
                text: "preventDefault()",
                correct: "no"
            }
        ]
    },
    {
        text: "When using Flexbox, we use _________ to establish the main-axis as either having a horizontal or vertical layout.",
        answers: [
            {
                text: "display",
                correct: "no"
            },
            {
                text: "flexFlow",
                correct: "no"
            },
            {
                text: "justifyContent",
                correct: "no"
            },
            {
                text: "flexDirection",
                correct: "yes"
            }
        ]
    },
    {
        text: "All global Javascript objects, functions, and variables automatically become members of the __________ object.",
        answers: [
            {
                text: "window",
                correct: "yes"
            },
            {
                text: "screen",
                correct: "no"
            },
            {
                text: "document",
                correct: "no"
            },
            {
                text: "HTML",
                correct: "no"
            }
        ]
    },
    {
        text: "If I want to create rounded corners on an image in Javascript I would need to use _________.",
        answers: [
            {
                text: "style.border",
                correct: "no"
            },
            {
                text: "style.borderRadius",
                correct: "yes"
            },
            {
                text: "style.curvedCorners",
                correct: "no"
            },
            {
                text: "style.flexWrap",
                correct: "no"
            }
        ]
    },
    {
        text: "In HTML the main tags fall in this order from top to bottom: ________, then ________, then _______, and finally __________",
        answers: [
            {
                text: "header, body, html, footer",
                correct: "no"
            },
            {
                text: "html, header, body, footer",
                correct: "no"
            },
            {
                text: "html, body, header, footer",
                correct: "yes"
            },
            {
                text: "body, header, html, footer",
                correct: "no"
            }
        ]
    },
    {
        text: "A list that has ordered items is declared in Javascript using ________.",
        answers: [
            {
                text: "document.querySelector('li')",
                correct: "no"
            },
            {
                text: "document.querySelector('ul')",
                correct: "no"
            },
            {
                text: "document.querySelector('dl')",
                correct: "no"
            },
            {
                text: "document.querySelector('ol')",
                correct: "yes"
            }
        ]
    }
];

//Starts the timer and calls the function to generate questions
function beginQuiz() {
    myInterval = setInterval(function() {
        counter--;
        timer.textContent = counter;
        if (counter <= 0) {
            clearInterval(myInterval);
            console.log("Time's up!");
            testOver();
        }
    }, 1000);
    generateQuestions();
};


function generateQuestions() {
//Checks length of Array to determine whether to call testOver function    
    if (questions.length === 0) {
        clearInterval(myInterval);
        console.log("Time's up!");
        timer = "";
        testOver();
    } else {
 //Removes beginning HTML to make room for new HTML elements, generates next question, and calls generateAnswer function   
    h1.remove();
    go.remove();
    randomQuestion = Math.floor(Math.random() * questions.length);
    quizP.innerHTML = questions[randomQuestion].text;
    quizArea.appendChild(listBox);
    listBox.appendChild(list);
    quizArea.appendChild(alert);
    generateAnswers();
    }
}

//Triggered by clicked answer button to create an argument to determine whether users answer was correct or not, if it is then the question is removed from the questions array and generateQuestions is called again
function checkAnswer(value) {

    if (value === "no") {
        counter -= 10;
        alert.innerHTML = "Wrong!";
        
    } else {
        alert.innerHTML = "Correct!";
        list.innerHTML = "";
        questions.splice(randomQuestion, 1);
        generateQuestions();
    }
}

//creates list of answers to question that was chosen
function generateAnswers() {   
    for (let i = 0; i < questions[randomQuestion].answers.length; i++) {
        answerText = questions[randomQuestion].answers[i].text;
        correct = questions[randomQuestion].answers[i].correct;
        listItem= document.createElement("li");
        listItem.setAttribute("style", "font-size: 1.6rem; text-align: left; margin-left: 15px");
        listItem.innerHTML += "<button value=" + correct + " class=" + correct + " onclick='checkAnswer(this.value)' id= " + i + "> " + answerText + "</button>";
        list.appendChild(listItem);
    } 
}     

//Ends quiz, removes previous HTML elements and appends new elements 
 function testOver() {
    quizP.innerHTML = "All done! <br> Your final score is: " + counter;
    listBox.remove();
    alert.remove();
    quizArea.appendChild(initials);
    quizArea.appendChild(input);
    quizArea.appendChild(submit);
    input.setAttribute("id", "input");
    submit.setAttribute("onclick", "logScore()");
    submit.textContent = "Submit";
    initials.innerHTML = "Enter initials: ";
} 

//Removes previous elements, appends new elements to let user know their score, and stores their score in their local storage
function logScore() {
    initials.remove();
    input.remove();
    submit.remove();
    var score = input.value + "--" + counter;
    oldScore.setAttribute("style", "font-size: 1.6rem; text-align: left; margin-left: 15px; margin-bottom: 15px;");
 //stores current user score if there is no score in the local storage yet
    if (localStorage.getItem("score")) {
        oldScore.innerHTML = localStorage.getItem("score");
    }  else {
        localStorage.setItem("score", score);
    }     
    highScores.appendChild(oldScore);
    quizP.innerHTML = "Highschores:";
    quizArea.appendChild(highScores);
    highScores.appendChild(scores);
    scores.setAttribute("style", "font-size: 1.6rem; text-align: left; margin-left: 15px; margin-bottom: 25px;");
 //stores the current user score if it is greater than their previous highest score in their local storage 
    if (localStorage.getItem("score") < score){
        localStorage.setItem("score", score);
    }
    scores.innerHTML = score;
    quizArea.appendChild(goBack);
//Adds attribute so if the user clicks it, the website it completely refreshed
    goBack.setAttribute("style", "margin-right: 15px"); 
    goBack.setAttribute("onclick", "window.location.href=window.location.href");
    goBack.textContent = "Go Back";
    quizArea.appendChild(clear);
    clear.setAttribute("onclick", "clearHighscore()")
    clear.textContent = "Clear Highscores";
}

//Removes listed scores above button
function clearHighscore() {
    oldScore.remove();
    scores.remove();
}

