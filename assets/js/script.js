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
    },
];

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
    event.stopPropagation;
    this.remove();
    StartQuiz();
});

//button starts time and questions
function StartQuiz(){
    // starts timmer and ends on time out
    time = 75;
    var questionOn = 0;
    var timeCountdown = setInterval(function(){
        time--;
        timer.textContent = "Time: " + time;

        if(time <= 0){
            clearInterval(timeCountdown);
            one.remove();
            two.remove();
            three.remove();
            four.remove();
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
        
        function oneFunc(event){
            event.stopImmediatePropagation;
            Check(1, answer);
            isGameOver();
            one.removeEventListener("click", oneFunc);
            two.removeEventListener("click", twoFunc);
            three.removeEventListener("click", threeFunc);
            four.removeEventListener("click", fourFunc);
            if (questionOn == questionList.length) {
                one.remove();
                two.remove();
                three.remove();
                four.remove();
                clearInterval(timeCountdown);
                endGame();
            } 
        }   
        function twoFunc(event){
            event.stopImmediatePropagation;
            Check(2, answer);
            isGameOver();           
            one.removeEventListener("click", oneFunc);
            two.removeEventListener("click", twoFunc);
            three.removeEventListener("click", threeFunc);
            four.removeEventListener("click", fourFunc);
            if (questionOn == questionList.length) {
                one.remove();
                two.remove();
                three.remove();
                four.remove();
                clearInterval(timeCountdown);
                endGame();
            } 
        }
        function threeFunc(event){
            event.stopImmediatePropagation;
            Check(3, answer);
            isGameOver();            
            one.removeEventListener("click", oneFunc);
            two.removeEventListener("click", twoFunc);
            three.removeEventListener("click", threeFunc);
            four.removeEventListener("click", fourFunc);
            if (questionOn == questionList.length) {
                one.remove();
                two.remove();
                three.remove();
                four.remove();
                clearInterval(timeCountdown);
                endGame();
            } 
        }
        function fourFunc(event){
            event.stopImmediatePropagation;
            Check(4, answer);
            isGameOver();
            one.removeEventListener("click", oneFunc);
            two.removeEventListener("click", twoFunc);
            three.removeEventListener("click", threeFunc);
            four.removeEventListener("click", fourFunc); 
            if (questionOn == questionList.length) {
                one.remove();
                two.remove();
                three.remove();
                four.remove();
                clearInterval(timeCountdown);
                endGame();
            } 
        }
        one.addEventListener("click", oneFunc);
        two.addEventListener("click", twoFunc);
        three.addEventListener("click", threeFunc);
        four.addEventListener("click", fourFunc);
       
    }

    function isGameOver(){
        questionOn++;
        if (questionOn == questionList.length) {
            return true;
        }else if(questionOn != questionList.length){
        
        questionSetUp(questionOn);
        return false;
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
        // 
        questionPrompt.textContent = "Game Over"
        info.textContent = "Your final socore is " + time + " with " + numberCorrect +" answers correct";
        info.setAttribute("style", "display: flex");

        // input and submit button add styling
        var intials = buttonsEl.innerHTML += '<label id= "formLable" >Intials</label>';
        var intialsInput = buttonsEl.innerHTML += "<input type='text' id='form' required minlength='2' maxlength='3'>";
        var intialsSubmit = buttonsEl.innerHTML += '<button class= "answer" id= "submit">Submit</button>';

        document.getElementById("submit").addEventListener("click", function(){
            var signiture = document.getElementById("form").value;
            
            if(signiture === ""){
                console.log("please enter your intitals");
                info.textContent = "Please enter your intitals to post your score"
            }else{
                postHighScore(signiture, numberCorrect, numberWrong, time);
                this.remove();
                info.textContent = "Score Posted";

            }
               
        });
        // push to highscore
        function postHighScore(playerIntial, playerScoreRight, playerScoreWrong, timeleft){
                var playerListing = {
                    player: playerIntial,
                    scoreRight: playerScoreRight,
                    scoreWrong: playerScoreWrong,
                    time:timeleft
                }

                localStorage.setItem("score", JSON.stringify(playerListing));
            };
        console.log("times up, game over!");
        //prompts score board entry
        // open a text box and submitt button that links to sore page

}    

