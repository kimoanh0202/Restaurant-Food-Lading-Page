// Tăng giảm số lượng
function decrease() {
  let input = document.getElementById('quantity');
  
  console.log(input.value)
  if (input.value>0){
      newValue=input.value
      newValue--;
  } 
  input.value = newValue;
  return newValue;
}
function increase() {
  let input = document.getElementById('quantity');
  newValue=input.value
  newValue++;
  console.log(newValue)
  input.value = newValue;
  return newValue;
}

// Tab navigator
function openTab(evt, cityName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("describe_content");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" default-selected", "");
  }

  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " default-selected";
  }

  
//Slider picture
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

//Số lượng sản phẩm giỏ hàng

