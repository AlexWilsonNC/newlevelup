const pokeLi = document.querySelector('.poketcg-li');
const poke = document.querySelector('.activ-poke-tcg');
const eSportLi = document.querySelector('.esports-li');
const eSpor = document.querySelector('.activ-esports');
const legoBuildLi = document.querySelector('.legobuilding-li');
const legoB = document.querySelector('.activ-legos');
const beybladeLi = document.querySelector('.beyblade-li');
const beyblade = document.querySelector('.activ-beyblade');
const roboticsLi = document.querySelector('.robotics-li');
const robo = document.querySelector('.activ-robo');
const tounramentLi = document.querySelector('.tournaments-li');
const tourney = document.querySelector('.activ-tourney');
const regiLi = document.querySelector('.registration-li');
const regi = document.querySelector('.activ-regi');

function showActivity1(event) {
    event.preventDefault();
    pokeLi.classList.add('active-li-top');
    poke.style.display = 'block';
    eSportLi.classList.remove('active-li');
    eSpor.style.display = 'none';
    legoBuildLi.classList.remove('active-li');
    legoB.style.display= 'none';
    beybladeLi.classList.remove('active-li');
    beyblade.style.display = 'none';
    roboticsLi.classList.remove('active-li');
    robo.style.display = 'none';
}
function showActivity2(event) {
    event.preventDefault();
    pokeLi.classList.remove('active-li-top');
    poke.style.display = 'none';
    eSportLi.classList.add('active-li');
    eSpor.style.display = 'block';
    legoBuildLi.classList.remove('active-li');
    legoB.style.display= 'none';
    beybladeLi.classList.remove('active-li');
    beyblade.style.display = 'none';
    roboticsLi.classList.remove('active-li');
    robo.style.display = 'none';
}
function showActivity3(event) {
    event.preventDefault();
    pokeLi.classList.remove('active-li-top');
    poke.style.display = 'none';
    eSportLi.classList.remove('active-li');
    eSpor.style.display = 'none';
    legoBuildLi.classList.add('active-li');
    legoB.style.display= 'block';
    beybladeLi.classList.remove('active-li');
    beyblade.style.display = 'none';
    roboticsLi.classList.remove('active-li');
    robo.style.display = 'none';
}
function showActivity4(event) {
    event.preventDefault();
    pokeLi.classList.remove('active-li-top');
    poke.style.display = 'none';
    eSportLi.classList.remove('active-li');
    eSpor.style.display = 'none';
    legoBuildLi.classList.remove('active-li');
    legoB.style.display= 'none';
    beybladeLi.classList.add('active-li');
    beyblade.style.display = 'block';
    roboticsLi.classList.remove('active-li');
    robo.style.display = 'none';
}
function showActivity5(event) {
    event.preventDefault();
    pokeLi.classList.remove('active-li-top');
    poke.style.display = 'none';
    eSportLi.classList.remove('active-li');
    eSpor.style.display = 'none';
    legoBuildLi.classList.remove('active-li');
    legoB.style.display= 'none';
    beybladeLi.classList.remove('active-li');
    beyblade.style.display = 'none';
    roboticsLi.classList.add('active-li');
    robo.style.display = 'block';
    console.log('hey')
}

pokeLi.addEventListener('click', showActivity1)
eSportLi.addEventListener('click', showActivity2)
legoBuildLi.addEventListener('click', showActivity3)
beybladeLi.addEventListener('click', showActivity4)
roboticsLi.addEventListener('click', showActivity5)
pokeLi.addEventListener('touchstart', showActivity1)
eSportLi.addEventListener('touchstart', showActivity2)
legoBuildLi.addEventListener('touchstart', showActivity3)
beybladeLi.addEventListener('touchstart', showActivity4)
roboticsLi.addEventListener('touchstart', showActivity5)
