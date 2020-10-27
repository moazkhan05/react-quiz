import React, { Component } from 'react'

/*api*/
import dataSet from '../api/dataSet';

/*components*/
import QuizArea from './QuizArea';
import ScoreArea from './ScoreArea';

export class Questionnaire extends Component {
    constructor(){
        super();
        this.state=({
            current:0,
            dataSet:dataSet,
            correct:0,
            incorrect:0,
            isFinished:false
        })
    }
    render() {
        return (
            <div>
               <QuizArea />
               <ScoreArea /> 
            </div>
        )
    }
}

export default Questionnaire
