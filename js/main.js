const progress = document.querySelector('.progress-done');

progress.style.width = progress.getAttribute('data-done') + '%';
progress.style.opacity = 1;

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

