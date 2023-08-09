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
// let alunos = [
//     {nome: "João", nota: 8, disciplina: "Português"},
//     {nome: "Maria", nota: 9, disciplina: "Matemática"},
//     {nome: "José", nota: 8, disciplina: "História"}
// ];
// //Imprimir um array de objetos no forEach
// alunos.forEach(aluno => {
//     console.log(aluno);
// });
// //Quebrar linha
// console.log("\n");

// //Utilizando o método PUSH adicionar um novo objeto ao array de objetos
// alunos.push({nome : "Pedro", nota: 10, disciplina: "Geografia"});
// //Imprimir um array de objetos no forEach
// alunos.forEach(aluno => {
//     console.log(aluno);
// });
// //Quebrar linha
// console.log("\n");

// const cursos = [
//     {'nome': 'HTML5', 'duracao': '3 meses'},
//     {'nome': 'CSS3', 'duracao': '4 meses'},
//     {'nome': 'JavaScript', 'duracao': '5 meses'}
// ];

// //Imprimir um array de objetos
// console.log(cursos);

// //Quebrar linha
// console.log("\n");
// //Criar um array de nomes de cursos
// const nomeCursos = cursos.map(curso => curso.nome);
// //Imprimir array de nomes de cursos
// console.log(nomeCursos);

// //Quebrar linha
// console.log("\n");
// //Criar um array de propaganda de cursos com map
// const propCursos = cursos.map(curso => 'O curso de ' + curso.nome + ' tem duração de ' + curso.duracao);
// //Imprimir array de propaganda de cursos com forEach
// propCursos.forEach(propCurso => console.log(propCurso));
// //Quebrar linha
// console.log("\n");

// //Criando uma propaganda de cursos com map e template string utilizando o indice gerado pelo map para concatenar com o nome do curso
// const propCursos2 = cursos.map((curso, indice) => `O curso ${indice + 1} é o curso de ${curso.nome} e tem duração de ${curso.duracao}`);
// //Imprimir array de propaganda de cursos com forEach
// propCursos2.forEach(propCurso => console.log(propCurso));

// const notasAlunos = [ 3, 5, 8, 10, 7, 9, 6, 4, 2, 1 ];

// //Notas acima da média
// const notasAcimaMedia = notasAlunos.filter(nota => nota >= 7);
// console.log(notasAcimaMedia);
// //Quebrar linha
// console.log("\n");

// //Notas pares
// const notasPares = notasAlunos.filter(nota => nota % 2 == 0);
// console.log(notasPares);
// //Quebrar linha
// console.log("\n");

//Declaração de um array de objetos com nome de usuários e senha.
// const usuarios = [
//     {nome: "João", senha: 123},
//     {nome: "Maria", senha: 456},
//     {nome: "José", senha: 789}
// ];

// //Verificar com o método filter se o usuário e senha estão corretos
// const logado = usuarios.filter(usuario => usuario.nome == "João" && usuario.senha == 123);
// console.log(logado);

