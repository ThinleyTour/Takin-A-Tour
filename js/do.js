// Activity Filter Functionality
function filterActivities(category) {
    const activities = document.querySelectorAll('.activity-card');
    const filterButtons = document.querySelectorAll('.filter-btn');

    // Update active button
    filterButtons.forEach(button => {
        button.classList.remove('active', 'bg-blue-600', 'text-white');
        button.classList.add('bg-gray-200', 'text-gray-800');
    });

    event.target.classList.add('active', 'bg-blue-600', 'text-white');
    event.target.classList.remove('bg-gray-200', 'text-gray-800');

    // Filter activities
    activities.forEach(activity => {
        if (category === 'all' || activity.classList.contains(category)) {
            activity.style.display = 'block';
        } else {
            activity.style.display = 'none';
        }
    });
}

// Scroll Animation
function checkVisibility() {
    const elements = document.querySelectorAll('.fade-in');

    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 100) {
            element.classList.add('visible');
        }
    });
}

// Initialize
window.addEventListener('load', checkVisibility);
window.addEventListener('scroll', checkVisibility);