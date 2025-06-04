// Format price to Rupiah
function formatRupiah(number) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0
  }).format(number);
}

// Debounce function to limit rapid API calls
function debounce(func, timeout = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => { func.apply(this, args); }, timeout);
  };
}

// Track current filter states
let currentCategory = '';
let currentSearchTerm = '';

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
    .then(res => res.json())
    .then(products => {
      const list = document.getElementById('product-list');
      list.innerHTML = products.length ? '' : '<p>Tidak ada produk yang ditemukan.</p>';

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
    })
    .catch(err => console.error('Failed to load products:', err));
}

// Initialize event listeners
function initEventListeners() {
  // Category buttons
  document.querySelectorAll('.category-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      currentCategory = btn.dataset.category;
      setActiveButton(currentCategory);
      fetchProducts();
    });
  });

  // Search input with debounce
  const searchInput = document.getElementById('search-input');
  const updateSearch = debounce(() => {
    currentSearchTerm = searchInput.value.trim();
    fetchProducts();
  });

  searchInput.addEventListener('input', updateSearch);
  
  // Optional: Keep search button if desired
  document.getElementById('search-btn')?.addEventListener('click', () => {
    currentSearchTerm = searchInput.value.trim();
    fetchProducts();
  });
}

// Initial load
document.addEventListener('DOMContentLoaded', () => {
  initEventListeners();
  fetchProducts();
});