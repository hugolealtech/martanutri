var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("#tabela-pacientes");
tabela.addEventListener("dblclick", function (event){

    event.target.parentNode.classList.add("fadeOut");
    setTimeout(function (){
        event.target.parentNode.remove();
    },500);




   /* var alvoEvento = event.target;
    var paiDoAlvo = alvoEvento.parentNode;// TR = paciente = remover
    paiDoAlvo.remove();*/
});



/*pacientes.forEach(function (paciente0){
    paciente.addEventListener("dblclick", function (){
        console.log("fui clicado com um duplo clique");
        this.remove();
    });
})*/