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

        
        tabContent.forEach(tabContents => {
            tabContents.classList.remove("skills__active");
        });

      
        target.classList.add('skills__active');

        
        tabs.forEach(tab => {
            tab.classList.remove("skills__active");
        });

       
        tab.classList.add('skills__active');
    });
});
// work
const popup = document.getElementById('portfolioPopup');
const openButtons = document.querySelectorAll('.work__button');
const closeButton = document.getElementById('closePopup'); 

// Open popup
openButtons.forEach(button => {
    button.addEventListener('click', () => {
        popup.classList.add('active'); 
    });
});

// Close popup
closeButton.addEventListener('click', () => {
    popup.classList.remove('active'); 
});


