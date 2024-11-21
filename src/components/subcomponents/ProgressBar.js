import FadeIn from "./FadeIn";
import "./ProgressBar.css"

function ProgressBar(props) {
    return (
        <div id='progBar'>
                <div id='progBarWord'>
                    <FadeIn delay={props.delay}>
                        <div id='progBarTitle'>{props.title}</div>
                    </FadeIn>
                    <FadeIn delay={props.delay}>
                        <div id='progBarPercent'>{props.percent}</div>
                    </FadeIn>
                </div>
                <FadeIn delay={props.delay}>
                <div id='theBarCont'>
                            <div id='theBar' style={{width: props.percent}}></div>
                    </div>
                </FadeIn>
        </div>
    );  
}

export default ProgressBar;