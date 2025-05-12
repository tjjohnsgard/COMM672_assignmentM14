document.addEventListener('DOMContentLoaded', function() {
    const readMoreButtons = document.querySelectorAll('#features .card button[data-bs-toggle="collapse"]');
    readMoreButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetId = this.getAttribute('data-bs-target');
            const targetElement = document.querySelector(targetId);
            if (targetElement.classList.contains('show')) {
                this.textContent = 'Read More';
            } else {
                this.textContent = 'Read Less';
            }
        });
    });
    const contactForm = document.querySelector('#contactOffcanvas form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            console.log('Contact form submitted (custom JavaScript)');
            const contactOffcanvas = bootstrap.Offcanvas.getInstance(document.getElementById('contactOffcanvas'));
            contactOffcanvas.hide();
        });
    }
});