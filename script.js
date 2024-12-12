window.dataLayer = window.dataLayer || [];

// Add to Cart Event
document.getElementById('add-to-cart-btn').addEventListener('click', function () {
  window.dataLayer.push({
    event: 'add_to_cart',
    product_id: '12345',
    product_name: 'Sample Product',
    quantity: 1,
    imageURL: "https://retention.com/wp-content/uploads/2023/03/retention-white-long.svg",
    price: "49.99"
  });
  alert('Product added to cart!');
});

// Form Submit Event
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent actual form submission
  window.dataLayer.push({
    event: 'form_filled',
    form_name: 'Contact Us',
    form_data: {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value
    }
  });
  alert('Form submitted successfully!');
});
