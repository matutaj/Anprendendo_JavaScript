"use strict";

const h2 = document.querySelector("h2");
const classP = document.querySelector(".paragrafo strong");
const idP = document.querySelector("#paragrafo");

h2.style.background = "red"; 

const p = document.querySelectorAll("p");

p.forEach((element, index)=>{
    element.style.color ="#fff";
    element.style.padding= "20px"
        if( index === 0){
            element.style.background = "blue";
        }
        if (index ===1){
            element.style.background = "red";
        }
})