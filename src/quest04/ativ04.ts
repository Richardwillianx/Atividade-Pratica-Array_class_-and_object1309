// Utilizando a lista de Pessoa criada na atividade 3, filtre somente as
// pessoas que possuem a idade menor que 30 e calcule a média das
// idades das pessoas filtradas utilizando o reduce.

const pessoasMenos30 = pessoasLista.filter((pessoa) => pessoa.idade < 30);
const media = pessoasLista.reduce(
  (acc, { idade }, indice, vetor) => {
    if (idade < 30) {
      acc.soma += idade;
      acc.quantidade++;
    }
    if (indice === vetor.length - 1) {
      return {
        soma: acc.soma,
        quantidade: acc.quantidade,
        media: acc.soma / acc.quantidade,
      };
    }
    return acc;
  },
  { soma: 0, quantidade: 0, media: 0 }
).media;
console.log("Media", media);
