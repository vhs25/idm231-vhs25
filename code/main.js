const button = document.getElementsByClassName('card');
const popup = document.getElementsByClassName('pop-up');

const openModal = ()=>{
popup.hidden = false;
};

const closeModal = ()=>{
    modal.hidden = true;
};

console.log(button);

button.addEventListener('click', openModal, false);
popup.addEventListener('click', closeModal, false);