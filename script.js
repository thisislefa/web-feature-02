// This script provides a simple and performant scroll-reveal animation.
document.addEventListener('DOMContentLoaded', function() {

    // Select all elements that should be animated when they appear.
    const revealElements = document.querySelectorAll('.defcon-wsa-reveal');

    // Set up the Intersection Observer.
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // If the element is in the viewport...
            if (entry.isIntersecting) {
                // ...add the 'is-visible' class to trigger the CSS transition.
                entry.target.classList.add('defcon-wsa-is-visible');
                // Stop observing this element to prevent re-animation.
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the element is visible.
    });

    // Start observing each target element.
    revealElements.forEach(element => {
        observer.observe(element);
    });

});