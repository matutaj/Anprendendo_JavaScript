//const data = new Date(2020, 3, 20, 7, 24, 50); ano, mes, dia, hora, min. , seg. , ms

function zeroAEsquerda(num) {
  return num >= 10 ? num : `0${num}`;
}

function formatarData(data) {
  const dia = zeroAEsquerda(data.getDate());
  const mes = zeroAEsquerda(data.getMonth() + 1);
  const ano = zeroAEsquerda(data.getFullYear());
  const hora = zeroAEsquerda(data.getHours());
  const min = zeroAEsquerda(data.getMinutes());
  const seg = zeroAEsquerda(data.getSeconds());
  const ms = zeroAEsquerda(data.getMilliseconds());
  //const diasemana = data.getDay();
  return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

const data = new Date();
const imprimirData = formatarData(data);
console.log(imprimirData);
