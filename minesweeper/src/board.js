export class Board {
    constructor(numberOfRows, numberOfColumns, numberOfBombs) {
        this._numberOfBombs = numberOfBombs;
        this._numberOfTiles = numberOfRows*numberOfColumns;
        this._playerBoard = Board.generatePlayerBoard(numberOfRows, numberOfColumns);
        this._bombBoard = Board.generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs);
    }
    get playerBoard() {
        this._playerBoard;
    }
   flipTile(rowIndex, columnIndex) {
        console.log(this._playerBoard[rowIndex][columnIndex]);
        if (this._playerBoard[rowIndex][columnIndex]!==' '){
            console.log('This tile has already been flipped!');
            return;
        } else if (this._bombBoard[rowIndex][columnIndex]==='B') {
            this._playerBoard[rowIndex][columnIndex] ='B';
        } else {
            this._playerBoard[rowIndex][columnIndex] = this.getNumberOfNeighorBombs(rowIndex, columnIndex);
        }
        this._numberOfTiles--;
    }

    getNumberOfNeighorBombs(rowIndex, columnIndex) {
        const neighborOffsets = [
            [rowIndex, columnIndex-1],
            [rowIndex, columnIndex+1],
            [rowIndex-1, columnIndex-1],
            [rowIndex-1, columnIndex],
            [rowIndex-1, columnIndex+1],
            [rowIndex+1, columnIndex-1],
            [rowIndex+1, columnIndex],
            [rowIndex+1, columnIndex+1]];
    
        const numberOfRows = this._bombBoard.length;
        const numberOfColumns = this._bombBoard[0].length;
        let numberOfBombs = 0;
    
        neighborOffsets.forEach(offset => {
            const neighborRowIndex = offset[0];
            const neighborColumnIndex = offset[1];
            if ((neighborRowIndex  >= 0)&&(neighborRowIndex < numberOfRows)&&(neighborColumnIndex>0)&&(neighborColumnIndex < numberOfColumns)) {
                if (this._bombBoard[neighborRowIndex][neighborColumnIndex]==='B'){
                    numberOfBombs++;
                }
            }//end if valid square
        });
        return numberOfBombs;
    }

    hasSafeTiles() {
       return (this._numberOfTiles !== this._numberOfBombs);
    }

    print() {
        console.log(this._playerBoard.map(row => row.join(' | ')).join('\n'));
        
    }


    static generatePlayerBoard(numberOfRows, numberOfColumns) {
        //add an empty space to each column
        //add each row to a larger game board to make the player board
        let board = [];
        for (let i=0; i<numberOfRows;i++){
            let row = [];
            for (let j = 0; j<numberOfColumns; j++) {
                row.push(' ');
            }
            board.push(row);
        }
        return board;
    }

    static generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs) {
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
        } //end generateBombBoard
}