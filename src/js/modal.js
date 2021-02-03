const modalBtn = document.querySelector('.about-us__link')
const closeBtn = document.querySelector('.modal__close-wrap')
const modalWindow = document.querySelector('.modal__window')

const openModal = (e) => {
    console.log("it works!")
    e && e.preventDefault()
    modalWindow.style.display = "block";
    closeBtn.style.display = "flex";
}
const closeModal = (e) => {
    console.log("it works!")
    e && e.preventDefault()
    modalWindow.style.display = "none";
    closeBtn.style.display = "none";
}
modalBtn.addEventListener('click', openModal)
closeBtn.addEventListener('click', closeModal)

setTimeout(() => {
    openModal()
}, 1000);
