import React, {Component} from 'react';
import './Quiz.css';
import Question from './question/Question';
import Answer from './answer/Answer';

export default class Quiz extends Component {

    // initiating the local state
    state = {
        quiestions: {
            1: 'What US city is known as the "birthplace of jazz"?',
            2: 'What is the capital of Greece?',
            3: 'What planet gave birth to Superman?'
        },
        answers: {
            1: {
                1: 'New Orleans',
                2: 'Chicago',
                3: 'New York'
            },
            2: {
                1: 'Athens',
                2: 'Patras',
                3: 'Kalamata'
            },
            3: {
                1: 'Krypton',
                2: 'Mars',
                3: 'Saturn'
            }
        },
        correctAnswers: {
            1: 1,
            2: 1,
            3: 1
        },
        step: 1
    }

    // the method that checks the correct answer
    checkAnswer = answer => {
        const { correctAnswers, step } = this.state;
        console.log(answer);
        if(answer === correctAnswers[step]){
            alert('Yes');
        }
        console.log(correctAnswers[step]);
    }

    render(){
        let { quiestions, answers, step } = this.state;
        return(
            <div className="Content">
                <Question
                    question={quiestions[step]}
                />
                <Answer
                    answer={answers[step]}
                    step={step}
                    checkAnswer={this.checkAnswer}
                />
            </div>
        );
    }
}