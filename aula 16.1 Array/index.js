//                0         1        2
const alunos = ['Felipe', 'Jao', 'Samuel'];

alunos.push('Leo'); // adiciona o item ao final do array
alunos.unshift('Ciel'); // adiciona o item no inicio do array
alunos.pop('Leo'); //Elimina o ultimo item do array - o item removido pode ser salvo em uma variavél
alunos.shift(' Felipe'); //Elimina o primeiro item do array - usando o "SHIFT" ele altera o "indice" por inteiro
delete alunos [1]; //Elimina o item mas não muda o "indice" do array - deixa o espaço vazio
alunos.slice(0, 3); //Funciona da mesma forma das strings (apresenta os item selecionados - precisa avança 1 a mais para chegar)

/*
alunos.typeOf(); mostra o array como objeto, mais como referencia de array
se mudar para "Let" ele fica registrado como number e deixa de ser referencia como array
*/
