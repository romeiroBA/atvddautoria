var contapessoasanalisadas = 0
var qtddpessoasquepodem = 0
var qtddpessoasquenaopodem = 0
function analisar(){
    var idade = document.getElementById("idade").value;
    var pessoa = document.getElementById("pessoa").value;
    if(idade<=0 || idade>100 || idade == ""){
        window.alert("Informe um valor correto!")
    }
    if(pessoa == ""){
        window.alert("Insira seu nome!")
    }
    if(idade!="" && pessoa!= ""){
        contapessoasanalisadas+=1
    }
    if(pessoa!="" && idade>=18){
        qtddpessoasquepodem+=1
        window.alert("Você possui direito de tirar a carteira de habilitação.")
    }
    if(pessoa!="" && idade<18 && idade>0){
        qtddpessoasquenaopodem+=1
        window.alert("Você não possui direito de tirar a carteira de habilitação.")
    }
    divpodem.innerHTML = `${qtddpessoasquepodem}`;
    divnaopodem.innerHTML = `${qtddpessoasquenaopodem}`;
    divanalisadas.innerHTML = `${contapessoasanalisadas}`;
    divmaioresidades.innerHTML = `${Math.max(idade)}`;
    document.getElementById("idade").value = ''
    document.getElementById("pessoa").value = ''
}