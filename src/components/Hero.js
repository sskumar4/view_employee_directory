import React from "react";
import "./heroStyle.css";

function Hero() {
    return (
<div className = "wrapper">
    <div className = "title">
Employee Directory
    </div>
    <br></br>
    <div className = "tagline">
Click on 'Name' to sort by employee name or use search box to narrow your results
    </div>
</div>

    );
}

export default Hero;