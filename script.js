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

console.log(
  questionsAnswers.length,
  answers[0][4],
  answers[0][3],
  answers[0][2],
  typeof parseInt(answers[0][1]),
  answers[0][2],
  answers[0][2]
);

var userScore = 0;

$("#userScoreHTML").text(userScore);
$("#question").text(questionsAnswers[0].question);
$(".answers1").text(answers[0][1]);
$(".answers2").text(answers[0][2]);
$(".answers3").text(answers[0][3]);
$(".answers4").text(answers[0][4]);

var index = 0;

$(".answers").on("click", function () {
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
           }
        }
});

console.log(questionsAnswers[1].question, questionsAnswers[0].answer);
