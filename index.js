const readline = require('readline-sync');

function calcRanked() {
    let repeat = true;
    let win, lose;
    let link;

    while(repeat) {
        win = parseInt(readline.question("Enter the wins: "));
        lose = parseInt(readline.question("Enter the loses: "));
        let balance = win - lose;

        if(balance < 10) {
            link = "Iron";
        }
        else if(balance > 11 && balance < 20){
            link = "Bronze";
        }
        else if(balance > 21 && balance < 50){
            link = "Silver";
        }
        else if(balance > 51 && balance < 80){
            link = "Gold";
        }
        else if(balance > 81 && balance < 90){
            link = "Diamond";
        }
        else if(balance > 91 && balance < 100){
            link = "Legendary";
        }
        else if(balance >= 101){
            link = "Immortal";
        }

        console.log(`The Hero has a balance of ${balance} wins and is at the ${link} level`);

        repeat = readline.keyInYN("You want to continue?");
    }
}

calcRanked();
