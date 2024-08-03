const verdadeira = true;

// Let tem escopo de bloco ex: { ... bloco }
// Var só tem escopo de função

let nome = 'Luiz'; // criando
var nome2 = 'Luiz'; // criando
//console.log(nome, nome2) - exibe luiz luiz

if (verdadeira) {
    let nome = 'Otavio'; //criando
    var nome2 = 'Rogério'; // redeclarando
    //console.log(nome, nome2) - exibe Otavio Rogerio

    if (verdadeira) {
        var nome2 = 'Ronaldo'; //redeclarando
        let nome = 'Outra coisa';
    }

    //console.log(nome, nome2) - exibe Outra Coisa ronaldo
}

console.log(nome, nome2) //-Luiz Ronaldo (Luiz escopo geral, ronaldo 2 if)