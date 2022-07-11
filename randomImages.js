const imagens = ["bolinha.jpg", "breedito.png", "perrito.jpg", "winer.jpg"];
const switchImage = document.getElementById("changeImage");
const img = document.getElementById("image-picker"); 

function randomImage()
{
    return Math.floor(Math.random() * imagens.length);
}

function result()
{
    return new Promise((resolve, reject) => {
        try {
            resolve(randomImage());
        } catch (error) {
            reject(error);
        }
    });
}

// const result = new Promise((resolve, reject) => {
//    try {
//     resolve(randomImage())
//    } catch (error) {reject(error)}
// });

async function changeImage()
{
    let newImage = await result();
    return img.src = `images/${imagens[newImage]}`;
}

switchImage.addEventListener("click", changeImage);
