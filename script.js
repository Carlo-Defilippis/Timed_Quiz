var questionsAnswers = [
  { question: "Whats the capital of Texas?", answer: 3 },
  { question: "What color is the sky?", answer: 1 },
  { question: "What shape is a warning sign?", answer: 3 },
  { question: "What color is the ocean?", answer: 4 },
];
var answers = [
  { "1": "San Diego", "2": "Orlando", "3": "Houston", "4": "New York" },
  { "1": "Blue", "2": "Orange", "3": "Yellow", "4": "Black" },
  { "1": "Octagon", "2": "Circle", "3": "Diamond", "4": "Square" },
  { "1": "Green", "2": "Violet", "3": "Yellow", "4": "Blue" },
];

var userScore = 0;

$("#userScoreHTML").text(userScore);
$("#question").text(questionsAnswers[0].question);
$(".answers1").text(answers[0][1]);
$(".answers2").text(answers[0][2]);
$(".answers3").text(answers[0][3]);
$(".answers4").text(answers[0][4]);

var index = 0;

$(".answers").on("click", function() {
  var buttonPressed = $(this).val();

  if (parseInt(buttonPressed) === parseInt(questionsAnswers[index].answer)) {
    index++;
    userScore++;
    if (questionsAnswers.length > index) {
    $("#question").text(questionsAnswers[index].question);
    $(".answers1").text(answers[index][1]);
    $(".answers2").text(answers[index][2]);
    $(".answers3").text(answers[index][3]);
    $(".answers4").text(answers[index][4]);
    $("#userScoreHTML").text(userScore);
    } else {
        $("#userScoreHTML").text(userScore);
        localStorage.setItem("userScoreFinal", userScore);
        window.location.href = "./highscore.html";
    }
  } else {
           index++;
           if (questionsAnswers.length > index) {
           $("#question").text(questionsAnswers[index].question);
           $(".answers1").text(answers[index][1]);
           $(".answers2").text(answers[index][2]);
           $(".answers3").text(answers[index][3]);
           $(".answers4").text(answers[index][4]);
           } else {
               $("#userScoreHTML").text(userScore);
               localStorage.setItem("userScoreFinal", userScore);
               window.location.href = "./highscore.html";
           }
        }
});

for(var i=0, len=localStorage.length; i<len; i++) {
    var key = localStorage.key(i);
    var value = localStorage[key];
}
console.log(key, value)

var playerInitials;
var playerScore;
var gameResult = {};
var existingScores = JSON.parse(localStorage.getItem("highscoreList"));
if(existingScores == null) highscoreList = [];



function toHighscoreList(arg1) {
    // localStorage.getItem("myList", myList);
    playerInitials = $("#initials").val();
    playerScore = arg1;
    gameResult = {player: playerInitials, score: playerScore};
    highscoreList.push(gameResult)
    var newTest = $.extend(gameResult, highscoreList)
    highscoreList.sort(function(a,b) { 
        return (b.score - a.score ) 
    });
    // var myList = $(".highscoreslist").append("<li>" + gameResult.player + " - score: "+ gameResult.score + "</li>");
    // localStorage.setItem("myList", myList)
    localStorage.setItem("highScoreList", JSON.stringify(highscoreList));
    console.log(newTest, "This is new test")
    console.log(highscoreList, "This is high score list")
};

var lockSubmit = false;



$(".submit").on("click", function(event) {
    event.preventDefault();
    if (lockSubmit === false) {
    var finalScore = localStorage.getItem("userScoreFinal");
    console.log(finalScore, "This is a test");
    lockSubmit = true;
    console.log(lockSubmit)
    toHighscoreList(finalScore)
    var savedList = JSON.parse(localStorage.getItem("highScoreList"))
    console.log(savedList)
    } else {
        alert("Cannot submit results twice, sorry! Please play again to record another score.")
    }
})
