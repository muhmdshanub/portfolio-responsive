// add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');
console.log(header)
window.onscroll = function() {
    const top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}
// collapse navbar after click on small devices
const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarSupportedContent')

navLinks.forEach((l) => {
    l.addEventListener('click', () => { new bootstrap.Collapse(menuToggle).toggle() })
})


//email validation

document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();

    // Validation functions
    function validateName(name) {
        return name.length > 0;
    }

    function validateEmail(email) {
        // A simple email validation regex
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailPattern.test(email);
    }

    // Form fields
    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;

    // Error messages
    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');

    // Validating the fields
    if (!validateName(name)) {
        nameError.innerText = "Please enter your name.";
    } else {
        nameError.innerText = "";
    }

    if (!validateEmail(email)) {
        emailError.innerText = "Please enter a valid email address.";
    } else {
        emailError.innerText = "";
    }
    // Submit the form if all validations pass
    if (validateName(name) && validateEmail(email)) {
    
        this.submit(); // This submits the form 
    }

});