const form = document.querySelector("#formulario");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("evento Previnido!");
  setResultado("Olá Pessoal");
});

function setResultado() {
  const resultado = document.querySelector("#resultado");
  resultado.innerHTML = "";
}
function createP() {
  const p = document.createElement("p");
}
