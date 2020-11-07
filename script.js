// Menu
// var modal = document.getElementById("Modal");
// var btn = document.getElementById("Btn");
// var span = document.getElementsByClassName("close")[0];
// btn.onclick = function() {
//   modal.style.display = "block";
// };
// span.onclick = function() {
//   modal.style.display = "none";
// };
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// };
// Alert close effect
var close = document.getElementsByClassName("closebtn");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.opacity = "0";
    setTimeout(function() {
      div.style.display = "none";
    }, 600);
  };
}
function clearAll() {
  document.getElementById("clear").style.display = "none";
  document.getElementById("alert").style.display = "none";
  document.getElementById("alert2").style.display = "none";
  document.getElementById("alert3").style.display = "none";
  document.getElementById("alert4").style.display = "none";
  document.getElementById("alert5").style.display = "none";
  document.getElementById("alert6").style.display = "none";
  document.getElementById("alert7").style.display = "none";
  document.getElementById("alert8").style.display = "none";
  document.getElementById("alert9").style.display = "none";
}
// Glitch.com
function Glitch(){document.getElementById("glitch").style.display = "inline-block";}
function modalHide(){document.getElementById("glitch").style.display = "none";}
function goMobile(){location.href = "/mb/home";}