let numeroUm = document.getElementById("numberOne");
let numeroDois = document.getElementById("numberTwo");
let botaoGerar = document.getElementById("gerarNumeros");
let respostaUsuario = document.getElementById("userResult");
let resultado = document.getElementById("message");

botaoGerar.addEventListener("click", () => generateRandomNumber());

respostaUsuario.addEventListener("change", () => 
    verificaIgualdadeCalculo(somaNumeros(numeroUm.value, numeroDois.value), respostaUsuario.value)
);

function generateRandomNumber()
{
    numeroUm.value = Math.floor(Math.random() * 100);
    numeroDois.value = Math.floor(Math.random() * 100);
}

function somaNumeros(first, second)
{
    return parseInt(first) + parseInt(second);
}

function verificaIgualdadeCalculo(first, second)
{
    let mensagem;
    mensagem = first == second ? `A soma dos numeros gerados é igual ao resultado calculado (${second}). ` : `A soma dos numeros gerados é diferente do resultado calculado (${second}).  `;
    resultado.innerText = mensagem;
}