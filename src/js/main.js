(function () {
  var backToTop = document.querySelector('.back-to-top');
  if (!backToTop) return;

  function toggleBackToTop() {
    if (window.scrollY > 260) {
      backToTop.classList.add('is-visible');
    } else {
      backToTop.classList.remove('is-visible');
    }
  }

  window.addEventListener('scroll', toggleBackToTop, { passive: true });
  toggleBackToTop();
})();
