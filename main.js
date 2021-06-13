let btnOpen = document.querySelector('.btn')
let modalWindow = document.querySelector('.window')
let btnClose = document.querySelector('.window__cross')
let btnCloseTwo = document.querySelector('.window__close__item')

btnOpen.onclick = function() {
    modalWindow.style.display = 'block'
}

btnClose.onclick = function() {
    modalWindow.style.display = 'none'
}

btnCloseTwo.onclick = function() {
    modalWindow.style.display = 'none'
}
