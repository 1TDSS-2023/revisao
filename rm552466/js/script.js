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

// // Criando array de nomes de alunos
// let alunos = ["João", "Maria", "José", "Pedro", "Ana", "Carolina", "Francisco", "Paulo", "Carlos", "Fernanda"];
// console.log(alunos);
// // Aplicando o método sort para ordenar o array de nomes de alunos
// alunos.sort();
// // Imprimir o array de nomes de alunos
// console.log(alunos);

// // Invertendo a ordem do array de alunos com reverse
// alunos.reverse();
// // Imprimir o array de nomes de alunos
// console.log(alunos);

// // Removendo o ultimo elemento do array de alunos com pop
// alunos.pop();
// // Imprimir o array de nomes de alunos
// console.log(alunos);

// // Adicionando um novo elemento ao array com unshift
// alunos.unshift("Fernanda");
// // Imprimir o array de nomes de alunos
// console.log(alunos);

// // Removendo o primeiro elemento do array com shift
// alunos.shift();
// // Imprimir o array de nomes de alunos
// console.log(alunos);

// // Alterar elemento do array com splice
// alunos.splice(1, 1, "Joaquina");
// // Imprimir o array de nomes de alunos
// console.log(alunos);
// // Alterar elemento do array com splice
// alunos.splice(1, 2, "Thiago", "Jorge");

// // Remover elemento do array com splice
// alunos.splice(1, 1);

// const cursos = [
//   {nome: "HTML5", duracao: "3 meses"},
//   {nome: "CSS3", duracao: "4 meses"},
//   {nome: "JavaScript", duracao: "5 meses"}
// ];

// // Imprimir o array de objetos
// console.log(cursos);

// const nomeCursos = cursos.map(curso => curso.nome);
// // Imprimir o array de nomes de cursos
// console.log(nomeCursos);

// // Quebrar linha
// console.log("\n");

// //Criar um array de propagando de cursos com map
// const propCursos = cursos.map(curso => `O curso de ${curso.nome} possui duração de ${curso.duracao}`);
// //Imprimir array de propaganda de cursos com forEach
// propCursos.forEach(curso => console.log(curso));

// // Quebrar linha
// console.log("\n");

// // Criando uma propagando de cursos com map e template string utilizando o indice gerado pelo map para concatenar com o nome do curso
// const propCursos2 = cursos.map((curso, indice) => `O curso ${indice + 1} - ${curso.nome} possui duração de ${curso.duracao}`);
// // Imprimir array de propaganda de cursos com forEach
// propCursos2.forEach(curso => console.log(curso));

// // Criando um array de notas de 1 a 10
// const notasAluno = [3, 5, 8, 10, 7, 9, 6, 4, 2, 1];
// // Notas acima da média
// const notasAcimaMedia = notasAluno.filter(nota => nota >= 7);
// // Imprimir notas acima da média
// console.log(notasAcimaMedia);

// // Quebrar linha
// console.log("\n");

// // Notas pares
// const notasPares = notasAluno.filter(nota => nota % 2 == 0);
// // Imprimir notas pares
// console.log(notasPares);

// // Quebrar linha
// console.log("\n");

// Declarando um array de login com nome de usuário e senha
// const usuarios = [
//   { usuario: "João", senha: "123456" },
//   { usuario: "Maria", senha: "654321" },
//   { usuario: "Pedro", senha: "123321" },
//   { usuario: "Ana", senha: "321123" },
// ];

// // Verificar com o método filter se o usuário e senha estão corretos
// const logado = usuarios.filter(u => u.usuario == "João" && u.senha == "123456");
// // Imprimir o usuário logado
// console.log(logado);

// const numbers = [1, 2, 3, 4, 5, 6];
// const soma = numbers.reduce((valorAnterior, valorAtual) => valorAnterior + valorAtual);

// console.log(soma);

// const filaBrinquedo = [
//   { nome: "João", altura: 1.5, idade: 12},
//   { nome: "Maria", altura: 1.7, idade: 11},
//   { nome: "José", altura: 1.6, idade: 13},
//   { nome: "Pedro", altura: 1.4, idade: 12},
//   { nome: "Ana", altura: 1.5, idade: 12},
// ]

// const todaFilaPode = filaBrinquedo.every(pessoas => pessoas.altura >= 1.6);
// console.log(todaFilaPode);

// const passeio = [
//   { nome: "João", altura: 1.5, idade: 12},
//   { nome: "Maria", altura: 1.7, idade: 11},
//   { nome: "José", altura: 1.6, idade: 13},
//   { nome: "Pedro", altura: 1.4, idade: 12},
//   { nome: "Ana", altura: 1.5, idade: 12},
// ]

// const verificaIdade = passeio.some(pessoas => pessoas.idade >= 12);
// console.log(verificaIdade);

// const candidatos = [
//   { nome: "João", nota: 65},
//   { nome: "Maria", nota: 81},
//   { nome: "José", nota: 49},
//   { nome: "Pedro", nota: 55},
//   { nome: "Ana", nota: 75},
// ]

// const selecionado = candidatos.find( cand => cand.nota >= 70);
// console.log(`O candidato selecionado foi ${selecionado.nome} com a nota ${selecionado.nota}`);

const convidados = [
  "prof-Allen",
  "prof-Gabriel",
  "Lucas",
  "João",
  "prof-Gilberto"
]

const profConvidados = convidados.filter( convidado => convidado.includes("prof"));
console.log(profConvidados);