// Construir um algoritmo que tome como entradas três valores distintos e os
// apresente (imprima) em ordem crescente (menor para o maior).

const valor1 = 142765876564756;
const valor2 = 20234677888;
const valor3 = 1676751243564757576;

function OrdemCrescente(n, n2, n3) {
    if (n >= n2 & n2 >= n3) {
        return console.log(n, n2, n3)
    }
    if (n >= n2 & n <= n3) {
        return console.log(n3, n, n2)
    }
    else if (n2 >= n & n2 <= n3) {
        return console.log(n3, n2, n)
    }
    else if (n3 >= n & n >= n2) {
        return console.log(n3, n, n2)
    }
    else if (n2 >= n & n >= n3) {
        return console.log(n2, n, n3)
    }
    else if (n2 >= n & n <= n3) {
        return console.log(n2, n3, n)
    }

}

OrdemCrescente(valor1, valor2, valor3)