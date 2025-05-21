const logoEpic = document.getElementsByClassName('logo-epic')[0] //Pega a div do logo.
const menuEpic = document.getElementsByClassName('list-container')[0] // Pega o menu escondido no icone.
const navDesktop = document.getElementsByClassName('list-desktop') // Pega a nav do header.
const createLi = document.getElementById('create') //Pega a "li" Criar.
const createMenu = document.getElementById('createMenu') // Pega a div com o menu.
const shopLi = document.getElementById('shop')
const shopMenu = document.getElementById('shopMenu')
const moreLi = document.getElementById('more')
const moreMenu = document.getElementById('moreMenu')
const logoFortnite = document.getElementById('logo-fort')
const btnDown = document.getElementById('btn-download')

// Variável para controlar o tempo de desaparecimento
let hideTimeout; 

// Funçao de hover para aparecer o menu do Logo Epic.
function menuOn () {
    // Abre ao passar o mouse por cima.
    logoEpic.addEventListener('mouseenter', () => {
        menuEpic.style.display = "block"
    })
    
    // Fecha ao tirar o mouse de cima.
    logoEpic.addEventListener('mouseleave', () => {
            menuEpic.style.display = "none";
    });
}

menuOn()

function clickMenu () {
    // funcão para click.
    logoEpic.addEventListener('click', () => {
        if (menuEpic.style.display === 'none' || menuEpic.style.display === '') {
            menuEpic.style.display = 'block';
        } else {
            menuEpic.style.display= 'none'
        }

        // Atualiza visibilidade do botão e do logo Fortnite
            disappear();
    })
}

clickMenu()

function disappear () {
    // Quando o menu estiver aberto desaparece o botao e o logo fortnite.
    if (menuEpic.style.display === 'block') {
        logoFortnite.style.display = 'none';
        btnDown.style.display = 'none';
    } else {
        logoFortnite.style.display = 'block';
        btnDown.style.display = 'block';
    }
}

// Funçao de hover para aparecer o menu da li "Criar".
function createMenuOn () {
    // Abre ao passar o mouse por cima.
    createLi.addEventListener('mouseenter', () => {
    createMenu.style.display = "block";
  });

  // Fecha ao tirar o mouse de cima.
  createLi.addEventListener('mouseleave', () => {
        createMenu.style.display = "none";
  })
}

createMenuOn()

// Funçao de hover para aparecer o menu da li "Loja de Itens".
function shopMenuOn () {
    //Abre ao passar o mouse em cima.
    shopLi.addEventListener('mouseenter', () => {
        shopMenu.style.display = "block";
    })

    // Fecha ao tirar o mouse de cima.
    shopLi.addEventListener('mouseleave', () => {
        shopMenu.style.display = "none";
    })
}

shopMenuOn()

function moreMenuOn () {
    //Abre ao passar o mouse em cima.
    moreLi.addEventListener('mouseenter', () => {
        moreMenu.style.display = "block";
    })

    // Fecha ao tirar o mouse de cima.
    moreLi.addEventListener('mouseleave', () => {
        moreMenu.style.display = "none";
    })
}

moreMenuOn()