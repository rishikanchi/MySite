import ContactForm from "../subcomponents/ContactForm";
import FadeIn from "../subcomponents/FadeIn";
import "./ContactMe.css";
import { React } from 'react';


function ContactMe() {

    return (
        <div id="ContactMe" className="section sectionFlexSimple">
            <div id='leftHalf'>
                <FadeIn>
                    <div class="titleDesc">CHAT WITH ME</div>
                </FadeIn>
                <FadeIn delay={350}>
                    <div id='cmtitleCont' className="title">Contact Me</div>
                </FadeIn>
                <FadeIn delay={400}>
                    <div id='cmtitleDesc' className="text">
                        I'm always excited to connect with new people. Whether you have a question, want to collaborate, or just fancy a friendly chat, feel free to reach out! 
                    </div>
                </FadeIn>
            </div>
            <div id='rightHalf'>
                <ContactForm/>
            </div>
        </div>
    )
}

export default ContactMe;