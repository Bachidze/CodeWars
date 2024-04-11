const RockPaperScissor = (player1,player2) => {
    if(player1 === player2){
        return 'Draw'
    }else if ((player1 === 'rock' && player2 === 'scissor')
               || (player1 === 'scissor' && player2 === 'paper') ||
               (player1 === 'paper' && player2 === 'rock')
){
    return 'Player 1 Won'
}else{
    return 'Player 2 won'
}
}

console.log(RockPaperScissor('paper','scissor'))

























/* const rock = 'Rock';
const paper = 'Paper';
const scissors = 'Scissors';

const RockPaperScissors = () => {

    const getRandomMove = () => {
        const moves = [rock, paper, scissors];
        return moves[Math.floor(Math.random() * moves.length)];
    };

    const Winner = (move1, move2) => {
        if (move1 === move2) {
            return "Draw";
        } else if (
            (move1 === rock && move2 === scissors) ||
            (move1 === paper && move2 === rock) ||
            (move1 === scissors && move2 === paper)
        ) {
            return 'Player 1 wins';
        } else {
            return 'Player 2 wins';
        }
    };

    const player1Move = getRandomMove();
    const player2Move = getRandomMove();
    console.log('Player 1 chose:', player1Move);
    console.log('Player 2 chose:', player2Move);
    console.log(Winner(player1Move, player2Move));
};

RockPaperScissors(); */



