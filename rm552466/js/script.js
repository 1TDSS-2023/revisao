// console.log('Hello World');

// // Declarando array de alunos
// var alunos = ["João", "Maria", "José", "Pedro", "Ana", "Carolina", "Francisco", "Paulo", "Carlos", "Fernanda"];
// // imprimir o array de alunos
// console.log(alunos);
// // imprimir a primeira posição do array de alunos
// console.log(alunos[0]);
// // Declarar um array de array de alunos
// var alunos2 = [
//   ["João", 8.5, 7.5, 10],
//   ["Maria", 9.5, 6.5, 10],
//   ["José", 8.5, 7.5, 6],
// ];
// // imprimir o array de alunos2
// console.log(alunos2);
// // imprimir a primeira posição do array de alunos2
// console.log(alunos2[0]);
// // Declarar um array de objetos de alunos
// var alunos3 = [
//   { nome: "João", nota1: 8.5, nota2: 7.5, nota3: 10, disciplina: "Português" },
//   { nome: "Maria", nota1: 9.5, nota2: 6.5, nota3: 10, disciplina: "Matemática" },
//   { nome: "José", nota1: 8.5, nota2: 7.5, nota3: 6, disciplina: "História" },
// ];
// // imprimir o array de alunos3
// console.log(alunos3);
// // imprimir a primeira posição do array de alunos3
// console.log(alunos3[0]);
// console.log(alunos3[0].nome);
// console.log(alunos3[0]["nome"]);

// // Quebrando linha com \n
// console.log("Quebrando linha com \\n");
// console.log("\n");

// // Imprimir a segunda posição do array de objetos e suas propriedades utilizando forEach e template string
// alunos3.forEach((aluno) => {
//   console.log(`Nome: ${aluno.nome} - Disciplina: ${aluno.disciplina}`);
// });

// Declarando um array de objetos e suas propriedades
// let alunos = [
//   { nome: "João", nota1: 8.5, nota2: 7.5, nota3: 10, disciplina: "Português" },
//   { nome: "Maria", nota1: 9.5, nota2: 6.5, nota3: 10, disciplina: "Matemática" },
//   { nome: "José", nota1: 8.5, nota2: 7.5, nota3: 6, disciplina: "História" },
// ];

// // Imprimir o array de objetos no forEach
// alunos.forEach((aluno) => {
//   console.log(aluno);
// });
// // Quebrar linha
// console.log("\n");
// // Utilizando o método push para adicionar um novo objeto ao array de objetos
// alunos.push({ nome: "Pedro", nota1: 8.5, nota2: 7.5, nota3: 6, disciplina: "Geografia" });
// // Imprimir o array de objetos no forEach
// alunos.forEach((aluno) => {
//   console.log(aluno);
// });
// // Quebrar linha
// console.log("\n");

// Criando array de nomes de alunos
let alunos = ["João", "Maria", "José", "Pedro", "Ana", "Carolina", "Francisco", "Paulo", "Carlos", "Fernanda"];
console.log(alunos);
// Aplicando o método sort para ordenar o array de nomes de alunos
alunos.sort();
// Imprimir o array de nomes de alunos
console.log(alunos);

// Invertendo a ordem do array de alunos com reverse
alunos.reverse();
// Imprimir o array de nomes de alunos
console.log(alunos);

// Removendo o ultimo elemento do array de alunos com pop
alunos.pop();
// Imprimir o array de nomes de alunos
console.log(alunos);

// Adicionando um novo elemento ao array com unshift
alunos.unshift("Fernanda");
// Imprimir o array de nomes de alunos
console.log(alunos);

// Removendo o primeiro elemento do array com shift
alunos.shift();
// Imprimir o array de nomes de alunos
console.log(alunos);

// Alterar elemento do array com splice
alunos.splice(1, 1, "Joaquina");
// Imprimir o array de nomes de alunos
console.log(alunos);
// Alterar elemento do array com splice
alunos.splice(1, 2, "Thiago", "Jorge");

// Remover elemento do array com splice
alunos.splice(1, 1);