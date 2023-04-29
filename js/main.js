const navMobile = document.querySelector('.nav-mobile');
const navBtn = document.querySelector('.hamburger');

const OptionCard = document.querySelector('#oCard');
const OptionPlanets = document.querySelector('#oPlanets');
const OptionContact = document.querySelector('#oContact');


const handleNav = () => {
    navBtn.classList.toggle('is-active');
    navMobile.classList.toggle('nav-mobile--active'); console.log(navMobileOption);
}

const hideNav = () => {
    navBtn.classList.remove('is-active');
    navMobile.classList.remove('nav-mobile--active');



}


navBtn.addEventListener('click', handleNav);

OptionCard.addEventListener('click', hideNav);
OptionPlanets.addEventListener('click', hideNav);
OptionContact.addEventListener('click', hideNav);


