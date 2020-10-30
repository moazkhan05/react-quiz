import React from 'react'

function Question(props) {


    return (
        <div className="question">
            <h2>{props.dataSet.question}</h2>
        </div>
    )
}

export default Question
