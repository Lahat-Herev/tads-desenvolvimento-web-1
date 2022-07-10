const imagens = ["bolinha.jpg", "breedito.png", "perrito.jpg", "winer.jpg"];
const switchImage = document.getElementById("changeImage");
const img = document.getElementById("image-picker"); 

function changeImage()
{
    let newImage = Math.floor(Math.random() * imagens.length);
    src = `images/${imagens[newImage]}`
    return img.src = `${src}`;
}

switchImage.addEventListener("click", changeImage);
