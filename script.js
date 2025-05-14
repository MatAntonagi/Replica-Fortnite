const logoEpic = document.getElementsByClassName('logo-epic')[0] //Pega a div do logo.
const menuEpic = document.getElementsByClassName('list-container')[0] // Pega o menu escondido no icone.

// Variável para controlar o tempo de desaparecimento
let hideTimeout; 

// Funçao de hover para aparecer o menu.
function menuOn () {
    // Abre ao passar o mouse por cima.
    logoEpic.addEventListener('mouseenter', () => {
        clearTimeout(hideTimeout)
        menuEpic.style.display = "block"
    })

    menuEpic.addEventListener('mouseenter', () => {
        clearTimeout(hideTimeout)
        menuEpic.style.display = "block"
    })

    logoEpic.addEventListener('mouseleave', () => {
        hideTimeout = setTimeout(() => {
            menuEpic.style.display = "none";
        }, 500);
    })

    menuEpic.addEventListener('mouseleave', () => {
        hideTimeout = setTimeout(() => {
            menuEpic.style.display = "none";
        }, 200);
    })
}

menuOn()