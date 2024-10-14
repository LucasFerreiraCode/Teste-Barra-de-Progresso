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


let coresFundo = ["blue", "red", "green", "black"]
let indiceCor = 0;
function colorirFundo () {
    document.body.style.backgroundColor = coresFundo[indiceCor]

}

document.querySelector(".mudar-cor").onclick = colorirFundo;