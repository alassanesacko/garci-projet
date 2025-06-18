// DOM Elements
const sidebarToggle = document.querySelector('.sidebar-toggle');
const sidebar = document.querySelector('.sidebar');
const modal = document.getElementById('bus-modal');
const closeModal = document.querySelector('.close-modal');
const newBusBtn = document.querySelector('.quick-actions .btn-primary');
const busForm = document.getElementById('bus-form');

// Toggle Sidebar
sidebarToggle.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});

// Open Modal
newBusBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});

// Close Modal
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Handle Bus Form Submission
busForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const busNumber = document.getElementById('bus-number').value;
    const busCompany = document.getElementById('bus-company').value;
    const busCapacity = document.getElementById('bus-capacity').value;
    const busCategory = document.getElementById('bus-category').value;
    
    // Get selected features
    const features = [];
    document.querySelectorAll('input[name="features"]:checked').forEach(checkbox => {
        features.push(checkbox.value);
    });
    
    // In a real app, you would send this data to the server
    console.log('New Bus:', {
        busNumber,
        busCompany,
        busCapacity,
        busCategory,
        features
    });
    
    // Show success message
    alert('Bus ajouté avec succès!');
    
    // Reset form and close modal
    busForm.reset();
    modal.style.display = 'none';
});

// Sample Data for Charts (would be replaced with real data in production)
const reservationsData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{
        label: 'Réservations 2023',
        data: [1200, 1900, 1500, 2000, 2200, 2500, 2800, 2600, 2400, 2100, 2300, 2800],
        backgroundColor: 'rgba(255, 107, 0, 0.2)',
        borderColor: 'rgba(255, 107, 0, 1)',
        borderWidth: 1
    }]
};

const popularTripsData = {
    labels: ['Abidjan → Yamoussoukro', 'Abidjan → Bouaké', 'Abidjan → San Pedro', 'Yamoussoukro → Abidjan', 'Bouaké → Abidjan'],
    datasets: [{
        label: 'Nombre de réservations',
        data: [1250, 980, 750, 680, 520],
        backgroundColor: [
            'rgba(255, 107, 0, 0.7)',
            'rgba(66, 133, 244, 0.7)',
            'rgba(52, 168, 83, 0.7)',
            'rgba(251, 188, 5, 0.7)',
            'rgba(234, 67, 53, 0.7)'
        ]
    }]
};

// Initialize Charts (using Chart.js - make sure to include the library)
document.addEventListener('DOMContentLoaded', function() {
    // This would be initialized if Chart.js is included
    if (typeof Chart !== 'undefined') {
        const ctx1 = document.getElementById('reservations-chart').getContext('2d');
        new Chart(ctx1, {
            type: 'line',
            data: reservationsData,
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
        
        const ctx2 = document.getElementById('trips-chart').getContext('2d');
        new Chart(ctx2, {
            type: 'bar',
            data: popularTripsData,
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }
});

// Toggle Mobile Menu
function toggleMobileMenu() {
    const nav = document.querySelector('.main-nav');
    nav.style.display = nav.style.display === 'none' ? 'block' : 'none';
}

// Simulated Data Functions
function getRecentReservations() {
    // In a real app, this would come from an API
    return [
        {
            id: 1254,
            client: "Jean Dupont",
            trip: "Abidjan → Yamoussoukro",
            date: "15/12/2023 08:00",
            status: "confirmed"
        },
        {
            id: 1253,
            client: "Marie Koné",
            trip: "Abidjan → Bouaké",
            date: "15/12/2023 09:30",
            status: "pending"
        },
        {
            id: 1252,
            client: "Paul Yao",
            trip: "Abidjan → San Pedro",
            date: "16/12/2023 07:00",
            status: "canceled"
        }
    ];
}

function getUpcomingTrips() {
    // In a real app, this would come from an API
    return [
        {
            route: "Abidjan → Yamoussoukro",
            date: "15/12/2023 08:00",
            bus: "Bus #AB-125 (STC)",
            seats: "12/24",
            category: "vip"
        },
        {
            route: "Abidjan → Bouaké",
            date: "15/12/2023 09:30",
            bus: "Bus #AB-126 (UAT)",
            seats: "18/20",
            category: "express"
        },
        {
            route: "Abidjan → San Pedro",
            date: "16/12/2023 07:00",
            bus: "Bus #AB-127 (STC)",
            seats: "5/30",
            category: "economy"
        }
    ];
} 