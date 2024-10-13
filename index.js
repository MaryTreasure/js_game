const dog = document.querySelector('.dog'); 
const ghost = document.querySelector('.ghost'); 

function jumpHandler (event) {
jump()
}
function jump () {
        dog.classList.toggle('jump');
        setTimeout( () => {
        dog.classList.remove('jump');
    }, 1000)
}

let checkLife = setInterval (() => {
    let topDog = parseInt(window.getComputedStyle(dog).getPropertyValue('top'));
    let ghostLeft = parseInt(window.getComputedStyle(ghost).getPropertyValue('left'));

    console.log(ghostLeft);
    

    if(ghostLeft > 540 && ghostLeft < 550 && topDog >= -10) {
        alert('GAME OVER')
    }
}, 10)

document.addEventListener('keydown', jumpHandler)