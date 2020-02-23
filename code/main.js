//const popup = document.getElementsByClassName('pop-up');
const buttons = document.querySelectorAll('button');
console.log(buttons);


buttons.forEach(button =>{
    console.log(button);

    button.addEventLiistener(click, event =>{
            handleButtonClick(event);
        });
});


const handleButtonClick = cardPick =>{
    console.log(cardPick);
    console.log(cardPick.target);
    console.log(cardPick.target.id);
    popup.hidden = false;
    const feedback = document.querySelector('p');
    feedback.innerHTML = message;
}