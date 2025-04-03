const modeButton = document.getElementById("fullscreenButton");
const fullscreenButton = document.getElementById("fullscreenButton");

modeButton.addEventListener("click", () => {
  toggleFullScreen(document.documentElement);
});

function toggleFullScreen(element) {
  if (!document.fullscreenElement) {
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
      /* Firefox */
      element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) {
      /* Chrome, Safari and Opera */
      element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
      /* IE 11 */
      element.msRequestFullscreen();
    }
    fullscreenButton.innerHTML = `<img src="./images/screen.png" alt="" />`;
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozExitFullscreen) {
      /* Firefox */
      document.mozExitFullscreen();
    } else if (document.webkitExitFullscreen) {
      /* Chrome, Safari and Opera */
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      /* IE 11 */
      document.msExitFullscreen();
    }
    fullscreenButton.innerHTML = `<img src="./images/full-screen.png" alt="" />`;
  }
}
