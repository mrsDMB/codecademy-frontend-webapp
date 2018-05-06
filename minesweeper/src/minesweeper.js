const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
    let board = [];
    for (let i=0; i<numberOfRows;i++){
        let row = [];
        for (let j = 0; j<numberOfColumns; j++) {
            row.push(' ');
        }
        board.push(row);
    }
    return board;
//add an empty space to each column
//add each row to a larger game board to make the player board
};

const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {
//create game board
//add bombs to random squares
    let board = [];
    for (let i=0; i<numberOfRows;i++){
        let row = [];
        for (let j = 0; j<numberOfColumns; j++) {
            row.push(null);
        }
        board.push(row);
    }
    let numberOfBombsPlaced = 0;
    while (numberOfBombsPlaced < numberOfBombs){
        let randomRowIndex = Math.floor(Math.random()*numberOfRows);
        let randomColumnIndex = Math.floor(Math.random()*numberOfColumns);
        if (board[randomRowIndex][randomColumnIndex] === null){
            board[randomRowIndex][randomColumnIndex] ='B';
            numberOfBombsPlaced++;
        }
    }
    return board;
}; //end generateBombBoard

const getNumberOfNeighorBombs = (bombBoard, rowIndex, columnIndex) => {
    const neighborOffsets = [
        [rowIndex, columnIndex-1],
        [rowIndex, columnIndex+1],
        [rowIndex-1, columnIndex-1],
        [rowIndex-1, columnIndex],
        [rowIndex-1, columnIndex+1],
        [rowIndex+1, columnIndex-1],
        [rowIndex+1, columnIndex],
        [rowIndex+1, columnIndex+1]];

    const numberOfRows = bombBoard.length;
    const numberOfColumns = bombBoard[0].length;
    let numberOfBombs = 0;

    neighborOffsets.forEach(offset => {
        const neighborRowIndex = offset[0];
        const neighborColumnIndex = offset[1];
        if ((neighborRowIndex  >= 0)&&(neighborRowIndex < numberOfRows)&&(neighborColumnIndex>0)&&(neighborColumnIndex < numberOfColumns)) {
            if (bombBoard[neighborRowIndex][neighborColumnIndex]==='B'){
                numberOfBombs++;
            }
        }//end if valid square
    });
    return numberOfBombs;
};

const flipTile = (playerBoard, bombBoard, rowIndex, columnIndex) => {
    console.log(playerBoard[rowIndex][columnIndex]);
    if (playerBoard[rowIndex][columnIndex]!==' '){
        console.log('This tile has already been flipped!');
        return;
    } else if (bombBoard[rowIndex][columnIndex]==='B') {
        playerBoard[rowIndex][columnIndex] ='B';
    } else {
        playerBoard[rowIndex][columnIndex] = getNumberOfNeighorBombs(bombBoard, rowIndex, columnIndex);
    }


};


const printBoard = board => {
    console.log(board.map(row => row.join(' | ')).join('\n'));
    
};

let playerBoard = generatePlayerBoard(3, 4);
let bombBoard = generateBombBoard(3, 4, 5);

console.log('Player Board: ');
printBoard(playerBoard);

console.log('Bomb Board:');
printBoard(bombBoard);

flipTile(playerBoard, bombBoard, 0, 0);
console.log('Updated Player Board');
printBoard(playerBoard);

