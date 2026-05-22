// BASE DE DATOS DE ARTÍCULOS (BLOG)
const blogPosts = [
    {
        id: 1,
        title: "Los Mejores Programas Gratuitos e Indispensables para Windows en 2026",
        excerpt: "Descubre las herramientas esenciales de software libre y código abierto que no pueden faltar en tu instalación limpia de Windows para optimizar tu productividad y seguridad.",
        category: "programas",
        categoryName: "Programas",
        date: "2026-05-21",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80",
        author: "TigreTech",
        readingTime: "5 min",
        content: `
            <p>Cuando realizamos una instalación limpia de Windows, nos encontramos con un lienzo en blanco. A menudo, la tentación es recurrir a programas pirateados o llenos de publicidad, pero en el panorama de software actual de 2026, la comunidad del código abierto ofrece soluciones extraordinarias y gratuitas.</p>
            
            <h3>1. Gestión de archivos y productividad</h3>
            <p>Olvídate de las soluciones de pago. Para descomprimir archivos, <code>7-Zip</code> sigue siendo el rey absoluto gracias a su ligereza y soporte de formatos. Para tomar notas y organizar ideas de forma profesional con soporte de Markdown, <code>Obsidian</code> es indispensable.</p>
            
            <h3>2. Multimedia y Edición</h3>
            <p>Si necesitas reproducir cualquier formato de vídeo sin instalar paquetes de códecs extraños, <code>VLC Media Player</code> no defrauda. Para la edición de imágenes, <code>GIMP</code> o la alternativa en la nube <code>Photopea</code> te darán herramientas semiprofesionales sin gastar un centavo.</p>
            
            <h3>3. Desarrollo y Utilidades</h3>
            <p>Tanto si eres programador como si solo quieres editar archivos de configuración rápidamente, <code>VS Code</code> es obligatorio. Para gestionar descargas de manera masiva y veloz, recomendamos <code>JDownloader 2</code>.</p>
            
            <blockquote>
                Consejo Pro: Al instalar programas nuevos en Windows, utiliza el gestor oficial en la terminal. Simplemente abre PowerShell y escribe <code>winget install &lt;nombre-del-programa&gt;</code> para instalarlos de forma segura en un segundo.
            </blockquote>
        `
    },
    {
        id: 2,
        title: "Cómo Automatizar Tareas Repetitivas en Android con Scripts de Termux",
        excerpt: "Aprende a exprimir el potencial de la terminal Termux en tu dispositivo Android para programar scripts en Bash o Python que te ahorren tiempo a diario.",
        category: "hacks",
        categoryName: "Hacks",
        date: "2026-05-22",
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80",
        author: "CyberTigre",
        readingTime: "8 min",
        content: `
            <p>Termux no es solo una consola para entusiastas de Linux; es un puente al núcleo Linux de tu móvil Android. Con los privilegios y herramientas adecuadas, puedes crear auténticas maravillas de la automatización local.</p>
            
            <h3>Requisitos previos</h3>
            <p>Lo primero que necesitas es descargar <code>Termux</code> (se recomienda desde F-Droid para obtener la versión más actualizada). Adicionalmente, instala <code>Termux:API</code> para permitir que tus scripts interactúen con el hardware del teléfono (cámara, batería, portapapeles, SMS, etc.).</p>
            
            <h3>Ejemplo práctico: Backup automático de fotos</h3>
            <p>Podemos programar un sencillo script en Bash que comprima las imágenes tomadas durante el día y las suba a nuestro servidor privado mediante SSH o Rclone:</p>
            
            <pre><code>#!/bin/bash
# Comprimir carpeta de cámara
tar -czf /sdcard/backups/fotos_$(date +%F).tar.gz /sdcard/DCIM/Camera/

# Subir al servidor remoto (ejemplo rclone)
rclone move /sdcard/backups/ remote:GoogleDrive/Backups/
termux-toast "Respaldo diario de fotos completado con éxito"</code></pre>
            
            <h3>Automatización horaria</h3>
            <p>Utilizando el programador de tareas <code>cron</code> dentro de Termux o asociándolo con la aplicación <code>Tasker</code>, puedes hacer que este script se ejecute todas las noches a las 3:00 AM cuando el teléfono se está cargando.</p>
        `
    },
    {
        id: 3,
        title: "Guía de Optimización Extrema de Windows 11 para Gaming",
        excerpt: "Ajustes avanzados de registro, optimización de servicios del sistema y configuración de GPU para exprimir hasta el último fotograma por segundo en tus videojuegos favoritos.",
        category: "windows",
        categoryName: "Windows",
        date: "2026-05-20",
        image: "https://images.unsplash.com/photo-1618401471353-b98aedd07871?auto=format&fit=crop&w=600&q=80",
        author: "TigreTech",
        readingTime: "6 min",
        content: `
            <p>Windows 11 viene de fábrica configurado para un usuario corporativo promedio, lo que significa que arrastra una gran cantidad de servicios en segundo plano y telemetría activa que consume recursos valiosos de tu procesador y RAM.</p>
            
            <h3>1. Desactivar el aislamiento de núcleo (Core Isolation)</h3>
            <p>Esta es una de las funciones de seguridad de Windows que más impacto negativo tiene en el rendimiento de los juegos (a veces reduce un 5-10% los FPS). 
            Ve a <i>Seguridad de Windows &gt; Seguridad del dispositivo &gt; Detalles del aislamiento del núcleo</i> y desactiva la <b>Integridad de memoria</b>.</p>
            
            <h3>2. Plan de alimentación de Máximo Rendimiento</h3>
            <p>Por defecto, Windows oculta el plan de alimentación definitivo. Puedes desbloquearlo abriendo la consola de comandos (CMD) como Administrador y pegando el siguiente código:</p>
            <pre><code>powercfg -duplicatescheme e9a42b02-d5df-448d-aa00-03f14749eb61</code></pre>
            <p>Luego, ve a Opciones de energía en el panel de control y selecciónalo.</p>
            
            <h3>3. Optimización del Modo de Juego</h3>
            <p>Asegúrate de que la casilla "Modo de juego" esté activada en la sección de Configuración de Windows. Esto prioriza tu juego frente a cualquier tarea o actualización del sistema en segundo plano.</p>
        `
    },
    {
        id: 4,
        title: "Localizá tu celular con solo silbar",
        excerpt: "Analizamos los mejores reproductores y clientes alternativos para Android que te permiten ver tus vídeos preferidos sin anuncios, con reproducción en segundo plano y sin rastreadores.",
        category: "aplicaciones",
        categoryName: "Aplicaciones",
        date: "2026-05-18",
        image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=600&q=80",
        author: "AndroidTigre",
        readingTime: "4 min",
        content: `
            <p>La publicidad invasiva y la recolección masiva de datos en la aplicación oficial de YouTube han llevado a muchos usuarios a buscar alternativas. Afortunadamente, los desarrolladores independientes han creado clientes magníficos.</p>
            
            <h3>1. NewPipe</h3>
            <p>El cliente clásico de código abierto por excelencia. No requiere los servicios de Google (GMS) y te permite descargar audios y vídeos directamente en almacenamiento local, reproducir en segundo plano y usar el modo PiP (Picture-in-Picture).</p>
            
            <h3>2. Grayjay</h3>
            <p>Una aplicación moderna que va más allá de YouTube. Permite unificar en una sola interfaz creadores de contenido de YouTube, Twitch, Rumble, Patreon y más plataformas, con un fuerte enfoque en evitar la censura y descentralizar las suscripciones.</p>
            
            <h3>3. LibreTube</h3>
            <p>Utiliza el motor de Piped, lo que significa que el procesamiento de los vídeos se realiza en servidores intermedios para evitar que Google rastree tu dirección IP. Su interfaz de diseño Material You es una de las más modernas y atractivas.</p>
            
            <blockquote>
                Nota: Estas aplicaciones no se encuentran en Google Play Store debido a las políticas de derechos de autor de Google. Debes descargarlas de fuentes seguras como F-Droid o directamente de sus repositorios oficiales en GitHub.
            </blockquote>
        `
    },
    {
        id: 5,
        title: "Instalación de Custom ROMs en 2026: Todo lo que necesitas saber",
        excerpt: "Guía de iniciación para desbloquear el cargador de arranque (bootloader) e instalar sistemas alternativos como LineageOS o Pixel Experience en tu dispositivo Android.",
        category: "android",
        categoryName: "Android",
        date: "2026-05-15",
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80",
        author: "AndroidTigre",
        readingTime: "10 min",
        content: `
            <p>¿Tu teléfono ha dejado de recibir actualizaciones oficiales pero su hardware sigue estando en perfectas condiciones? Instalar una Custom ROM es la mejor forma de alargar la vida útil de tu dispositivo, mejorar su rendimiento y actualizar el parche de seguridad.</p>
            
            <h3>Paso 1: Respaldar toda tu información</h3>
            <p>El proceso de desbloqueo del gestor de arranque borrará por completo la memoria interna de tu dispositivo. Haz una copia de seguridad en tu ordenador o en la nube antes de continuar.</p>
            
            <h3>Paso 2: Desbloquear el Bootloader</h3>
            <p>Este paso varía según el fabricante. En dispositivos Pixel o Motorola es un proceso rápido usando comandos ADB/Fastboot, mientras que marcas como Xiaomi requieren solicitar permiso a través de su software propietario y esperar unos días.</p>
            
            <h3>Paso 3: Instalar un Recovery personalizado (TWRP u OrangeFox)</h3>
            <p>El Recovery de fábrica no te permitirá instalar sistemas de terceros. Debes flashear un recovery alternativo para tener herramientas avanzadas de limpieza y flasheo:</p>
            <pre><code>fastboot flash recovery recovery.img</code></pre>
            
            <h3>Paso 4: Limpieza e Instalación</h3>
            <p>Desde el recovery personalizado, realiza una limpieza (Wipe) de la partición de sistema y datos. Conecta el móvil al PC, transfiere el archivo zip de la Custom ROM y procede a su instalación mediante la opción "Install" o a través de comandos ADB Sideload.</p>
        `
    },
    {
        id: 6,
        title: "Bypass de Restricciones Locales en Redes Wi-Fi mediante Túneles SSH",
        excerpt: "Conoce los fundamentos técnicos de la redirección de puertos y el encapsulado de datos mediante SSH para saltar firewalls locales en redes restringidas.",
        category: "hacks",
        categoryName: "Hacks",
        date: "2026-05-10",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&q=80",
        author: "CyberTigre",
        readingTime: "7 min",
        content: `
            <p>En redes estudiantiles o de oficinas corporativas, es muy común encontrar firewalls restrictivos que bloquean el acceso a ciertos puertos o servicios web. Un túnel SSH dinámico puede ayudarte a sortear estos bloqueos de manera elegante.</p>
            
            <h3>¿Cómo funciona?</h3>
            <p>Al abrir una conexión SSH hacia un servidor externo propio, configuramos un puerto local como proxy SOCKS. Todo el tráfico que enviemos a ese puerto local viajará encriptado a través del puerto 22 (generalmente abierto) hacia nuestro servidor remoto, el cual resolverá las peticiones a Internet.</p>
            
            <h3>Comando de terminal</h3>
            <p>Desde una consola en Windows (PowerShell/WSL) o Termux en Android, ejecutamos el siguiente comando:</p>
            <pre><code>ssh -D 8080 -C -N usuario@servidor_remoto.com</code></pre>
            
            <ul>
                <li><code>-D 8080</code>: Abre el puerto local 8080 como proxy SOCKS dinámico.</li>
                <li><code>-C</code>: Comprime los datos para acelerar la velocidad de transferencia.</li>
                <li><code>-N</code>: Indica que no queremos ejecutar comandos remotos, solo redirigir tráfico.</li>
            </ul>
            
            <h3>Configuración del Navegador</h3>
            <p>Una vez activo el túnel, simplemente ve a los ajustes de red de tu navegador preferido (ej: Firefox) y configura un Proxy manual apuntando a <b>127.0.0.1</b> con puerto <b>8080</b> del tipo <b>SOCKS v5</b>.</p>
        `
    },
        {
        id: 7,
        title: "Encuentra tu celular con solo silbar",
        excerpt: "La app detecta tu silbido y activa una alarma sonora para ubicar el teléfono en segundos.",
        category: "android",
        categoryName: "Android",
        date: "2026-05-22",
        image: "https://images.sftcdn.net/images/t_app-cover-s-16-9,f_auto/p/c302ecb8-22b1-4e18-894a-e1a4b3a98879/4137097748/find-my-phone-by-whistle-clap-screenshot",
        author: "AndroidTigre",
        readingTime: "10 min",
        content: `
            <p>Control de sensibilidad ajustable</p> 
            <h3>Podés regular qué tan fácil o difícil es que el celular reconozca tu silbido, adaptándose a distintos ambientes..</h3>
            
            <h3>Ligera y eficiente.</h3>
            <p>Optimizada para consumir poca batería y funcionar incluso con la pantalla apagada.</p>
            
            <h3>Interfaz simple y clara </h3>
            <p>Botones directos para activar el buscador o detener la alarma, sin complicaciones.</p>
            
            <h3>Tu aliado cotidiano</h3>
            <p>Ideal para cuando el móvil se esconde en la mochila, entre los cojines o en cualquier rincón de la casa.</p>
                    <!-- Botón de descarga -->
        <a href="https://github.com/ECetraro/tecno-tigre/releases/download/Find_My_Phone/Find_My_Phone_1.7.3.52.apk" 
           class="btn-download" 
           style="display:inline-block;padding:10px 20px;background:#4CAF50;color:#fff;border-radius:5px;text-decoration:none;">
           📥 Descargar APK
        </a>

        `
    }
];

