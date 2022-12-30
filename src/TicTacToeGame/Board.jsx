import React, { useState } from "react";
import Squre from "./Squre";

const BoardPage = () => {

    const [state, setState] = useState(Array(9).fill(null));
    const [isXTurn, setIsXTurn] = useState(true);

    const checkWinner = () => {
        const winnerPlayer = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (let win of winnerPlayer) {
            const [a, b, c] = win;
            if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
                return state[a];
            }
        }

        return false;
    }

    const isWinner = checkWinner();

    const handleClick = (index) => {
        if (state[index] != null) {
            return;
        }
        const copyState = [...state];
        copyState[index] = isXTurn ? "X" : "O";
        setState(copyState);
        setIsXTurn(!isXTurn);
    }

    const handleReset = () => {
        setState(Array(9).fill(null));
    }

    return (
        <div className="board-container">
            {isWinner ? (
                <>{isWinner} win the game <button onClick={handleReset}> Play Again </button></>
            ) : (
                <>
                    <h4> Player {isXTurn ? "X" : "O"} please Move </h4>
                    <div className="board-row">
                        <Squre onClick={() => handleClick(0)} value={state[0]} />
                        <Squre onClick={() => handleClick(1)} value={state[1]} />
                        <Squre onClick={() => handleClick(2)} value={state[2]} />
                    </div>
                    <div className="board-row">
                        <Squre onClick={() => handleClick(3)} value={state[3]} />
                        <Squre onClick={() => handleClick(4)} value={state[4]} />
                        <Squre onClick={() => handleClick(5)} value={state[5]} />
                    </div>
                    <div className="board-row">
                        <Squre onClick={() => handleClick(6)} value={state[6]} />
                        <Squre onClick={() => handleClick(7)} value={state[7]} />
                        <Squre onClick={() => handleClick(8)} value={state[8]} />
                    </div> </>
            )}
        </div>
    )
}

export default BoardPage;