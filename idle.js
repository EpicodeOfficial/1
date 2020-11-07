// IDLE TIMER
let timer,
  currSeconds = 0;
function resetTimer() {
  document.querySelector(".timertext").style.display = "none";
  clearInterval(timer);
  currSeconds = 0;
  timer = setInterval(startIdleTimer, 1000);
}
window.onload = resetTimer;
window.onmousemove = resetTimer;
window.onmousedown = resetTimer;
window.ontouchstart = resetTimer;
window.onclick = resetTimer;
window.onkeypress = resetTimer;
function startIdleTimer() {
  currSeconds++;
  document.querySelector(".secs").textContent = currSeconds;
  document.querySelector(".timertext").style.display = "block";
}
setInterval(() => {
  if (currSeconds > 900) {
    location.href = "javascript:keeperLogOut()";
    location.href = "/session-end";
  }
}, 1000);