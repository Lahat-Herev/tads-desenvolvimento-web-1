let estado = document.getElementById("estado");

estado.addEventListener("change", () => showMessage(estado.value));

let resultado = document.getElementById("message");

function showMessage(value)
{
    const answer = value === "Paraná" ? "Agendamento liberado. " : "Não liberado. "; 
    resultado.innerText = answer;
}