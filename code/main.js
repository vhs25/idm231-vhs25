const popup = document.getElementsByClassName('pop-up');
//const popupbox = document.getElementsByClassName('pop-up-box')
const p_i = document.getElementById(pi);                          //Do i need a variable to change the img?
const p_h = document.getElementById(ph);
const p_p = document.getElementById(pp);
const buttons = document.querySelectorAll('.card');
// console.log(buttons);

function cardInfo(){
    if(id='aries'){
        img.src = "images/themagician_aeries.png"
        p_h.innerHTML = "The Magician"
        p_p.innerHTML = "The Magician card represents a resourceful, self-empowered engergy. Those who embody the Magician card are able to harness that boundless energy and use it to take action and work towards achieving their goals."
    }
    else if(id='taurus'){
        img.src = "images/"
        p_h.innerHTML = "The Chariot"
        p_p.innerHTML = "The Chariot card represents one with a strong will and focused mind. Bold determination carries the charriot to triumph. Through strength of mind you find success."
    }
    else if(id='gemini'){
        img.src = "images/themoon_gemini.png"
        p_h.innerHTML = "The Moon"
        p_p.innerHTML = "The Moon card calls to those who are full of dreams and creativity. People of the moon card may find anxiety in the mysteries of life, but the moon encourages you to find comfort in the unknown, for it is there that your crativity can flouriish. "
    }
    else if(id='cancer'){
        img.src = "images/highpriestess_cancer.png"
        p_h.innerHTML = "The High Priestess"
        p_p.innerHTML = "The High Priestess is a card of intuition. She is the guardian of the mind. This card calls to your ituition, allowing you to listen to your voice within and find wisdom."
    }
    else if(id='leo'){
        img.src = "images/"
        p_h.innerHTML = "The Heirophant"
        p_p.innerHTML = "The Heirophant card represents a natural teqacher or leader. These people have a hunger for knowledge and seek a deep understanding of the things they do."
    }
    else if(id='virgo'){
        img.src = "images/theworld_virgo.pmg"
        p_h.innerHTML = "The World"
        p_p.innerHTML = "The World card is known for representing harmony and balance. These people are encouraged to recognize the accomplishments they've made, for it takes work to achieve such balance in your life."
    }
    else if(id='libra'){
        img.src = "images/"
        p_h.innerHTML = "Temperance"
        p_p.innerHTML = "Temperence represents a peaceful and cooperative person. Their patience and cool temperment allows them to be a moderator and display calmness while under stress."
    }
    else if(id='scorpio'){
        img.src = "images/thehermit_scorpio.png"
        p_h.innerHTML = "The Hermit"
        p_p.innerHTML = "The Hermit represents a calm and meditative spirit. These people, through solitue and stillness, have the ability to look inward for answers and guidance in their life."
    }
    else if(id='sag'){
        img.src = "images/judgement_sag.png"
        p_h.innerHTML = "Judgement"
        p_p.innerHTML = "The Judgement card shows a person who is forgiving and wise. People of the Judgement card value honesty and move boldly through life. You are encouraged to find comfort in who you are and in the wisdom you hold from life's experience."
    }
    else if(id='capricorn'){
        img.src = "images/theemperor_capricorn.png"
        p_h.innerHTML = "The Emperor"
        p_p.innerHTML = "The Emeror card represents stability and decisiveness. These people have a clear vision of who they are and what they want. Their inner strength is backed by their principles and values."
    }
    else if(id='aquarius'){
        img.src = "images/thefool_aquarius.png"
        p_h.innerHTML = "The Fool"
        p_p.innerHTML = "The Fool card represents spontaneity and and innocence. These people are commited to following their heart, even in the face of the unknown. This boldness can be seen as naive, but is really just a way of being free."
    }
    else if(id='pisces'){
        img.src = "images/"
        p_h.innerHTML = "Strength"
        p_p.innerHTML = "The Strength card represents people who have a strength of heart that empowers them to live confidently and compasionately. These people commit to their values and show persistece for what they know they need."
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

buttons.onclick = function() {
    popup.style.display = "block";
  }
