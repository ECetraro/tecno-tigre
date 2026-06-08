// Admin Logic for TecnoTigre

// Mock Auth
const ADMIN_USER = "admin";
const ADMIN_PASS = "12345";

// DOM Elements
const loginContainer = document.getElementById('login-container');
const adminDashboard = document.getElementById('admin-dashboard');
const loginForm = document.getElementById('login-form');
const loginError = document.getElementById('login-error');
const postsList = document.getElementById('admin-posts-list');
const postForm = document.getElementById('post-form');
const sectionList = document.getElementById('section-list');
const sectionForm = document.getElementById('section-form');

// Initialization
document.addEventListener('DOMContentLoaded', () => {
    checkAuth();

    // Navigation
    document.getElementById('menu-posts').onclick = (e) => {
        e.preventDefault();
        showSection('list');
    };
    document.getElementById('menu-add').onclick = (e) => {
        e.preventDefault();
        resetForm();
        showSection('add');
    };
    document.getElementById('logout-btn').onclick = (e) => {
        e.preventDefault();
        logout();
    };
});

// Auth Logic
if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const user = document.getElementById('username').value;
        const pass = document.getElementById('password').value;

        if (user === ADMIN_USER && pass === ADMIN_PASS) {
            localStorage.setItem('isLogged', 'true');
            checkAuth();
        } else {
            loginError.style.display = 'block';
        }
    });
}

function checkAuth() {
    if (localStorage.getItem('isLogged') === 'true') {
        if (loginContainer) loginContainer.style.display = 'none';
        if (adminDashboard) adminDashboard.style.display = 'flex';
        loadPosts();
    } else {
        if (loginContainer) loginContainer.style.display = 'flex';
        if (adminDashboard) adminDashboard.style.display = 'none';
    }
}

function logout() {
    localStorage.removeItem('isLogged');
    checkAuth();
}

// Data Management
function getLocalPosts() {
    const saved = localStorage.getItem('tecnotigre_posts');
    if (!saved) {
        console.log("No hay posts guardados, cargando iniciales...");
        localStorage.setItem('tecnotigre_posts', JSON.stringify(initialPosts));
        return initialPosts;
    }
    return JSON.parse(saved);
}

function loadPosts() {
    if (!postsList) return;

    const posts = getLocalPosts();
    postsList.innerHTML = '';

    // Ordenar por fecha (más reciente primero)
    posts.sort((a, b) => new Date(b.date) - new Date(a.date)).forEach(post => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${post.id}</td>
            <td>${post.title}</td>
            <td style="text-transform: capitalize;">${post.category}</td>
            <td>${post.date}</td>
            <td class="action-btns">
                <i class="fas fa-edit btn-edit" onclick="editPost(${post.id})" title="Editar"></i>
                <i class="fas fa-trash btn-delete" onclick="deletePost(${post.id})" title="Eliminar"></i>
            </td>
        `;
        postsList.appendChild(tr);
    });
    console.log("Posts cargados:", posts.length);
}

// CRUD Operations
if (postForm) {
    postForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const id = document.getElementById('post-id').value;
        const posts = getLocalPosts();

        const categorySelect = document.getElementById('post-category');
        const selectedText = categorySelect.options[categorySelect.selectedIndex].text;

        const postData = {
            id: id ? parseInt(id) : Date.now(),
            title: document.getElementById('post-title').value,
            category: categorySelect.value,
            categoryName: selectedText,
            image: document.getElementById('post-image').value || 'https://images.unsplash.com/photo-1555066931-4365d14bab8c',
            author: document.getElementById('post-author').value,
            readingTime: document.getElementById('post-time').value,
            excerpt: document.getElementById('post-excerpt').value,
            content: document.getElementById('post-content').value,
            date: id ? (posts.find(p => p.id == id)?.date || new Date().toISOString().split('T')[0]) : new Date().toISOString().split('T')[0]
        };

        if (id) {
            const index = posts.findIndex(p => p.id == id);
            if (index !== -1) {
                posts[index] = postData;
            }
        } else {
            posts.push(postData);
        }

        localStorage.setItem('tecnotigre_posts', JSON.stringify(posts));
        console.log("Post guardado con éxito. Total posts:", posts.length);

        showSection('list');
        loadPosts();
        alert('¡Publicación guardada con éxito!');
    });
}

window.editPost = (id) => {
    const posts = getLocalPosts();
    const post = posts.find(p => p.id == id);
    if (!post) return;

    document.getElementById('post-id').value = post.id;
    document.getElementById('post-title').value = post.title;
    document.getElementById('post-category').value = post.category;
    document.getElementById('post-image').value = post.image;
    document.getElementById('post-author').value = post.author;
    document.getElementById('post-time').value = post.readingTime;
    document.getElementById('post-excerpt').value = post.excerpt;
    document.getElementById('post-content').value = post.content;

    document.getElementById('form-title').innerText = "Editar Noticia";
    showSection('add');
};

window.deletePost = (id) => {
    if (confirm('¿Estás seguro de eliminar esta noticia?')) {
        let posts = getLocalPosts();
        posts = posts.filter(p => p.id != id);
        localStorage.setItem('tecnotigre_posts', JSON.stringify(posts));
        loadPosts();
    }
};

// UI Helpers
window.showSection = (section) => {
    if (section === 'list') {
        sectionList.style.display = 'block';
        sectionForm.style.display = 'none';
        document.getElementById('menu-posts').classList.add('active');
        document.getElementById('menu-add').classList.remove('active');
    } else {
        sectionList.style.display = 'none';
        sectionForm.style.display = 'block';
        document.getElementById('menu-posts').classList.remove('active');
        document.getElementById('menu-add').classList.add('active');
    }
};

function resetForm() {
    postForm.reset();
    document.getElementById('post-id').value = '';
    document.getElementById('form-title').innerText = "Agregar Nueva Noticia";
}
