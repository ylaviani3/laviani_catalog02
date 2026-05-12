// ============================================================
// app.js – רמי לויאני עסקי מזון בע”מ
// ============================================================

// Map cat 9 → 5 for display
const DISPLAY_CAT = { 9: 5 };

function resolvecat(cat) {
return DISPLAY_CAT[cat] || cat;
}

// Build all product cards into the correct grids
function buildCatalog() {
PRODUCTS.forEach(p => {
const displayCat = resolvecat(p.cat);
const grid = document.getElementById(‘grid-’ + displayCat);
if (!grid) return;

```
const img = pickImage(p.name, p.cat);
const catLabel = CAT_LABELS[p.cat] || '';

const card = document.createElement('div');
card.className = 'product-card';
card.dataset.name = p.name;
card.dataset.code = p.id;
card.dataset.cat = displayCat;
card.dataset.catLabel = catLabel;
card.dataset.img = img;

card.innerHTML = `
  <div class="card-img-wrap">
    <img
      src="${img}"
      alt="${p.name}"
      loading="lazy"
      onerror="this.src='https://images.unsplash.com/photo-1504545102780-26774c1bb073?w=400&q=80'"
    />
    <div class="card-overlay">🔍</div>
  </div>
  <div class="card-body">
    <div class="card-code">קוד: ${p.id}</div>
    <div class="card-name">${p.name}</div>
    <button class="card-btn" onclick="openModal(event, ${JSON.stringify(p.name)}, ${p.id}, ${JSON.stringify(catLabel)}, ${JSON.stringify(img)})">
      פרטים והצעת מחיר
    </button>
  </div>
`;

grid.appendChild(card);
```

});
}

// ===== MODAL =====
function openModal(e, name, code, catLabel, img) {
e.stopPropagation();
document.getElementById(‘modalName’).textContent = name;
document.getElementById(‘modalCode’).textContent = ’קוד מוצר: ’ + code;
document.getElementById(‘modalCat’).textContent = catLabel;
document.getElementById(‘modalImg’).src = img;
document.getElementById(‘modalImg’).alt = name;
document.getElementById(‘modalOverlay’).classList.add(‘open’);
document.body.style.overflow = ‘hidden’;

// Store current product for request
window._currentProduct = { name, code, catLabel };
}

function closeModal() {
document.getElementById(‘modalOverlay’).classList.remove(‘open’);
document.body.style.overflow = ‘’;
}

// Close modal on Escape
document.addEventListener(‘keydown’, e => {
if (e.key === ‘Escape’) closeModal();
});

// ===== SEND REQUEST =====
function sendRequest() {
const p = window._currentProduct;
if (!p) return;
const subject = encodeURIComponent(’בקשת הצעת מחיר – ’ + p.name);
const body = encodeURIComponent(
‘שלום,\n\nאני מעוניין/ת לקבל הצעת מחיר עבור המוצר הבא:\n\n’ +
’שם המוצר: ’ + p.name + ‘\n’ +
’קוד מוצר: ’ + p.code + ‘\n’ +
’קטגוריה: ’ + p.catLabel + ‘\n\n’ +
‘תודה’
);
window.location.href = ‘mailto:info@luyani.co.il?subject=’ + subject + ‘&body=’ + body;
}

// ===== SEARCH =====
function filterProducts() {
const query = document.getElementById(‘searchInput’).value.trim().toLowerCase();
const allCards = document.querySelectorAll(’.product-card’);
let visible = 0;

allCards.forEach(card => {
const name = card.dataset.name.toLowerCase();
const code = card.dataset.code.toLowerCase();
const match = !query || name.includes(query) || code.includes(query);
card.classList.toggle(‘hidden’, !match);
if (match) visible++;
});

// Hide/show sections based on whether they have visible cards
document.querySelectorAll(’.category-section’).forEach(section => {
const grid = section.querySelector(’.products-grid’);
const hasVisible = grid && grid.querySelector(’.product-card:not(.hidden)’);
section.classList.toggle(‘all-hidden’, !hasVisible);
});

// Result count
const countEl = document.getElementById(‘searchResults’);
if (query) {
countEl.textContent = visible > 0
? `נמצאו ${visible} מוצרים עבור "${query}"`
: `לא נמצאו מוצרים עבור "${query}"`;
} else {
countEl.textContent = ‘’;
}
}

function clearSearch() {
document.getElementById(‘searchInput’).value = ‘’;
filterProducts();
document.getElementById(‘searchInput’).focus();
}

// ===== ACTIVE NAV =====
function initActiveNav() {
const sections = document.querySelectorAll(’.category-section’);
const navLinks = document.querySelectorAll(’.nav-link’);

const observer = new IntersectionObserver(entries => {
entries.forEach(entry => {
if (entry.isIntersecting) {
const cat = entry.target.dataset.cat;
navLinks.forEach(link => {
link.classList.toggle(‘active’, link.dataset.cat === cat);
});
}
});
}, { rootMargin: ‘-40% 0px -50% 0px’ });

sections.forEach(s => observer.observe(s));
}

// ===== SMOOTH SCROLL for nav links =====
document.querySelectorAll(’.nav-link’).forEach(link => {
link.addEventListener(‘click’, e => {
e.preventDefault();
const href = link.getAttribute(‘href’);
const target = document.querySelector(href);
if (target) {
const offset = 160;
const top = target.getBoundingClientRect().top + window.scrollY - offset;
window.scrollTo({ top, behavior: ‘smooth’ });
}
});
});

// ===== SCROLL TO TOP button =====
function addScrollTopBtn() {
const btn = document.createElement(‘button’);
btn.id = ‘scrollTopBtn’;
btn.innerHTML = ‘↑’;
btn.title = ‘חזור לראש הדף’;
btn.style.cssText = `position: fixed; bottom: 32px; left: 32px; width: 48px; height: 48px; background: linear-gradient(135deg, #C9A84C, #e8c97a); color: #0f1117; border: none; border-radius: 50%; font-size: 1.3rem; font-weight: 900; cursor: pointer; box-shadow: 0 4px 20px rgba(201,168,76,0.4); opacity: 0; transform: scale(0.8); transition: opacity 0.3s, transform 0.3s; z-index: 150;`;
btn.addEventListener(‘click’, () => window.scrollTo({ top: 0, behavior: ‘smooth’ }));
document.body.appendChild(btn);

window.addEventListener(‘scroll’, () => {
const show = window.scrollY > 400;
btn.style.opacity = show ? ‘1’ : ‘0’;
btn.style.transform = show ? ‘scale(1)’ : ‘scale(0.8)’;
btn.style.pointerEvents = show ? ‘auto’ : ‘none’;
});
}

// ===== CARD CLICK (whole card opens modal) =====
function initCardClicks() {
document.querySelectorAll(’.product-card’).forEach(card => {
card.addEventListener(‘click’, function(e) {
if (e.target.closest(’.card-btn’)) return;
const name = this.dataset.name;
const code = this.dataset.code;
const catLabel = this.dataset.catLabel;
const img = this.dataset.img;
openModal(e, name, code, catLabel, img);
});
});
}

// ===== INIT =====
document.addEventListener(‘DOMContentLoaded’, () => {
buildCatalog();
initActiveNav();
initCardClicks();
addScrollTopBtn();

// Animate sections on scroll
const sectionObserver = new IntersectionObserver(entries => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.style.animationPlayState = ‘running’;
sectionObserver.unobserve(entry.target);
}
});
}, { threshold: 0.05 });

document.querySelectorAll(’.category-section’).forEach(sec => {
sec.style.animationPlayState = ‘paused’;
sectionObserver.observe(sec);
});
});