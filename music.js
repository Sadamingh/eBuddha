var music = new Audio('music.mp3');
music.loop = true;
var playing = false;

function audio() {
  if (playing) {
    music.pause();
    playing = false;
  } else {
    music.play();
    playing = true;
  }
}
