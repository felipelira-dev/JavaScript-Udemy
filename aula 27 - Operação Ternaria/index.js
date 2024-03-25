// (condição) ? "Valor se for true" : "Valor se for false";

const pontuacaoUsuario = 1100;

// Exemplo usando IF e ELSE
if (pontuacaoUsuario >= 1000) {
  console.log(`Usuario VIP, você possui: ${pontuacaoUsuario}`);
} else {
  console.log(`Usuario Normal, você possui: ${pontuacaoUsuario}`);
}

// Operação Ternaria
const nivelUsuario =
  pontuacaoUsuario >= 1000 ? "Usuario VIP" : "Usuario Normal";
console.log(nivelUsuario);

// Operação Ternaria + Operador Logico
const corUsuario = null;
const corPadrão = corUsuario || "Preta";
console.log(corPadrão);
