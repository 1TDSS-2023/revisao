// console.log("Olá Mundo!");

//Criando a lista de tarefas array
let listaTarefasArray = [];

//Adicionando um listener ao botao de adicionar tarefa
const botaoAdicionaTarefa = document.querySelector("#btnAddTarefa");
botaoAdicionaTarefa.addEventListener("click",(evt)=>{
    evt.preventDefault();

    //Recuperar o input das tarefas
    const inputTarefa = document.querySelector("#idTarefa");

    //Inserindo o valor do input no array de tarefas.
    listaTarefasArray.push(inputTarefa.value);
    
    const listaTarefasArrayUl = document.querySelector("#lista-tarefas");
    
    //Criando um elemento list-item(li)
    let li = document.createElement("li");
    li.textContent = inputTarefa.value;

    //Adicionando o elemento li ao parentNode UL.
    listaTarefasArrayUl.appendChild(li);
    
    //Adicionando um botão dentro do li para excluir a tarefa.
    let botaApagaTarefa = document.createElement("button");

    //Adicionando um texto ao botao de apagar tarefas.
    botaApagaTarefa.textContent = " x ";

    //Adicionado uma classe ao botao de apagar tarefa
    botaApagaTarefa.setAttribute("class","exclui");

    //Adicionando o botão ao elemento li.
    li.appendChild(botaApagaTarefa);
    
    //Evento que será disparado quando clicarmos em x, ou seja, quando for
    //clicado na tarefa vai ser removida da lista e também do Array.
    botaApagaTarefa.addEventListener('click',(evento)=>{
                console.log(evento.target.parentNode.textContent.split(" ")[0]);
                 evento.target.parentNode.remove();
                 listaTarefasArray.forEach(tarefa=>{
                    
                    if(evento.target.parentNode.textContent.split(" ")[0] == tarefa){
                        listaTarefasArray.splice(listaTarefasArray.indexOf(tarefa),1);
                    }
                    console.log(listaTarefasArray);
                 });
    });

    inputTarefa.value = "";
});
