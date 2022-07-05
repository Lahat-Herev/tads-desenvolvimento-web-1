const productName = document.getElementById("product-name").value;
const productPrice = document.getElementById("product-price").value;
const saveProduct = document.getElementById("saveProduct");
const result = document.getElementById("result");

const produtos = {
    item: [{
        productName,
        productPrice
    }]
};

function criaProduto(dados) {
    produtos.item.push({
        productName : dados.productName,
        productPrice : dados.productPrice
    });
}

saveProduct.addEventListener("click", criaProduto({productName : productName, productPrice : productPrice}));
