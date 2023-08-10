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
// let alunos = ["João", "Maria", "José"];
// console.log(alunos);
// //Aplicando o metodo sort para ordenar o array de nomes de alunos
// alunos.sort();
// //Imprimir array de nomes de alunos
// console.log(alunos);

// //Invertendo a ordem do array com reverse
// alunos.reverse();
// //Imprimir array de nomes de alunos
// console.log(alunos);

// //Removendo o último elemento do array com pop
// alunos.pop();
// //Imprimir array de nomes de alunos
// console.log(alunos);

// //Adicionando um novo elemento ao array com unshift
// alunos.unshift("Pedro");
// //Imprimir array de nomes de alunos
// console.log(alunos);

// //Removendo o primeiro elemento do array com shift
// alunos.shift();
// //Imprimir array de nomes de alunos
// console.log(alunos);


// //Adicionando um novo elemento ao array com unshift
// alunos.unshift("Pedro");

// //Alterar elementos do array com splice
// alunos.splice(1, 1, "Joaquina");

// //Imprimir array de nomes de alunos
// console.log(alunos);

// //Alterar elementos do array com splice
// alunos.splice(1, 2, "Maria","Jorge");

// //Imprimir array de nomes de alunos
// console.log(alunos);

// //Removendo elementos do array com splice
// alunos.splice(2, 2);

// //Imprimir array de nomes de alunos
// console.log(alunos);

// const cursos = [
//     {nome: "HTML5", duracao: "3 meses"},
//     {nome: "CSS3", duracao: "4 meses"},
//     {nome: "JavaScript", duracao: "5 meses"}
// ];

// //Imprimir array de objetos
// console.log(cursos);

// //Quebrar linha
// console.log("\n");
// //Criar um array de nomes de cursos com map
// const nomeCursos = cursos.map(curso => curso.nome);
// //Imprimir array de nomes de cursos
// console.log(nomeCursos); 


// //Quebrar linha
// console.log("\n");
// //Criar um array de propaganda de cursos com map
// const propCursos = cursos.map(curso => `O curso de ${curso.nome} possui duração de ${curso.duracao}`);
// //Imprimir array de propaganda de cursos com forEach
// propCursos.forEach(propCurso => console.log(propCurso));
// //Quebrar linha
// console.log("\n");

// //Criando uma propaganda de cursos com map e template string utilizando o indice gerado pelo map para concatenar com o nome do curso.
// const propCursos2 = cursos.map((curso, indice) => `O curso ${indice + 1} - ${curso.nome} possui duração de ${curso.duracao}`);
// //Imprimir array de propaganda de cursos com forEach
// propCursos2.forEach(propCurso => console.log(propCurso));

//recuperar o elemento pelo select pelo id
// const selectCategoria = document.querySelector("#idCategoria");

// const categorias = [
//     {id: 1, nome: "Trabalho"},
//     {id: 2, nome: "Estudos"},
//     {id: 3, nome: "Lazer"},
//     {id: 4, nome: "Outros"}
// ];

// categorias.forEach(categoria => {
//     const option = document.createElement("option");
//     option.value = categoria.id;
//     option.textContent = categoria.nome;
//     selectCategoria.appendChild(option);
// }); 

// const notasAlunos = [ 3, 5, 8, 10, 7, 9, 6, 4, 2, 1];

// //Notas acima da média
// const notasAcimaMedia = notasAlunos.filter(nota => nota >= 7);
// console.log(notasAcimaMedia);
// //Quebra de linha
// console.log("\n");

// //Notas pares
// const notasPares = notasAlunos.filter(nota => nota % 2 == 0);
// console.log(notasPares);
// //Quebra de linha
// console.log("\n");

// //Declarando um array de objetos com nome de usuários e senha.
// const usuarios = [
//     {usuario: "João", senha: 123456},
//     {usuario: "Maria", senha: 654321},
//     {usuario: "José", senha: 123321},
//     {usuario: "Pedro", senha: 456789}
// ];

// //Verificar com o método filter se o usuário e senha estão corretos.
// const logado = usuarios.filter(u => u.usuario == "João" && u.senha == 123456);
// console.log(logado);

// const numbers = [1, 2, 3, 4, 5, 6];
//  const soma = numbers.reduce((acumulado, atual) => acumulado + atual);
//  console.log(soma);
// //Quebra de linha
// console.log("\n");

// const filaBrinquedo = [
//     {nome: "João", altura: 1.5, idade: 12},
//     {nome: "Maria", altura: 1.7, idade: 11},
//     {nome: "José", altura: 1.6, idade: 13},
//     {nome: "Pedro", altura: 1.4, idade: 10},
//     {nome: "Joaquina", altura: 1.8, idade: 12}
// ]

// const todaFilaPode = filaBrinquedo.every(pessoas => pessoas.altura >= 1.6);
// console.log(todaFilaPode);

// const passeio = [
//     {nome: "João", altura: 1.5, idade: 12},
//     {nome: "Maria", altura: 1.7, idade: 11},
//     {nome: "José", altura: 1.6, idade: 13},
//     {nome: "Pedro", altura: 1.4, idade: 10},
//     {nome: "Joaquina", altura: 1.8, idade: 12}
// ]
// const verificaIdade = passeio.some(pessoas => pessoas.idade >= 14);
// console.log(verificaIdade);

// const candidatos = [
//     {nome: "João", nota: 65},
//     {nome: "Rita", nota: 55},
//     {nome: "Sérgio", nota: 80},
//     {nome: "Valter", nota: 70}
// ]

// const selecionado = candidatos.find( cand => cand.nota >= 70);
// console.log(`${selecionado.nome} teve a nota ${selecionado.nota}!`);


const convidados = ["prof-Allen", "Lucass","Gilbert","prof-Luis","prof-Alexandre"]

const profsConvidados = convidados.filter(convid => convid.includes("prof"));
console.log(profsConvidados);
