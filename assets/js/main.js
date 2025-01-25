// SHOW SIDEBAR

// SIDEBAR SHOW
// VALIDATE IF CONSTANT EXISTS

// SIDEBAR HIDDEN
// VALIDATE IF CONSTANT EXISTS

const tabs = document.querySelectorAll('[data-target]');
const tabContent = document.querySelectorAll('[data-content]');

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        const target = document.querySelector(tab.dataset.target);

        // Remove 'skills__active' from all tab content
        tabContent.forEach(tabContents => {
            tabContents.classList.remove("skills__active");
        });

        // Add 'skills__active' to the selected tab content
        target.classList.add('skills__active');

        // Remove 'skills__active' from all tabs
        tabs.forEach(tab => {
            tab.classList.remove("skills__active");
        });

        // Add 'skills__active' to the selected tab
        tab.classList.add('skills__active');
    });
});
// work
const popup = document.getElementById('portfolioPopup');
const openButtons = document.querySelectorAll('.work__button'); // Buttons to open the popup
const closeButton = document.getElementById('closePopup'); // Close button

// Open popup
openButtons.forEach(button => {
    button.addEventListener('click', () => {
        popup.classList.add('active'); // Add active class to show the popup
    });
});

// Close popup
closeButton.addEventListener('click', () => {
    popup.classList.remove('active'); // Remove active class to hide the popup
});


