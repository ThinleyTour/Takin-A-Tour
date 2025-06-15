// Accordion functionality
document.addEventListener('DOMContentLoaded', function () {
    const accordions = document.querySelectorAll('.accordion');

    accordions.forEach(accordion => {
        const btn = accordion.querySelector('.accordion-btn');

        btn.addEventListener('click', () => {
            // Close all other accordions
            accordions.forEach(otherAccordion => {
                if (otherAccordion !== accordion) {
                    otherAccordion.classList.remove('active');
                }
            });

            // Toggle current accordion
            accordion.classList.toggle('active');
        });
    });

    // Open first accordion by default
    if (accordions.length > 0) {
        accordions[0].classList.add('active');
    }
});