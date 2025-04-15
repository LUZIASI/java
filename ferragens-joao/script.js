
//dicionario
const produtos = {
    "CAMISA": 49.90,
    "arroz": 99.90,
    "bombom": 88.99,
    "creme": 99.88,
    "uva" : 55.88,
};
function o() {
    //ACESSAR O CAMPO PRODUTO
    let escolhaProduto = document.getElementById("produtos").value; //nome do produto
    //ACESSAR QUANTIDADE
    let qtd = document.getElementById("qtd").value;
    let valortotal = produtos[escolhaProduto] * qtd;
    console.log(valortotal)
}