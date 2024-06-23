let timer;
let totalTime;
let timeRemaining;
const circle = document.getElementById("circle");
const timeDisplay = document.getElementById("time-display");
const finishTime = document.getElementById("finish-time");

function startTimer(minutes) {
  clearInterval(timer);
  totalTime = minutes * 60;
  timeRemaining = totalTime;
  updateDisplay();
  timer = setInterval(updateTimer, 1000);
}

function updateTimer() {
  if (timeRemaining > 0) {
    timeRemaining--;
    updateDisplay();
  } else {
    clearInterval(timer);
  }
}

function updateDisplay() {
  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;
  timeDisplay.textContent = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

  const finish = new Date();
  finish.setMinutes(finish.getMinutes() + Math.floor(timeRemaining / 60));
  finish.setSeconds(finish.getSeconds() + (timeRemaining % 60));
  finishTime.textContent = `FINISHED AT ${finish.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  })}`;

  const progress = (1 - timeRemaining / totalTime) * 360;
  circle.style.background = `conic-gradient(#fa8072 ${progress}deg, #f9f9f9 ${progress}deg)`;
  circle.style.borderStyle = timeRemaining <= 0 ? "solid" : "dotted";
}
