var produtos = [{nomeProduto: "Maçã", precoProduto: "7.5"}];

function adicionarProdutos()
{
    produtos.push({nomeProduto: "", precoProduto: ""});
    carregarProdutos();
}

function carregarProdutos()
{
    let $productsContainer = document.getElementById("products"); 
    $productsContainer.innerHTML = "";
    produtos.forEach((element) => 
    {
        let nomeProduto = element.nomeProduto;
        let precoProduto = element.precoProduto;
        let $product_container = `
        <section class="product">
            <section>
            <h2>Digite as informações do produto: </h2>
            <input class="nome" title="Nome do produto" type="text" value="${nomeProduto}">
            <input class="preco" title="Preço do produto" type="text" value="${precoProduto}">
            <section class="action">
                <a href="#" class="salvar">Salvar</a>
                <a href="#" class="remover">Remover</a>
            </section>
            </section>
        </section>
        `;
        $productsContainer.innerHTML += $product_container;
    });
    salvarProdutos();
    removerProdutos();
}

function removerProdutos()
{
    document.querySelectorAll("#products .remover").forEach((element, selectedItem) => 
    {
        element.addEventListener("click", () => 
        {
            produtos.splice(selectedItem, 1);
            carregarProdutos();
        });
    });
}

function salvarProdutos()
{
    document.querySelectorAll("#products .salvar").forEach((element, selectedItem) => 
    {
        element.addEventListener("click", () => 
        {
            let nomeItem = element.parentElement.parentElement.querySelector(".nome").value;
            let precoItem = element.parentElement.parentElement.querySelector(".preco").value;
            if (!nomeItem.length || !precoItem.length)
            {
                alert("Por gentileza, informe o nome e o preço do produto.");
                return false;
            }
            produtos.splice(selectedItem, 1, 
                {
                    nomeProduto : nomeItem,
                    precoProduto : precoItem
                }
            );
            carregarProdutos();
        });
    });
}

document.getElementById("adicionarProduto").addEventListener("click", adicionarProdutos);
carregarProdutos();

document.getElementById("showItems").addEventListener("click", () => 
{
    document.getElementById("container-show-products-price").innerHTML = JSON.stringify(produtos, undefined, 4);
});

