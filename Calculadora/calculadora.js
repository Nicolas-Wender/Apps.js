let resultado;
let isOperador;

function adicionarElemento(caracter){
  if(resultado){limpar(); resultado = false;}
  document.getElementById("total").innerHTML += caracter;
  isOperador = false;
} 

function calcular(){
  const acumulador =  document.getElementById("acumulador").innerHTML;
  const operação = document.getElementById("acumulador").innerHTML + document.getElementById("total").innerHTML;
  if(acumulador){
    document.getElementById("acumulador").innerHTML = operação + "=";
    document.getElementById("total").innerHTML = eval(operação);
  }
  resultado = true;
}

function voltar(id){
  const operação =  document.getElementById(id).innerHTML;
  document.getElementById(id).innerHTML = operação.substring(0, operação.length -1);
}

function limpar(){
  document.getElementById("total").innerHTML = "";
}

function limparTudo(){
  document.getElementById("total").innerHTML = "";
  document.getElementById("acumulador").innerHTML = "";
}

function addOperador(caracter){
  if(resultado){document.getElementById("acumulador").innerHTML = "";}

  if(isOperador){   
    voltar("acumulador") + caracter;
  }else{
    const operação = document.getElementById("total").innerHTML + caracter;
    document.getElementById("acumulador").innerHTML += operação;
  }
  limpar();
  isOperador = true;
}