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
                1: 'Chicago',
                2: 'New Orleans',
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
            1: '2',
            2: '1',
            3: '1'
        },
        correctAnswer: 0,
        clickedAnswer: 0,
        step: 1,
        score: 0
    }

    // the method that checks the correct answer
    checkAnswer = answer => {
        const { correctAnswers, step, score } = this.state;
        console.log(answer);
        if(answer === correctAnswers[step]){
            this.setState({
                score: score + 1,
                correctAnswer: correctAnswers[step],
                clickedAnswer: answer
            });
        }else{
            this.setState({
                correctAnswer: 0,
                clickedAnswer: answer
            });
        }
        console.log(correctAnswers[step]);
    }

    render(){
        let { quiestions, answers, correctAnswer, clickedAnswer, step } = this.state;
        return(
            <div className="Content">
                <Question
                    question={quiestions[step]}
                />
                <Answer
                    answer={answers[step]}
                    step={step}
                    checkAnswer={this.checkAnswer}
                    correctAnswer={correctAnswer}
                    clickedAnswer={clickedAnswer}
                />
            </div>
        );
    }
}