
setTimeout(function() {
  
    sessionStorage.setItem('carregamento_concluido', 'true');
    
  
    window.location.replace("/");
}, 7000);

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