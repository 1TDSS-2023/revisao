//console.log("hello world")

//Declarando um array de alunos
// var alunos = ["Joao", "Maria", "Jose"];

//Imprimindo array
// console.log(alunos);

//Imprimindo primeira posicao
// console.log(alunos[0]);


// //Declarando um objeto aluno
// let alunos = [
//                 { nome: "Joao", nota: 8, disciplina: "Matematica" }, 
//                 { nome: "Maria", nota: 9,disciplina: "Portugues" },
//                 { nome: "Jose", nota: 8,disciplina: "Ingles" }
//             ];

//Imprimindo objeto
//  console.log(alunos);

//  //Imprimindo primeira posicao
// console.log(alunos[0].nome);

// //imprimindo a primeira posicao do array de obbjetos e suas propriedades
// console.log(alunos[0].nome + " " + alunos[0].nota + " " + alunos[0].disciplina);


// //quebrando linha com \n
// console.log("Quebrando linha \n" );
//imprindo array de objetos e suas propriedades utilizaqndo o foreach e template string
// alunos.forEach(aluno => {
//     console.log(`${aluno.nome} - ${aluno.nota} - ${aluno.disciplina}`);
// });


//Declarando um objeto aluno
// let alunos = [
//     { nome: "Joao", nota: 8, disciplina: "Matematica" }, 
//     { nome: "Maria", nota: 9,disciplina: "Portugues" },
//     { nome: "Jose", nota: 8,disciplina: "Ingles" }
// ];

// //imprimir array de objetos
// alunos.forEach(aluno => {
//     console.log(aluno);
// });
// //quebrar linha
// console.log("\n");

// //utilizando o metodo Push para adicionar um novo objeto no array
// alunos.push({nome: "Pedro", nota: 10, disciplina: "Historia"});

// //quebrar linha
// console.log("\n");
// alunos.forEach(aluno => {
//     console.log(aluno);
// });

let alunos = ["Joao", "Maria", "Jose"];
console.log(alunos);
alunos.sort();
console.log(alunos);
alunos.reverse();
console.log(alunos);

alunos.pop();
console.log(alunos);

alunos.shift();
console.log(alunos);