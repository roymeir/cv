/* adding click listener to all buttons */
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function() {

    var buttonHTML = this.innerHTML;
    playSound(buttonHTML);
    animate(buttonHTML.toLowerCase());
  })
}

/* adding keydown listener to the page*/
document.addEventListener("keydown", function(e) {
  playSound(e.key);
  animate(e.key);
})

/* function to play relevant sounds */
function playSound(key) {
  switch (key) {
    case 'W':
    case 'w':
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    case "A":
    case "a":
      var kick_bass = new Audio('sounds/kick-bass.mp3');
      kick_bass.play();
      break;

    case "S":
    case "s":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case "D":
    case "d":
      var tom1 = new Audio('sounds/tom1.mp3');
      tom1.play();
      break;

    case "J":
    case "j":
      var tom2 = new Audio('sounds/tom2.mp3');
      tom2.play();
      break;

    case "K":
    case "k":
      var tom3 = new Audio('sounds/tom3.mp3');
      tom3.play();
      break;

    case "L":
    case "l":
      var tom4 = new Audio('sounds/tom4.mp3');
      tom4.play();
      break;

    default:
      console.log(key);
  }
}

function animate(key) {
  var buttonPressed = document.querySelector("." + key);
  buttonPressed.classList.add('pressed');

  setTimeout(function() {
    buttonPressed.classList.remove('pressed');
  }, 100); //wait 2 seconds

}
