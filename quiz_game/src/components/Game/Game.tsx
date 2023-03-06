import React, {useState, } from 'react';
import {Question} from "../Questions/Questions";

export interface GameCard {
    questions: Question[],
    countAnswers: (value: number) => void
    isGameOver: (value: boolean) => void
}

const Game: React.FC<GameCard> = ({questions, countAnswers, isGameOver}) => {

    let [index, setIndex] = useState(0)
    let [correctAnswers, setCorrectAnswers] = useState(0)
    let [percentage, setPercentage] = useState(0)

    const verifyAnswer = (event: any) => {
        let answer = questions[index].answers.find(e => e.text === event.target.innerText && e.isCorrect);
        if (answer) {
            setCorrectAnswers(++correctAnswers)
        }

        if (index === questions.length - 1) {
            setPercentage(100)
            isGameOver(true)
        } else {
            setIndex(++index)
            setPercentage(Math.round(index / questions.length * 100))
        }
        countAnswers(correctAnswers)
    }

    return (
        <>
            <div className="progress">
                <div style={{width: `${percentage}%`}} className="progress__inner"></div>
            </div>
            <h1>{questions[index].question}</h1>
            <ul>
                {questions[index].answers.map(e =>
                    <li key={e.text} onClick={verifyAnswer}>
                        {e.text}
                    </li>
                )}
            </ul>
        </>
    );
}

export default Game;