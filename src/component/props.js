import React from "react";

const greet = (props) => {
    return (
        <>
        <h1>Hi {props.name}</h1>
        {props.children}
        </>
    )
}

export default greet