import React from 'react'

function UserGreeting(props) {
    let passOrFail;
    let result;
    if (props.correct >= 2) {
        result = "Congratulations! You have Passed the challenges";
        passOrFail = true;
    } else {
        result = "Try Again! You haven't Passed the challenges";
        passOrFail = false;
    }
    return (
        <div className="greeting">
            <h2>Thanks for completing the challenges</h2>
            <p className={`${passOrFail ? "pass" : "fail"}`}>{result}</p>
        </div>
    )
}

export default UserGreeting
