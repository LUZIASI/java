let valortitulo = document.getElementById("tituloprincipal").innerText;
console.log(valortitulo);
// função que altera o conteudo do titulo
function alterartitulo(){
    document.getElementById("tituloprincipal").innerHTML = "titulo alterado com sucesso";
    
    window.alert("titulo alterado com sucesso");
}
function desfazeralteracao(){
document.getElementById("tituloprincipal").innerHTML = valortitulo
}