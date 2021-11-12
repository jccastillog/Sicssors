function computerPlay() {
let playc = ['ROCK','PAPER', 'SICSSORS'];
const randomElement = playc[Math.floor(Math.random() * playc.length)];
return randomElement;
}

function playRound(playerSelection, computerSelection) {

    let winner ='';

    if (playerSelection==='ROCK'){
        if (computerSelection==='ROCK'){
            winner='Empate';
        }
        if (computerSelection==='PAPER'){
            winner='Gana Computador';
        }
        if (computerSelection==='SICSSORS'){
            winner='Gana Jugador';
        }
    }

    if (playerSelection==='PAPER'){
        if (computerSelection==='ROCK'){
            winner='Gana Computador';
        }
        if (computerSelection==='PAPER'){
            winner='Empate';
        }
        if (computerSelection==='SICSSORS'){
            winner='Gana Jugador';
        }
    }

    if (playerSelection==='SICSSORS'){
        if (computerSelection==='ROCK'){
            winner='Gana Computador';
        }
        if (computerSelection==='PAPER'){
            winner='Gana Jugador';
        }
        if (computerSelection==='SICSSORS'){
            winner='Empate';
        }
    }
   alert(winner);

return winner;

  }


  function game(){
    
    let acum='';
    let resplay=0;
    let rescomp=0;

    for (let i=0; i<5; i++){
        let playerSelection = prompt("escoge ROCK, PAPER OR SICSSORS?");
        let computerSelection = computerPlay();
        let acum = playRound(playerSelection, computerSelection);
  
        if (acum==='Gana Jugador'){
            resplay++;
        } else {
            if (acum==='Gana Computador'){
                rescomp++;
            }
        }        

    }

    alert (resplay);
    alert (rescomp);
    return;

  }