function Dados() {
    var nome = document.getElementById("nome");
    var senha = document.getElementById("senha");

    console.log(nome.value + senha.value);

    if(nome.value == "santicioli@email.com" && senha.value == "5432") {
        window.location.href = "index.html";
        console.log("foi");
    }else{
        nome="";
        senha="";
        alert("Dados incorretos");
    }
}