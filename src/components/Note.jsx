import React from "react";

function Note(props){
    return <div className="note">
        <h1>{props.cardTitle}</h1>
        <p>{props.cardContent}</p>
    </div>;
}

export default Note;