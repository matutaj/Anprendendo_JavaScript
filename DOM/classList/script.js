" use strict";
// o ClassList, adiciona a  class dentro de um elemento html

const h1 = document.querySelector("h1");
h1.classList.add("active")
h1.classList.add("teste1")

//h1.classList.remove("teste1")

//toggle ele verifica se tem a class se tiver remove se não tiver adiciona
h1.classList.toggle("teste1")

//contains é um valor booleano
if(h1.classList.contains("active")){
   // alert("Existe a classe active")
}
console.log(h1)