let cart = JSON.parse(localStorage.getItem('cart')) || [];

const cartCount = document.getElementById('cart-count');
const cartList = document.getElementById('cart-items');
const totalText = document.getElementById('total');

function updateCart() {
  cartList.innerHTML = '';
  let total = 0;

  cart.forEach((item, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      ${item.name} - Rs.${item.price.toFixed(2)}
      <button class="remove-btn" data-index="${index}">Remove</button>
    `;
    cartList.appendChild(li);
    total += item.price;
  });

  cartCount.textContent = cart.length;
  totalText.textContent = `Total: Rs.${total.toFixed(2)}`;

  localStorage.setItem('cart', JSON.stringify(cart));
}

document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', (e) => {
    const product = e.target.parentElement;
    const name = product.getAttribute('data-name');
    const price = parseFloat(product.getAttribute('data-price'));
    cart.push({ name, price });
    updateCart();
  });
});

cartList.addEventListener('click', (e) => {
  if (e.target.classList.contains('remove-btn')) {
    const index = e.target.getAttribute('data-index');
    cart.splice(index, 1);
    updateCart();
  }
});

updateCart();

document.getElementById('pay-now').addEventListener('click', () => {
  if (cart.length === 0) {
    alert("Your cart is empty!");
  } else {
    alert("Thank you for shopping with FreshBasket! Your order has been placed.");
    cart = [];
    updateCart();
  }
});
