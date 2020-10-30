import React from 'react';
//import '../styles/components.css';

function Answer(props){
    return (
        <div>
            <button type="button" className="btnAnswer"
                    onClick = { ()=>{props.handleClick(props.choice)} }>{props.answer}</button>
        </div>
    )
}

export default Answer
