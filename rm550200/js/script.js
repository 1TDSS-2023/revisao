// console.log("Hello World!");

// //Declarando um array de alunos
// var alunos = ["João", "Maria", "José"];
// //Imprimir um array de alunos
// console.log(alunos);
// //Imprimir a primeira posição do array de alunos
// console.log(alunos[0]);

// //Declarar um array de array de alunos
// var alunos = [
//     ["João", 8, 7.5, 8.5],
//     ["Maria", 9, 6, 8.5],
//     ["José", 8, 7, 8]
// ];
// //Imprimir um array de array de alunos
// console.log(alunos);

// //Imprimir a primeira posição do array de array de alunos
// console.log(alunos[0]);

//Declar um array de objetos
// let alunos = [
//     {nome : "João", nota: 8, disciplina: "Português"},
//     {nome : "Maria", nota: 9, disciplina: "Matemática"},
//     {nome : "José", nota: 8, disciplina: "História"}
// ];
// //Imprimir um array de objetos
// console.log(alunos);

// //imprimir a primeira posição do array de objetos
// console.log(alunos[0].nome, alunos[0].nota, alunos[0].disciplina);
// console.log(alunos[0]["nome"],alunos[0]["nota"],alunos[0]["disciplina"]);

// //quebra de linha comm \n
// console.log("quebrando linha com \\n");
// console.log("\n");

// //imprimir array de objetos e suas propriedades ultilizando foreach e template string
// alunos.forEach(aluno => {
//     console.log(`${aluno.nome} - ${aluno.nota} - ${aluno.disciplina}`);
// });

// //Declarando um array de objetos e suas propiedades
// let alunos = [
//     {nome : "João", nota: 8, disciplina: "Português"},
//     {nome : "Maria", nota: 9, disciplina: "Matemática"},
//     {nome : "José", nota: 8, disciplina: "História"}
// ];

// //Imprimir array de objetos no forEach
// alunos.forEach(aluno => {
//     console.log(aluno);
// });
// //Quebrar linha
// console.log("\n");

// //Utilizando o método PUSH para adicionar um novo objeto ao array de objetos.
// alunos.push({nome : "Pedro", nota: 10, disciplina: "Geografia"});

// //Imprimir array de objetos no forEach
// alunos.forEach(aluno => {
//     console.log(aluno);
// });
// //Quebrar linha
// console.log("\n");

// //aplicando ordem alfabetica com SORT
// // console.log(alunos.sort(a,b)=> {
    
// // });
// //Imprimir array de objetos no forEach
// alunos.forEach(aluno => {
//     //Aplicar o método sort para ordenar os nomes em ordem alfabética.
// });

//criando array de nomes de alunos
let alunos = ["Joao", "Maria", "Jose"];
console.log(alunos);

//aplicando o metodo SORT
alunos.sort();

//imprimir nomes dps do SORT
console.log(alunos);

//inverter ordem dos nomes com REVERSE
alunos.reverse();
console.log(alunos);

//remomvendo ultimo nome com POP
alunos.pop();
console.log(alunos);

//adicionando novo elemento com UNSHIFT
alunos.unshift("Pedro");
console.log(alunos);

//removendo primeiro nome com SHIFT
alunos.shift();
console.log(alunos);

//adicionando novo elemento com UNSHIFT
alunos.unshift("Pedro");

//alterar elementos com SPLICE
alunos.splice(1, 1, "Joaquina");
console.log(alunos);

//Alterar elementos do array com splice
alunos.splice(1, 2, "Maria","Jorge");

//Imprimir array de nomes de alunos
console.log(alunos);

//Removendo elementos do array com splice
alunos.splice(2, 2);

//Imprimir array de nomes de alunos
console.log(alunos);