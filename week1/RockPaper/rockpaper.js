const game = function(player1,player2){
    let gameRule = ["Rock","Paper","Sicssors"];
    function showWinner(n){
        console.log(`Player ${n} won`);
    }
    if(player1 === player2){
        return "Draw";
    }
    if(player1 == gameRule[0]){
        return player2 == gameRule[1] ? showWinner(2):showWinner(1);
    }else if(player1 == gameRule[1]){
        return player2 == gameRule[0] ? showWinner(1):showWinner(2);
    }else if(player1 == gameRule[2]){
        return player2 == gameRule[1] ? showWinner(2):showWinner(1);
    }

    //用三元運算子有點像是裡面再是否的判斷
}

let ans = game("Rock","Rock");
console.log(ans);

