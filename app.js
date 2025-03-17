let amigosInseridos = [];
let lista = document.getElementById('listaAmigos');

// Função responsável por adicionar amigos
function adicionarAmigo() {
    let nome = document.querySelector('input').value;

    if (nome == '') {
        alert("Você não pode deixar o espaço vazio!");
        return;
    } else {
        amigosInseridos.push(nome);
        limparCampo();
    }
    atualizarLista();
    console.log('Nome capturado: ', nome);
    return nome;
    
}

// Função responsável por limpar o campo
function limparCampo() {
    nome = document.querySelector('input');
    nome.value = '';
}

// Função resposável por atualizar a lista
function atualizarLista() {
    lista.innerHTML = ''; // Limpar a lista existente

    amigosInseridos.forEach(amigo => {
        let item = document.createElement('li');
        item.textContent = amigo;
        lista.appendChild(item);
    });
}

// Função responsável por sortear um amigo secreto
function sortearAmigo() {
    if (amigosInseridos.length === 0) {
        alert('Adicione pelo menos um amigo para realizar o sorteio!');
        return;
    }

    let amigoSorteado = amigosInseridos[Math.floor(Math.random() * amigosInseridos.length)];
    resultado.innerHTML = `<li>O amigo secreto é: ${amigoSorteado}</li>`;
}

// Função responsável por limpar a lista e recomeçar o sorteio
function limparLista() {
    amigosInseridos = [];
    atualizarLista();
    resultado.innerHTML = '';
}