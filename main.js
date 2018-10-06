function getMouseX(){
  return event.clientX;
}
function getMouseY(){
  return event.clientY;
}
function place(){
  var image = document.getElementById("face");
  image.style.position = "absolute";
  //image.style.left = getMouseX()+"px";
  image.style.top = getMouseY()+"px";
}
function increaseScore(){
  //document.getElementById("scoreKeeper").innerText = "1";
  var currentScore = document.getElementById("scoreKeeper").innerText;
  score = parseInt(currentScore);
  document.getElementById("scoreKeeper").innerText = (score + 1);
}
function decreaseScore(){
  var currentScore = document.getElementById("scoreKeeper").innerText;
  score = parseInt(currentScore);
  document.getElementById("scoreKeeper").innerText = (score - 1);
}

setInterval(function() {
  var rectangle = document.getElementById("rectangle");
  var rectangle2 = document.getElementById("rectangle2");
  var rectangle3 = document.getElementById("rectangle3");
  var point = document.getElementById("point");
  var point2 = document.getElementById("point2");
  var image = document.getElementById("face");
  // alert(rectangle.offsetLeft + " " + image.offsetLeft);
    //alert("correct general area");
  if (rectangle.offsetTop > image.offsetTop && rectangle.offsetTop < image.offsetTop + 162 && rectangle.offsetLeft < 175){
    decreaseScore()
  }
  if (rectangle2.offsetTop > image.offsetTop && rectangle2.offsetTop < image.offsetTop + 162 && rectangle2.offsetLeft < 175){
    decreaseScore()
  }
  if (rectangle3.offsetTop > image.offsetTop && rectangle3.offsetTop < image.offsetTop + 162 && rectangle3.offsetLeft < 175){
    decreaseScore();
  }
  if (point.offsetTop > image.offsetTop && point.offsetTop < image.offsetTop + 162 && point.offsetLeft < 175){
    increaseScore();
  }
  if (point2.offsetTop > image.offsetTop && point2.offsetTop < image.offsetTop + 162 && point2.offsetLeft < 175){
    increaseScore();
  }
}, 0);

setInterval(function() {
  var projectile = document.getElementById("rectangle");
  var y = window.innerWidth;
  var randomY = Math.floor(Math.random() * y);
  projectile.style.top = randomY + "px";


  var projectile = document.getElementById("rectangle2");
  var y = window.innerWidth;
  var randomY = Math.floor(Math.random() * y);
  projectile.style.top = randomY + "px";

  var projectile = document.getElementById("rectangle3");
  var y = window.innerWidth;
  var randomY = Math.floor(Math.random() * y);
  projectile.style.top = randomY + "px";

  var projectile = document.getElementById("point");
  var y = window.innerWidth;
  var randomY = Math.floor(Math.random() * y);
  projectile.style.top = randomY + "px";

  var projectile = document.getElementById("point2");
  var y = window.innerWidth;
  var randomY = Math.floor(Math.random() * y);
  projectile.style.top = randomY + "px";

}, 2000)
