//3. Crie uma classe chamada Pessoa que contém os seguintes
// atributos: nome (string) e idade (number), que receba esses valores
// pelo construtor. Depois crie uma lista de Pessoa com algumas
// idades diferentes e por fim crie uma nova lista a partir dessa lista
// inicial utilizando o filter somente com as pessoas que possuem a
// idade menor que 23.

class Pessoa {
  nome: string;
  idade: number;

  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }
}

const pessoasLista: Pessoa[] = [
  new Pessoa("Antonio", 38),
  new Pessoa("João", 21),
  new Pessoa("BoraBill", 40),
  new Pessoa("Pedrinho", 35),
  new Pessoa("FidoBill", 6),
  new Pessoa("MulherdoBill", 24),
];

const pessoasMenos23 = pessoasLista.filter((pessoa) => pessoa.idade < 23);
