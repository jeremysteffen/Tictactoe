//In VS Code, or an IDE of your choice, write the code that accomplishes the objectives listed below. Ensure that the code compiles and runs as directed. 
//Take screenshots of the code and of the running program (make sure to get screenshots of all required functionality)
 //and paste them in this document where instructed below. Create a new repository on GitHub for this week’s assignments and 
 //push this document, with your JavaScript project code, to the repository. Add the URL for this week’s repository to this document 
 //where instructed and submit this document to your instructor when complete.
//Coding Steps:
//1.	Using any of the tools you’ve worked with so far, create a game of tic-tac-toe.
//a.	A heading should say whether it is X’s or O’s turn and change with each move made.
//b.	Create a tic-tac-toe grid using your HTML element of choice. When a cell in the grid is clicked, an X or O should appear in that spot depending on whose turn it is.
//c.	A button should be available to clear the grid and restart the game.
//d.	When a player has won, or the board is full and the game results in a draw, a Bootstrap banner should appear across the screen announcing the winner.

// test only to see if JQuery installed correctly
//console.log($('body'));

let winningCombinationX = ['x','x','x']
let winningCombinationO = ['o','o','o']

let cellElements = $('button.cell').each(() => {
    this.attr('id').toArray();
})

let win_combos = [
    ['s0','s1','s2'],
    ['s3','s4','s5'],
    ['s6','s7','s8'],
    ['s0','s3','s6'],
    ['s1','s4','s7'],
    ['s2','s5','s8'],
    ['s0','s4','s8'],
    ['s2','s4','s6']
];

let squareWithX = $('.cell').filter((index, el) => {
    const textX = el.innerHTML;
    return textX === 'x';
});

let squareWithO = $('.cell').filter((index, el) => {
    const textO = el.innerHTML;
    return textO === 'o';
});
let whosTurnIsIt = "x"
let winner = ""
function handleSquareClick (event) {
    event.target.innerHTML = whosTurnIsIt  
    compareArray()  
}

function compareArray () {
    const xs= Array.from(document.getElementsByClassName("square")).filter(square => square.innerHTML ="x").map(element => element.id)
    const os=Array.from(document.getElementsByClassName("square")).filter(square => square.innerHTML ="o").map(element => element.id)
    win_combos.forEach(wincombo => {
        wincombo.every(Element )
    })
}

function checkWinner () {

    winner= win_combos.every((index) => {
        if (compareArray(win_combos[index], X_cells)) {
            return 'x';
        } else if (compareArray(win_combos[index], )) {}
    })

}

Array.from(document.getElementsByClassName("square")).forEach(square => {
    square.addEventListener("click",handleSquareClick)
})