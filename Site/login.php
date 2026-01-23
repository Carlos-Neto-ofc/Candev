<?php
include('conexao.php');

if(isset($_POST['email']) || isset($_POST['senha'])){
$email = $mysqli->real_escape_string($_POST['email']);
$senha = $mysqli->real_escape_string($_POST['senha']);
$sql_code = "SELECT * FROM usuarios WHERE email = '$email' AND senha = '$senha'";
$sql_query = $mysqli->query($sql_code) or die("Falha na execução do código SQL: " . $mysqli->error);

$quantidade = $sql_query->num_rows;
echo "";
if($quantidade == 1){
 $usuario = $sql_query->fetch_assoc();

 if(!isset($_SESSION)) {
session_start();
}
$_SESSION['id'] = $usuario['id'];
$_SESSION['nome'] = $usuario['nome'];

header("Location: https://dashboard.candev.top");
}

else{
echo '<h1 class="erro-login">Email ou senha incorretos.</h1>';

}

}



?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Entrar</title>

    <link rel="stylesheet" href="login.css">

    
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">


</head>

<body>

    <div id="login">
       
         <div class="form-container sign-in">
    <form method="POST">
                <h1 id="create">Entrar</h1>

             
       
            <input type="email" placeholder="Email" name="email" >
            <input type="password" placeholder="Senha" name="senha" >
        <a href="#">Esqueceu sua senha?</a>
            <button type="submit" id="aaa">Entrar</button>
                
        </form>
        </div>
         <div class="form-container sign-up">
            <form>
                <h1 id="crete">Registrar</h1>

         
            <input type="text" placeholder="Nome" required>
            <input type="email" placeholder="Email" required>
            <input type="password" placeholder="Senha" required>
        <button id="regis">Registrar-se</button>    
        </form>
        </div>
    <div id="toggle-container">
<div id="toggle">
    <div class="toggle-panel toggle-log">
        <h1>Bem-vindo de volta!</h1>
        <p>Entre para desbloquear todas as funções do site.</p>
    <button class="hidden" id="entrar">Entrar</button>
    </div>
<div class="toggle-panel  
toggle-create">
        <h1>Crie sua conta!</h1>
        <p>Registre-se para desbloquear todas as funções do site.</p>
    <button id="registrar" class="hidden">Registrar-se</button>
    </div>
</div>
    </div>
    
    </div>






   




    <script src="login.js"></script>

 
<script src="https://accounts.google.com/gsi/client"></script>

<script>
window.onload = function () {

    google.accounts.id.initialize({
        client_id: "840333497656-ib8rhqobul64ij9nukrcm8g1hrsu9vu5.apps.googleusercontent.com",
        callback: function (res) {
            console.log("GOOGLE OK", res);
        }
    });

    document.getElementById("googleico").onclick = function (e) {
        e.preventDefault();
        google.accounts.id.prompt();
    };

};
</script>

</body>
</html>
