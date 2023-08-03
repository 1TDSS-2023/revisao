// //console.log("hello world")

// // Declarando um array de alunos
// var alunos = ["a", "b", "c"]
// //imprimir array de alunos
// console.log(alunos)
// //imprimindo primeira posição do array
// console.log(alunos[0])

// //-------

// // // Declarando um array de array de alunos
// // var alunosA = [
// //     ["a": 10, 10]
// //     ["c: 10, 10]
// //     ["h", 10, 10]
// //     ["i", 10, 10]
// // ];
// // //imprimir array de alunos
// // console.log(alunos)

// //-----------------
// let alunosB = [
//     {nome: "Gabriel", nota: 9.5, disciplina: "Web"},
//     {nome: "Gabriel", nota: 9, disciplina: "IA"},
//     {nome: "Gabriel", nota: 9.2, disciplina: "Banco de dados"}
// ];
// //imprimir array de objetos
// console.log(alunosB)
// //imprimindo primeira posição do array
// console.log(alunosB[0])
// //imprimindo primeira posição do array com todos objetos
// console.log(alunosB[0]["nome"],", ", alunosB[0]["nota"],", ", alunosB[0]["disciplina"])
// console.log(alunosB[0].nome,", ", alunosB[0].nota,", ", alunosB[0].disciplina)
// //imprimindo segunda posição do array de objetos ultilizando forEACH
// alunosB.forEach(aluno => {
//     console.log(`${aluno.nome} - ${aluno.nota} - ${aluno.disciplina}`)
// });


//declarando array de objetos e suas propriedades 
let alunosB = [
        {nome: "Gabriel", nota: 9.5, disciplina: "Web"},
        {nome: "Abriel", nota: 9, disciplina: "IA"},
        {nome: "Briel", nota: 9.2, disciplina: "Banco de dados"}
];

//imprimindo no forEach
alunosB.forEach(aluno => {
    console.log(aluno);
})
//quabrando linha
console.log("\n");

//ultilizando o metodo push para adicionar  um novo objeto ao array de objetos
alunosB.push({nome: "Riel", nota: 9.7, disciplina: "Java"})
//imprimindo novamente
console.log(alunosB);


alunosB.forEach(aluno => {
    //aplicando ordem alfabetica no array de objeto usando a funcao sort
    
})



