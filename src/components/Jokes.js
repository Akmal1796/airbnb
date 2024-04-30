import React from "react";

function Jokes(props) {
/*     console.log(props.comments); */
    return(
        <div className="jokes">
            {/* {props.Setup && <h4>Setup: {props.Setup}</h4>} */} {/* this is one method of conditional rendering */}
            <h4 style={{display: props.Setup ? "block" : "none"}}>Setup: {props.Setup}</h4> {/* This is another method to show the conditional rendering */}
            <h4>Punchline: {props.Punchline}</h4>
        </div>
    );
}

export default Jokes