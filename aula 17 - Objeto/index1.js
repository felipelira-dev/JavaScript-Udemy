const pessoa01 ={
    nome: 'Felipe',
    sobrenome: 'Pereira',
    idade: 25,

    fala() {
        console.log(`A minha idade atual é ${this.idade}.`);
    },

    incrementoIdade() {
        ++this.idade;
    }
}

pessoa01.fala()
pessoa01.incrementoIdade()
pessoa01.fala()
pessoa01.incrementoIdade()