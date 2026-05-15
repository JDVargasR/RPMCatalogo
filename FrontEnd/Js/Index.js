// ============================================
// NAVEGACIÓN Y FUNCIONES PRINCIPALES
// ============================================

// Toggle del menú móvil
const menuToggle = document.getElementById('menuToggle');
const navList = document.querySelector('.nav-list');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navList.classList.toggle('active');
    });
}

// Cerrar menú al hacer click en un enlace
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navList.classList.remove('active');
        
        // Actualizar nav activo
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    });
});

// Scroll suave a categorías
function scrollToCategories() {
    const categoriesSection = document.getElementById('categories');
    categoriesSection.scrollIntoView({ behavior: 'smooth' });
}

// Navegación a categoría
function navigateToCategory(category) {
    const isLocal = (location.hostname === 'localhost' || location.hostname === '127.0.0.1' || location.protocol === 'file:' || location.hostname === '');

    if (isLocal) {
        const localRoutes = {
            Silenciadores: 'Html/Silenciadores.html',
            Catalizadores: 'Html/Catalizadores.html',
            Flexibles: 'Html/Flexibles.html',
            Accesorios: 'Html/Accesorios.html',
            Extras: 'Html/Extras.html'
        };
        window.location.href = localRoutes[category] || 'Html/Silenciadores.html';
        return;
    }

    // Production / deployed routes (friendly URLs)
    const frontendPrefix = window.location.pathname.toLowerCase().startsWith('/frontend') ? '/frontend' : '/frontend';
    const routes = {
        Silenciadores: `${frontendPrefix}/silenciadores`,
        Catalizadores: `${frontendPrefix}/catalizadores`,
        Flexibles: `${frontendPrefix}/flexibles`,
        Accesorios: `${frontendPrefix}/accesorios`,
        Extras: `${frontendPrefix}/extras`
    };

    window.location.href = routes[category] || `${frontendPrefix}/silenciadores`;
}

// ============================================
// OBSERVADOR PARA ANIMACIONES AL SCROLL
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observar elementos para animación
document.querySelectorAll('.category-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.6s ease-out';
    observer.observe(card);
});