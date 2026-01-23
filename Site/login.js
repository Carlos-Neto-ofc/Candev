

    const login = document.getElementById('login');
    const entrar = document.getElementById('entrar');
    const register = document.getElementById("registrar");
    const googleico = document.getElementById('googleico');

    register.addEventListener('click', () => {
        login.classList.add('active');
    });

    entrar.addEventListener('click', () => {
        login.classList.remove('active');
    });

