import './Button.css'
import {useNavigate} from "react-router-dom";

export const RouterButton = ({button, navigateTo, bgColor, color}) => {
    const navigate = useNavigate()
    const myStyle= {
        background: bgColor,
        color: color
    }
    return (
        <a>
            <div className={'router-button'} style={myStyle} onClick={() => navigate(navigateTo)}>
                {button}
            </div>
        </a>
    )
}

export const CircularIconButton = ({icon, color, bgColor, marginRight, marginLeft, marginTop, marginBottom}) => {
    const myStyle = {
        background: bgColor,
        marginRight: marginRight,
        marginLeft: marginLeft,
        marginTop: marginTop,
        marginBotton: marginBottom,
    }
    return(
        <a>
            <div className='circular-button' style={myStyle}>
                <i className={icon} style={{color: color}}></i>
            </div>
        </a>
    )
}

export const CircularTextButton = ({text, color, bgColor, marginRight, marginLeft, marginTop, marginBottom, buttonSize, fontSize}) => {
    const myStyle = {
        background: bgColor,
        marginRight: marginRight,
        marginLeft: marginLeft,
        marginTop: marginTop,
        marginBotton: marginBottom,
        padding: buttonSize,
    }
    return(
        <a>
            <div className='circular-button' style={myStyle}>
                <span style={{color: color, fontSize: fontSize}}>{text}</span>
            </div>
        </a>
    )
}