import './NavControl.css'
import {useNavigate} from "react-router-dom";
import {useState} from "react";

const NavControl = ({icon, text, navigateTo, existance}) => {
    const navigate = useNavigate();
    const [active, setActive] = useState(true);
    return(
        <div className='nav-control' onClick={() => navigate(navigateTo)}>
            <i className={icon}></i>
            <span className='nav-control-text' style={{display: existance}}>{text}</span>
        </div>
    )
}

export default NavControl