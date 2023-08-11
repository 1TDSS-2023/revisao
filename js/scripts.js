let tarefas = [];

const formTarefa = document.getElementById('form-tarefa');
const corpoTabelaTarefas = document.getElementById('corpo-tabela-tarefas');
const ulListaOrdenada = document.getElementById('ul-lista-ordenada');

function atualizarLista() {
    corpoTabelaTarefas.innerHTML = '';
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
            atualizarLista();
        });
        
        const tdRemover = document.createElement('td');
        tdRemover.append(btnRemover);
        tr.append(tdRemover);
        
        corpoTabelaTarefas.append(tr);
    });

    ulListaOrdenada.innerHTML = '';
    const tarefasOrdenadas = [...tarefas].sort((a, b) => a.importancia.localeCompare(b.importancia));
    tarefasOrdenadas.forEach(function(tarefa) {
        const li = document.createElement('li');
        li.textContent = `${tarefa.nome} - ${tarefa.descricao}`;
        ulListaOrdenada.append(li);
    });
}

formTarefa.addEventListener('submit', function(event) {
    event.preventDefault();

    const novaTarefa = {
        nome: document.getElementById('inpt-nome-tarefa').value,
        descricao: document.getElementById('inpt-descricao-tarefa').value,
        autor: document.getElementById('inpt-autor-tarefa').value,
        departamento: document.getElementById('inpt-departamento-tarefa').value,
        importancia: document.getElementById('inpt-importancia-tarefa').value,
        valor: document.getElementById('inpt-valor-tarefa').value,
        duracao: document.getElementById('inpt-duracao-tarefa').value
    };

    tarefas.push(novaTarefa);
    formTarefa.reset();
    atualizarLista();
});

// Filtrar a tabela por importância
const selectFiltroImportancia = document.getElementById('select-filtro-importancia');
const btnFiltrar = document.getElementById('btn-filtrar');

function filtrarTarefas() {
    const importanciaSelecionada = selectFiltroImportancia.value;
    let tarefasParaExibir;

    if (importanciaSelecionada === "todas") {
        tarefasParaExibir = tarefas;
    } else {
        tarefasParaExibir = tarefas.filter(tarefa => tarefa.importancia === importanciaSelecionada);
    }

    corpoTabelaTarefas.innerHTML = '';

    tarefasParaExibir.forEach(function(tarefa, index) {
        const tr = document.createElement('tr');

        for (const prop in tarefa) {
            const td = document.createElement('td');
            td.textContent = tarefa[prop];
            tr.append(td);
        }

        const btnRemover = document.createElement('button');
        btnRemover.textContent = 'Remover';
        btnRemover.addEventListener('click', function() {
            const indiceReal = tarefas.indexOf(tarefa);
            if (indiceReal > -1) {
                tarefas.splice(indiceReal, 1);
            }
            filtrarTarefas();
        });

        const tdRemover = document.createElement('td');
        tdRemover.append(btnRemover);
        tr.append(tdRemover);

        corpoTabelaTarefas.append(tr);
    });
}


btnFiltrar.addEventListener('click', filtrarTarefas);