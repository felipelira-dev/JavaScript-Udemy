// {} - objetos
// [] - arrays

function criarPessoa (nome, sobrenome, idade){
    return { nome, sobrenome, idade};
}

const pessoa1 = criarPessoa('Felipe', 'Pereira', '25');
const pessoa2 = criarPessoa('Oliver', 'Queen', '30');
const pessoa3 = criarPessoa('Roronoa', 'Zoro', '25');

console.log(pessoa1.nome, pessoa2.nome, pessoa3.nome)