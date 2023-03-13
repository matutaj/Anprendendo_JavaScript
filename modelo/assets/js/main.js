const form = document.querySelector("#formulario");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const inputPeso = event.target.querySelector("#input1");
  const inputAltura = event.target.querySelector("#input2");

  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);

  if (!peso && !altura) {
    setResultado("Invalido!");
  } else if (!peso && altura) {
    setResultado("Adicione o valor do Peso!");
  } else if (peso && !altura) {
    setResultado("adicipone o Valor da altura!");
  }
  const valor = calcularIMC(peso, altura);
  if (valor < 18.5) {
    setResultado("Abaixo do Peso!");
  } else if (valor == 18.5 && valor <= 24.9) {
    setResultado("Peso Normal");
  } else if (valor == 25 && valor <= 29.9) {
    setResultado("Sobre Peso!");
  }
});

function calcularIMC(p, a) {
  const imc = p / a ** 2;

  return imc.toFixed(2);
}
function setResultado(sms) {
  const resultado = document.querySelector("#resultado");

  const p = createP();
  p.innerHTML = sms;
  resultado.appendChild(p);
}
function createP() {
  const p = document.createElement("p");
  return p;
}
