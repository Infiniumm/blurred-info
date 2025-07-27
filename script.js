// Stripe Configuration
// Replace with your actual Stripe publishable key
const STRIPE_PUBLISHABLE_KEY = 'pk_test_YOUR_STRIPE_PUBLISHABLE_KEY';

// Product price IDs - Replace with your actual Stripe price IDs
const PRICE_IDS = {
    'price_portrait_mastery': 'price_1YOUR_PRICE_ID_1',
    'price_urban_scenes': 'price_1YOUR_PRICE_ID_2',
    'price_pro_templates': 'price_1YOUR_PRICE_ID_3',
    'price_color_grading': 'price_1YOUR_PRICE_ID_4',
    'price_nature_mega': 'price_1YOUR_PRICE_ID_5',
    'price_complete_course': 'price_1YOUR_PRICE_ID_6'
};

// Redirect to Stripe Checkout
function redirectToStripe(priceKey) {
    const priceId = PRICE_IDS[priceKey];
    
    if (!priceId) {
        console.error('Price ID not found for:', priceKey);
        alert('Payment configuration error. Please contact support.');
        return;
    }

    // Create Stripe Checkout URL
    const checkoutUrl = `https://checkout.stripe.com/pay/cs_test_${priceId}#fidkdWxOYHwnPyd1blpxYHZxWjA0SH1LXG1%2BTGNINGxpSDNUUX1LTEx0TDcxa1JGYVVySTFDUE1VQEJ0VGlBbmF3YXNIZkltQlQ3Qn1xSzBUckZNN0duVjNpRnE2YGx2VHdFcT1ddWpiYUpsdTN2VlJHSycpJ2hsYXYnP34nYnBsYSUl`;
    
    // In a real implementation, you would use Stripe's JavaScript SDK
    // For now, we'll redirect to a placeholder URL with the price information
    const baseUrl = 'https://checkout.stripe.com/c/pay/';
    const params = new URLSearchParams({
        'price': priceId,
        'success_url': window.location.origin + '/success',
        'cancel_url': window.location.origin + '/cancel'
    });
    
    // For demonstration purposes, we'll show an alert
    // In production, replace this with actual Stripe integration
    alert(`Redirecting to Stripe...`);
    
    // Uncomment the following line and remove the alert when you have your Stripe account set up:
    // window.location.href = `${baseUrl}?${params.toString()}`;
}

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add scroll effect to header
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 100) {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.backgroundColor = '#fff';
            header.style.backdropFilter = 'none';
        }
    });

    // Add animation to product cards on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe product cards
    document.querySelectorAll('.product-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});

// Form validation for contact forms (if added later)
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Newsletter subscription (placeholder function)
function subscribeNewsletter(email) {
    if (validateEmail(email)) {
        // In production, integrate with your email service
        alert('Thank you for subscribing! (This is a demo)');
        return true;
    } else {
        alert('Please enter a valid email address.');
        return false;
    }
}

// Product search functionality (for future enhancement)
function searchProducts(query) {
    const products = document.querySelectorAll('.product-card');
    const searchTerm = query.toLowerCase();
    
    products.forEach(product => {
        const title = product.querySelector('h3').textContent.toLowerCase();
        const description = product.querySelector('p').textContent.toLowerCase();
        
        if (title.includes(searchTerm) || description.includes(searchTerm)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}

// Price filter functionality (for future enhancement)
function filterByPrice(minPrice, maxPrice) {
    const products = document.querySelectorAll('.product-card');
    
    products.forEach(product => {
        const priceText = product.querySelector('.price').textContent;
        const price = parseInt(priceText.replace('$', ''));
        
        if (price >= minPrice && price <= maxPrice) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
} 