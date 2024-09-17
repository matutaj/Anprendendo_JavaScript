"use strict";

// textContent => escreve os textos com formatação mas não escreve elementos HTML
//  innertext => escreve os textos sem formatação e sem elemente HTML
// innerHTML => Escreve textos com formatação com  e sem elementos HTml

//const p = document.querySelector("p");

//console.log(p.textContent);
//console.log(p.innerText);

//p.textContent = "Pegando melhor o conceito de DOM"

const div = document.querySelector("div");

//console.log(1, div);

//div.innerHTML = `${div.innerHTML} <strong> Esse é o texo alterado </strong>`

// criar elemento 
const elementUl = document.createElement("ul");
console.log(elementUl)
const numberArray = ["Matuta","António","Jorge"];
// addicionando elemento dentro da Ul
numberArray.forEach((element) => {
    const elementLi = document.createElement("li");
    elementLi.innerText = element;
    elementUl.appendChild(elementLi);
});
div.appendChild(elementUl);


// -------------------- manipulando a input ----------------------- 
const input = document.querySelector("#name");

console.log(input.value)

setTimeout(()=>{
    input.value = "Morango";
    console.log(input.value);
}, 1000);


// ------------------------ adicionar atributo --------------

div.setAttribute("id", "test");
div.setAttribute("class", "active");

div.removeAttribute("class")
console.log(div)
console.log(div.getAttribute("id"))