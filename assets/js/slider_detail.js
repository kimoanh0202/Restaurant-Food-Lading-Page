async function fetchDetailProduct(idProduct){
    try {
        const response = await fetch(`https://fakestoreapi.com/products/${idProduct}`);
        const products = await response.json();
        console.log("fetchDetailProduct", products);
        displayProduct(products);
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}

function displayProduct(product) {
    console.log("product", product);
    console.log("product", product.title);

    const slideshowContainer = document.getElementById('slideshow-container');
    const infoRight = document.getElementById('info-right');

    console.log("infoRight", infoRight);

    let slideIndex = 0;

    // Tạo slider cho 3 ảnh của sản phẩm
    for (let i = 0; i < 3; i++) {
        const slideDiv = document.createElement('div');
        slideDiv.className = 'mySlides fade';
        if (i === 0) slideDiv.style.display = 'block';

        const img = document.createElement('img');
        img.src = product.image;
        slideDiv.appendChild(img);

        //Thêm button <>
        slideshowContainer.innerHTML += `
        <a class="prev" onclick="plusSlides(-1)">❮</a>
        <a class="next" onclick="plusSlides(1)">❯</a>
        `;

        slideshowContainer.appendChild(slideDiv);
    }

    // Tạo dots cho slider
    for (let i = 0; i < 3; i++) {
        const dot = document.createElement('span');
        dot.className = 'dot';
        dot.onclick = () => currentSlide(i + 1);
        document.querySelector('.dot_slider').appendChild(dot);
    }


    infoRight.innerHTML = `
        <div class="info-right_title">
        <p>${product.title}</p>
        </div>

        <div class="info-right_review">
        <div class="review_star">
            ${'<img src="./assets/image/Frame.svg">'.repeat(5)}
        </div>
        
        <div class="review_count_customer">
            <p>${product.rating.count} Customer Review</p>
        </div>
        </div>

        <div class="info-right_content">
        <p>${product.description}</p>
        </div>

        <div class="info-right_price">
        <p>$${product.price}</p>
        </div>

        <div class="info-right_buy">
        <div class="number_order">
            <button class="decrease" onclick="decrease()">
            <img src="./assets/image/Frame (2).svg" alt="">
            </button>

            <div class="order-price">
            <input id="quantity" type="number" min="0" max="100" value="1" />
            </div>

            <button class="increase" onclick="increase()">
            <img src="./assets/image/Frame (1).svg" alt="">
            </button> 
        </div>
        
        <svg class="icon_cart" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"/>
        </svg>

        <div class="button_buy">
            <button class="btn-buynow" onclick="window.location.href='./checkout.html'">Buy Now</button>
        </div>
        </div>
    `;


showSlides(slideIndex);
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n - 1);
}

function showSlides(n) {
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");
    if (n >= slides.length) slideIndex = 0;
    if (n < 0) slideIndex = slides.length - 1;

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex].style.display = "block";
    dots[slideIndex].className += " active";
}


window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const idProduct = urlParams.get('id');

    fetchDetailProduct(idProduct);
};