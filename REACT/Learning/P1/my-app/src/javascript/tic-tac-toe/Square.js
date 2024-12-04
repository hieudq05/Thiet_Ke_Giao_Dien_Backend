import { useState } from "react";

function Square({ value, onSquareClick }) {
    return (
        <button className="square" onClick={onSquareClick}>
            {value}
        </button>
    );
}

function Board({ xIsNext, squares, onPlay }) {
    const winner = calculateWinner(squares);
    let status;
    if (winner !== null) {
        status = "Winner is: " + winner;
    } else {
        status = "Next player: " + (xIsNext ? "X" : "O");
    }

    function handleClick(i) {
        if (squares[i] || calculateWinner(squares)) {
            return;
        }
        const nextStepSquare = squares.slice();
        if (xIsNext) {
            nextStepSquare[i] = "X";
        } else {
            nextStepSquare[i] = "O";
        }
        onPlay(nextStepSquare);
    }

    return (
        <>
            <h3>{status}</h3>
            <div className="board-row">
                <Square
                    value={squares[0]}
                    onSquareClick={() => handleClick(0)}
                />
                <Square
                    value={squares[1]}
                    onSquareClick={() => handleClick(1)}
                />
                <Square
                    value={squares[2]}
                    onSquareClick={() => handleClick(2)}
                />
            </div>
            <div className="board-row">
                <Square
                    value={squares[3]}
                    onSquareClick={() => handleClick(3)}
                />
                <Square
                    value={squares[4]}
                    onSquareClick={() => handleClick(4)}
                />
                <Square
                    value={squares[5]}
                    onSquareClick={() => handleClick(5)}
                />
            </div>
            <div className="board-row">
                <Square
                    value={squares[6]}
                    onSquareClick={() => handleClick(6)}
                />
                <Square
                    value={squares[7]}
                    onSquareClick={() => handleClick(7)}
                />
                <Square
                    value={squares[8]}
                    onSquareClick={() => handleClick(8)}
                />
            </div>
        </>
    );
}

export default function Game() {
    /* const [history, setHistory] = useState([Array(9).fill(null)]);
    const [xIsNext, setXIsNext] = useState(true);
    const squares = history[history.length - 1];

    function handleClick(nextStepSquare) {
        setXIsNext(!xIsNext);
        setHistory([...history, nextStepSquare]);
    } */

    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const xIsNext = currentMove % 2 === 0;
    const squares = history[currentMove];

    function handleClick(nextStepSquare) {
        const nextHistory = [
            ...history.slice(0, currentMove + 1),
            nextStepSquare,
        ];
        setHistory(nextHistory);
        setCurrentMove(history.length - 1);
        console.log(history);
    }

    function jumpTo(step) {
        console.log(step);
    }

    const listStep = history.map((squares, move) => {
        let decription;
        decription = move === 0 ? "Go to game start" : "Go to move #" + move;
        return (
            <li key={move}>
                <button onClick={() => jumpTo({ move })}>{decription}</button>
            </li>
        );
    });

    return (
        <div className="game">
            <div className="game-board">
                <Board
                    squares={squares}
                    xIsNext={xIsNext}
                    onPlay={handleClick}
                />
            </div>
            <div className="game-info">
                <ol>{listStep}</ol>
            </div>
        </div>
    );
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let index = 0; index < lines.length; index++) {
        const [a, b, c] = lines[index];
        if (
            squares[a] &&
            squares[a] === squares[b] &&
            squares[b] === squares[c]
        ) {
            return squares[a];
        }
    }
    return null;
}
