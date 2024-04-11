function saudacao(nome) {
 //   console.log(`Bom dia, ${nome}!`); //parametro e usado na hora de escrever a função
    return `Bom dia, ${nome}!`;
}

const variavel = saudacao ('Felipe') //argumento e usado na hora de chamar a função
console.log(variavel)
//saudacao ('Felipe');

//-----------------------------------------------------------------------------------------------

function soma(x = 0, y=0) {
const resultado = x + y;
return resultado;
}

const resultado = soma (4, 2)
console.log(resultado)

