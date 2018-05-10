// To play Minesweeper, we will create instances of MineSweeperGame in command line.
// For example:
// In the command line, navigate to the lib directory and run `node`
// Run `.load game.js` to load the contents of this file.
// Then create a Game instance and run commands like so:
// let game = new Game(3, 3, 3);
// game.playMove(0, 1);
// game.playMove(1, 2);
// When done run `.exit`
import {Board} from './board';

class Game {
    constructor(numberOfRows, numberOfColumns, numberOfBombs) {
        this._board = new Board(numberOfRows, numberOfColumns, numberOfBombs);
    }

    playMove(rowIndex, columnIndex) {
        this._board.flipTile(rowIndex, columnIndex);

        // if flipped tile has a bomb, game over
        if (this._board._playerBoard[rowIndex][columnIndex]==='B'){
            console.log("GAME OVER"); 
            this._board.print(); 
            return;
        } else if (!this._board.hasSafeTiles()) {
        //else if board does not have any safe tiles, game won
            console.log("YOU WIN!!");
            this._board.print();
            return;
        } else {
        //else keep playing
            console.log("Current Board:");
            this._board.print();
        }
    }
}
