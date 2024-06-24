// JS-код с липким навигационным меню
const nav = document.querySelector('.navbar')
const scrollBtn = document.querySelector('.scroll-button a')
window.onscroll = function () {
    if (document.documentElement.scrollTop > 20) {
        nav.classList.add('sticky')
    } else {
        nav.classList.remove('sticky')
    }
}

const menuButton = document.querySelector('.menu__button')
const dropdown = document.querySelector('.dropdown')

menuButton.addEventListener('click', () => {
    if (dropdown.classList.contains('dropdown--show')) {
        dropdown.classList.remove('dropdown--show')
        menuButton.classList.remove('menu__button--close')
    } else {
        dropdown.classList.add('dropdown--show')
        menuButton.classList.add('menu__button--close')
    }
})

dropdown.addEventListener('click', (event) => {
    if (
        event.target.nodeName === 'A' &&
        dropdown.classList.contains('dropdown--show')
    ) {
        dropdown.classList.remove('dropdown--show')
        menuButton.classList.remove('menu__button--close')
    }
})
