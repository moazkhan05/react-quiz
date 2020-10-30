import React from 'react'

/*Components*/
import Question from './Question';
import AnswerList from './AnswerList';
import UserGreeting from './UserGreeting';

function QuizArea(props) {
    if(props.isFinished)
        return (<UserGreeting correct={props.correct} 
                        incorrect={props.incorrect}/>
                )    
    return (
        <div>
            <h2>Quiz Area</h2>
            <Question dataSet={props.dataSet}/>
            <AnswerList handleClick={props.handleClick} dataSet={props.dataSet}/>
            
        </div>
    )
}

export default QuizArea
