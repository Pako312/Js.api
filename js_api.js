'use strict'
const url = "https://randomfox.ca/floof";
const button = document.querySelector(".btn");
const card = document.querySelector('.card')


async function fetchHandler() {
    
    try {
        const response = await fetch(url);
        const data = await response.json()
        showImage(data.image)
    } catch (error) {
        console.log(error);
    }
}

function showImage(imgLink) {
    const image = document.querySelector(".img");
        if (image) {
            image.src = imgLink
        } else {
            const newImage = document.createElement('img')
            newImage.classList.add("img")
            newImage.src = imgLink;
            card.append(newImage)
        }
}

button.addEventListener('click', () => {
    fetchHandler()
});