/* -- Avaliação do curto Circuito(short-Circuit) --- ;

&& => false && true => false

|| => true || false => true

FALSY
false
0
'' "" ``
null / undefined
NaN
*/

// test value of the return whitch &&

function FalaOi() {
  return "oi";
}

let vaiExcutar = false;

console.log(vaiExcutar && FalaOi());

// test value of the return whitch ||

console.log(0 || false || null || "Matuta Jorge" || true);

//formas de fazer uma estrutura condicional

const corUsuario = null;
const corPadrao = corUsuario || "preto";

console.log(corPadrao);
