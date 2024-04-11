/*
Entre 0 - 11:59 = Bom dia
Entre 12 - 17:59 = Boa tarde
Entre 18 - 23:59 = Boa Noite
*/

// If - pode ser usado sozinho
// Else if depende do primeiro If
// else e usado para finalizar a checagem
//pode usar condições sem else if somente com IF e ELSE (inicia e termina)

const hora = 22;

if (hora >= 0 && hora <= 11) {
  console.log("Bom dia");
} else if (hora >= 12 && hora <= 17) {
  console.log("Boa Tarde");
} else if (hora >= 18 && hora <= 23) {
  console.log("Boa Noite");
} else {
  console.log("TÁ ERRADO");
}
