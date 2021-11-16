import React from "react";

const name = "Pogo"
const currDate =  new Date().toLocaleDateString();
const currDate1 =  new Date().toLocaleTimeString();
function second() {
    return (
        <>
        <h1>{`Hi my name is ${name}`}</h1>
        <p>{`Aaj ki date hai - ${currDate}`}</p>
        <p>{`Abhi time hai - ${currDate1}`}</p> 
        </>
    )
}

export default second