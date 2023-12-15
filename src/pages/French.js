import "./French.css";
import React, { useState, useEffect } from 'react';

import image1 from "../images/French/image1.png"
import image2 from "../images/French/image2.png"
import image3 from "../images/French/image3.png"
import image4 from "../images/French/image4.png"
import image5 from "../images/French/image5.png"
import image6 from "../images/French/image6.png"
import image7 from "../images/French/image7.png"
import image8 from "../images/French/image8.png"
import image9 from "../images/French/image9.png"
import image10 from "../images/French/image10.png"
import image11 from "../images/French/image11.png"
import image12 from "../images/French/image12.png"
import image13 from "../images/French/image13.png"
import image14 from "../images/French/image14.png"
import image15 from "../images/French/image15.png"
import image16 from "../images/French/image16.png"
import image17 from "../images/French/image17.png"
import { wait } from "@testing-library/user-event/dist/utils";

var dict = {
    2: "02) Une caserne de pompier",
    3: "03) Un cinéma",
    4: "04) Un commissariat de police",
    5: "05) Un gratte-ciel",
    6: "06) Un hotel de ville",
    7: "07) Un jardin public",
    8: "08) Un lodgement/une habitation",
    9: "09) Un musée",
    10: "10) Une place",
    11: "11) Un quartier",
    12: "12) Une station de métro",
    13: "13) Une feu (tricolere)",
    14: "14) Un panneau",
    15: "15) Un pont",
    16: "16) Une rue",
    17: "17) Un rond-pont"
  };

function French() {
    const [timer, setTimer] = useState(0);
    const [word, setWord] = useState("01) Un arrêt d'autobus")

    // Function to update the timer every second
    const updateTime = () => {
        setTimer((prevTimer) => prevTimer + 1);
    };

    useEffect(() => {
        const intervalId = setInterval(updateTime, 1000);

        // Clean up the interval when the component is unmounted
        return () => clearInterval(intervalId);
    }, []);

    function randTimer(num) {
        console.log('entered')
        setTimer(num)

        setTimeout(function(){
            randTimer(num);
        }, 10);        
    }
    function imageClick(num) {
        if (num == Number(word[0] + word[0 + 1])) {
            console.log('worked')
            if (num == 17){
                setWord("You won the game in " + timer  + " seconds!")
                randTimer(timer);
            }
            else{
            setWord(dict[num + 1]);
            }
        }
    }

    return (
        <div id='French'>
            <div className="title" id="frenchTitle">Ma Place</div>
            <div id='timer' className="titleDesc">{timer}</div>
            <div className='text' id="nextQuestion">{word}</div>
            <img src={image1} alt="image1" className="frenchImages" id="image1" onClick={() => imageClick(1)}/>
            <img src={image2} alt="image2" className="frenchImages" id="image2" onClick={() => imageClick(2)}/>
            <img src={image3} alt="image3" className="frenchImages" id="image3" onClick={() => imageClick(3)}/>
            <img src={image4} alt="image1" className="frenchImages" id="image4" onClick={() => imageClick(4)}/>
            <img src={image5} alt="image1" className="frenchImages" id="image5" onClick={() => imageClick(5)}/>
            <img src={image6} alt="image1" className="frenchImages" id="image6" onClick={() => imageClick(6)}/>
            <img src={image7} alt="image1" className="frenchImages" id="image7" onClick={() => imageClick(7)}/>
            <img src={image8} alt="image1" className="frenchImages" id="image8" onClick={() => imageClick(8)}/>
            <img src={image9} alt="image1" className="frenchImages" id="image9" onClick={() => imageClick(9)}/>
            <img src={image10} alt="image1" className="frenchImages" id="image10" onClick={() => imageClick(10)}/>
            <img src={image11} alt="image1" className="frenchImages" id="image11" onClick={() => imageClick(11)}/>
            <img src={image12} alt="image1" className="frenchImages" id="image12" onClick={() => imageClick(12)}/>
            <img src={image13} alt="image1" className="frenchImages" id="image13" onClick={() => imageClick(13)}/>
            <img src={image14} alt="image1" className="frenchImages" id="image14" onClick={() => imageClick(14)}/>
            <img src={image15} alt="image1" className="frenchImages" id="image15" onClick={() => imageClick(15)}/>
            <img src={image16} alt="image1" className="frenchImages" id="image16" onClick={() => imageClick(16)}/>
            <img src={image17} alt="image1" className="frenchImages" id="image17" onClick={() => imageClick(17)}/>
        </div>
    )
}

export default French;