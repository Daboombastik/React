import React from "react";
import {quizQuestions} from "../Questions/Questions";

export interface IResult {
    results: number
}

const Result: React.FC<IResult> = (props) => {
    return (
        <div className="result">
            <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png"  alt="img"/>
            <h2>{`You have answered ${props.results} out ${quizQuestions.length}`}</h2>
            <a href="/">
            <button>Want to try again?</button>
            </a>
        </div>
    );
}

export default Result;