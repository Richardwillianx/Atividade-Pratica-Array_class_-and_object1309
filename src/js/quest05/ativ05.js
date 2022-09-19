"use strict";
// 5. Utilizando a classe Pessoa da atividade 3, adicione mais um atributo
// chamado salario (number), faça receber esse valor pelo construtor.
// Depois filtre todas as pessoas que possuem o salário menor que
// R$1027,00 e crie uma nova lista somente com o nome e a idade da
// pessoa.
class Pessoa {
    constructor(nome, idade, salario) {
        this.nome = nome;
        this.idade = idade;
        this.salario = salario;
    }
}
const pessoasLista = [
    new Pessoa("Antonio", 38, 4000),
    new Pessoa("João", 21, 2000),
    new Pessoa("BoraBill", 40, 1000),
    new Pessoa("Pedrinho", 35, 5000),
    new Pessoa("FidoBill", 6, 900),
    new Pessoa("MulherdoBill", 24, 50),
];
const salarioAbaixo1027 = pessoasLista
    .filter((pessoa) => pessoa.salario < 1027)
    .map((pessoa) => {
    return { nome: pessoa.nome, idade: pessoa.idade };
});
console.log(salarioAbaixo1027);
