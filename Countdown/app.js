const segundosEl = document.getElementById("segundos");
const minutosEL = document.getElementById("minutos");
const horasEl = document.getElementById("horas");
const diasEl = document.getElementById("dias");

console.log(segundosEl)

const contador = () =>{
  setInterval(() => {
  const dataAnoNovo = new Date("1 Jan 2023");
  const dataDiaAtual = new Date();
  const totalSegundos = (dataAnoNovo - dataDiaAtual) / 1000;

  const dias = Math.floor(totalSegundos / 3600 / 24 )  
  const horas = Math.floor(totalSegundos / 3600) % 24 
  const minutos = Math.floor(totalSegundos / 60) % 60
  const segundos = Math.floor(totalSegundos ) % 60


  segundosEl.innerHTML = segundos
  minutosEL.innerHTML = minutos
  horasEl.innerHTML = horas
  diasEl.innerHTML = dias
  
  },1000)
}

addEventListener("DOMContentLoaded", contador())
