// Format price to Rupiah
function formatRupiah(number) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0
  }).format(number);
}

// Track current category state
let currentCategory = '';

// Highlight the active category button
function setActiveButton(category) {
  document.querySelectorAll('.category-btn').forEach(btn => {
    const isActive = btn.getAttribute('data-category') === category;
    btn.classList.toggle('active', isActive);
  });
}

// Fetch products from backend API
function fetchProducts(category = '') {
  let url = '/api/products';
  if (category) {
    url += `?category=${encodeURIComponent(category)}`;
  }

  fetch(url)
    .then(res => res.json())
    .then(products => {
      const list = document.getElementById('product-list');
      list.innerHTML = ''; // Clear current display

      if (products.length === 0) {
        list.innerHTML = '<p>No products found.</p>';
        return;
      }

      products.forEach(p => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
          <img src="${p.image_url}" alt="${p.name}" class="product-image" />
          <h4>${p.name}</h4>
          <p>${formatRupiah(p.price)}</p>
        `;
        list.appendChild(card);
      });

      setActiveButton(category);
    })
    .catch(err => {
      console.error('Failed to load products:', err);
    });
}

// Add click event listeners to category buttons
document.querySelectorAll('.category-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    currentCategory = btn.getAttribute('data-category');
    fetchProducts(currentCategory);
  });
});

// Initial product load
fetchProducts();
