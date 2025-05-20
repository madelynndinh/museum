// Navigation and Section Display
function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('hidden');
    });

    // Show selected section
    document.getElementById(sectionId).classList.remove('hidden');

    // Update navigation tabs
    document.querySelectorAll('.nav-tab').forEach(tab => {
        tab.classList.remove('active');
        if (tab.getAttribute('onclick') === `showSection('${sectionId}')`) {
            tab.classList.add('active');
        }
    });
}

// Hero Slider
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.slider-dot');

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    slides[index].classList.add('active');
    dots[index].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Start slider automation
setInterval(nextSlide, 5000);

// Filter buttons
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    });
});

// Exhibit Builder
let draggedItem = null;

document.querySelectorAll('.exhibit-item').forEach(item => {
    item.addEventListener('dragstart', (e) => {
        draggedItem = e.target;
        e.target.classList.add('opacity-50');
    });

    item.addEventListener('dragend', (e) => {
        e.target.classList.remove('opacity-50');
    });
});

document.querySelectorAll('.exhibit-dropzone').forEach(zone => {
    zone.addEventListener('dragover', (e) => {
        e.preventDefault();
        zone.classList.add('highlight');
    });

    zone.addEventListener('dragleave', () => {
        zone.classList.remove('highlight');
    });

    zone.addEventListener('drop', (e) => {
        e.preventDefault();
        zone.classList.remove('highlight');
        if (draggedItem) {
            const clone = draggedItem.cloneNode(true);
            zone.appendChild(clone);
        }
    });
});

// Impact Dashboard
function updateDashboard() {
    // Fetch and update statistics
    const stats = {
        collectionDigitized: 65,
        globalAccess: 127,
        educationalDownloads: 45000,
        revenueGenerated: 1200000
    };

    // Update DOM elements
    document.querySelectorAll('[data-stat]').forEach(element => {
        const stat = element.getAttribute('data-stat');
        if (stats[stat]) {
            element.textContent = formatStat(stats[stat]);
        }
    });
}

function formatStat(value) {
    if (value >= 1000000) {
        return `$${(value / 1000000).toFixed(1)}M`;
    } else if (value >= 1000) {
        return `${(value / 1000).toFixed(0)}K+`;
    }
    return value;
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    showSection('home-page');
    updateDashboard();
}); 