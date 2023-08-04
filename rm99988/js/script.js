// document.addEventListener("DOMContentLoaded", function () {
//     const formulario = document.getElementById("formulario");
//     const input = document.getElementById("Input");
//     const listaTarefa = document.getElementById("ListaTarefa");
  
//     formulario.addEventListener("submit", function (event) {
//       event.preventDefault(); // Impede o envio padrão do formulário
  
//       const novaTarefa = input.value;
//       if (novaTarefa.trim() !== "") {
//         const itemLista = document.createElement("li");
//         itemLista.innerText = novaTarefa;
//         listaTarefa.appendChild(itemLista);
  
//         input.value = ""; // Limpa o campo de entrada após adicionar a tarefa
//       }
//     });
// });

//criando uma lista de tarefasa array
let listaTarefaArray =[];

//adicionando um listener ao botao de adicionar tarefa
const botaoAdicionarTarefa  = document.querySelector("#btnaddTarefa");

botaoAdicionarTarefa.addEventListener("click",() =>{
//recuperar o input da tarefa
    const inputTarefa = document.querySelector("#idTarefa");

    //inserindo o valor do input no array de tarefas
    listaTarefaArray.push(inputTarefa.value);
    inputTarefa.value="";

    const listaTarefaArrayUl = document.querySelector("lista-tarefas");

    //criando um elemento list item (li)
    let li = document.createElement("li");

    li.textContent = inputTarefa.value;

    //adicionando o elemento li a um parentNode Ul

    listaTarefaArrayUl.appendChild(li);



    //adicionando um botão para excluir a tarefa

    let botaoApagaTarefa =  document.createElement("button");


//adicionando um texto ao botao de apagar tarefas

    botaoApagaTarefa.textContent = "x";


    //adicionando uma calasse ao botao de apagar tarefa

    botaoApagaTarefa.setAttribute("class","exclui");

//adicionando o bota oao elemento li

    li.appendChild(botaoApagaTarefa);


//evento sera disparado ao clicarmos em 'x' ou seja a tarefa sera excluida do array
    botaoApagaTarefa.addEventListener('click',(evento)=>{
        listaTarefaArray.forEach((tarefa, index) =>{
            if(evento.target.parentNode.value == tarefa)
    });

    });

    inputTarefa.value ="";




});

