const reqFS = document.getElementById('reqFS');
const main = document.getElementById('main');
const fullscreen = document.getElementById('fullscreen');
const collection = document.getElementById('Collection');
const closeGame = document.getElementById('closeGame');
const ganeFrame = document.getElementById('gameFrame');

const playCont = document.getElementById('playCont');


reqFS.addEventListener('click', () => {
  
       // Play the video and request fullscreen
     video.play();
     if (video.webkitEnterFullscreen) {
       video.webkitEnterFullscreen(); // iOS Safari fullscreen method
     } else if (video.requestFullscreen) {
       video.requestFullscreen();
     }

 // if (main.requestFullscreen) {
//    main.requestFullscreen();
//  } else if (main.webkitRequestFullscreen) { // Safari
//    main.webkitRequestFullscreen();
//  } else if (main.msRequestFullscreen) { // IE/Edge
//    main.msRequestFullscreen();
//  }
  fullscreen.style.display='none';
  main.style.display='block';
});

function isFullscreen() {
  return document.fullscreenElement || document.webkitFullscreenElement || document.msFullscreenElement;
}

document.addEventListener('fullscreenchange', () => {
  if (!isFullscreen()) {
    fullscreen.style.display = 'block'; // Show prompt when not in full-screen
  } else {
    fullscreen.style.display = 'none'; // Hide prompt when in full-screen
  }
});


const gameURL = [
  "https://shaileshsingh007.github.io/PORTFOLIO_PROJECT_2024/",
  "https://shaileshsingh007.github.io/ImageDouble/",
  "https://shaileshsingh007.github.io/PowerOfMemory/",
  "https://shaileshsingh007.github.io/Multi_Calci/",
  "https://shaileshsingh007.github.io/Leave-Planner-2.O/",
  "https://shaileshsingh007.github.io/save_the_city/",
  "https://shaileshsingh007.github.io/GUESS_THE_FACE/",
];

[...collection.children].forEach((child, idx) => {
  child.addEventListener("click", () => {
    playCont.style.display = "block";
    gameFrame.src = gameURL[idx];
  });
});

closeGame.addEventListener("click", () => {
  playCont.style.display = "none";
  gameFrame.src = ""; // Optional: Clear iframe content
});


