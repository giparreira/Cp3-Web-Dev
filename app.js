document.getElementById("formProduto").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const nome = document.getElementById("nome").value.trim()
    const preco = parseFloat(document.getElementById("preco").value)
    const categoria = document.getElementById("categoria").value
    const mensagemErro = document.getElementById("mensagemErro")
    const lista = document.getElementById("listaProdutos")
    
    mensagemErro.textContent = ""

        const erro = validarCampos(nome, preco, categoria)
    
    if (erro) {
        mensagemErro.textContent = erro
        return
    }
    
    const precoFormatado = preco.toFixed(2).replace('.', ',')
    
    const div = document.createElement("div")
    div.classList.add("produto")
    
    if (categoria === "tecnologia") {
        div.classList.add("tecnologia")
    } else if (categoria === "alimentos") {
        div.classList.add("alimentos")
    }
    switch (categoria) {
      case "tecnologia":
        div.style.fontWeight = "bold"
        break
      case "alimentos":
        div.style.backgroundColor = "#ffff00"
        break
    }
  
    div.textContent = `Produto: ${nome}; R$ ${precoFormatado}; Categoria: ${categoria}.`
    lista.appendChild(div)
  
    document.getElementById("formProduto").reset()
  })
  
  function validarCampos(nome, preco, categoria) {
    if (!nome) {
        return "Erro: campos inválidos ou vazios"
    }
    if (isNaN(preco) || preco <= 0) {
        return "Erro: campos inválidos ou vazios"
    }
    if (!categoria || categoria === "") {
        return "Erro: campos inválidos ou vazios"
    }
    return ""
        
  }

