// Filter Tabs
document.addEventListener('DOMContentLoaded', function () {
    const filterTabs = document.querySelectorAll('.filter-tab');
    const accommodationCards = document.querySelectorAll('.accommodation-card');

    filterTabs.forEach(tab => {
        tab.addEventListener('click', function () {
            // Update active tab
            filterTabs.forEach(t => t.classList.remove('bg-blue-600', 'text-white'));
            filterTabs.forEach(t => t.classList.add('bg-white', 'text-gray-700', 'border'));
            this.classList.remove('bg-white', 'text-gray-700', 'border');
            this.classList.add('bg-blue-600', 'text-white');

            const filter = this.getAttribute('data-tab');

            // Filter cards
            accommodationCards.forEach(card => {
                const categories = card.getAttribute('data-category').split(' ');

                if (filter === 'all' || categories.includes(filter)) {
                    card.style.display = 'block';
                    card.classList.add('animate__animated', 'animate__fadeIn');
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Price Range Filter
    const priceRange = document.getElementById('price-range');
    const priceValue = document.getElementById('price-value');

    priceRange.addEventListener('input', function () {
        const value = this.value;
        priceValue.textContent = `Up to $${value} per night`;

        accommodationCards.forEach(card => {
            const priceText = card.querySelector('span.text-blue-600').textContent;
            const price = parseInt(priceText.replace(/\D/g, ''));

            if (price <= value) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });

    // Room Carousel
    const carouselItems = document.querySelectorAll('.carousel-item');
    const carouselDots = document.querySelectorAll('.carousel-dot');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    let currentIndex = 0;

    function showSlide(index) {
        carouselItems.forEach(item => item.classList.remove('active'));
        carouselDots.forEach(dot => dot.classList.remove('bg-blue-600'));
        carouselDots.forEach(dot => dot.classList.add('bg-gray-300'));

        carouselItems[index].classList.add('active');
        carouselDots[index].classList.remove('bg-gray-300');
        carouselDots[index].classList.add('bg-blue-600');

        currentIndex = index;
    }

    prevBtn.addEventListener('click', function () {
        let newIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
        showSlide(newIndex);
    });

    nextBtn.addEventListener('click', function () {
        let newIndex = (currentIndex + 1) % carouselItems.length;
        showSlide(newIndex);
    });

    carouselDots.forEach((dot, index) => {
        dot.addEventListener('click', function () {
            showSlide(index);
        });
    });

    // Auto-rotate carousel
    setInterval(() => {
        let newIndex = (currentIndex + 1) % carouselItems.length;
        showSlide(newIndex);
    }, 5000);

    // Mobile menu toggle would go here
});