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
var answerText;
var correct;
var listItem;
var randomQuestion;
var dataCheck;
var input;
var submit;


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
                text: "flex-flow",
                correct: "no"
            },
            {
                text: "justify-content",
                correct: "no"
            },
            {
                text: "flex-direction",
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
        text: "If i want to create rounded corners on an image I would need to use _________.",
        answers: [
            {
                text: "border",
                correct: "no"
            },
            {
                text: "border-radius",
                correct: "yes"
            },
            {
                text: "curved-corners",
                correct: "no"
            },
            {
                text: "flex-wrap",
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
        text: "A list that has ordered items is put into the HTML using ________.",
        answers: [
            {
                text: "li",
                correct: "no"
            },
            {
                text: "ul",
                correct: "no"
            },
            {
                text: "dl",
                correct: "no"
            },
            {
                text: "ol",
                correct: "yes"
            }
        ]
    }
];

function beginQuiz() {
    
    //userChoice()
    
    var myInterval = setInterval(function() {
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

button.addEventListener("click", beginQuiz);

function generateQuestions() {
    h1.remove();
    button.remove();
    randomQuestion = Math.floor(Math.random() * questions.length);
    quizP.innerHTML = questions[randomQuestion].text;
    quizArea.appendChild(listBox);
    listBox.appendChild(list);
    generateAnswers();
}
function checkAnswer(value) {

    if (value === "no") {
        counter -= 10;
        alert("Wrong!");
    } else {
        listBox.remove();
        generateQuestions();
    }
    console.log(value);
}
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


    /*if (check) {
        generateQuestions();
    } else {
        counter -= 10;
    }*/
    

 function testOver() {
    quizP.innerHTML = "All done! <br> Your final score is:"
    listBox.remove();
    input = document.createElement("input");
    submit = document.createElement("button");
    input.innerHTML = counter;

    

} 
