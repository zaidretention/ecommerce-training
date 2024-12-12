window.dataLayer = window.dataLayer || [];

// Simulate a Page Load Event
window.dataLayer.push({
  event: 'page_view',
  page_type: 'home',
});

// Add to Cart Event
document.getElementById('add-to-cart-btn').addEventListener('click', function () {
  window.dataLayer.push({
    event: 'add_to_cart',
    product_id: '12345',
    product_name: 'Sample Product',
    quantity: 1,
  });
  alert('Product added to cart!');
});

// Form Submit Event
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  window.dataLayer.push({
    event: 'form_filled',
    form_name: 'Contact Us',
  });
  alert('Form submitted!');
});
