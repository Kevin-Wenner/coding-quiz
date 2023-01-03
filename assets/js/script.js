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
var numberCorrect = 0;

// Buttons
var one = document.getElementById("answerOne");
var two = document.getElementById("answerTwo");
var three = document.getElementById("answerThree");
var four = document.getElementById("answerFour");

var grade = document.getElementById("grade");
var timer = document.getElementById("timer");
//quiz start, set right+wrong to 0, hide answers 2 thru 4

questionPrompt.textContent = "Coding Quiz Challenge";
one.setAttribute("style", "display: block");
document.getElementById("info").textContent = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds.";
one.textContent = "Start Quiz";
one.addEventListener("click", function(){StartQuiz()});

//button starts time and questions
function StartQuiz(){
    
    // starts timmer and ends on time out
    var time = 75000;
    var timeCountdown = setTimeout(function(){
        
        console.log(time);
        time--;
        timer.textContent = "Time: " + time;

        if(time === 0){
            clearTimeout(timeCountdown);
            prompt.textContent = "Game Over"
            one.setAttribute("style", "display: none");
            two.setAttribute("style", "display: none");
            three.setAttribute("style", "display: none");
            four.setAttribute("style", "display: none");
            console.log("times up, game over!");
        }
    }, 75000);
    
    two.setAttribute("style", "display: block");
    three.setAttribute("style", "display: block");
    four.setAttribute("style", "display: block");
    questionsRight = 0;
    questionsWrong = 0;

    //loop that interates through questions
    for (var i = 0; i < questionList.length;) {
        // console.log("question " + i + " started");
        var answer = questionList[i].correct;
        questionPrompt.textContent = questionList[i].prompt;
        one.textContent = questionList[i].answerOne;
        two.textContent = questionList[i].answerTwo;
        three.textContent = questionList[i].answerThree;
        four.textContent = questionList[i].answerFour;
        
        one.addEventListener("click", function(){Check(1, answer)});
        two.addEventListener("click", function(){Check(2, answer)});
        three.addEventListener("click", function(){Check(3, answer)});
        four.addEventListener("click", function(){Check(4, answer)});
        i++;
        //displays right or wrong 
        //subtracts from clock if wrong
        function Check(answer, arrayCorrect){
            if ( arrayCorrect === answer) {
                grade.textContent = "Correct!";
                grade.setAttribute("style", "border-top: solid");
                numberCorrect++;
            
            } else{
                grade.textContent = "Wrong!";
                time -= 15000;
                console.log(time);

            }
            
        }        

    }
    //game ends
    //prompts score board entry
}
//when questions are all answered or time expires