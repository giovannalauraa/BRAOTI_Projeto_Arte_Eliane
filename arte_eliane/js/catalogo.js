/* js/catalogo.js */

const bolsas = [
    { modelo: "Bolsa modelo 1", imagem: "assets/catalogo/bolsa-1.png", temVerso: true },
    { modelo: "Bolsa modelo 2", imagem: "assets/catalogo/bolsa-2.png", temVerso: true },
    { modelo: "Bolsa modelo 3", imagem: "assets/catalogo/bolsa-3.png", temVerso: true },
    { modelo: "Bolsa modelo 6", imagem: "assets/catalogo/bolsa-6.png", temVerso: true },
    { modelo: "Bolsa modelo 11", imagem: "assets/catalogo/bolsa-11.png", temVerso: true },
    { modelo: "Bolsa modelo 13", imagem: "assets/catalogo/bolsa-13.png", temVerso: true },
    { modelo: "Bolsa modelo 14", imagem: "assets/catalogo/bolsa-14.png", temVerso: true },
    { modelo: "Bolsa modelo 15", imagem: "assets/catalogo/bolsa-15.png", temVerso: true },
    { modelo: "Bolsa modelo 16", imagem: "assets/catalogo/bolsa-16.png", temVerso: true },
    { modelo: "Bolsa modelo 17", imagem: "assets/catalogo/bolsa-17.png", temVerso: true },
    { modelo: "Bolsa modelo 4", imagem: "assets/catalogo/bolsa-4.png", temVerso: false },
    { modelo: "Bolsa modelo 5", imagem: "assets/catalogo/bolsa-5.png", temVerso: false },
    { modelo: "Bolsa modelo 7", imagem: "assets/catalogo/bolsa-7.png", temVerso: false },
    { modelo: "Bolsa modelo 8", imagem: "assets/catalogo/bolsa-8.png", temVerso: false },
    { modelo: "Bolsa modelo 9", imagem: "assets/catalogo/bolsa-9.png", temVerso: false },
    { modelo: "Bolsa modelo 10", imagem: "assets/catalogo/bolsa-10.png", temVerso: false },
    { modelo: "Bolsa modelo 12", imagem: "assets/catalogo/bolsa-12.png", temVerso: false },
];
const catalogoGrid = document.getElementById("catalogo-grid");
const paginacaoDiv = document.getElementById("paginacao");

const itensPorPagina = 12;
let paginaAtual = 1;
const totalPaginas = Math.ceil(bolsas.length / itensPorPagina);

function renderizarCatalogo() {
    catalogoGrid.innerHTML = "";
    const inicio = (paginaAtual - 1) * itensPorPagina;
    const fim = inicio + itensPorPagina;
    const bolsasPagina = bolsas.slice(inicio, fim);

    bolsasPagina.forEach((bolsa) => {
    const card = document.createElement("article");
    card.classList.add("catalogo-card");

    if (bolsa.temVerso) {
        card.innerHTML = `
            <div class="card-inner">
                <div class="card-front">
                    <img src="${bolsa.imagem}" alt="${bolsa.modelo}" />
                </div>
                <div class="card-back">
                    <img src="${bolsa.imagem.replace('.png', '-back.png')}" alt="${bolsa.modelo} verso" />
                </div>
            </div>
            <div class="info">
                <h2>${bolsa.modelo}</h2>
                <span class="preco">R$ 1.000,00</span>
            </div>
        `;
    } else {
        card.innerHTML = `
            <div class="card-inner sem-verso">
                <div class="card-front">
                    <img src="${bolsa.imagem}" alt="${bolsa.modelo}" />
                </div>
            </div>
            <div class="info">
                <h2>${bolsa.modelo}</h2>
                <span class="preco">R$ 1.000,00</span>
            </div>
        `;
    }

    catalogoGrid.appendChild(card);
});


    renderizarPaginacao();
}

function renderizarPaginacao() {
    paginacaoDiv.innerHTML = "";

    for (let i = 1; i <= totalPaginas; i++) {
        const botao = document.createElement("button");
        botao.textContent = i;

        if (i === paginaAtual) {
            botao.classList.add("ativo");
            botao.disabled = true;
        }

        botao.addEventListener("click", () => {
            paginaAtual = i;
            renderizarCatalogo();
        });

        paginacaoDiv.appendChild(botao);
    }
}

renderizarCatalogo();
