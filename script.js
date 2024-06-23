// Sample product data (replace with actual data from your backend)
const products = [
    { id: 1, name: 'Product 1', price: 10.00, image: 'product1.jpg' },
    { id: 2, name: 'Product 2', price: 20.00, image: 'product2.jpg' },
    { id: 3, name: 'Product 3', price: 15.00, image: 'product3.jpg' },
];

// Function to display products
function displayProducts() {
    const productList = document.getElementById('product-list');

    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('product');
        productItem.innerHTML = `
            <img src="images/${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
        `;
        productList.appendChild(productItem);
    });

    // Add event listeners to Add to Cart buttons
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', addToCart);
    });
}

// Function to add item to cart
function addToCart(event) {
    const productId = parseInt(event.target.getAttribute('data-id'));
    const productToAdd = products.find(product => product.id === productId);

    if (productToAdd) {
        cartItems.push(productToAdd);
        updateCart();
    }
}

// Array to store cart items
let cartItems = [];

// Function to update cart display
function updateCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');

    cartItemsContainer.innerHTML = '';
    let total = 0;

    cartItems.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <h4>${item.name}</h4>
            <p>$${item.price.toFixed(2)}</p>
        `;
        cartItemsContainer.appendChild(cartItem);
        total += item.price;
    });

    cartTotal.textContent = total.toFixed(2);

    // Show the cart modal
    document.getElementById('cart-modal').style.display = 'block';
}

// Function to close the cart modal
function closeCart() {
    document.getElementById('cart-modal').style.display = 'none';
}

// Event listener for checkout button
document.getElementById('checkout-btn').addEventListener('click', () => {
    alert('Redirecting to checkout page...');
});

// Event listener for closing the cart modal
document.querySelector('.close').addEventListener('click', closeCart);

// Display products when page loads
displayProducts();
