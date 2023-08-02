// //console.log("Hello World!");

// //Declarando um array de alunos
// var alunos = ["João", "Maria", "Jose"];
// //Imprimir um array de alunos
// console.log(alunos);
// //Imprimir a primeira posição de array de alunos
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

//Declarar um array de objetos
// let alunos = [
//     {nome: "João", nota: 8, disciplina: "Português"},
//     {nome: "Maria", nota: 9, disciplina: "Matemática"},
//     {nome: "José", nota: 8, disciplina: "História"}
// ];
// //Imprimir um array de objetos
// console.log(alunos);

// //Imprimir a primeira posição do array de objetos
// console.log(alunos[0].nome, alunos[0].nota, alunos[0].disciplina);
// console.log(alunos[0]["nome"], alunos[0]["nota"], alunos[0]["disciplina"]);

// //Quebrando linha com \n
// console.log("Quebrando linha com \\n");
// console.log("\n");

// //Imprimir a segunda posição do array de objetos e suas propriedades utilizando forEach e template string.
// alunos.forEach(aluno => {
//     console.log{'${aluno.nome} - $(aluno.nota) - ${aluno.disciplina}}
// });


//Declarando um array de objetos e suas propriedades
let alunos = [
    {nome: "João", nota: 8, disciplina: "Português"},
    {nome: "Maria", nota: 9, disciplina: "Matemática"},
    {nome: "José", nota: 8, disciplina: "História"}
];
//Imprimir um array de objetos no forEach
alunos.forEach(aluno => {
    console.log(aluno);
});
//Quebrar linha
console.log("\n");

//Utilizando o método PUSH adicionar um novo objeto ao array de objetos
alunos.push({nome : "Pedro", nota: 10, disciplina: "Geografia"});
//Imprimir um array de objetos no forEach
alunos.forEach(aluno => {
    console.log(aluno);
});
//Quebrar linha
console.log("\n");

