import "./PageNotFound.css";
import React from "react";
import rk_logo from "../images/rk_logo.png"

function PageNotFound() {
    return (
        <>  
            <div id="logoCont">
                <img src={rk_logo} id="logoPic" onClick={() => {window.location.href = '/#Intro';}} alt="Logo Rishi Kanchi" />
            </div>
            <div id="PageNotFound" className="title">
                404
            </div>
        </>

    );
}

export default PageNotFound;