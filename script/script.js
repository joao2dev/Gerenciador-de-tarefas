
const butao = document.getElementById('enviarNome');

butao.addEventListener('click', function (event) {
    event.preventDefault();
    const nome = document.getElementById('nomeUsuario');
    const valor = nome.value;

    const novoTitulo = document.querySelector('.novoTitulo');
    novoTitulo.innerHTML = '<h2>Olá, ' + valor + '!<h3>começe a fazer sua lista de tarefas</h3></h2>';
});
let tarefas = [];

const salvarTarefa = document.getElementById('salvarTarefa');

salvarTarefa.addEventListener('click', function (event) {
    event.preventDefault();

    const tarefaInput = document.getElementById('tarefaUsuario');
    const tarefaValor = tarefaInput.value;
    tarefas.push(tarefaValor);
    console.log(tarefas);

    atualizarLista();
});

function atualizarLista() {
    const listaTarefas = document.getElementById('listaTarefas');
    listaTarefas.innerHTML = "";

    for (let i = 0; i < tarefas.length; i++) {
        listaTarefas.innerHTML += 
            '<input type="checkbox">' +
            tarefas[i] +
            '<button class="apagarTarefa" data-index="' + i + '">Excluir</button><br>';
    }

    
    const botoes = document.querySelectorAll('.apagarTarefa');
    botoes.forEach(botao => {
        botao.addEventListener('click', function() {
            const index = this.getAttribute('data-index');
            tarefas.splice(index, 1); 
            atualizarLista(); 
        });
    });
}
