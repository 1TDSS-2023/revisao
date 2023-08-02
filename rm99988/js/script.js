// //console.log("hello world!");

// //declarando um array de alunos

// var alunos =["joao","maria","jose"];
// //imprimir array de alunos
// console.log(alunos);
// //imprimir a primeira posição do array de alunos
// console.log(alunos[0]);

// //declarar um array de array de alunos
// var alunos = [
//     ["joao",8 ,7, 8.5],
//     ["maria",3 ,4, 5],
//     ["jose",4,6,7]
// ];

// //impimir um array de array de alunos
// console.log(alunos);

// //imprimir a primeira posição do array de array de alunos
// console.log(alunos[0]);

// //declarar um array de objetos

//ctrl ; comenta tudo de uma vez

// let alunos =[
//     {nome:"joao", nota: 8, disciplina:"Português"},
//     {nome:"maria", nota: 5, disciplina:"Português"},
//     {nome:"jose", nota: 8, disciplina:"Português"},
//     //sempre que criar objeto (nome) de um valor (joao)
// ]

// //imprimir um array de objetos
// console.log(alunos);

// //imprimir as posiçoes do array de objetos

// console.log(alunos[0]["nome"]);
// console.log(alunos[0].nome, alunos[0].nota, alunos[0].disciplina);


// //imprimir a segunda posição do array de objetos e suas propriedades utilizando forEach 

// //imprimir array de objetos e suas propriedades utilizando for e template string
// alunos.forEach(aluno => {
//     console.log(`${aluno.nome} - ${aluno.nota} - ${aluno.disciplina}`);

// });

//declarando um array de objetos e propriedads
// let alunos =[
//     {nome:"joao", nota: 8, disciplina:"Português"},
//     {nome:"maria", nota: 5, disciplina:"Português"},
//     {nome:"jose", nota: 8, disciplina:"Português"},
//     //sempre que criar objeto (nome) de um valor (joao)
// ]

// //utilizando o método PUSH para adicionar um noo objeto ao array de objetos

// alunos.push({nome:"pedro", nota:10, disciplina:"Geografia"});

// //imprimir array de objetos
// console.log(alunos);

// //quebra de linha
// console.log("\n");

//aplicando ordem alfabetica no array simples com o metodo SORT.

let alunos = ["joao","maria", "jose"];
//aplicando metodo sort para ordenrar o array de nomes
alunos.sort()

console.log(alunos)

//invertendo a ordem do array com reverse

alunos.reverse();

console.log(alunos);

// removendo o ultimo elemento do array com pop
alunos.pop();

console.log(alunos);

//adicionando um novo elemento ao array com unshift

alunos.unshift("pedro");

console.log(alunos);

//removendo o primeiro elemento do array com shift

alunos.shift();
console.log(alunos);

//alterar os elementos do array com splice
alunos.splice(1,1,"joaquina");

console.log(alunos);
