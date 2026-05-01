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

<iframe width="990" height="557" src="https://www.youtube.com/embed/1ZYbU82GVz4?list=PLCCV2dadoqCPPWT_zk61DzeegKcGqip5K" title="Flying: Relaxing Sleep Music for Meditation, Stress Relief &amp; Relaxation by Peder B. Helland" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>