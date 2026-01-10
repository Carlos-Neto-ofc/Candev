console.log("JS CARREGOU");

window.addEventListener("DOMContentLoaded", () => {
document.getElementById("verify").classList.add("show");
});
console.log('oi'); 

const selectd = document.getElementById('selectd');
const selecty = document.getElementById('selecty');
const optionsy = document.getElementById('optionsy');
const optionsd = document.getElementById('optionsd');
const selectm = document.getElementById('selectm');
const optionsm = document.getElementById('optionsm');
const ano = Number(document.getElementById("year").value);
const xover = document.getElementById('xover');
const x = document.getElementById('x');
const alertas = document.getElementById('alertas');
const t = document.getElementById("thejunction");
selecty.addEventListener('click', () => {

  optionsy.classList.toggle('appears');

console.log("ano");
});
document.querySelectorAll(".selecty li").forEach(li => {
li.onclick = () => {
li.closest(".selecty").querySelector("div").textContent = li.textContent;

};


});

selectd.addEventListener('click', () => {
optionsd.classList.toggle('appears');
console.log("dia");
});
selectm.addEventListener('click', () => {
  optionsm.classList.toggle('appears');
  console.log("MÊS");
});



const year = document.getElementById("year");
year.addEventListener("change", () => {
  const valor = Number(ano.value);

  if (valor > 2006) {
    document.getElementById("idadei").classList.add("show");
  } else {
    document.getElementById("idadei").classList.remove("show");
  }
});
t.addEventListener('click', () =>{
alertas.classList.add("des");

});
x.addEventListener('click', () =>{
alertas.classList.add("des");

});
xover.addEventListener('click', () =>{
alertas.classList.add("des");

});
let anoSelecionado = null;

document.querySelectorAll('#optionsy li').forEach(li => {
  li.addEventListener('click', () => {
    anoSelecionado = Number(li.textContent.trim());
    console.log('Ano selecionado:', anoSelecionado);
  });
});




function aba() {
  if (anoSelecionado === null || isNaN(anoSelecionado)) {
    console.log('Nenhum ano válido selecionado');
    return;
  }

  if (anoSelecionado <= 2006) {
    console.log('Maior de idade');
    alertas.classList.remove('menor');
  } else {
    console.log('Menor de idade');
    alertas.classList.add('menor'); 
  }
}


[x, xover].forEach(el => {
  el.addEventListener('click', () => {
    alertas.classList.remove('menor');
  });
});
