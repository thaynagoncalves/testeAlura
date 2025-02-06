document.addEventListener("DOMContentLoaded", () => {
    let amigos = [];

    const inputNome = document.querySelector("#inputNome");
    const botaoAdicionar = document.querySelector("#botaoAdicionar");
    const listaNomes = document.querySelector("#listaNomes");
    const botaoSortear = document.querySelector("#botaoSortear");
    const resultado = document.querySelector("#resultado");

    function atualizarLista() {
        listaNomes.innerHTML = "";
        amigos.forEach((amigo) => {
            const item = document.createElement("li");
            item.textContent = amigo;
            listaNomes.appendChild(item);
        });
    }

    function adicionarAmigo() {
        const nome = inputNome.value.trim();
        if (nome === "") {
            alert("Por favor, insira um nome.");
            return;
        }
        amigos.push(nome);
        inputNome.value = "";
        atualizarLista();
    }

    function sortearAmigo() {
        if (amigos.length === 0) {
            alert("Adicione pelo menos um nome antes de sortear!");
            return;
        }
        const sorteado = amigos[Math.floor(Math.random() * amigos.length)];
        resultado.textContent = `O amigo secreto sorteado é: ${sorteado}`;
    }

    botaoAdicionar.addEventListener("click", adicionarAmigo);
    botaoSortear.addEventListener("click", sortearAmigo);
});