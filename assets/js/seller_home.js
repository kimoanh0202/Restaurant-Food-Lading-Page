
async function fetchApi(url) {
    const data = await fetch(url);
    return data.json();
    }

    fetchApi("https://fakestoreapi.com/products").then((data) => {
        const listProduct = document.getElementById('list_product');

        console.log("data", data);

        //giới hạn lấy 6 sản phẩm đầu tiên
        data.slice(0, 6).forEach(product => {

        const productItemHTMLs = `
        <div class="item_product">
            <div class="item_product-img">
                <a href="detail.html?id=${product.id}">
                    <img src="${product.image}" />
                </a>
            </div>

            <div class="item_product-content">
                <div class="item_product-text">
                    <div class="text-p">
                        <a href="detail.html?id=${product.id}">
                            <p>${product.title}</p>
                        </a>
                    </div>
                    <div class="text-button">
                    <button class="btn-buynow" onclick="window.location.href='./checkout.html'">Buy Now</button>
                    </div>
                </div>

                <div class="item_product-rate">
                    <div class="product_rate">
                        <img src="./assets/image/Frame.svg" />
                        <img src="./assets/image/Frame.svg" />
                        <img src="./assets/image/Frame.svg" />
                        <img src="./assets/image/Frame.svg" />
                        <img src="./assets/image/Frame.svg" />
                    </div>

                    <div class="product_price">
                        <p>$${product.price}</p>
                    </div>
                </div>
            </div>
        </div>
        `;
        listProduct.insertAdjacentHTML('beforeend', productItemHTMLs);
        




    });
});


