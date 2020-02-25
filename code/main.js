const popup = document.getElementsByClassName('pop-up');
const buttons = document.querySelectorAll('.card');
// console.log(buttons);

function cardInfo(){
    if(id='aeries'){
        pic
    }
}


const handleButtonClick = cardPick =>{
    console.log(cardPick);
    console.log(cardPick.target);
    console.log(cardPick.target.id);
    popup.hidden = false;
    const feedback = document.querySelector('p');
    // feedback.innerHTML = message;
}

buttons.forEach(button =>{
    // console.log(button);

    button.addEventListener('click', event =>{
            handleButtonClick(event);
        });
});


