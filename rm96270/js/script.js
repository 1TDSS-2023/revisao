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

// //Declar um array de objetos
// let alunos = [
//     {nome : "João", nota: 8, disciplina: "Português"},
//     {nome : "Maria", nota: 9, disciplina: "Matemática"},
//     {nome : "José", nota: 8, disciplina: "História"}
// ];
// //Imprimir um array de objetos
// console.log(alunos);

// //Imprimir a primeira posição do array de objetos e suas propiedades
// console.log(alunos[0].nome, alunos[0].nota, alunos[0].disciplina);
// console.log(alunos[0]["nome"], alunos[0]["nota"], alunos[0]["disciplina"] );

// //Quebrando linha com \n
// console.log("Quebrando linha com \\n");
// console.log("\n");

// //Imprimir array de objetos e suas propiedades utilizando forEach e template string.
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

//Criando array de nomes de alunos
let alunos = ["João", "Maria", "José"];
console.log(alunos);
//Aplicando o metodo sort para ordenar o array de nomes de alunos
alunos.sort();
//Imprimir array de nomes de alunos
console.log(alunos);

//Invertendo a ordem do array com reverse
alunos.reverse();
//Imprimir array de nomes de alunos
console.log(alunos);

//Removendo o último elemento do array com pop
alunos.pop();
//Imprimir array de nomes de alunos
console.log(alunos);

//Adicionando um novo elemento ao array com unshift
alunos.unshift("Pedro");
//Imprimir array de nomes de alunos
console.log(alunos);

//Removendo o primeiro elemento do array com shift
alunos.shift();
//Imprimir array de nomes de alunos
console.log(alunos);


//Adicionando um novo elemento ao array com unshift
alunos.unshift("Pedro");

//Alterar elementos do array com splice
alunos.splice(1, 1, "Joaquina");

//Imprimir array de nomes de alunos
console.log(alunos);

//Alterar elementos do array com splice
alunos.splice(1, 2, "Maria","Jorge");

//Imprimir array de nomes de alunos
console.log(alunos);

//Removendo elementos do array com splice
alunos.splice(2, 2);

//Imprimir array de nomes de alunos
console.log(alunos);