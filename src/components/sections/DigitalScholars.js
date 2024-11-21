import FadeIn from "../subcomponents/FadeIn";
import "./DigitalScholars.css";
import { React } from 'react';


function DigitalScholars() {

    return (
        <div id="DigitalScholars" className="sectionFlexSimple">
            <div id="DSNamePres" className="squareBox">
                <FadeIn>
                    <div id="DSTitleCont">
                        <div id="DSTitleDesc" className="titleDesc">SUMMER PROGRAM 2023</div>
                        <div id="DSTitle" className="title">Digital Scholars</div>
                    </div>
                </FadeIn>
                <FadeIn>
                    <div className="iframeCont" style={{paddingTop: '56.25%'}}>
                        <iframe className='responsive-iframe' src="https://www.youtube.com/embed/TxjIXy4b8ow?playlist=TxjIXy4b8ow&autoplay=1&mute=1&loop=1" loading="lazy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </FadeIn>
            </div>

            <div id="DSVidDesc" className="squareBox">
                <FadeIn>
                    <div className="iframeCont" style={{paddingTop: '62.29%'}}>
                        <iframe className='responsive-iframe' src="https://docs.google.com/presentation/d/e/2PACX-1vSDuGqq52KzjdF1Nwv_Okaqz_uq2OoeVJe2heOxU8zuyv82hfMnQA03HwR8DdVEIqraPAzqqZdxMmO8/embed?start=false&loop=true&delayms=3000" frameborder="0" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
                    </div>
                </FadeIn>
                <FadeIn>
                    <div id="DSDesc" className="text">
                        Digital Scholars was an intensive summer program that empowered me to develop computing skills, bolster college and career readiness, and forge connections within Chicago's dynamic tech sphere. Participating in the <b style={{color: 'white', fontWeight: '500'}}>Data Science Discovery</b> course, I explored data visualization, analysis, and glimpses of machine learning, culminating in a <b style={{color: 'white', fontWeight: '500'}}>final project on Startup Unicorns</b>. Through daily interactions, I connected with the city's tech influencers, engaged in weekly workshops spanning AI, machine learning, data science, and gained insights from leading tech incubators. Beyond the curriculum, I honed communication, teamwork, and networking abilities, fostering a holistic skill set for professional readiness.
                    </div>
                </FadeIn>
            </div>
        </div>
    )
}

export default DigitalScholars;