// Theme switcher
const themeButton = document.getElementById('theme-button');
const body = document.body;
const container = document.querySelector('.container');

themeButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    container.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        themeButton.textContent = 'Switch to Light Theme';
    } else {
        themeButton.textContent = 'Switch to Dark Theme';
    }
});

// Smooth scrolling (Optional enhancement for navigation)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function goBack() {
    window.history.back(); /* ย้อนกลับไปยังหน้าที่ผ่านมา */
}
function exampleFunction(value) {
    if (typeof value !== 'string') {
        throw new TypeError('Expected a string');
    }
}ล

try {
    exampleFunction(123); // จะโยน TypeError
} catch (err) {
    console.error(err.message); // "Expected a string"
}
function goNext() {
    window.location.href = "next-page.html"; /* ไปยังหน้าถัดไป*/
}
