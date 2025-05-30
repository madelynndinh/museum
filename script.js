// Navigation Functions
function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('main > section').forEach(section => {
        section.classList.add('hidden');
    });

    // Show selected section
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.classList.remove('hidden');
    }

    // Initialize charts if showing impact dashboard
    if (sectionId === 'impact-dashboard') {
        initializeImpactDashboardCharts();
    }

    // Update active nav state
    document.querySelectorAll('.nav-tab').forEach(tab => {
        tab.classList.remove('active');
        if (tab.getAttribute('onclick') && tab.getAttribute('onclick').includes(sectionId)) {
            tab.classList.add('active');
        }
    });

    // Close mobile menu if open
    const mobileMenu = document.getElementById('mobileMenu');
    if (mobileMenu && mobileMenu.classList.contains('active')) {
        toggleMobileMenu();
    }
}

function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    if (mobileMenu) {
        mobileMenu.classList.toggle('active');
        document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    }
}

// Initialize Impact Dashboard Charts
function initializeImpactDashboardCharts() {
    // Growth Trajectory Chart
    const growthCtx = document.getElementById('growthChart');
    if (growthCtx) {
        new Chart(growthCtx, {
            type: 'line',
            data: {
                labels: ['Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5'],
                datasets: [
                    {
                        label: 'Objects Digitized (M)',
                        data: [1, 5, 10, 18, 25],
                        borderColor: '#3b2d24',
                        tension: 0.3,
                        fill: false
                    },
                    {
                        label: 'Visitors (K)',
                        data: [75, 200, 400, 750, 1500],
                        borderColor: '#926e3d',
                        tension: 0.3,
                        fill: false
                    },
                    {
                        label: 'Revenue ($K)',
                        data: [0, 250, 750, 1200, 2000],
                        borderColor: '#926e3d80',
                        tension: 0.3,
                        fill: false
                    }
                ]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                        labels: {
                            color: '#3b2d24'
                        }
                    },
                    title: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            color: '#3b2d24'
                        },
                        grid: {
                            color: '#926e3d20'
                        }
                    },
                    x: {
                        ticks: {
                            color: '#3b2d24'
                        },
                        grid: {
                            color: '#926e3d20'
                        }
                    }
                }
            }
        });
    }

    // Key Metrics Overview Chart
    const metricsCtx = document.getElementById('revenueChart');
    if (metricsCtx) {
        new Chart(metricsCtx, {
            type: 'line',
            data: {
                labels: ['Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5'],
                datasets: [
                    {
                        label: 'Objects Digitized (%)',
                        data: [4, 20, 40, 72, 100],
                        borderColor: '#3b2d24',
                        backgroundColor: 'rgba(59, 45, 36, 0.1)',
                        fill: true,
                        borderWidth: 2
                    },
                    {
                        label: 'Visitor Growth (%)',
                        data: [5, 13, 27, 50, 100],
                        borderColor: '#926e3d',
                        backgroundColor: 'rgba(146, 110, 61, 0.1)',
                        fill: true,
                        borderWidth: 2
                    },
                    {
                        label: 'Revenue Target (%)',
                        data: [0, 12.5, 37.5, 60, 100],
                        borderColor: '#c17817',
                        backgroundColor: 'rgba(193, 120, 23, 0.1)',
                        fill: true,
                        borderWidth: 2
                    },
                    {
                        label: 'Partner Network',
                        data: [10, 30, 50, 80, 100],
                        borderColor: '#8b4513',
                        backgroundColor: 'rgba(139, 69, 19, 0.1)',
                        fill: true,
                        borderWidth: 2
                    },
                    {
                        label: 'User Satisfaction (%)',
                        data: [70, 75, 80, 85, 90],
                        borderColor: '#d4a76a',
                        backgroundColor: 'rgba(212, 167, 106, 0.1)',
                        fill: true,
                        borderWidth: 2
                    }
                ]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                        labels: {
                            color: '#3b2d24',
                            padding: 20,
                            usePointStyle: true,
                            pointStyle: 'circle'
                        }
                    },
                    title: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100,
                        ticks: {
                            color: '#3b2d24',
                            callback: function (value) {
                                return value + '%';
                            }
                        },
                        grid: {
                            color: '#926e3d20'
                        }
                    },
                    x: {
                        ticks: {
                            color: '#3b2d24'
                        },
                        grid: {
                            color: '#926e3d20'
                        }
                    }
                },
                elements: {
                    line: {
                        tension: 0.3
                    },
                    point: {
                        radius: 4,
                        hoverRadius: 6
                    }
                }
            }
        });
    }
}

// Hero slider functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.slider-dot');