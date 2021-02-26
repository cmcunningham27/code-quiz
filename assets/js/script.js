var button = document.querySelector("#start-quiz");
var counter = 75;
var timer = document.querySelector("#countDown");

button.addEventListener("click", beginQuiz());

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
                text: "<header>, <body>, <html>, <footer>",
                correct: false
            },
            {
                text: "<html>, <header>, <body>, <footer>",
                correct: false
            },
            {
                text: "<html>, <body>, <header>, <footer>",
                correct: true
            },
            {
                text: "<body>, <header>, <html>, <footer>",
                correct: false
            }
        ]
    },
    {
        text: "A list that has ordered items is put into the HTML using ________.",
        answers: [
            {
                text: "<li>",
                correct: 
            },
            {
                text: "<ul>",
                correct: 
            },
            {
                text: "<dl>",
                correct: 
            },
            {
                text: "<ol>",
                correct: 
            }
        ]
    },
]

function beginQuiz() {
    var myInterval = setInterval(function() {
        counter--;
        timer.textContent(counter);
        if (counter === 0) {
            clearInterval(myInterval);
            console.log("Time's up!");
        }
    }
}