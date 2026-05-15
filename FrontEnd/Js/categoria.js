// ============================================
// VARIABLES GLOBALES
// ============================================

let currentCategory = '';
let currentProducts = [];
let currentView = 'grid';
let selectedProduct = null;
let currentFullscreenImage = '';

// ============================================
// INICIALIZACIÓN
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    const bodyCategory = document.body.dataset.category;
    const params = new URLSearchParams(window.location.search);
    currentCategory = bodyCategory || params.get('category') || 'Silenciadores';

    const pageTitle = document.body.dataset.pageTitle;
    if (pageTitle) {
        document.title = `${pageTitle} - RPM Silenciadores`;
    }
    
    loadProducts();
    setupMenuToggle();
    setupModal();
    setupImageFullscreen();
});

// ============================================
// CARGAR PRODUCTOS
// ============================================

function loadProducts() {
    if (productos[currentCategory]) {
        currentProducts = JSON.parse(JSON.stringify(productos[currentCategory]));
        displayProducts(currentProducts);
        updateCategoryName();
    } else {
        console.error('Categoría no encontrada:', currentCategory);
    }
}

function displayProducts(productsToDisplay) {
    const container = document.getElementById('productsContainer');
    container.innerHTML = '';

    if (productsToDisplay.length === 0) {
        container.innerHTML = '<p style="text-align: center; grid-column: 1/-1; padding: 2rem;">No hay productos disponibles en esta categoría.</p>';
        return;
    }

    productsToDisplay.forEach((product, index) => {
        const card = createProductCard(product, index);
        container.appendChild(card);
    });
}

function createProductCard(product, index) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.style.animation = `fadeIn 0.5s ease-out ${index * 0.1}s both`;
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.addEventListener('click', () => openModal(product.id));
    card.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            openModal(product.id);
        }
    });

    // Placeholder de imagen
    const imagePath = product.imagen || 'https://via.placeholder.com/250x250?text=' + encodeURIComponent(product.nombre);

    card.innerHTML = `
        <div class="product-image">
            <img src="${imagePath}" alt="${product.nombre}" onerror="this.src='https://via.placeholder.com/250x250?text=${encodeURIComponent(product.nombre)}'">
            <span class="product-badge">Popular</span>
        </div>
        <div class="product-info">
            <h3 class="product-name">${product.nombre}</h3>
            <p class="product-description">${product.descripcion.substring(0, 80)}...</p>
            <div class="product-price">₡${formatColones(product.precio)}</div>
        </div>
    `;

    return card;
}

// ============================================
// ORDENAMIENTO Y FILTRADO
// ============================================

function sortProducts() {
    const sortValue = document.getElementById('sortSelect').value;
    let sortedProducts = [...currentProducts];

    switch (sortValue) {
        case 'price-asc':
            sortedProducts.sort((a, b) => a.precio - b.precio);
            break;
        case 'price-desc':
            sortedProducts.sort((a, b) => b.precio - a.precio);
            break;
        case 'name-asc':
            sortedProducts.sort((a, b) => a.nombre.localeCompare(b.nombre));
            break;
        case 'name-desc':
            sortedProducts.sort((a, b) => b.nombre.localeCompare(a.nombre));
            break;
        default:
            sortedProducts = [...currentProducts];
    }

    displayProducts(sortedProducts);
}

// ============================================
// CAMBIO DE VISTA
// ============================================

function changeView(viewType) {
    currentView = viewType;
    const container = document.getElementById('productsContainer');
    const viewButtons = document.querySelectorAll('.view-btn');

    // Actualizar botones
    viewButtons.forEach(btn => btn.classList.remove('active'));
    event.target.closest('.view-btn').classList.add('active');

    // Cambiar clase en contenedor
    if (viewType === 'list') {
        container.classList.add('products-list');
        container.classList.remove('products-grid');
        container.style.gridTemplateColumns = 'none';
    } else {
        container.classList.remove('products-list');
        container.classList.add('products-grid');
    }

    // Actualizar tarjetas
    const cards = container.querySelectorAll('.product-card');
    cards.forEach(card => {
        if (viewType === 'list') {
            card.classList.add('list-view');
        } else {
            card.classList.remove('list-view');
        }
    });
}

// ============================================
// MODAL DE PRODUCTO
// ============================================

