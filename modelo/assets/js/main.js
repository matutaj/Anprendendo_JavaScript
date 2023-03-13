const form = document.querySelector("#formulario");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const inputPeso = event.target.querySelector("#input1");
  const inputAltura = event.target.querySelector("#input2");

  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);
  console.log(peso, altura);
});

function setResultado() {
  const resultado = document.querySelector("#resultado");

  const p = createP();
  p.innerHTML = "mau";
  resultado = p;
}
function createP() {
  const p = document.createElement("p");
  return p;
}
