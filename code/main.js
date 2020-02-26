const popup = document.getElementsByClassName('pop-up');
//const popupbox = document.getElementsByClassName('pop-up-box')
const p_i = document.getElementById(pi);
const p_h = document.getElementById(ph);
const p_p = document.getElementById(pp);
const buttons = document.querySelectorAll('.card');
// console.log(buttons);

function cardInfo(){
    if(id='aries'){
        p_i.src = "images/themagician_aeries.png"
        p_h.innerHTML = "The Magician"
        p_p.innerHTML = "The Magician card represents a resourceful, self-empowered engergy. Those who embody the Magician card are able to harness that boundless energy and use it to take action and work towards achieving their goals."
    }
    else if(id='taurus'){
        p_i.src = ""
        p_h.innerHTML = "The Chariot"
        p_p.innerHTML = "The Chariot card represents one with a strong will and focused mind. Bold determination carries the charriot to triumph. Through strength of mind you find success."
    }
    else if(id='gemini'){
        p_i.src = ""
        p_h.innerHTML = "The Moon"
        p_p.innerHTML = "The Moon card calls to those who are full of dreams and creativity. People of the moon card may find anxiety in the mysteries of life, but the moon encourages you to find comfort in the unknown, for it is there that your crativity can flouriish. "
    }
    else if(id='cancer'){
        p_i.src = ""
        p_h.innerHTML = "The High Priestess"
        p_p.innerHTML = "The High Priestess is a card of intuition. She is the guardian of the mind. This card calls to your ituition, allowing you to listen to your voice within and find wisdom."
    }
    else if(id='leo'){
        p_i.src = ""
        p_h.innerHTML = "The Heirophant"
        p_p.innerHTML = "The Heirophant card represents a natural teqacher or leader. These people have a hunger for knowledge and seek a deep understanding of the things they do."
    }
    else if(id='virgo'){
        p_i.src = ""
        p_h.innerHTML = "The World"
        p_p.innerHTML = "The World card is known for representing harmony and balance. These people are encouraged to recognize the accomplishments they've made, for it takes work to achieve such balance in your life."
    }
    else if(id='libra'){
        p_i.src = ""
        p_h.innerHTML = "Temperance"
        p_p.innerHTML = ""
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