function openModal(productId) {
    const product = currentProducts.find(p => p.id === productId);
    if (!product) return;

    selectedProduct = product;
    const modal = document.getElementById('productModal');

    // Llenar información del modal
    document.getElementById('modalProductName').textContent = product.nombre;
    document.getElementById('modalProductPrice').textContent = '₡' + formatColones(product.precio);
    document.getElementById('modalProductDescription').textContent = product.descripcion;

    // Imagen principal
    const mainImage = document.getElementById('mainImage');
    mainImage.src = product.imagen || 'https://via.placeholder.com/400x400?text=' + encodeURIComponent(product.nombre);
    currentFullscreenImage = mainImage.src;

    // Miniaturas
    const thumbnailContainer = document.getElementById('thumbnailContainer');
    thumbnailContainer.innerHTML = '';
    
    (product.imagenes || [product.imagen]).forEach((img, index) => {
        const thumb = document.createElement('div');
        thumb.className = 'thumbnail' + (index === 0 ? ' active' : '');
        thumb.innerHTML = `<img src="${img}" alt="Imagen ${index + 1}">`;
        thumb.onclick = () => changeMainImage(img);
        thumbnailContainer.appendChild(thumb);
    });

    // Especificaciones
    const specsContainer = document.getElementById('specsContainer');
    specsContainer.innerHTML = '';
    
    for (const [key, value] of Object.entries(product.especificaciones || {})) {
        const spec = document.createElement('div');
        spec.className = 'spec-item';
        spec.innerHTML = `
            <div class="spec-label">${key.replace(/_/g, ' ')}</div>
            <div class="spec-value">${value}</div>
        `;
        specsContainer.appendChild(spec);
    }

    // Mostrar modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('productModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
    selectedProduct = null;
}

function changeMainImage(imagePath) {
    document.getElementById('mainImage').src = imagePath;
    currentFullscreenImage = imagePath;
    
    // Actualizar miniatura activa
    document.querySelectorAll('.thumbnail').forEach((thumb, index) => {
        thumb.classList.remove('active');
        if (thumb.querySelector('img').src === imagePath) {
            thumb.classList.add('active');
        }
    });
}

// ============================================
// CONTACTO
// ============================================

function contactForInfo() {
    const message = encodeURIComponent(`Quiero más información sobre: ${selectedProduct.nombre}`);
    const phone = '50660078606';
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
}

// Formateo de moneda en Colones (sin decimales si es entero)
function formatColones(value) {
    // Si el valor parece ser en colones ya (números grandes), mostrar sin cambios con separador de miles
    const intVal = Math.round(value);
    return intVal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

// ============================================
// VISTA FULLSCREEN DE IMAGEN
// ============================================

function setupImageFullscreen() {
    const mainImageWrapper = document.querySelector('#productModal .main-image');
    if (!mainImageWrapper || document.getElementById('imageFullscreenOverlay')) {
        return;
    }

    const fullscreenButton = document.createElement('button');
    fullscreenButton.type = 'button';
    fullscreenButton.className = 'image-fullscreen-trigger';
    fullscreenButton.innerHTML = '<i class="fas fa-expand"></i> <span class="image-fullscreen-label">Pantalla completa</span>';
    fullscreenButton.addEventListener('click', openImageFullscreen);
    mainImageWrapper.appendChild(fullscreenButton);

    const overlay = document.createElement('div');
    overlay.id = 'imageFullscreenOverlay';
    overlay.className = 'image-fullscreen-overlay';
    overlay.innerHTML = `
        <div class="image-fullscreen-modal" role="dialog" aria-modal="true" aria-label="Vista ampliada de la imagen">
            <button type="button" class="image-fullscreen-close" aria-label="Cerrar vista ampliada">
                <i class="fas fa-times"></i>
            </button>
            <img id="imageFullscreen" src="" alt="Vista ampliada del producto">
        </div>
    `;

    document.body.appendChild(overlay);

    overlay.addEventListener('click', (event) => {
        if (event.target === overlay) {
            closeImageFullscreen();
        }
    });

    overlay.querySelector('.image-fullscreen-close').addEventListener('click', closeImageFullscreen);
}

function openImageFullscreen() {
    const overlay = document.getElementById('imageFullscreenOverlay');
    const fullscreenImage = document.getElementById('imageFullscreen');
    const mainImage = document.getElementById('mainImage');

    if (!overlay || !fullscreenImage || !mainImage) {
        return;
    }

    fullscreenImage.src = currentFullscreenImage || mainImage.src;
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeImageFullscreen() {
    const overlay = document.getElementById('imageFullscreenOverlay');
    if (!overlay) {
        return;
    }

    overlay.classList.remove('active');
    if (!document.getElementById('productModal').classList.contains('active')) {
        document.body.style.overflow = 'auto';
    }
}

// ============================================
// MENÚ MÓVIL
// ============================================

function setupMenuToggle() {
    const menuToggle = document.getElementById('menuToggle');
    const navList = document.querySelector('.nav-list');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navList.classList.toggle('active');
        });
    }
}

// ============================================
// CERRAR MODAL AL HACER CLICK FUERA
// ============================================

function setupModal() {
    const modal = document.getElementById('productModal');
    
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    // Cerrar con tecla Escape
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && document.getElementById('imageFullscreenOverlay')?.classList.contains('active')) {
            closeImageFullscreen();
            return;
        }

        if (event.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
}

// ============================================
// ACTUALIZAR NOMBRE DE CATEGORÍA
// ============================================

function updateCategoryName() {
    const categoryNameElement = document.getElementById('categoryName');
    if (categoryNameElement) {
        categoryNameElement.textContent = currentCategory;
    }
}
