const progresso = document.querySelector(".barra div");
const input = document.querySelector("input");

const alterarProgresso = () => {
    let valor = input.value;

    if (valor >= 0 && valor <= 100) {
        progresso.style.width = valor + "%";
    } else {
        alert("Por favor, insira um valor entre 0 e 100.");
    }
}

function resetarProgresso() {
    progresso.style.width = "0%";
    input.value = "";
}


let coresFundo = ["Blue", "Red", "Green", "Black", "Yellow"]
let indiceCor = 0;
function colorirFundo () {
    document.body.style.backgroundColor = coresFundo[indiceCor];

    indiceCor = (indiceCor +1 ) % coresFundo.length;
}

document.querySelector(".mudar-cor").onclick = colorirFundo;