function toggleMenu() {
  document.getElementById("navMenu").classList.toggle("show");
}

// 猜數字小遊戲
const answer = Math.floor(Math.random() * 15) + 1;

function checkGuess() {
  const input = document.getElementById("guessInput").value;
  const result = document.getElementById("gameResult");

  const guess = parseInt(input);
  if (isNaN(guess)) {
    result.textContent = "請輸入一個數字啦笨蛋 😒";
  } else if (guess < answer) {
    result.textContent = "太小了～再猜大一點！";
  } else if (guess > answer) {
    result.textContent = "太大啦～再猜小一點！";
  } else {
    result.textContent = "答對啦！！你贏了 🎉🎉🎉";
  }
}
