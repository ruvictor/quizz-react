import React from 'react';
import './Answer.css';

const Answer = (props) => {

    let answers = Object.keys(props.answer)
        .map((qAnswer, i) => (
            <li onClick={() => props.checkAnswer(qAnswer)} key={qAnswer}>{props.answer[qAnswer]}</li>
        ));

        return (
            <ul className="Answers">
                {answers}
            </ul>
        );
}

export default Answer;