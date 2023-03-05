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

console.log(0 || false || null|| "Matuta Jorge" || true)