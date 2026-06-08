// STATE MANAGEMENT

// Load posts from server if available, otherwise use initialPosts from data.js
async function getPosts() {
    try {
        const response = await fetch('api.php');
        const data = await response.json();

        // Si hay datos en el servidor, usarlos. Si no, usar los iniciales.
        if (data && data.length > 0) {
            return data;
        }
        return typeof initialPosts !== 'undefined' ? initialPosts : [];
    } catch (e) {
        console.error("Error cargando noticias desde el servidor:", e);
        return typeof initialPosts !== 'undefined' ? initialPosts : [];
    }
}

let blogPosts = [];
let activeCategory = 'todos';
let searchQuery = '';

// DOM ELEMENTS
const blogGrid = document.getElementById('blog-grid');
const searchInput = document.getElementById('search-input');
const filterContainer = document.getElementById('filter-categories');
const mobileMenuBtn = document.getElementById('mobile-toggle');
const navMenu = document.getElementById('nav-menu');
const navbar = document.getElementById('navbar');
const contactForm = document.getElementById('contact-form');
const modalOverlay = document.getElementById('modal-overlay');
const modalContainer = document.getElementById('modal-container');
const modalCloseBtn = document.getElementById('modal-close');
const typingElement = document.getElementById('typewriter-text');
const navLinks = document.querySelectorAll('.nav-link');

// INITIALIZATION
document.addEventListener('DOMContentLoaded', async () => {
    blogPosts = await getPosts(); // Carga de datos asíncrona
    renderFilterButtons();
    renderPosts();
    initTypewriter();
    initNavbarScroll();
    initMobileMenu();
    initContactForm();
    initModal();
});

// Refresh posts when returning to this tab
window.addEventListener('focus', async () => {
    blogPosts = await getPosts();
    renderPosts();
});

// NAVBAR SCROLL EFFECT
function initNavbarScroll() {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Active Nav Link highlight on scroll
        highlightNavLink();
    });
}

function highlightNavLink() {
    let currentSection = 'inicio';
    const sections = ['inicio', 'blog', 'contacto'];
    const scrollPosition = window.scrollY + 200;

    sections.forEach(secId => {
        const el = document.getElementById(secId);
        if (el && scrollPosition >= el.offsetTop) {
            currentSection = secId;
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

// MOBILE MENU TOGGLE
function initMobileMenu() {
    mobileMenuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        const icon = mobileMenuBtn.querySelector('i');
        if (navMenu.classList.contains('active')) {
            icon.className = 'fas fa-times';
        } else {
            icon.className = 'fas fa-bars';
        }
    });

    // Close menu when clicking link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            mobileMenuBtn.querySelector('i').className = 'fas fa-bars';
        });
    });
}

// TYPEWRITER EFFECT IN HERO
function initTypewriter() {
    const words = ["Programas Windows", "Aplicaciones Android", "Hacks & Trucos", "Optimización Extrema"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    function type() {
        if (!typingElement) return;
        const currentWord = words[wordIndex];
        if (isDeleting) {
            typingElement.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingElement.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
        }
        
        let typeSpeed = isDeleting ? 40 : 80;
        
        if (!isDeleting && charIndex === currentWord.length) {
            typeSpeed = 2000; // Pause at end of word
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            typeSpeed = 500; // Pause before typing next word
        }
        
        setTimeout(type, typeSpeed);
    }
    
    type();
}

// RENDER FILTER PILLS
function renderFilterButtons() {
    if (!filterContainer) return;
    const categories = ['todos', 'windows', 'android', 'hacks', 'aplicaciones', 'programas'];
    filterContainer.innerHTML = '';
    
    categories.forEach(cat => {
        const btn = document.createElement('button');
        btn.classList.add('filter-btn');
        if (cat === activeCategory) btn.classList.add('active');
        
        // Capitalize first letter
        const displayLabel = cat.charAt(0).toUpperCase() + cat.slice(1);
        btn.textContent = displayLabel;
        btn.setAttribute('data-category', cat);
        
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            activeCategory = cat;
            renderPosts();
        });
        
        filterContainer.appendChild(btn);
    });
}

// SEARCH BEHAVIOR
if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.toLowerCase().trim();
        renderPosts();
    });
}

