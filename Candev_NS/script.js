const elemento = document.querySelector('.texts');
const palavras = ["Criatividade", "Profissionalismo", "Inovação", "Tecnologia"];
let palavraIndex = 0;
let charIndex = 0;
let deletando = false;

function digitar() {
    const palavraAtual = palavras[palavraIndex];
    
    
    if (deletando) {
        elemento.innerHTML = palavraAtual.substring(0, charIndex - 1);
        charIndex--;
    } else {
        elemento.innerHTML = palavraAtual.substring(0, charIndex + 1);
        charIndex++;
    }

    
    let velocidade = deletando ? 50 : 150;

    
    if (!deletando && charIndex === palavraAtual.length) {
        velocidade = 3000;
        deletando = true;
    } 
    
    else if (deletando && charIndex === 0) {
        deletando = false;
        palavraIndex++;
        
        
        if (palavraIndex === palavras.length) {
            palavraIndex = 0;
        }
        velocidade = 500;
    }

    setTimeout(digitar, velocidade);
}


window.onload = digitar;

document.addEventListener('keydown', function (e) {
    if (e.ctrlKey && (e.key === '=' || e.key === '-' || e.key === '+' || e.key === '0')) {
        e.preventDefault();
    }
});

document.addEventListener('wheel', function (e) {
    if (e.ctrlKey) {
        e.preventDefault();
    }
}, { passive: false });

window.addEventListener('scroll', function() {
const texto = document.querySelector('.aqvc');
const alturaGatilho = 10;
const vm = document.querySelector('.vm');

if(window.scrollY > alturaGatilho){
    texto.classList.add('esconder');
vm.classList.add('desapears');
}
else{
      texto.classList.remove('esconder');
vm.classList.remove('desapears');
    }

});

const seta = document.querySelector('.seta');
const body = document.querySelector('body');

seta.addEventListener('click', () => {


window.scrollTo({
        top: 800,            // A distância do topo em pixels
        left: 0,
        behavior: 'smooth'   // Faz o scroll ser suave
    });
body.classList.add('scroll');

});