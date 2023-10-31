window.addEventListener('scroll', function() {
    const navBar = document.getElementById('nav-bar'); // Get the navigation bar element
    if (window.scrollY > 0) {
      navBar.classList.add('scrolled'); // Apply the 'scrolled' class when scrolling
    } else {
      navBar.classList.remove('scrolled'); // Remove the class when back to the top
    }
  });
  