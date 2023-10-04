function validar_senha() {
    var senha = document.getElementById("senha");
    var confsenha = document.getElementById("confsenha");

    if(senha.value != confsenha.value){
        alert("senhas diferentes");
    }
}