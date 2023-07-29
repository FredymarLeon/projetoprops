import React from "react";

function JokeCard(props){
    return(
        <div className="joke-card">
            <h3>Question: {props.question}</h3>
            <p>PunchLine: {props.punchLine}</p>
      </div>
    )
}

export default JokeCard