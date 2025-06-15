// Testimonial Carousel
let currentSlide = 0;
const slides = document.querySelectorAll('.testimonial-slide');
const dots = document.querySelectorAll('.testimonial-dot');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.replace('bg-blue-600', 'bg-gray-300'));

    slides[index].classList.add('active');
    dots[index].classList.replace('bg-gray-300', 'bg-blue-600');
    currentSlide = index;
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
}

document.getElementById('nextTestimonial').addEventListener('click', nextSlide);
document.getElementById('prevTestimonial').addEventListener('click', prevSlide);

dots.forEach(dot => {
    dot.addEventListener('click', function () {
        showSlide(parseInt(this.dataset.slide));
    });
});

// Auto-rotate testimonials
setInterval(nextSlide, 5000);

// Category Filter
const filterButtons = document.querySelectorAll('.filter-btn');
const blogPosts = document.querySelectorAll('.blog-post');

filterButtons.forEach(button => {
    button.addEventListener('click', function () {
        const category = this.dataset.category;

        // Update active button
        filterButtons.forEach(btn => {
            btn.classList.remove('bg-blue-600', 'text-white');
            btn.classList.add('bg-gray-200', 'hover:bg-blue-600', 'hover:text-white');
        });

        this.classList.remove('bg-gray-200', 'hover:bg-blue-600', 'hover:text-white');
        this.classList.add('bg-blue-600', 'text-white');

        // Filter posts
        blogPosts.forEach(post => {
            if (category === 'all' || post.dataset.category === category) {
                post.style.display = 'block';
            } else {
                post.style.display = 'none';
            }
        });
    });
});

// Search Functionality
const searchInput = document.getElementById('searchInput');

searchInput.addEventListener('input', function () {
    const searchTerm = this.value.toLowerCase();

    blogPosts.forEach(post => {
        const title = post.querySelector('h3').textContent.toLowerCase();
        const excerpt = post.querySelector('p').textContent.toLowerCase();

        if (title.includes(searchTerm) || excerpt.includes(searchTerm)) {
            post.style.display = 'block';
        } else {
            post.style.display = 'none';
        }
    });
});