/* js/catalogo.js */

const bolsas = [
    { modelo: "Bolsa Pradinha", imagem: "assets/catalogo/bolsa-1.png", temVerso: true, preco: 320 },
    { modelo: "Bolsa Ariel", imagem: "assets/catalogo/bolsa-2.png", temVerso: true, preco: 260 },
    { modelo: "Bolsa Wave", imagem: "assets/catalogo/bolsa-3.png", temVerso: true, preco: 550 },
    { modelo: "Bolsa Tutto", imagem: "assets/catalogo/bolsa-6.png", temVerso: true, preco: 240 },
    { modelo: "Bolsa Diamante", imagem: "assets/catalogo/bolsa-11.png", temVerso: true, preco: 255 },
    { modelo: "Bolsa Esmeralda", imagem: "assets/catalogo/bolsa-13.png", temVerso: true, preco: 315 },
    { modelo: "Bolsa Fifi", imagem: "assets/catalogo/bolsa-14.png", temVerso: true, preco: 360 },
    { modelo: "Bolsa Valentina", imagem: "assets/catalogo/bolsa-15.png", temVerso: true, preco: 550 },
    { modelo: "Bolsa Patricia", imagem: "assets/catalogo/bolsa-16.png", temVerso: true, preco: 270 },
    { modelo: "Bolsa Clara", imagem: "assets/catalogo/bolsa-17.png", temVerso: true, preco: 370 },
    { modelo: "Bolsa Catarina", imagem: "assets/catalogo/bolsa-4.png", temVerso: false, preco: 310 },
    { modelo: "Bolsa Loren", imagem: "assets/catalogo/bolsa-5.png", temVerso: false, preco: 320 },
    { modelo: "Bolsa Elegance", imagem: "assets/catalogo/bolsa-7.png", temVerso: false, preco: 330 },
    { modelo: "Bolsa Carla", imagem: "assets/catalogo/bolsa-9.png", temVerso: false, preco: 350 },
    { modelo: "Bolsa Athenas", imagem: "assets/catalogo/bolsa-10.png", temVerso: false, preco: 560 },
    { modelo: "Carteira Alice", imagem: "assets/catalogo/bolsa-12.png", temVerso: false, preco:180 },
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
