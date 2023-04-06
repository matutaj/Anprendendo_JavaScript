/*
let a = "A";
let b = "B";
let c = "C";

//Atribuindo outros valores as variáveis via  desestruturação
const letras = [2,4, 5];

[a, b, c]= letras;

console.log(a, b, c)
*/

const numeros = [1, 2, 3, 4, 5 ,6, 7, 8, 9];

const [primeiroN, SegundoN, ...resto]= numeros;
//...resto = > restOperat 
console.log(primeiroN, SegundoN);
console.log(resto)
