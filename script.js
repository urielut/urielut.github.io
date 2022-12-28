let header = document.getElementById('header')

let nube = document.getElementById('nube')
let aire = document.getElementById('aire')
let murcielagos = document.getElementById('murcielagos')
let lejos = document.getElementById('lejos')
let slogan = document.getElementById('slogan')
let btn = document.getElementById('aire')
let dragon = document.getElementById('dragon')
let montana = document.getElementById('montana')

window.addEventListener('scroll', function(){
    let value = window.scrollY;

    lejos.style.top = value* 0.5 + 'px';
    nube.style.top = value* 1 + 'px';
    btn.style.marginTop = value* 0.7 + 'px';
    slogan.style.marginBottom = value* -1 + 'px';
    aire.style.top = value* 4 + 'px';
    header.style.marginTop = value* 0.4 + 'px';
    dragon.style.top = value* 4 + 'px'; 
})

const navigation = document.querySelector('nav')
document.querySelector('.menu').onclick = function (){
    this.classList.toogle('active');
    navigation.classList.toogle('active');
}