import React from "react";

let currDate = new Date(2021, 5, 5, 1);
currDate = currDate.getHours();
let greeting = '';
var cssStyle = {};

if(currDate >= 1 && currDate < 12) {
    greeting = 'Good Morning';
    cssStyle.color = 'green';
} else if( currDate >= 12 && currDate < 19) {
    greeting = 'Good Afternoon';
    cssStyle.color = 'yellow';
} else {
    greeting = 'Good Night';
    cssStyle.color = 'black';
}

function timeChecker() {
    return(
        <>
        <div>
        <h1> Hello Sir, <span style={cssStyle}>{greeting}</span> </h1>
        </div>
        </>
    )
}

export default timeChecker;