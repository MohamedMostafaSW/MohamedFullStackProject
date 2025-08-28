var randomChosenColor;
var gamePAttern = [];
var userClickedPattern = [];
var level = 0;

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var buttonColor = ["red", "blue", "green", "yellow"];

  randomChosenColor = buttonColor[randomNumber];

  gamePAttern.push(randomChosenColor);

  $("#" + randomChosenColor)
    .fadeOut(100)
    .fadeIn(100);
  var audio = new Audio("./sounds/" + randomChosenColor + ".mp3");
  audio.play();
  level++;
  $("h1").text("level " + level);
  console.log(level);
}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

$(document).keydown(function (event) {
  if (event.key === "a") {
    nextSequence();
  }
  console.log(event.key);
});
$(".btn").click(function (event) {
  var userChosenColor = event.target.id; // get the id (e.g., "green")
  userClickedPattern.push(userChosenColor); // save to pattern
  console.log(userClickedPattern); // for testing
  animatePress(userChosenColor);
});

function checkAnswer() {
  userClickedPattern;
  for (var i = 0; i < gamePAttern.length; i++) {
    if (userClickedPattern[i] == gamePAttern[i]) {
      alert("success");
      console.log(userClickedPattern);
      console.log(gamePAttern);
    }
    else if(userClickedPattern[i]==gamePAttern[i]){
        alert("wrong")
        console.log(userClickedPattern);
        console.log(gamePAttern);
    }
  }
}
