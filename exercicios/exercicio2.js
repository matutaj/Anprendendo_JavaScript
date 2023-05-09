// 1. Escreva um programa que leia uma data (dia, mês, ano) e determine a data do dia
// seguinte.
// Ex.: Entrada: 30/09/2021.
// Saída: 01/10/2021

const dia = 29;
const mes = 2;
const ano = 2023;


function manipularData(d, m, a) {
    if (m > 12) {
        return console.log("Não existe este Mês!");
    }
    if (d >= 31 && m == 12) {
        const outroDia = 1;
        const outroMes = 1;

        return console.log(`Dia: ${outroDia} , ${outroMes} , ${a + 1}`)
    }

    if (d >= 31 && m < 12) {
        const outroDia = 1;
        const outroMes = m + 1;

        return console.log(`Dia: ${outroDia} , ${outroMes} , ${a}`)
    } else if (d == 29 && m == 2) {
        const outroDia = 1;
        const outroMes = m + 1;

        return console.log(`Dia: ${outroDia} , ${outroMes} , ${a}`)
    }

    if (d < 31 && m < 12) {

        const outroDia = d + 1;
        const outroMes = m;

        return console.log(`Dia: ${outroDia} , ${outroMes} , ${a}`)
    }


}

manipularData(dia, mes, ano);

