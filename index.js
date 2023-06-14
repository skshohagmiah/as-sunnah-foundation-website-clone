const navbar = document.querySelector('.nav-links ul');
const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', (e) => {
    navbar.classList.add('show');
})
document.addEventListener("click", function(event) {
    var target = event.target;
    if (!navbar.contains(target) && target !== hamburger) {
        navbar.classList.remove('show');
    }else{
        navbar.classList.add('show');
    }
})


document.addEventListener("DOMContentLoaded", function() {
    var slideIndex = 0;
    var slideWidth = 100;
    var slides = document.querySelectorAll(".carousel-slide img");
    var slideContainer = document.querySelector(".carousel-slide");
    var dotsContainer = document.querySelector(".carousel-dots");
    var dots = [];
  
    // Create dots based on the number of slides
    for (var i = 0; i < slides.length; i++) {
      var dot = document.createElement("span");
      dot.classList.add("carousel-dot");
      dot.setAttribute("data-index", i);
      dot.addEventListener("click", function() {
        slideIndex = parseInt(this.getAttribute("data-index"));
        updateSlide();
      });
      dots.push(dot);
      dotsContainer.appendChild(dot);
    }
  
    // Function to update the slide position
    function updateSlide() {
      var slidePosition = -slideWidth * slideIndex + "%";
      slideContainer.style.transform = "translateX(" + slidePosition + ")";
      updateActiveDot();
    }
  
    // Function to update the active dot
    function updateActiveDot() {
      for (var i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
      }
      dots[slideIndex].classList.add("active");
    }
  
    // Function to move to the next slide
    function nextSlide() {
      slideIndex++;
      if (slideIndex >= slides.length) {
        slideIndex = 0;
      }
      updateSlide();
    }
  
    // Start the slideshow
    setInterval(nextSlide, 3000); // Change slide every 3 seconds
  });
  