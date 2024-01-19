document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('a[href="#courses"]').addEventListener('click', function(e) {
        e.preventDefault();

        const targetElement = document.getElementById('courses');
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });

    // Smooth scroll to the footer when the "Contact" link is clicked
    document.querySelector('a[href="#contact"]').addEventListener('click', function(e) {
        e.preventDefault();

        const targetElement = document.querySelector('footer');
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });

    // Smooth scroll to the registration page when the "Register for the Course" link is clicked
    document.querySelector('a[href="register.html"]').addEventListener('click', function(e) {
        e.preventDefault();

        const targetElement = document.querySelector('body'); // Change this to the actual container if needed
        if (targetElement) {
            window.location.href = this.getAttribute('href');
        }
    });

    // Handle form submission and log values to console
    document.querySelector('form').addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const surname = document.getElementById('surname').value;
        const age = document.getElementById('age').value;
        const course = document.getElementById('course').value;

        console.log("Registration Form Submission:");
        console.log("Name:", name);
        console.log("Surname:", surname);
        console.log("Age:", age);
        console.log("Course:", course);

    });
});