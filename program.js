// Hamburger toggle functionality
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('nav ul');

// क्लिक करने पर menu खुल/बंद होगा
menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

// बाहर क्लिक करने पर menu बंद हो जाएगा
document.addEventListener('click', function(e) {
  if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
    navMenu.classList.remove('show');
  }
});

// Swipe/drag close (mobile touch)
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', function(e) {
  touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', function(e) {
  touchEndX = e.changedTouches[0].screenX;
  if (touchEndX - touchStartX > 100) {
    // अगर user ने दाएँ से बाएँ swipe किया तो menu बंद हो जाएगा
    navMenu.classList.remove('show');
  }
});

// Scroll करने पर menu बंद हो जाएगा
window.addEventListener('scroll', () => {
  navMenu.classList.remove('show');
});
