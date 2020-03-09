const popup = document.getElementById('pop-up');
//const popupbox = document.getElementsByClassName('pop-up-box')
const p_i = document.getElementById('pi');
const p_h = document.getElementById('ph');
const p_p = document.getElementById('pp');
const buttons = document.querySelectorAll('.card');
const speakers = document.getElementById('speakers');
const month = document.getElementById('month');
const day = document.getElementById('day');
const form = document.querySelectorAll('.form');

function cardInfo(id){
    if(id==='aries'){
        p_i.src = "images/themagician_aeries.png"
        p_h.innerHTML = "The Magician"
        p_p.innerHTML = "The Magician card represents a resourceful, self-empowered engergy. Those who embody the Magician card are able to harness that boundless energy and use it to take action and work towards achieving their goals."
    }
    else if(id==='taurus'){
        p_i.src = "images/"
        p_h.innerHTML = "The Chariot"
        p_p.innerHTML = "The Chariot card represents one with a strong will and focused mind. Bold determination carries the charriot to triumph. Through strength of mind you find success."
    }
    else if(id==='gemini'){
        p_i.src = "images/themoon_gemini.png"
        p_h.innerHTML = "The Moon"
        p_p.innerHTML = "The Moon card calls to those who are full of dreams and creativity. People of the moon card may find anxiety in the mysteries of life, but the moon encourages you to find comfort in the unknown, for it is there that your crativity can flouriish. "
    }
    else if(id==='cancer'){
        p_i.src = "images/highpriestess_cancer.png"
        p_h.innerHTML = "The High Priestess"
        p_p.innerHTML = "The High Priestess is a card of intuition. She is the guardian of the mind. This card calls to your ituition, allowing you to listen to your voice within and find wisdom."
    }
    else if(id==='leo'){
        p_i.src = "images/"
        p_h.innerHTML = "The Heirophant"
        p_p.innerHTML = "The Heirophant card represents a natural teqacher or leader. These people have a hunger for knowledge and seek a deep understanding of the things they do."
    }
    else if(id==='virgo'){
        p_i.src = "images/theworld_virgo.pmg"
        p_h.innerHTML = "The World"
        p_p.innerHTML = "The World card is known for representing harmony and balance. These people are encouraged to recognize the accomplishments they've made, for it takes work to achieve such balance in your life."
    }
    else if(id==='libra'){
        p_i.src = "images/"
        p_h.innerHTML = "Temperance"
        p_p.innerHTML = "Temperence represents a peaceful and cooperative person. Their patience and cool temperment allows them to be a moderator and display calmness while under stress."
    }
    else if(id==='scorpio'){
        p_i.src = "images/thehermit_scorpio.png"
        p_h.innerHTML = "The Hermit"
        p_p.innerHTML = "The Hermit represents a calm and meditative spirit. These people, through solitue and stillness, have the ability to look inward for answers and guidance in their life."
    }
    else if(id==='sag'){
        p_i.src = "images/judgement_sag.png"
        p_h.innerHTML = "Judgement"
        p_p.innerHTML = "The Judgement card shows a person who is forgiving and wise. People of the Judgement card value honesty and move boldly through life. You are encouraged to find comfort in who you are and in the wisdom you hold from life's experience."
    }
    else if(id==='capricorn'){
        p_i.src = "images/theemperor_capricorn.png"
        p_h.innerHTML = "The Emperor"
        p_p.innerHTML = "The Emeror card represents stability and decisiveness. These people have a clear vision of who they are and what they want. Their inner strength is backed by their principles and values."
    }
    else if(id==='aquarius'){
        p_i.src = "images/thefool_aquarius.png"
        p_h.innerHTML = "The Fool"
        p_p.innerHTML = "The Fool card represents spontaneity and and innocence. These people are commited to following their heart, even in the face of the unknown. This boldness can be seen as naive, but is really just a way of being free."
    }
    else if(id==='pisces'){
        p_i.src = "images/"
        p_h.innerHTML = "Strength"
        p_p.innerHTML = "The Strength card represents people who have a strength of heart that empowers them to live confidently and compasionately. These people commit to their values and show persistece for what they know they need."
    }
}


const handleButtonClick = cardPick =>{
    console.log(cardPick);
    console.log(cardPick.target);
    console.log(cardPick.target.id);
    popup.hidden = false;
    cardInfo(cardPick.target.id);

    console.log(cardPick.target.dataset.sound);
    const sound = cardPick.target.dataset.sound;
    speakers.src = `sound_effects/${sound}.mp3`;
    speakers.play();
}

buttons.forEach(button =>{
    button.addEventListener('click', event =>{
            handleButtonClick(event);
        });
});

popup.addEventListener('click', event =>{
    popup.hidden = true;
})

form.addEventListener('submit', event =>{
    event.preventdefault()
    console.log(enter);
})

{//zodiac
if ((whichMonth == 12 && whichDayOfMonth >= 22) || (whichMonth == 1 && whichDayOfMonth <= 19)) {
  id = "Capricorn";
} else if ((whichMonth == 11 && whichDayOfMonth >= 22) || (whichMonth == 12 && whichDayOfMonth <= 21)) {
  id = "Sag";
} else if ((whichMonth == 10 && whichDayOfMonth >= 24) || (whichMonth == 11 && whichDayOfMonth <= 21)) {
  id = "Scorpio";
} else if ((whichMonth == 9 && whichDayOfMonth >= 23) || (whichMonth == 10 && whichDayOfMonth <= 23)) {
  id = "Libra";
} else if ((whichMonth == 8 && whichDayOfMonth >= 23) || (whichMonth == 9 && whichDayOfMonth <= 22)) {
  id = "Virgo";
} else if ((whichMonth == 7 && whichDayOfMonth >= 23) || (whichMonth == 8 && whichDayOfMonth <= 22)) {
  id = "Leo";
} else if ((whichMonth == 6 && whichDayOfMonth >= 22) || (whichMonth == 7 && whichDayOfMonth <= 22)) {
  id = "Cancer";
} else if ((whichMonth == 5 && whichDayOfMonth >= 21) || (whichMonth == 6 && whichDayOfMonth <= 21)) {
  id = "Gemini";
} else if ((whichMonth == 4 && whichDayOfMonth >= 20) || (whichMonth == 5 && whichDayOfMonth <= 20)) {
  id = "Taurus";
} else if ((whichMonth == 3 && whichDayOfMonth >= 21) || (whichMonth == 4 && whichDayOfMonth <= 19)) {
  id = "Aries";
} else if ((whichMonth == 2 && whichDayOfMonth >= 19) || (whichMonth == 3 && whichDayOfMonth <= 20)) {
  id = "Pisces";
} else if ((whichMonth == 1 && whichDayOfMonth >= 20) || (whichMonth == 2 && whichDayOfMonth <= 18)) {
  id = "Aquarius";
}
}