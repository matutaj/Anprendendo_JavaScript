//Primeira lógica

// const h1 = document.querySelector(".container");
// const data = new Date();
// const diaDaSemana = data.getDay();

// const dia = data.getDate();
// const mes = data.getMonth();
// const ano = data.getFullYear();
// const hora = data.getHours();

// function listarDiaSemana(diaSemana) {
//   let diaSemanaTexto;

//   switch (diaSemana) {
//     case 0:
//       diaSemanaTexto = "Domingo";
//       return diaSemanaTexto;
//     case 1:
//       diaSemanaTexto = "Segunda";
//       return diaSemanaTexto;
//     case 2:
//       diaSemanaTexto = "Terça-Feira";
//       return diaSemanaTexto;
//     case 3:
//       diaSemanaTexto = "Quarta-Feira";
//       return diaSemanaTexto;
//     case 4:
//       diaSemanaTexto = "Quinta-Feira";
//       return diaSemanaTexto;
//     case 5:
//       diaSemanaTexto = "Sexta-Feira";
//       return diaSemanaTexto;
//     case 6:
//       diaSemanaTexto = "Sábado";
//       return diaSemanaTexto;
//     default:
//       diaSemanaTexto = "Não Existe Este Dia De Semana!";
//       return diaSemanaTexto;
//   }
// }

// function listarMes(mes) {
//   let mesTexto;

//   switch (mes) {
//     case 0:
//       mesTexto = "Janeiro";
//       return mesTexto;
//     case 1:
//       mesTexto = "Fevereiro";
//       return mesTexto;
//     case 2:
//       mesTexto = "Março";
//       return mesTexto;
//     case 3:
//       mesTexto = "Abril";
//       return mesTexto;
//     case 4:
//       mesTexto = "Maio";
//       return mesTexto;
//     case 5:
//       mesTexto = "Junho";
//       return mesTexto;
//     case 6:
//       mesTexto = "Julho";
//       return mesTexto;
//     case 7:
//       mesTexto = "Agosto";
//       return mesTexto;
//     case 7:
//       mesTexto = "Setembro";
//       return mesTexto;
//     case 8:
//       mesTexto = "Outobro";
//       return mesTexto;
//     case 9:
//       mesTexto = "Novembro";
//       return mesTexto;
//     case 10:
//       mesTexto = "Dezembro";
//       return mesTexto;
//     default:
//       mesTexto = "Não Existe Este Mês!";
//       return mesTexto;
//   }
// }
// const dianaSemana = listarDiaSemana(diaDaSemana);
// const mesNoAno = listarMes(mes);

// function apresentarTodo() {
//   return `${dianaSemana}, ${dia}  de  ${mesNoAno} de  ${ano}, ${hora}h`;
// }

// const apresent = apresentarTodo();
// h1.innerHTML = apresent;

//Forma bem mais simples
//segunda Lógica

// const h1 = document.querySelector(".container h1");
// const data = new Date();
// const opcoe = {
//   dataStyle: "full",
// };
// h1.innerHTML = data.toLocaleDateString("pt-PT", opcoe);

//Terceira Lógica

const h1 = document.querySelector(".container");
const data = new Date();
const diaDaSemana = data.getDay();

const dia = data.getDate();
const mes = data.getMonth();
const ano = data.getFullYear();
const hora = data.getHours();

function listarDiaSemana(diaSemana) {
  const diasSemana = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];

  return diasSemana[diaSemana];
}

function listarMes(mes) {
  const listar = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outobro",
    "Novembro",
    "Dezembro",
  ];
  return listar[mes];
}
const dianaSemana = listarDiaSemana(diaDaSemana);
const mesNoAno = listarMes(mes);

function apresentarTodo() {
  return `${dianaSemana}, ${dia}  de  ${mesNoAno} de  ${ano}, ${hora}h`;
}

const apresent = apresentarTodo();
h1.innerHTML = apresent;
