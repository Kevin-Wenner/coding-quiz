// Array of Questions, answer key, and prompt
var questionList  = [
    {
        prompt:"Common used data types do not include:", 
        answerOne: "1. strings", 
        answerTwo: "2. boolens", 
        answerThree: "3. alerts", 
        answerFour: "4. numbers",
        correct: 3
    },

    {
        prompt:"The condition in an if/else statement is enclosed with ______.", 
        answerOne: "1. quotes", 
        answerTwo: "2. curly brackets", 
        answerThree: "3. parenthesis", 
        answerFour: "4. square brackets",
        correct: 2
    },

    {
        prompt:"Arrays in JavaScript can be used to store ______.", 
        answerOne: "1. numbers and strings", 
        answerTwo: "2. other arrays", 
        answerThree: "3. booleans", 
        answerFour: "4. all of the above",
        correct: 4
    },

    {
        prompt:"String values must be enclosed within _____ when being assigned two variables.", 
        answerOne: "1. commas", 
        answerTwo: "2. curly brackets", 
        answerThree: "3. quotes", 
        answerFour: "4. parenthesis",
        correct: 3
    },

    {
        prompt: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answerOne: "1. JavaScript",
        answerTwo: "2. terminal/bash",
        answerThree: "3. for loops",
        answerFour: "4. console.log",
        correct: 4
    }

];

var questionsRight;
var questionsWrong;
var time;
var questionPrompt = document.getElementById("prompt");
var answers = document.querySelectorAll("answer");
var info = document.getElementById("info")
var buttonsEl = document.getElementById("buttons");
var numberCorrect;
var numberWrong;

var grade = document.getElementById("grade");
var timer = document.getElementById("timer");
//quiz start, set right+wrong to 0, hide answers 2 thru 4

questionPrompt.textContent = "Coding Quiz Challenge";
info.textContent = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds.";

var startQuizButton = buttonsEl.appendChild(document.createElement('button'));
startQuizButton.setAttribute("id", "startQuizButton");
startQuizButton.setAttribute("class", "answer");
startQuizButton.textContent = "Start Quiz";
// remove button
startQuizButton.addEventListener("click", function(event){
    StartQuiz();
    event.stopPropagation;
    this.remove();
    
});

//button starts time and questions
function StartQuiz(){
    
    // starts timmer and ends on time out
    var time = 75;
    var questionOn = 0;
    var timeCountdown = setInterval(function(){
        time--;
        timer.textContent = "Time: " + time;

        if(time <= 0){
            clearInterval(timeCountdown);
            endGame();
        }
    }, 1000);
    // append buttons rather than toggle them
    for (let i = 0; i < 4; i++) {
        var buttonEl = document.createElement('button');
        buttonsEl.appendChild(buttonEl);
        buttonEl.setAttribute("id", "answer" + i);
        buttonEl.setAttribute("class", "answer");
    }

    var one = document.getElementById("answer0");
    var two = document.getElementById("answer1");
    var three = document.getElementById("answer2");
    var four = document.getElementById("answer3");

    info.setAttribute("style", "display: none");
    
    numberCorrect = 0;
    numberWrong = 0;
    questionSetUp(questionOn);
    // changes question and answers
    function questionSetUp(questionListNumber){
        console.log("question " + questionListNumber + " started");
        var answer = questionList[questionListNumber].correct;
        questionPrompt.textContent = questionList[questionListNumber].prompt;
        one.textContent = questionList[questionListNumber].answerOne;
        two.textContent = questionList[questionListNumber].answerTwo;
        three.textContent = questionList[questionListNumber].answerThree;
        four.textContent = questionList[questionListNumber].answerFour;
        
        one.addEventListener("click", function(event){
            event.stopPropagation;
            Check(1, answer);
            isGameOver();
        });
        two.addEventListener("click", function(event){
            event.stopPropagation;
            Check(2, answer);
            isGameOver();
        });
        three.addEventListener("click", function(event){
            event.stopPropagation;
            Check(3, answer);
            isGameOver();
        });
        four.addEventListener("click", function(event){
            event.stopPropagation;
            Check(4, answer);
            isGameOver();
        });
        
    }

    function isGameOver(){
        if (questionOn === questionList.length) {
            endGame();
        }else{
            questionOn++;
            questionSetUp(questionOn);
        }
    }
    

            //displays right or wrong 
            //subtracts from clock if wrong
        function Check(answer, arrayCorrect){
            if ( arrayCorrect === answer) {
                grade.textContent = "Correct!";
                grade.setAttribute("style", "border-top: solid; display: flex; justify-content: center");
                numberCorrect++;
                                              
            } else{
                grade.textContent = "Wrong!";
                grade.setAttribute("style", "border-top: solid; display: flex; justify-content: center");
                time -= 10;
                numberWrong++;             
            }           
        }        
    }

    //game ends
function endGame(){
        clearTimeout(timeCountdown);
        questionPrompt.textContent = "Game Over"
        info.textContent = "Your final socore is " + questionsRight;
        info.setAttribute("style", "display: flex");



        one.remove();
        two.remove();
        three.remove();
        four.remove();
        

        console.log("times up, game over!");

        //prompts score board entry
        // open a text box and submitt button that links to sore page
    }
    

