const dados= [{
  id: 1,
  name: "José",
  job:"Desenvolvedor",
  img: "https://leiturinha.com.br/blog/wp-content/uploads/2022/01/iStock-1166576788-1.jpg",
  text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in nunc ac magna volutpat porttitor. Fusce ut elit a erat sagittis euismod. Nulla in arcu scelerisque, congue nibh ac, dapibus ipsum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
},
{
  id: 2,
  name: "Abreu",
  job:"web designer",
  img: "https://lillo.com.br/pub/media/magefan_blog/2017/04/a-crianca-de-2-anos.jpg",
  text:"Donec blandit nibh id aliquet ultrices. Quisque elementum tellus enim, non fringilla tellus dictum a. Cras eget felis odio. Fusce sit amet iaculis leo. Morbi consequat odio ut leo volutpat rutrum. Nulla facilisi. Maecenas non vulputate orci, in imperdiet quam."
},
{
  id: 3,
  name: "Flamengo",
  job:"Engenheiro",
  img: "https://portaldrauziovarella.nyc3.digitaloceanspaces.com/wp-content/uploads/2015/10/31005019/dv_crian%C3%A7as_600x350-e1499365934956.jpg",
  text:"Maecenas vel nisl neque. Aenean laoreet tempor scelerisque. Nulla ornare, magna vel semper cursus, justo purus auctor lectus, at bibendum mauris ligula in erat. Etiam vel mattis lectus. Ut molestie a dolor vel blandit. Praesent bibendum urna ac venenatis pharetra."
},
{
  id: 4,
  name: "João",
  job:"Pesquisador",
  img: "https://www.macetesdemae.com/wp-content/uploads/2022/03/fala-da-crianca-900x600.png",
  text:"Etiam imperdiet lorem ipsum, fermentum ultrices velit dictum eget. Nulla ultrices nunc facilisis dolor dapibus eleifend. Morbi at elit quis lectus tincidunt congue eget eget ante. Aliquam sit amet libero est. Praesent iaculis ligula vitae felis viverra blandit."
},
{
  id: 5,
  name: "Agata",
  job:"Diretora",
  img: "https://s2.glbimg.com/O8_sOXKD2ysMgF0f0s8iykarWRI=/top/e.glbimg.com/og/ed/f/original/2020/10/07/gettyimages-622887934.jpg",
  text:"Morbi at elit quis lectus tincidunt congue eget eget ante. Aliquam sit amet libero est. Praesent iaculis ligula vitae felis viverra blandit. Vivamus et pretium mauris. In sed arcu erat. Vivamus vitae sagittis turpis. Duis et ligula vel nisl porttitor tempor. Sed ut bibendum neque."
}]

const imagem =document.getElementById("img");
const pessoa =document.getElementById("name");
const job =document.getElementById("job");
const description =document.getElementById("description");

let ItemAtual = 0;

window.addEventListener("DOMContentLoaded", function(){
  mostrarPessoa();
} )

function mostrarPessoa(){
  const item = dados[ItemAtual];
  imagem.src = item.img;
  pessoa.textContent = item.name;
  job.textContent = item.job;
  description.textContent = item.text;
}

function next(){
  ItemAtual++;
  if(ItemAtual > dados.length -1){
    ItemAtual = 0; 
  }
  mostrarPessoa();
} 

function previus(){
  ItemAtual--;
  if(ItemAtual < 0){
    ItemAtual = dados.length -1; 
  }
  mostrarPessoa();
}

function surprise(){
  ItemAtual = Math.floor(Math.random()*dados.length);
  mostrarPessoa();
}