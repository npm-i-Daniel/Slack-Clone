var slideIndex = 1;
showSlides(slideIndex);

function plusDivs(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slide = document.getElementsByClassName("mySlides");
  var dot = document.getElementsByClassName("dot");
  if (n > slide.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slide.length }
  for (i = 0; i < slide.length; i++) {
    slide[i].style.display = "none";
  }
  slide[slideIndex - 1].style.display = "block";

  for (let i = 0; i < dot.length; i++) {
    dot[i].className = dot[i].className.replace(" active", "");
  }
  dot[slideIndex - 1].className += (" active");

  for (let i = 0; i < dot.length; i++) {
    dot[i].className = dot[i].classList.remove(" active");
  }
  dot[slideIndex - 1].classList.add(" active");

}


