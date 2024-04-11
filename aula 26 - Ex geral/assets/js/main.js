const form = document.querySelector("#form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const inputPeso = event.target.querySelector("#peso");
  const inputAltura = event.target.querySelector("#altura");

  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);

  if (!peso) {
    setResultado("Peso Inválido", false);
    return;
  }
  if (!altura) {
    setResultado("Altura Inválida", false);
    return;
  }
  const imc = getImc(peso, altura);
  const nivelImc = getNivelImc(imc);

  const msg = `Seu IMC é ${imc} (${nivelImc}).`;
  setResultado(msg, true, imc);
});

function getNivelImc(imc) {
  const nivel = [
    "Abaixo do peso",
    "Peso Nomal",
    "Sobrepeso",
    "Obesidade Grau 1",
    "Obesidade Grau 2",
    "Obesidade Grau 3",
  ];

  if (imc >= 39.9) {
    return nivel[5];
  }
  if (imc >= 34.9) {
    return nivel[4];
  }
  if (imc >= 29.9) {
    return nivel[3];
  }
  if (imc >= 24.9) {
    return nivel[2];
  }
  if (imc >= 18.5) {
    return nivel[1];
  }
  if (imc < 18.5) {
    return nivel[0];
  }
}

function getImc(peso, altura) {
  const imc = peso / altura ** 2;
  return imc.toFixed(2);
}

function criaP() {
  const p = document.createElement("p");
  return p;
}

function setResultado(msg, isValid, imc) {
  const resultado = document.querySelector("#resultado");
  resultado.innerHTML = " ";

  const p = criaP();

  if (isValid) {
    if (imc >= 39.9) p.classList.add("obesidadeGrau3-color");
  }
  if (isValid) {
    if (imc >= 34.9) p.classList.add("obesidadeGrau2-color");
  }
  if (isValid) {
    if (imc >= 29.9) p.classList.add("obesidadeGrau1-color");
  }
  if (isValid) {
    if (imc >= 24.9) p.classList.add("sobrepeso-color");
  }
  if (isValid) {
    if (imc >= 18.5) p.classList.add("pesoNormal-color");
  }
  if (isValid) {
    if (imc < 18.5) p.classList.add("abaixoDoPeso-color");
  } else {
    p.classList.add("bad");
  }

  p.innerHTML = msg;
  resultado.appendChild(p);
}