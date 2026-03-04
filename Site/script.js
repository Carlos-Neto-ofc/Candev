const nav = document.querySelector('nav');
const ul = document.querySelector('ul');
const menu = document.querySelector('.menu');
const body = document.querySelector('body');
const container = document.querySelector('.container');
const texts = document.querySelectorAll('.text1, .text2, .text3, .text4, .text5, .text6, .text7');
    
function Verificar(){
const nav = document.querySelector('nav');
const largura = document.documentElement.clientWidth;
const textos = document.querySelector('.textos');
const ul = document.querySelector('ul');
const logo = document.querySelector('.logo');
if(largura >= 650){
console.log('Pc');
nav.classList.remove('j');
ul.classList.remove('a');
logo.classList.remove('d');
}
else{
console.log('Celular');
nav.classList.add('j');
ul.classList.add('a');
logo.classList.add('d');
body.classList.add('overf');
}
}
Verificar();
menu.addEventListener('click', () => {
menu.classList.toggle('o');
container.classList.toggle('appears');
texts.forEach(text =>{
text.classList.toggle('appears')
});
ul.classList.toggle('appears');
});
window.addEventListener('resize', Verificar);

