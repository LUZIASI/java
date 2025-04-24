const produtos = {
    "CAMISA": 49.90,
    "arroz": 99.90,
    "bombom": 88.99,
    "creme": 99.88,
    "uva" : 55.88,
};

function o() {
    let escolhaProduto = document.getElementById("produtos").value;
    let qtd = document.getElementById("qtd").value;
    let valortotal = produtos[escolhaProduto] * qtd;

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<p>Total a pagar por <strong>${qtd}</strong> unidade(s) de <strong>${escolhaProduto}</strong>: <strong>R$ ${valortotal.toFixed(2)}</strong></p>`;
}
