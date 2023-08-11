//criando lista de tarefas

let tarefas = [];

//pegando elemento por id
const formTarefa = document.getElementById('id-form-tarefa');
const bodyTarefa = document.getElementById('id-tabela-body');
const ulLista = document.getElementById('ul-lista');

function atlzLista() {
    bodyTarefa.innerHTML = '';
    tarefas.forEach(function(tarefa, index) {
        const tr = document.createElement('tr');
        
        for (const prop in tarefa) {
            const td = document.createElement('td');
            td.textContent = tarefa[prop];  
            tr.append(td);  
        }

        const btnRemover = document.createElement('button');
        btnRemover.textContent = 'Remover';
        btnRemover.addEventListener('click', function() {
            tarefas.splice(index, 1);
            atlzLista();
        })

        const tdRemover = document.createElement('td');
        tdRemover.append(btnRemover);
        tr.append(tdRemover);
        bodyTarefa.append(tr);

    });
}

formTarefa.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const novaTarefa = {
        nome: document.getElementById('id-tarefa').value,
        descricao: document.getElementById('id-descricao').value,
        autor: document.getElementById('id-autor').value,
        departamento: document.getElementById('id-departamento').value,
        importancia: document.getElementById('id-importancia-tarefa').value,
        valor: document.getElementById('id-valor').value,
        duracao: document.getElementById('id-duracao').value
    };

    tarefas.push(novaTarefa);
    formTarefa.reset();
    atlzLista();
});