const progresso = document.querySelector(".barra div")
const input = document.querySelector("input");

const alterarProgresso = () => {

    progresso.setAttribute("style", "width: " + input.value + "%");
}