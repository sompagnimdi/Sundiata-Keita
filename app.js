// set background infos 
const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-modal-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button =>{
    button.addEventListener('click', => {
        const modal document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })

})
// styling the overlay
overlay.addEventListener('click', () => {
    const moadls = document.querySelectorAll('.modal.active')
    moadls.forEach(modal => {
        closeModal(modal)
    })
})

//function that closes the modal button

closeModalButtons.forEach(button =>{
    button.addEventListener('click', => {
        const modal = button.closest('.modal')
        closeModal(modal)
    })

})

function openModal(modal) {
    if(modal == null) return 
    modal.classList.add('active')
    overlay.classList.add('active')
}

function closeModal(modal) {
    if(modal == null) return 
    modal.classList.remove('active')
    overlay.classList.remove('active')
}















