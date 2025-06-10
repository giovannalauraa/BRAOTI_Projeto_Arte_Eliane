/* js/catalogo.js */

const bolsas = [
    { modelo: "Bolsa Pradinha", imagem: "assets/catalogo/bolsa-1.png", temVerso: true, preco: 1200 },
    { modelo: "Bolsa Modelo 1", imagem: "assets/catalogo/bolsa-2.png", temVerso: true, preco: 1100 },
    { modelo: "Bolsa Wave", imagem: "assets/catalogo/bolsa-3.png", temVerso: true, preco: 950 },
    { modelo: "Bolsa Tutto", imagem: "assets/catalogo/bolsa-6.png", temVerso: true, preco: 1300 },
    { modelo: "Bolsa modelo 11", imagem: "assets/catalogo/bolsa-11.png", temVerso: true, preco: 1250 },
    { modelo: "Bolsa Esmeralda", imagem: "assets/catalogo/bolsa-13.png", temVerso: true, preco: 1400 },
    { modelo: "Bolsa modelo 14", imagem: "assets/catalogo/bolsa-14.png", temVerso: true, preco: 1150 },
    { modelo: "Bolsa modelo 15", imagem: "assets/catalogo/bolsa-15.png", temVerso: true, preco: 980 },
    { modelo: "Bolsa modelo 16", imagem: "assets/catalogo/bolsa-16.png", temVerso: true, preco: 890 },
    { modelo: "Bolsa modelo 17", imagem: "assets/catalogo/bolsa-17.png", temVerso: true, preco: 1000 },
    { modelo: "Bolsa Catarina", imagem: "assets/catalogo/bolsa-4.png", temVerso: false, preco: 1050 },
    { modelo: "Bolsa Loren", imagem: "assets/catalogo/bolsa-5.png", temVerso: false, preco: 1190 },
    { modelo: "Bolsa Elegance", imagem: "assets/catalogo/bolsa-7.png", temVerso: false, preco: 1350 },
    { modelo: "Bolsa modelo 8", imagem: "assets/catalogo/bolsa-8.png", temVerso: false, preco: 960 },
    { modelo: "Bolsa Carla", imagem: "assets/catalogo/bolsa-9.png", temVerso: false, preco: 990 },
    { modelo: "Bolsa Athenas", imagem: "assets/catalogo/bolsa-10.png", temVerso: false, preco: 1020 },
    { modelo: "Carteira Alice", imagem: "assets/catalogo/bolsa-12.png", temVerso: false, preco: 450 },
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
                    <span class="preco">R$ ${bolsa.preco.toFixed(2).replace('.', ',')}</span>
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
                    <span class="preco">R$ ${bolsa.preco.toFixed(2).replace('.', ',')}</span>
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
