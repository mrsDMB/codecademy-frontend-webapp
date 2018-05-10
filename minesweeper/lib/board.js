'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Board = exports.Board = function () {
    function Board(numberOfRows, numberOfColumns, numberOfBombs) {
        _classCallCheck(this, Board);

        this._numberOfBombs = numberOfBombs;
        this._numberOfTiles = numberOfRows * numberOfColumns;
        this._playerBoard = Board.generatePlayerBoard(numberOfRows, numberOfColumns);
        this._bombBoard = Board.generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs);
    }

    _createClass(Board, [{
        key: 'flipTile',
        value: function flipTile(rowIndex, columnIndex) {
            console.log(this._playerBoard[rowIndex][columnIndex]);
            if (this._playerBoard[rowIndex][columnIndex] !== ' ') {
                console.log('This tile has already been flipped!');
                return;
            } else if (this._bombBoard[rowIndex][columnIndex] === 'B') {
                this._playerBoard[rowIndex][columnIndex] = 'B';
            } else {
                this._playerBoard[rowIndex][columnIndex] = this.getNumberOfNeighorBombs(rowIndex, columnIndex);
            }
            this._numberOfTiles--;
        }
    }, {
        key: 'getNumberOfNeighorBombs',
        value: function getNumberOfNeighorBombs(rowIndex, columnIndex) {
            var _this = this;

            var neighborOffsets = [[rowIndex, columnIndex - 1], [rowIndex, columnIndex + 1], [rowIndex - 1, columnIndex - 1], [rowIndex - 1, columnIndex], [rowIndex - 1, columnIndex + 1], [rowIndex + 1, columnIndex - 1], [rowIndex + 1, columnIndex], [rowIndex + 1, columnIndex + 1]];

            var numberOfRows = this._bombBoard.length;
            var numberOfColumns = this._bombBoard[0].length;
            var numberOfBombs = 0;

            neighborOffsets.forEach(function (offset) {
                var neighborRowIndex = offset[0];
                var neighborColumnIndex = offset[1];
                if (neighborRowIndex >= 0 && neighborRowIndex < numberOfRows && neighborColumnIndex > 0 && neighborColumnIndex < numberOfColumns) {
                    if (_this._bombBoard[neighborRowIndex][neighborColumnIndex] === 'B') {
                        numberOfBombs++;
                    }
                } //end if valid square
            });
            return numberOfBombs;
        }
    }, {
        key: 'hasSafeTiles',
        value: function hasSafeTiles() {
            return this._numberOfTiles !== this._numberOfBombs;
        }
    }, {
        key: 'print',
        value: function print() {
            console.log(this._playerBoard.map(function (row) {
                return row.join(' | ');
            }).join('\n'));
        }
    }, {
        key: 'playerBoard',
        get: function get() {
            this._playerBoard;
        }
    }], [{
        key: 'generatePlayerBoard',
        value: function generatePlayerBoard(numberOfRows, numberOfColumns) {
            //add an empty space to each column
            //add each row to a larger game board to make the player board
            var board = [];
            for (var i = 0; i < numberOfRows; i++) {
                var row = [];
                for (var j = 0; j < numberOfColumns; j++) {
                    row.push(' ');
                }
                board.push(row);
            }
            return board;
        }
    }, {
        key: 'generateBombBoard',
        value: function generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs) {
            //create game board
            //add bombs to random squares
            var board = [];
            for (var i = 0; i < numberOfRows; i++) {
                var row = [];
                for (var j = 0; j < numberOfColumns; j++) {
                    row.push(null);
                }
                board.push(row);
            }
            var numberOfBombsPlaced = 0;
            while (numberOfBombsPlaced < numberOfBombs) {
                var randomRowIndex = Math.floor(Math.random() * numberOfRows);
                var randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
                if (board[randomRowIndex][randomColumnIndex] === null) {
                    board[randomRowIndex][randomColumnIndex] = 'B';
                    numberOfBombsPlaced++;
                }
            }
            return board;
        } //end generateBombBoard

    }]);

    return Board;
}();