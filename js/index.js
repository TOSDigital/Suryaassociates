// Mobile Navigation
var navLinks = document.getElementById("navLinks");
        function openMenu(){
            navLinks.style.right = "0px";
        }
        function hideMenu(){
            navLinks.style.right = "-220px";
        }

// Nav Bar Appearance
window.addEventListener('scroll', function() {
  var nav = document.querySelector('nav');
  var section = document.querySelector('#aboutus'); // Change this to the ID of the next section

  var sectionTop = section.offsetTop;
  var scrollTop = window.scrollY;

  if (scrollTop >= sectionTop) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

window.addEventListener('scroll', function() {
  var nav = document.querySelector('nav');
  var section = document.querySelector('#servicepage'); // Change this to the ID of the next section

  var sectionTop = section.offsetTop;
  var scrollTop = window.scrollY;

  if (scrollTop >= sectionTop) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});



