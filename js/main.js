document.addEventListener('DOMContentLoaded', function () {
  var nav = document.getElementById('nav');
  var toggle = document.getElementById('navToggle');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
    });
  }

  var form = document.getElementById('contactForm');
  var note = document.getElementById('formNote');

  if (form && note) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      note.classList.add('visible');
      form.reset();
    });
  }
});
