function makeVisible() {
  var scrollText = document.querySelector('.scroll-continue');
  scrollText.classList.add('visible-scroll');
}

function removeScrollText(event) {
  var scrollText = document.querySelector('.scroll-continue');
  scrollText.remove();
}

function onScroll(event) {
  var scrollText = document.querySelector('.scroll-continue');
  scrollText.classList.remove('visible-scroll');
  setTimeout(removeScrollText, 1000);
}

function onBodyLoad(event) {
  if (window.scrollY <= 0) {
    makeVisible()
    window.addEventListener('scroll', onScroll);
  } else {
    removeScrollText()
  }
}