console.log("JS CARREGOU");

window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("verify").classList.add("show");
const selectd = document.getElementById('selectd');
const selecty = document.getElementById('selecty');
const optionsy = document.getElementById('optionsy');
const optionsd = document.getElementById('optionsd');
selecty.addEventListener('click', () => {
optionsy.classList.toggle('appears');
console.log("CHEGOOO");
});
document.querySelectorAll(".selecty li").forEach(li => {
li.onclick = () => {
li.closest(".selecty").querySelector("div").textContent = li.textContent;

};

});

});
selectd.addEventListener('click', () => {
optionsd.classList.toggle('appears');
console.log("CHEGOOO");
});