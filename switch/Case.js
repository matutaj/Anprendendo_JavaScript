export default function listarDiaSemana(diaSemana) {
  let diaSemanaTexto;

  switch (diaSemana) {
    case 0:
      diaSemanaTexto = "Domingo";
      return diaSemanaTexto;
    case 1:
      diaSemanaTexto = "Segunda";
      return diaSemanaTexto;
    case 2:
      diaSemanaTexto = "Terça-Feira";
      return diaSemanaTexto;
    case 3:
      diaSemanaTexto = "Quarta-Feira";
      return diaSemanaTexto;
    case 4:
      diaSemanaTexto = "Quinta-Feira";
      return diaSemanaTexto;
    case 5:
      diaSemanaTexto = "Sexta-Feira";
      return diaSemanaTexto;
    case 6:
      diaSemanaTexto = "Sábado";
      return diaSemanaTexto;
    default:
      diaSemanaTexto = "Não Existe Este Dia De Semana!";
      return diaSemanaTexto;
  }
}

const data = new Date();

let diaSemana = data.getDay();

const diaSemanaTexto = listarDiaSemana(diaSemana);

console.log(diaSemanaTexto);

// switch (diaSemana) {
//   case 0:
//     diaSemanaTexto = "Domingo";
//     break;
//   case 1:
//     diaSemanaTexto = "Segunda";
//     break;
//   case 2:
//     diaSemanaTexto = "Terça-Feira";
//     break;
//   case 3:
//     diaSemanaTexto = "Quarta-Feira";
//     break;
//   case 4:
//     diaSemanaTexto = "Quinta-Feira";
//     break;
//   case 5:
//     diaSemanaTexto = "Sexta-Feira";
//     break;
//   case 6:
//     diaSemanaTexto = "Sábado";
//     break;
//   default:
//     diaSemanaTexto = "Não Existe Este Dia De Semana!";
//     break;
// }
//console.log(diaSemanaTexto);
