const botao = document.getElementById('enviarNome');
const navCadastro = document.getElementById('cadastro');
const container = document.getElementById('container');
botao.addEventListener('click', function (event) {

    event.preventDefault();

    navCadastro.style.display = "none";
    container.classList.add('active');

    const nome = document.getElementById('nomeUsuario').value.trim();

    const novoTitulo = document.querySelector('.novoTitulo');
    novoTitulo.innerHTML =
        `<h2>Olá, ${nome}!</h2>
         <h5>Comece a fazer sua lista de tarefas:</h5>`;
});

let tarefas = [];

const salvarTarefa = document.getElementById('salvarTarefa');

salvarTarefa.addEventListener('click', function(event){

    event.preventDefault();

    const input = document.getElementById('tarefaUsuario');
    const valor = input.value.trim();

    if(valor === "") return;

    tarefas.push(valor);
    input.value = "";

    atualizarLista();
});

function atualizarLista() {
    const listaTarefas = document.getElementById('listaTarefas');
    listaTarefas.innerHTML = "";

    for (let i = 0; i < tarefas.length; i++) {

      listaTarefas.innerHTML += `
    <div class="card mb-3 shadow-sm">
    <div class="card-body d-flex align-items-center">

        <input class="form-check-input me-2" type="checkbox">

        <span class="flex-grow-1 text-start">
            ${tarefas[i]}
        </span>

        <button class="btn btn-danger btn-sm apagarTarefa" data-index="${i}">
            Excluir
        </button>

    </div>
        </div>
`;
    }

    // Eventos de exclusão
    const botoes = document.querySelectorAll('.apagarTarefa');

    botoes.forEach(botao => {
        botao.addEventListener('click', function () {
            const index = this.getAttribute('data-index');
            tarefas.splice(index, 1);
            atualizarLista();
        });
    });
}

    document.querySelectorAll('.apagarTarefa').forEach(botao => {
        botao.addEventListener('click', function () {
            const index = this.getAttribute('data-index');
            tarefas.splice(index, 1);
            atualizarLista();
        });
    });


    document.querySelectorAll('.apagarTarefa').forEach(botao=>{
        botao.addEventListener('click', function(){
            const index = this.getAttribute('data-index');
            tarefas.splice(index,1);
            atualizarLista();
        });
    });
