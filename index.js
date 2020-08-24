//detecting mouse click on buttons
for(var i=0; i<document.querySelectorAll(".drum").length; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    var button = this.innerHTML;
    audioPlay(button);
    buttonAnimation(button);
  });
}

//Detecting key pressed on keyboard
document.addEventListener("keydown",function(event){
  audioPlay(event.key);
  buttonAnimation(event.key);
});


function audioPlay(button){

  var audio;
  switch (button) {
    case 'w':
      audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case 'a':
      audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case 's':
      audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case 'd':
      audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    case 'j':
      audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case 'k':
      audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case 'l':
      audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;

    default:
      console.log(button);
  }
}

function buttonAnimation(key){
  document.querySelector("." + key).classList.add("pressed");

  //remove the class after each 100 ms
  setTimeout(function(){
    document.querySelector("." + key).classList.remove("pressed");
  }, 100);
}
