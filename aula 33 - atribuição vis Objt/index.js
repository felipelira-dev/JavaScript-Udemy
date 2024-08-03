const pessoa = {
     nome: 'Felipe',
     sobrenome: 'Lira',
     idade: 26,
     endereco: {
          R: 64,
          N: 15
     }
};

// Atribuição Via Desentruturação
const { nome, sobrenome, ...resto } = pessoa;
console.log(nome, resto);