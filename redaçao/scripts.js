function salvarRedacao() {
    const redacaoText = document.getElementById("redacao-text").value;
    
    if (redacaoText.trim() === "") {
        alert("Por favor, escreva algo antes de enviar.");
        return;
    }

    const ul = document.getElementById("lista-redacoes");
    const li = document.createElement("li");
    li.textContent = redacaoText;
    ul.appendChild(li);

    document.getElementById("redacao-text").value = "";
}