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

pokeLi.addEventListener('click', function showActivity1() {
    pokeLi.classList.add('active-li-top');
    poke.style.display = 'block';
    eSportLi.classList.remove('active-li');
    eSpor.style.display = 'none';
})
eSportLi.addEventListener('click', function showActivity2() {
    pokeLi.classList.remove('active-li-top');
    poke.style.display = 'none';
    eSportLi.classList.add('active-li');
    eSpor.style.display = 'block';
})
legoBuildLi.addEventListener('click', function showActivity3() {
    // pokeLi.classList.add('active-li-top');
    // poke.style.display = 'none';
})
beybladeLi.addEventListener('click', function showActivity4() {
    // pokeLi.classList.add('active-li-top');
    // poke.style.display = 'none';
})
roboticsLi.addEventListener('click', function showActivity5() {
    // pokeLi.classList.add('active-li-top');
    // poke.style.display = 'none';
})
tounramentLi.addEventListener('click', function showActivity6() {
    // pokeLi.classList.add('active-li-top');
    // poke.style.display = 'none';
})
pokregiLieLi.addEventListener('click', function showActivity7() {
    // pokeLi.classList.add('active-li-top');
    // poke.style.display = 'none';
})