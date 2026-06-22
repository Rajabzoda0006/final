let cart = JSON.parse(localStorage.getItem('cart')) || [];

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function renderCart() {

    const container = document.getElementById('cartItems');
    if (!container) return;

    container.innerHTML = '';

    if (!cart.length) {

        container.innerHTML = `
            <div class="empty-cart">
                <h2>Your cart is empty</h2>
                <p>Add some products first.</p>
            </div>
        `;

        updateTotals(0);
        return;
    }

    let subtotal = 0;
    let html = '';

    cart.forEach(item => {

        const price = Number(item.price) || 0;
        subtotal += price * item.quantity;

        html += `
            <div class="cart-item">

                <img src="${item.image}" alt="${item.name}">

                <div class="item-info">

                    <h3>${item.name}</h3>

                    <p>$${price.toFixed(2)}</p>

                    <div class="quantity">

                        <button onclick="changeQty(${item.id}, -1)">-</button>

                        <span>${item.quantity}</span>

                        <button onclick="changeQty(${item.id}, 1)">+</button>

                    </div>

                    <button class="remove-btn"
                        onclick="removeItem(${item.id})">
                        Remove
                    </button>

                </div>

            </div>
        `;
    });

    container.innerHTML = html;

    updateTotals(subtotal);
}

function updateTotals(subtotal) {

    const shipping = subtotal > 0 ? 10 : 0;
    const tax = subtotal * 0.05;
    const total = subtotal + shipping + tax;

    document.getElementById('subtotal').innerText = '$' + subtotal.toFixed(2);
    document.getElementById('shipping').innerText = '$' + shipping.toFixed(2);
    document.getElementById('tax').innerText = '$' + tax.toFixed(2);
    document.getElementById('total').innerText = '$' + total.toFixed(2);
}

function changeQty(id, amount) {

    cart = cart.map(item => {

        if (item.id === id) {
            item.quantity += amount;
        }

        return item;
    })
    .filter(item => item.quantity > 0); // 🔥 можно удалить товар

    saveCart();
    renderCart();
}

function removeItem(id) {

    cart = cart.filter(item => item.id !== id);

    saveCart();
    renderCart();
}

function checkout() {

    if (!cart.length) {
        alert('Your cart is empty!');
        return;
    }

    let subtotal = 0;
    const receipt = document.getElementById('receiptItems');
    receipt.innerHTML = '';

    cart.forEach(item => {

        const price = Number(item.price) || 0;
        const total = price * item.quantity;

        subtotal += total;

        receipt.innerHTML += `
            <div class="receipt-line">
                <span>${item.name} × ${item.quantity}</span>
                <span>$${total.toFixed(2)}</span>
            </div>
        `;
    });

    const shipping = 10;
    const tax = subtotal * 0.05;
    const total = subtotal + shipping + tax;

    document.getElementById('receiptTotal').innerText =
        `Total: $${total.toFixed(2)}`;

    document.getElementById('receiptModal').style.display = 'flex';

    // 🔥 clear AFTER showing receipt logic is safe now
    cart = [];
    saveCart();
    renderCart();
}

function closeReceipt() {
    document.getElementById('receiptModal').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', renderCart);