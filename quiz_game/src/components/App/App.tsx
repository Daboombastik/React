import React, {useState} from 'react';
import '../../index.scss';
import Game from "../Game/Game";
import Result from "../Result/Result";
import {quizQuestions} from "../Questions/Questions";

const App: React.FC = () => {

    let [gameOver, setGameOver] = useState(false)
    let [results, setResults] = useState(0)

    let summarizeAnswers = (value: number) => {
        setResults(value)
    }

    return (
        <div className="App">
            <Game questions={quizQuestions} handleAnswers={summarizeAnswers} endGame={setGameOver}/>
            {gameOver && <Result results={results}/>}
        </div>
    );
}

export default App;