// SORT & RENDER POSTS
function renderPosts() {
    if (!blogGrid) return;

    // Add temporary fade effect
    blogGrid.classList.add('loading');
    
    setTimeout(() => {
        // Filter
        let filtered = blogPosts.filter(post => {
            const matchesCategory = activeCategory === 'todos' || post.category === activeCategory;
            const matchesSearch = post.title.toLowerCase().includes(searchQuery) || 
                                  post.excerpt.toLowerCase().includes(searchQuery) ||
                                  (post.categoryName && post.categoryName.toLowerCase().includes(searchQuery));
            return matchesCategory && matchesSearch;
        });

        // Sort by Date (newest first)
        filtered.sort((a, b) => new Date(b.date) - new Date(a.date));

        // Render HTML
        blogGrid.innerHTML = '';
        
        if (filtered.length === 0) {
            blogGrid.innerHTML = `
                <div class="no-results">
                    <i class="fas fa-search-minus"></i>
                    <h3>No se encontraron publicaciones</h3>
                    <p>Prueba buscando con palabras clave diferentes o en otra categoría.</p>
                </div>
            `;
        } else {
            filtered.forEach(post => {
                const card = document.createElement('article');
                card.classList.add('card');
                
                // Set badge class color depending on category
                let badgeClass = 'badge-cyan';
                if (post.category === 'hacks') badgeClass = 'badge-pink';
                if (post.category === 'android' || post.category === 'aplicaciones') badgeClass = 'badge-purple';
                
                card.innerHTML = `
                    <div class="card-img-wrapper">
                        <img src="${post.image}" alt="${post.title}" class="card-img" loading="lazy">
                        <div class="card-overlay"></div>
                        <span class="badge ${badgeClass} card-badge">${post.categoryName || post.category}</span>
                        <span class="card-date"><i class="far fa-calendar"></i> ${formatDate(post.date)}</span>
                    </div>
                    <div class="card-content">
                        <h3 class="card-title">${post.title}</h3>
                        <p class="card-excerpt">${post.excerpt}</p>
                        <div class="card-footer">
                            <div class="card-author">
                                <div class="author-avatar">${(post.author || "TT").substring(0, 2).toUpperCase()}</div>
                                <span class="author-name">${post.author || "TecnoTigre"}</span>
                            </div>
                            <button class="read-more-btn" onclick="openPostModal(${post.id})">
                                Leer más <i class="fas fa-arrow-right"></i>
                            </button>
                        </div>
                    </div>
                `;
                blogGrid.appendChild(card);
            });
        }
        
        blogGrid.classList.remove('loading');
    }, 200);
}

// DATE FORMATTER
function formatDate(dateStr) {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateStr).toLocaleDateString('es-ES', options);
}

// DETAILED MODAL CONTROLS
function initModal() {
    if (!modalCloseBtn) return;
    modalCloseBtn.addEventListener('click', closePostModal);
    
    // Close on overlay click
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            closePostModal();
        }
    });

    // Close on ESC
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modalOverlay.classList.contains('open')) {
            closePostModal();
        }
    });
}

window.openPostModal = function(postId) {
    const post = blogPosts.find(p => p.id === postId);
    if (!post) return;
    
    // Set Badge Color
    let badgeClass = 'badge-cyan';
    if (post.category === 'hacks') badgeClass = 'badge-pink';
    if (post.category === 'android' || post.category === 'aplicaciones') badgeClass = 'badge-purple';

    const modalHTML = `
        <img src="${post.image}" alt="${post.title}" class="modal-hero-img">
        <div class="modal-content-wrapper">
            <div class="modal-meta">
                <div class="modal-meta-left">
                    <span class="badge ${badgeClass}">${post.categoryName || post.category}</span>
                    <span class="modal-meta-item"><i class="far fa-calendar"></i> ${formatDate(post.date)}</span>
                </div>
                <span class="modal-meta-item"><i class="far fa-clock"></i> Lectura: ${post.readingTime || '5 min'}</span>
            </div>
            <h1 class="modal-title">${post.title}</h1>
            <div class="modal-body">
                ${post.content}
            </div>
        </div>
    `;
    
    const containerContent = modalContainer.querySelector('.modal-body-container');
    if (containerContent) {
        containerContent.innerHTML = modalHTML;
    } else {
        const contentDiv = document.createElement('div');
        contentDiv.classList.add('modal-body-container');
        contentDiv.innerHTML = modalHTML;
        modalContainer.appendChild(contentDiv);
    }
    
    modalOverlay.classList.add('open');
    document.body.style.overflow = 'hidden'; // Lock scrolling
};

function closePostModal() {
    modalOverlay.classList.remove('open');
    document.body.style.overflow = ''; // Unlock scrolling
}

// CONTACT FORM VALIDATION & INTERACTIVITY
function initContactForm() {
    if (!contactForm) return;

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('form-name').value.trim();
        const email = document.getElementById('form-email').value.trim();
        const subject = document.getElementById('form-subject').value.trim();
        const message = document.getElementById('form-message').value.trim();
        
        // Simple validation
        if (!name || !email || !subject || !message) {
            showToast('Por favor, completa todos los campos del formulario.', 'error');
            return;
        }
        
        if (!validateEmail(email)) {
            showToast('Por favor, ingresa un correo electrónico válido.', 'error');
            return;
        }

        // Simulate sending process
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalBtnHTML = submitBtn.innerHTML;
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
        
        setTimeout(() => {
            showToast('¡Mensaje enviado con éxito! Te responderemos muy pronto.', 'success');
            contactForm.reset();
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalBtnHTML;
        }, 1500);
    });
}

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// TOAST NOTIFICATION SYSTEM
function showToast(message, type = 'info') {
    let toastContainer = document.querySelector('.toast-container');
    
    if (!toastContainer) {
        toastContainer = document.createElement('div');
        toastContainer.classList.add('toast-container');
        document.body.appendChild(toastContainer);
    }
    
    const toast = document.createElement('div');
    toast.classList.add('toast');
    if (type === 'success') toast.classList.add('toast-success');
    if (type === 'error') toast.classList.add('toast-error');
    if (type === 'info') toast.classList.add('toast-info');
    
    let iconHTML = '<i class="fas fa-info-circle"></i>';
    if (type === 'success') iconHTML = '<i class="fas fa-check-circle"></i>';
    if (type === 'error') iconHTML = '<i class="fas fa-exclamation-circle"></i>';
    
    toast.innerHTML = `
        ${iconHTML}
        <span>${message}</span>
    `;
    
    toastContainer.appendChild(toast);
    
    setTimeout(() => {
        toast.classList.add('show');
    }, 10);
    
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            toast.remove();
        }, 400);
    }, 4000);
}
