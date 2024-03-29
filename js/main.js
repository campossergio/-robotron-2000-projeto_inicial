//const robotron = document.querySelector("#robotron");
// const subtrair = document.querySelector("#subtrair")
// const somar = document.querySelector("#somar");
//const braco = document.querySelector("#braco");

const controle = document.querySelectorAll("[data-controle]");
//console.log(controle);

controle.forEach( (elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
        atualizaEstatisticas(evento.target.dataset.peca);
    });
});

// somar.addEventListener("click", () => {
//     manipulaDados("somar");
// });

// subtrair.addEventListener("click", () => {
//     manipulaDados("subtrair");
// });

function manipulaDados(operacao, controle) {
    const peca = controle.querySelector("[data-contador]")

    if(operacao == "-") {
        peca.value = parseInt(peca.value) - 1;
    } else {
        peca .value = parseInt(peca.value) + 1;
    }
}


// robotron.addEventListener("click", function() {
//     console.log("Cliquei no Robô");
// });

// function dizOi(nome) {
//     console.log(`Oi,  ${nome}`);
//     console.log("Bem-vindo ao Robotron 2022");
// }

// dizOi("Sérgio Campos");

const estatisticas = document.querySelectorAll("[data-estatistica]");
//console.log(estatisticas);

function atualizaEstatisticas(peca) {
    //console.log(pecas[peca]);

    estatisticas.forEach( (elemento) => {
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
    });
}

const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },
    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -4
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 43
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

