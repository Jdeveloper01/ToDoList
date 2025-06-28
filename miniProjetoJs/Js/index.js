
const overlay = document.getElementById('overlay');
const criarTarefa = document.getElementById('criarTarefa');
const lista = document.getElementById('lista');
const titulo = document.getElementById('titulo');
const descricao = document.getElementById('descricao');
const busca = document.getElementById('busca');


function abrirModal() {
    overlay.classList.add("active");
    criarTarefa.classList.add("active");
   
    titulo.value = '';
    descricao.value = '';
}

function fecharModal() {
    overlay.classList.remove("active");
    criarTarefa.classList.remove("active");
}


function buscarTarefas() {
    fetch("http://localhost:3000/tarefas")
        .then(res => {
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            return res.json();
        })
        .then(res => {
            inserirTarefas(res);
        })
        .catch(error => {
            console.error('Error fetching tasks:', error);
            lista.innerHTML = '<li class="error">Erro ao carregar tarefas. Verifique se o servidor está rodando.</li>';
        });
}


function inserirTarefas(listaDeTarefas) {
    if (listaDeTarefas.length > 0) {
        lista.innerHTML = "";
        listaDeTarefas.forEach(tarefa => {
            lista.innerHTML += `
                <li>
                    <h5>${tarefa.titulo}</h5>
                    <p>${tarefa.descricao}</p>
                    <div class="actions">
                        <i class="fa-solid fa-trash" onclick="deletarTarefa(${tarefa.id})"></i>
                    </div>
                </li>
            `;
        });
    } else {
        lista.innerHTML = '<li class="empty">Nenhuma tarefa registrada</li>';
    }
}


function novaTarefa(event) {
    if (event) {
        event.preventDefault();
    }
    
    let tarefa = {
        titulo: titulo.value.trim(),
        descricao: descricao.value.trim()
    };

    if (!tarefa.titulo || !tarefa.descricao) {
        alert('Por favor, preencha todos os campos');
        return;
    }

    fetch("http://localhost:3000/tarefas", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(tarefa)
    })
    .then(res => {
        if (!res.ok) {
            throw new Error('Network response was not ok');
        }
        return res.json();
    })
    .then(res => {
        fecharModal();
        buscarTarefas();
    })
    .catch(error => {
        console.error('Error creating task:', error);
        alert('Erro ao criar tarefa. Tente novamente.');
    });
}


function deletarTarefa(id) {
    if (confirm('Tem certeza que deseja deletar esta tarefa?')) {
        fetch(`http://localhost:3000/tarefas/${id}`, {
            method: "DELETE",
        })
        .then(res => {
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            buscarTarefas(); 
        })
        .catch(error => {
            console.error('Error deleting task:', error);
            alert('Erro ao deletar tarefa. Tente novamente.');
        });
    }
}


function buscarPorTitulo() {
    const termoBusca = busca.value.toLowerCase().trim();
    
    if (termoBusca === '') {
        buscarTarefas();
        return;
    }

    fetch("http://localhost:3000/tarefas")
        .then(res => res.json())
        .then(tarefas => {
            const tarefasFiltradas = tarefas.filter(tarefa => 
                tarefa.titulo.toLowerCase().includes(termoBusca) ||
                tarefa.descricao.toLowerCase().includes(termoBusca)
            );
            inserirTarefas(tarefasFiltradas);
        })
        .catch(error => {
            console.error('Error searching tasks:', error);
        });
}


document.addEventListener('DOMContentLoaded', function() {
    buscarTarefas();
    
    
    busca.addEventListener('input', buscarPorTitulo);
    
    
    const form = document.querySelector('#criarTarefa form');
    form.addEventListener('submit', novaTarefa);
});