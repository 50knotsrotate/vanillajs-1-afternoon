
let game = []
function resetGame() { 
    game = [];
    let squares = document.querySelectorAll('td')
    for (let square of squares) { 
        square.innerHTML = ''
    }
}

function play(val) { 
    var player = document.getElementById('player');
    var square = document.getElementById(val);

    if (!square.innerHTML){
        if (player.innerHTML == 'X') {
            player.innerHTML = 'O';
            square.innerHTML = 'X'
            game[val] = 'X'
        } else if(player.innerHTML == 'O') {
            player.innerHTML = 'X';
            square.innerHTML = 'O'
            game[val] = 'O'
        }
    }

//Not how I wanted to handle no winners, but 
//but JS was being annoying (I take no blame. It's the codes fault .. :) )

    if (game.filter(x => x).length === 9 ) { 
        alert('No winner')
    }

    for (let i = 0; i < game.length; i += 3) { 
        if ((game[i] == game[i + 1] && game[i] == game[i + 2]) && game[i]) { 
            alert(game[i] + ' is the winner!')
           
        }
    }

    for (let i = 0; i < 3; i++) { 
        if ((game[i] == game[i + 3] && game[i] == game[i + 6]) && game[i]) { 
            alert(game[i] + " is the winner!")        
        }
    }
    if ((game[0] == game[4] && game[0] == game[8] )&& game[0]) { 
        alert(game[0] + ' is the winner!')
       

    }
    
    if (game[2] == game[4] && game[2] == game[6] && game[2]) { 
        alert(game[2] + ' is the winner!')
    }

}