// STATE MANAGEMENT
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
document.addEventListener('DOMContentLoaded', () => {
    renderFilterButtons();
    renderPosts();
    initTypewriter();
    initNavbarScroll();
    initMobileMenu();
    initContactForm();
    initModal();
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
searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value.toLowerCase().trim();
    renderPosts();
});

// SORT & RENDER POSTS
function renderPosts() {
    // Add temporary fade effect
    blogGrid.classList.add('loading');
    
    setTimeout(() => {
        // Filter
        let filtered = blogPosts.filter(post => {
            const matchesCategory = activeCategory === 'todos' || post.category === activeCategory;
            const matchesSearch = post.title.toLowerCase().includes(searchQuery) || 
                                  post.excerpt.toLowerCase().includes(searchQuery) ||
                                  post.categoryName.toLowerCase().includes(searchQuery);
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
                        <span class="badge ${badgeClass} card-badge">${post.categoryName}</span>
                        <span class="card-date"><i class="far fa-calendar"></i> ${formatDate(post.date)}</span>
                    </div>
                    <div class="card-content">
                        <h3 class="card-title">${post.title}</h3>
                        <p class="card-excerpt">${post.excerpt}</p>
                        <div class="card-footer">
                            <div class="card-author">
                                <div class="author-avatar">${post.author.substring(0, 2).toUpperCase()}</div>
                                <span class="author-name">${post.author}</span>
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
                    <span class="badge ${badgeClass}">${post.categoryName}</span>
                    <span class="modal-meta-item"><i class="far fa-calendar"></i> ${formatDate(post.date)}</span>
                </div>
                <span class="modal-meta-item"><i class="far fa-clock"></i> Lectura: ${post.readingTime}</span>
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
        // Create container inside modalContainer if it does not exist
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
    
    // Create container if not exists
    if (!toastContainer) {
        toastContainer = document.createElement('div');
        toastContainer.classList.add('toast-container');
        document.body.appendChild(toastContainer);
    }
    
    // Create Toast
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
    
    // Trigger animation
    setTimeout(() => {
        toast.classList.add('show');
    }, 10);
    
    // Auto remove toast
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            toast.remove();
        }, 400);
    }, 4000);
}
