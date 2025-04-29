const precos = {
    "CAMISA": 4.99,
    "arroz": 99.99,
    "bombom": 88.99,
    "creme": 99.99,
    "uva": 55.99,
  };
  
  const estoque = {
    "CAMISA": 100,
    "arroz": 50,
    "bombom": 30,
    "creme": 20,
    "uva": 40,
  };
  
  function comprar() {
    const produto = document.getElementById("produtos").value;
    const qtd = parseInt(document.getElementById("qtd").value);
  
    if (isNaN(qtd) || qtd <= 0) {
      alert("Digite uma quantidade válida.");
      return;
    }
  
    if (qtd > estoque[produto]) {
      alert("Estoque insuficiente!");
      return;
    }
  
    estoque[produto] -= qtd;
    const total = precos[produto] * qtd;
  
    document.getElementById("resultado").innerHTML = 
      `Total: R$ ${total.toFixed(2)}<br>Estoque de ${produto}: ${estoque[produto]} unidades`;
  }
  