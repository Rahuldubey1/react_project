import React from "react";

const img1 = "https://picsum.photos/200/300"
const img2 = "https://picsum.photos/250/300"
const img3 = "https://picsum.photos/300/300"
const link= "https://www.thapatechnical.com/"

function img() {
    return (
        <>
            <h1 className="heading">Hi kaise ho aap log</h1>
            <div className="img_div">
                <img src={img1} alt="heeee"/>
                <img src={img2} alt="heeee"/>
                <a href="https://youtube.com" target="_blank">
                    <img src={img3} alt="heeee"/>
                </a>
            </div>
        </>
    )
}

export default img



