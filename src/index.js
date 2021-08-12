console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", function() {
    loadImages();
    loadBreeds();
})

function loadImages() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

    return fetch(imgUrl)
    .then(resp => resp.json())
    .then(results => {
        results.message.forEach(image => addImage(image))
    });
}

function loadBreeds() {
    const container = document.getElementById("dog-image-container");
    const newImage = document.createElement('img');
    newImage.src = picUrl;
    container.appendChild(newImage);
}
    
function addBreeds(breeds) {
    const ul = document.getElementById("dog-breeds");
    breeds.forEach(breed => {
        const li = document.createElement("li");
        li.innerText = breed;
        ul.appendChild(li);
        li.addEventListener("click", function(event) {
            event.target.style.color = "blue";
        });
    });
}
