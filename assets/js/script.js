var button = document.querySelector("#start-quiz");
var counter = 75;
var timer = document.querySelector("#countDown");
var main = document.querySelector("main");
var quizArea = document.querySelector("#quiz-cards");
var h1 = document.querySelector("h1");
var quizP = document.querySelector("#main");
var listBox = document.createElement("div");
var list = document.createElement("ol");
var answerButtons = document.createElement("button");
var response = document.createElement("p");

var listItem;



var questions = [
    {
        text: "_________________ is a function that will be called whenever the specified event is delivered to the target.",
        answers: [
            {
                text: "Math.random()",
                correct: false
            },
            {
                text: "addEventListener()",
                correct: true
            },
            {
                text: "multiply()",
                correct: false
            },
            {
                text: "preventDefault()",
                correct: false
            }
        ]
    },
    {
        text: "When using Flexbox, we use _________ to establish the main-axis as either having a horizontal or vertical layout.",
        answers: [
            {
                text: "display",
                correct: false
            },
            {
                text: "flex-flow",
                correct: false
            },
            {
                text: "justify-content",
                correct: false
            },
            {
                text: "flex-direction",
                correct: true
            }
        ]
    },
    {
        text: "All global Javascript objects, functions, and variables automatically become members of the __________ object.",
        answers: [
            {
                text: "window",
                correct: true
            },
            {
                text: "screen",
                correct: false
            },
            {
                text: "document",
                correct: false
            },
            {
                text: "HTML",
                correct: false
            }
        ]
    },
    {
        text: "If i want to create rounded corners on an image I would need to use _________.",
        answers: [
            {
                text: "border",
                correct: false
            },
            {
                text: "border-radius",
                correct: true
            },
            {
                text: "curved-corners",
                correct: false
            },
            {
                text: "flex-wrap",
                correct: false
            }
        ]
    },
    {
        text: "In HTML the main tags fall in this order from top to bottom: ________, then ________, then _______, and finally __________",
        answers: [
            {
                text: "header, body, html, footer",
                correct: false
            },
            {
                text: "html, header, body, footer",
                correct: false
            },
            {
                text: "html, body, header, footer",
                correct: true
            },
            {
                text: "body, header, html, footer",
                correct: false
            }
        ]
    },
    {
        text: "A list that has ordered items is put into the HTML using ________.",
        answers: [
            {
                text: "li",
                correct: false
            },
            {
                text: "ul",
                correct: false
            },
            {
                text: "dl",
                correct: false
            },
            {
                text: "ol",
                correct: true
            }
        ]
    }
];

function beginQuiz() {
    generateQuestions();
    userChoice()
    
    var myInterval = setInterval(function() {
        counter--;
        timer.textContent = counter;
        if (counter === 0) {
            clearInterval(myInterval);
            console.log("Time's up!");
        }
    }, 1000);
};

button.addEventListener("click", beginQuiz);

function generateQuestions() {
    h1.remove();
    button.remove();
    var randomQuestion = Math.floor(Math.random() * questions.length);
    quizP.innerHTML = questions[randomQuestion].text;
    quizArea.appendChild(listBox);
    listBox.appendChild(list);
    
    for (let i = 0; i < questions[randomQuestion].answers.length; i++) {
        
        listItem = document.createElement("li");
        listItem.setAttribute("style", "font-size: 1.6rem; text-align: left; margin-left: 15px");
        listItem.innerHTML += "<button class='answer' data-correct=" + questions[randomQuestion].answers[i].correct + ">" + questions[randomQuestion].answers[i].text + "</button>";
    
        list.appendChild(listItem);   
    } 
    
    
}

function userChoice() {
    var button = document.querySelector(".answer");
    var dataCorrect = document.querySelectorAll("button[data-correct]");
    button.addEventListener("click", function() {
        if (dataCorrect === "true") {
            console.log(true);
        } else {
            console.log(false);
            counter -= 10;
        }
    });
};
