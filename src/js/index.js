//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
function SimpleCounter (props) {
    return (<div class="bigCounter">
<div></div>
<div class="calandar"></div>
<div class="fourthDigit"></div>
<div class="thirdDigit"></div>
<div class="secondDigit"></div>
<div class="firstDigit"></div>
    </div>)
}

//render your react application
ReactDOM.render(<SimpleCounter />, document.querySelector("#app"));