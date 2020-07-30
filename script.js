$(document).ready(function() {

$('.myModal').modal('show')
var startQuiz = false
var count = 1000;
$(".wrong").hide()
$(".correct").hide()

function startMe() {
if (startQuiz === true) {
  var interval = setInterval(function(){
    count--;
    $("#count").text(count)
    if (count === 0){
      clearInterval(interval);
      localStorage.setItem("userScoreFinal", userScore);
      window.location.href = "./highscore.html";
    }
  }, 1000);
  }
}

$(".startQuiz").on("click", function() {
  $('.myModal').modal('hide');
  startQuiz = true;
  startMe();
});

var questionsAnswers = [
  { question: "How many pairs of ribs would the normal human have?", answer: 3 },
  { question: "Who wrote the classic novel Les Miserables?", answer: 4 },
  { question: "Which actress played the part of Sybil Fawlty in Television?s Fawlty Towers?", answer: 2 },
  { question: "What was the title of Beethoven's only opera?", answer: 2 },
  { question: "Which river flows through the city of Dublin?", answer: 1 },
  { question: "Who appeared with David McCallum in the title role of the TV series Sapphire and Steel?", answer: 4 },
  { question: "Which Irishman won the Tour de France in 1987?", answer: 1 },
  { question: "In which European country is Cro-Magnon, famous for the discovery of four Palaeolithic skeletons in 1868?", answer: 2 },
  { question: "Who was dedicated to killing Moby Dick?", answer: 2 },
  { question: "In which city is the Sacre Coeur?", answer: 3 }
];
var answers = [
  { "1": "36", "2": "20", "3": "12", "4": "60" },
  { "1": "Upton Sinclair", "2": "June Rebellion", "3": "Jean Valjean", "4": "Victor Hugo" },
  { "1": "Connie Booth", "2": "Prunella Margaret Rumney West Scales", "3": "Gilly Flower", "4": "Joan Sanderson" },
  { "1": "Leonore", "2": "Fidelio", "3": "Liebe", "4": "Der Triumph" },
  { "1": "River Liffey", "2": "River Nile", "3": "River Poddle", "4": "River Camac" },
  { "1": "PJ Hammond", "2": "David Collings", "3": "Don Houghton", "4": "Joanna Lumley" },
  { "1": "Stephen Roche", "2": "Lech Piasecki", "3": "Laurent Fignon", "4": "Giro d'Italia" },
  { "1": "Ireland", "2": "France", "3": "Italy", "4": "Germany" },
  { "1": "Charlie", "2": "Ahab", "3": "Wilson", "4": "Johnson" },
  { "1": "San Diego", "2": "Rome", "3": "Paris", "4": "New York" }
];

var index = 0;
var userScore = 0;
renderAnswer()

function renderAnswer() {
$("#userScoreHTML").text(userScore);
$("#question").text(questionsAnswers[index].question);
$(".answers1").text(answers[index][1]);
$(".answers2").text(answers[index][2]);
$(".answers3").text(answers[index][3]);
$(".answers4").text(answers[index][4]);
$("#userScoreHTML").text(userScore);
}

$(".answers").on("click", function(event) {
  var buttonPressed = $(this).val();
  var myPause = 1;
  if (parseInt(buttonPressed) === parseInt(questionsAnswers[index].answer)) {
    index++;
    userScore++;
    $(".correct").show()
    setInterval(function() {
      myPause--
      if (myPause === 0) {
        $(".correct").hide()
    if (questionsAnswers.length > index) {
      renderAnswer();
    } else {
        $("#userScoreHTML").text(userScore);
        localStorage.setItem("userScoreFinal", userScore);
        window.location.href = "./highscore.html";
    }
  }
  }, 1000);
  } else {
          index++;
          $(".wrong").show()
          count -= 5
          setInterval(function() {
          myPause--
            if (myPause === 0) {
              $(".wrong").hide()
           if (questionsAnswers.length > index) {
            renderAnswer();
           } else {
               $("#userScoreHTML").text(userScore);
               localStorage.setItem("userScoreFinal", userScore);
               window.location.href = "./highscore.html";
           }
        }
      }, 1000);
  }
  event.stopImmediatePropagation();
});

// for(var i=0, len=localStorage.length; i<len; i++) {
//     var key = localStorage.key(i);
//     var value = localStorage[key];
//     console.log("This is the Key and Value: ", key, value)
// }

var playerInitials;
var gameResult = {};

function toHighscoreList(playerScore) {
  event.preventDefault();  
  console.log("toHighscoreList function was called ")
    localStorage.getItem("myList", myList);
    // var highscoreList = JSON.parse(localStorage.getItem("highscoreList"));
    // if(highscoreList == null) {
    //   highscoreList = [];
    //   console.log("highscoreList did not exist")
    // }
    playerInitials = $("#initials").val();
    gameResult = {player: playerInitials, score: playerScore};
    var JSONreadyplayer = JSON.stringify(gameResult)
    // highscoreList.push(gameResult);
    // highscoreList.sort(function(a,b) { 
    //     return (b.score - a.score ) 
    // });
    var myList = $(".highscoreslist").append("<li>" + gameResult.player + " - score: "+ gameResult.score + "</li>");
    localStorage.setItem("myList", myList)
    localStorage.setItem("highscoreList", JSONreadyplayer);
};

var lockSubmit = false;

$(".submit").on("click", function(event) {
    console.log("Submit button was hit")
    if (lockSubmit === false) {
    var finalScore = localStorage.getItem("userScoreFinal");
    console.log(finalScore, "This is a test");
    toHighscoreList(finalScore)
    lockSubmit = true;
    } else {
        alert("Cannot submit results twice, sorry! Please play again to record another score.")
    }
    event.stopImmediatePropagation();
});
});