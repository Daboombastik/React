import React, {useState} from 'react';
import '../../index.scss';
import Game from "../Game/Game";
import Result from "../Result/Result";
import {quizQuestions} from "../Questions/Questions";

const App: React.FC = () => {

    let [gameOver, setGameOver] = useState(false)
    let [results, setResults] = useState(0)

    return (
        <div className="App">
            {!gameOver && <Game questions={quizQuestions} countAnswers={setResults} isGameOver={setGameOver}/>}
            {gameOver && <Result results={results}/>}
        </div>
    );
}

export default App;


