// Modal functions
function openModal(modalId) {
    document.getElementById(modalId).setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
}

function closeModal(modalId) {
    document.getElementById(modalId).setAttribute('aria-hidden', 'true');
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside content
window.onclick = function (event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = 'auto';
        }
    });
}

// Close modal with Escape key
document.onkeydown = function (evt) {
    evt = evt || window.event;
    if (evt.key === 'Escape') {
        const modals = document.querySelectorAll('.modal');
        modals.forEach(modal => {
            modal.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = 'auto';
        });
    }
};