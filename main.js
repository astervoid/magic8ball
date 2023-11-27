// Magic 8 Ball

document.getElementById("ball").addEventListener("click", ballClicked);
let ballQuestion = document.getElementById("question-in");
let ballAnswer = document.getElementById("output");

function ballClicked() {
  let randNum = Math.random();
  console.log(randNum);

  if (ballQuestion.value.toLowerCase() === "does a magic 8 ball really work?") {
    ballAnswer.innerHTML = `How dare you doubt me!`;
  } else if (ballQuestion.value.toLowerCase() === "is javascript awesome?") {
    ballAnswer.innerHTML = `Of course!`;
  } else {
    if (randNum < 0.2) {
      ballAnswer.innerHTML = "Without a Doubt.";
    } else if (randNum < 0.4) {
      ballAnswer.innerHTML = "As I see it, yes.";
    } else if (randNum < 0.6) {
      ballAnswer.innerHTML = "Concentrate and ask again.";
    } else if (randNum < 0.8) {
      ballAnswer.innerHTML = "Don't count on it.";
    } else {
      ballAnswer.innerHTML = "Outlook not so good.";
    }
  }
}
