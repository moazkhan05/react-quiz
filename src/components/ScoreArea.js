import React from 'react'

/*components*/
import TotalCorrect from './TotalCorrect';
import TotalIncorrect from './TotalIncorrect';


function ScoreArea(props) {
    return (
        <div className="scoreWrap">
            <TotalCorrect correct={props.correct}/>
            <TotalIncorrect incorrect={props.incorrect}/>
        </div>
    )
}

export default ScoreArea
