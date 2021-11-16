import React from "react";

const fname = "pogo"
const fnum = "13"

function lit() {
    return (
        <>
        <h3>Hi my name is {fname} </h3>
        <h3>Hi my number is {fnum} </h3>
        <p>Template literals</p>
        <h3>{`hi my name is ${fname} and number is ${fnum}`}</h3>
        </>
    )
}



export default lit