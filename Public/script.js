// Format price to Rupiah
function formatRupiah(number) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0
  }).format(number);
}

// Track current filter states
let currentCategory = '';
let currentSearchTerm = '';

// Debounce function to limit rapid API calls
function debounce(func, timeout = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => { func.apply(this, args); }, timeout);
  };
}

// Highlight active category button
function setActiveButton(category) {
  document.querySelectorAll('.category-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.category === category);
  });
}

// Fetch products with current filters
function fetchProducts() {
  const queryParams = new URLSearchParams();
  
  if (currentCategory) queryParams.append('category', currentCategory);
  if (currentSearchTerm) queryParams.append('search', currentSearchTerm);

  fetch(`/api/products?${queryParams.toString()}`)
    .then(response => response.json())
    .then(products => {
      const productList = document.getElementById('product-list');
      productList.innerHTML = '';

      if (products.length === 0) {
        productList.innerHTML = '<p class="no-products">Tidak ada produk yang ditemukan.</p>';
        return;
      }

      products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
          <img src="${product.image_url}" alt="${product.name}" class="product-image">
          <h4>${product.name}</h4>
          <p>${formatRupiah(product.price)}</p>
        `;
        productList.appendChild(card);
      });
    })
    .catch(error => console.error('Error loading products:', error));
}

// Initialize event listeners
function init() {
  // Category filter buttons
  document.querySelectorAll('.category-btn').forEach(button => {
    button.addEventListener('click', () => {
      currentCategory = button.dataset.category;
      setActiveButton(currentCategory);
      fetchProducts();
    });
  });

  // Search input with debounce
  const searchInput = document.getElementById('search-input');
  const handleSearch = debounce(() => {
    currentSearchTerm = searchInput.value.trim();
    fetchProducts();
  });

  searchInput.addEventListener('input', handleSearch);
}

// Start everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  init();
  fetchProducts();
});