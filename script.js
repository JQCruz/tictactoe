const gameController = (() =>{
    cells = document.querySelectorAll(".gameBoardCell");

    let gameBoard = [[0, 0, 0],
                    [0, 0, 0],
                    [0,0,0]];

    let rowOne = gameBoard[0];
    let rowTwo = gameBoard[1];
    let rowThree = gameBoard[2];
    let firstCell = gameBoard[0][0]
    let columnTwo = [gameBoard[0][1],gameBoard[1][1], gameBoard[2][1]];
    let columnThree = [gameBoard[0][2], gameBoard[1][2], gameBoard[2][2]];

    let crossOne = [rowOne[0], rowTwo[1], rowThree[2]];
    let crossTwo = [rowOne[2], rowTwo[1], rowThree[0]];

    let winConditions = [rowOne, rowTwo, rowThree, 
            columnOne, columnTwo, columnThree,
            crossOne, crossTwo
    ];

    let gameOver = false;

    const endGame = (evt) => {
        //if all values in row are equal and none are 0, game over.
        //if all values of given index of each array are equal but not 0, gameover
        //if cross section is equal but not 0, game over
        if(evt.target.matches(".gameBoardCell") && gameOver== false){
        for(let i = 0; i < winConditions.length; i++){
                if(winConditions[i].every((currentValue) => winConditions[i][0] === currentValue) && winConditions[i].every((currentValue) => currentValue != 0)){
                    gameOver = true;
                    alert("gameOver!")
                    return
                }}}
        
    }

    const changeBoard = (evt) =>{
        if(evt.target.matches(".gameBoardCell") && evt.target.innerText == ""){
            let row = parseInt(evt.target.getAttribute("data-row"), 10);
            let cell = parseInt(evt.target.getAttribute("data-value"), 10);
            evt.target.innerText = "x";
            gameBoard[row][cell] = "x";
            };
    }

    const resetBoard = (evt) =>{
        if(evt.target.matches("#restart")){
            gameOver = false;
        for(let i=0; i< cells.length; i++){
            cells[i].innerText = "";
            for(let i = 0; i<=2; i++){
                for(let x = 0; x<=2; x++){
                    gameBoard[i][x]=0;
                }
            }
        }
    }}
    return{
        gameBoard, changeBoard, resetBoard, endGame, gameOver, columnOne, rowOne
    };
})();

const playerFactory = () => {

}

// let gameCells = document.querySelectorAll(".gameBoardCell");

// for(cells in gameCells){
//     addEventListener("click", gameController.changeBoard);
// }

document.addEventListener('click', gameController.changeBoard);
document.addEventListener("click", gameController.resetBoard);
document.addEventListener('click', gameController.endGame);
