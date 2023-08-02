//Declarando array de alunos
// var alunos = ["Joao", "Maria", "Jose"];
// //imprimindo array
// console.log(alunos);
// //imprimindo primeira posicao do array
// console.log(alunos[0]);

// //Declarar um array de array de alunos
// var alunos = [
//     ["Joao", 18, 
//     "Maria", 19,
//     "Jose",20]
// ];

// console.log(alunos);

// console.log(alunos[0]);
// var alunos = [
//     {nome: "Joao", nota: 10, disciplina: "Portugues"},
//     {nome: "Maria", nota: 8, disciplina: "Matematica"},
//     {nome: "Jose", nota:9, disciplina: "Historia"}
// ]
// //imprimir um array de objetos
// console.log(alunos)
// //imprimir a primeira posicao da array e suas propriedades
// console.log(alunos[0]["nome"], alunos[0]["nota"], alunos[0]["disciplina"]);

// //imprimir a primeira posicao da array e suas propriedades utilizando forEach e template string
// alunos.forEach(aluno => {
//     console.log(`${aluno.nome} - ${aluno.nota} - ${aluno.disciplina}`)
// });

//Declarando um array de objetos e suas propriedades
// let alunos = [
//     {nome: "Joao", nota: 10, disciplina: "Portugues"}
// ];

// alunos.forEach(aluno => {
//     console.log(aluno)
// })

// console.log("\n")

let alunos = ["Joao", "Maria", "Jose"];

alunos.sort();

console.log(alunos);
//invertendo array
alunos.reverse();

console.log(alunos);
//removendo ultimo objeto da array
alunos.pop();

console.log(alunos);
//removendo primeiro objeto
alunos.shift();

console.log(alunos);
//removendo ultimo objeto
alunos.unshift();

console.log(alunos);
//alterando com splice
alunos.splice(1, 1, "Joaquina")

console.log(alunos)

alunos.splice(2, 2, "Nicolly")

console.log(alunos)

alunos.splice(3, 4, "Gustavo", "Jorge")

console.log(alunos)

console.splice(2,2);

console.log(alunos)