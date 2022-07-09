var products = [{nameProduct: "Maçã", priceProduct: 7.5}];

function adicionarProdutos()
{
    products.push({nameProduct: "", priceProduct: "0"});
    carregarProdutos();
}

function carregarProdutos()
{
    let $productsContainer = document.getElementById("products"); 
    $productsContainer.innerHTML = "";
    products.forEach((element) => 
    {
        let nomeProduto = element.nameProduct;
        let precoProduto = element.priceProduct;
        let $product_container = `
        <section class="product">
            <h2>Digite as informações do produto </h2>
            <input class="nome" title="Nome do produto" type="text" value="${nomeProduto}">
            <input class="preco" title="Preço do produto" type="number" value="${precoProduto}">
            <section class="action">
                <a href="#" class="salvar">Salvar</a>
                <a href="#" class="remover">Remover</a>
            </section>
        </section>
        `;
        $productsContainer.innerHTML += $product_container;
    });
    salvarProdutos();
    removerProdutos();
} 

function orcamentoProdutos()
{
    if (products.length == 0) {
        return `Não há produtos para se ter um orçamento calculado.`;
    }
    if (products.length == 1)
    {
        const valor = products.at(0).priceProduct;
        return `Total: R$${valor}`;
    }
    if (products.length > 1) {
        const prices = products.map((item) => item.priceProduct);
        const initialValue = 0;
        const sumPrices = prices.reduce((previousValue, currentValue) => parseFloat(previousValue) + parseFloat(currentValue), initialValue);
        return `Total: R$${sumPrices}`;
    }
}

function removerProdutos()
{
    document.querySelectorAll(".action .remover").forEach((element, selectedItem) => 
    {
        element.addEventListener("click", () => 
        {
            products.splice(selectedItem, 1);
            carregarProdutos();
        });
    });
}

function salvarProdutos()
{
    document.querySelectorAll(".action .salvar").forEach((element, selectedItem) => 
    {
        element.addEventListener("click", () => 
        {
            let nomeItem = element.parentElement.parentElement.querySelector(".nome").value;
            let precoItem = element.parentElement.parentElement.querySelector(".preco").value;
            if (!nomeItem.length)
            {
                alert("Por gentileza, informe o nome do produto.");
                return false;
            }
            if (!precoItem.length) {
                alert("Por gentileza, informe o preço do produto.");
                return false;
            }
            products.splice(selectedItem, 1, {nameProduct : nomeItem, priceProduct : precoItem});
            carregarProdutos();
        });
    });
    orcamentoProdutos();
}

document.getElementById("adicionarProduto").addEventListener("click", adicionarProdutos);
carregarProdutos();

document.getElementById("showItems").addEventListener("click", () => 
{
    document.getElementById("preco").innerHTML = orcamentoProdutos();
});

