// Update current year in footer
let date = new Date();
let currentYear = date.getFullYear();
let dateOutput = document.getElementById('currentYear');
if (dateOutput) {
    dateOutput.innerText = currentYear;
}

// Set active nav link based on current page
let url = window.location.pathname;
let filename = url.substring(url.lastIndexOf('/') + 1);
const navLinks = document.querySelectorAll('.nav-link');

for (let i = 0; i < navLinks.length; i++) {
    if (filename.toLowerCase() == navLinks[i].innerText.toLowerCase() + '.html') {
        navLinks[i].classList.add('active');
    }
}
