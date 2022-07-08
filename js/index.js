console.log("Welcome In Our Plateform Which Is Provide You Free Learning facilities---> 'EducationToEducate'");

// #1--> Creating The Responsive Navbar 
// Delcare the variables 
const navbar = document.querySelector('.navbar');
const navlist = document.querySelector('.navList');
const burger = document.querySelector('.burger');

// Event Listeners on burger 
burger.addEventListener('click', () => {
        
    navbar.classList.toggle('res-navbar');
    navlist.classList.toggle('res-navList');
});