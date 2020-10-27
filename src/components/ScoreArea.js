import React from 'react'

/*components*/
import TotalCorrect from './TotalCorrect';
import TotalIncorrect from './TotalIncorrect';


function ScoreArea() {
    return (
        <div>
            <TotalCorrect />
            <TotalIncorrect />
        </div>
    )
}

export default ScoreArea
