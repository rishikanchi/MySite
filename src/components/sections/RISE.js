import "./RISE.css";
import { React } from 'react';
import ALS_Poster from "../../images/ALS _Poster.png"

function RISE() {

    return (
        <div id="RISE" className="sectionFlexSimple">
            <div id="RISENamePres" className="squareBox">
                <div id="RISETitleCont">
                    <div id="RISETitleDesc" className="titleDesc">SUMMER PROGRAM 2024</div>
                    <div id="RISETitle" className="title">Boston University RISE</div>
                    <button className='button' style={{marginTop: 0, marginBottom: 15}} onClick={() => {window.open('https://github.com/rishikanchi/RISE2024', "_blank")}}>PROGRAM FILES</button>
                </div>
                <div id="RISEDesc" className="text">
                    The <b style={{color: 'white', fontWeight: '500'}}>Boston University RISE Practicum</b> combines lab work with instructor-led lectures to provide the opportunity to conduct research. In addition to workshops, I participated in weekly activities such as industry site tours and research talks. To create my final poster titled "<b style={{color: 'white', fontWeight: '500'}}>Modeling the Effects of Astrocytic GLT-1 Downregulation and Therapeutic Agents on Tripartite Synapse in ALS</b>," I worked with a group of peers to create a Python Ordinary Differential Equation model of a small brain circuit called the tripartite synapse. Then, we modeled the effects of ALS and various drugs with ALS to analyze the effectiveness of possible treatments. Finally, we presented our findings to professors and other visitors at the <b style={{color: 'white', fontWeight: '500'}}>BU RISE poster symposium</b>.
                </div>
            </div>

            <div id="RISEPoster" className="squareBox">
                <img id='PosterImg' src={ALS_Poster} alt="ALS_Poster" />
            </div>
        </div>
    )
}

export default RISE;