const container = document.getElementById('list_product');
const loadMoreBtn = document.getElementById('show-more');
const showLessBtn = document.getElementById('show-less');
const productsPerPage = 3; // Số lượng sản phẩm cần tải thêm mỗi lần nhấn "Load More"
let currentItem = 0;
let products = [];
let totalDisplayedItemsCount = 0; // Số lượng sản phẩm đã hiển thị từ đầu

// Hàm để xây dựng chuỗi HTML cho các sản phẩm
function buildProductHTML(product) {
  return `
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
}


// Hàm để hiển thị các sản phẩm
function displayProducts(startIndex, count) {
  container.innerHTML = ''; // Xóa nội dung cũ
  let html = '';
  for (let i = 0; i < startIndex + count && i < products.length; i++) {
    html += buildProductHTML(products[i]);
  }
  container.insertAdjacentHTML('beforeend', html); // Thêm sản phẩm mới vào container
  currentItem = startIndex + count; // Cập nhật currentItem

  // Cập nhật số lượng sản phẩm đã hiển thị
  totalDisplayedItemsCount = currentItem;

  // Ẩn/hiển thị nút "Show Less" khi cần
  if (totalDisplayedItemsCount >= products.length) {
    showLessBtn.style.display = 'block'; // Hiển thị nút "Show Less" khi tất cả sản phẩm đã được hiển thị
  } else {
    showLessBtn.style.display = 'none'; // Ẩn nút "Show Less" nếu chưa hiển thị hết sản phẩm
  }

  // Ẩn/hiển thị nút "Show More" khi cần
  if (currentItem >= products.length) {
    loadMoreBtn.style.display = 'none'; // Ẩn nút "Load More" nếu đã hiển thị hết sản phẩm
  } else {
    loadMoreBtn.style.display = 'block'; // Hiển thị nút "Load More" nếu còn sản phẩm để hiển thị
  }
}

// Lấy dữ liệu từ API
fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => {
    products = data;
    displayProducts(0, productsPerPage); // Hiển thị sản phẩm ban đầu
  })
  .catch(error => console.error('Lỗi khi lấy dữ liệu từ API:', error));

// Xử lý sự kiện nhấn nút "Load More"
loadMoreBtn.onclick = () => {
  displayProducts(0, currentItem + productsPerPage); // Hiển thị thêm sản phẩm
};

// Xử lý sự kiện nhấn nút "Show Less"
showLessBtn.onclick = () => {
  currentItem = productsPerPage;
  totalDisplayedItemsCount = productsPerPage; // Đặt lại biến đếm về số lượng ban đầu
  displayProducts(0, productsPerPage); // Hiển thị lại danh sách sản phẩm với số lượng ban đầu
  showLessBtn.style.display = 'none'; // Ẩn nút "Show Less" sau khi hiển thị lại số lượng ban đầu
};
