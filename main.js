//play sound function

const playSound = (event) => {
  const audio = document.querySelector(`audio[data-key = "${event.keyCode}"]`);

  if(!audio) return;

  const key = document.querySelector(`.key[data-key = "${event.keyCode}"]`);
  key.classList.add('playing');
  audio.currentTime = 0;
  audio.play();
};

// remove the css class playing
const removePlaying = (e) => {
  if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
};

//select the keys
const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener('transitionend', removePlaying));
window.addEventListener('keydown', playSound);