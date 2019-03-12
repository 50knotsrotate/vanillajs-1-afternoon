var input = document.getElementById('input1');
var color = document.getElementById('input2');


function setCard() { 
    
    var currentCard = document.getElementById(input.value)
    if (currentCard) {
        currentCard.style.backgroundColor = color.value
    } else { 
        alert(`${input.value} is not a valid input bruh`)
    }

}

function reset() { 
    var cards = document.querySelectorAll('section');
    for (let card of cards) { 
        card.style.backgroundColor = 'white'
    }
}