import "./ProgressBar.css"

function ProgressBar(props) {
    return (
        <div id='progBar'>
            <div id='progBarWord'>
                <div id='progBarTitle'>{props.title}</div>
                <div id='progBarPercent'>{props.percent}</div>
            </div>
            <div id='theBarCont'>
                <div id='theBar' style={{width: props.percent}}></div>
            </div>
        </div>
    );
}

export default ProgressBar;