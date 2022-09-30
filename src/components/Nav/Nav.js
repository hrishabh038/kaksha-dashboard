import './Nav.css';
import NavControl from "./NavController/NavControl";
import {useState} from "react";

const Nav = ({existance}) => {
    const [fullWidth, setFullWidth] = useState(true);
    const myNavStyle = {
        width: fullWidth ? '220px' : '55px',
        display: existance
    }
    var w = window.innerWidth;
    return (
        <nav className={w <= 1200? 'navigation animate__slideInLeft' : 'navigation sticky-top animate__slideInLeft' } style={myNavStyle} >
            <div className='nav-logo'>
                <img style={{display: fullWidth ? 'block' : 'none'}} src='https://i.postimg.cc/xT0qH1JM/darklogo.png'
                     alt='Kaksha'/>
                <i style={{color: fullWidth ? '#af91eb' : 'red'}}
                   className={fullWidth ? 'bx bx-toggle-right' : 'bx bx-toggle-left'}
                   onClick={() => fullWidth ? setFullWidth(false) : setFullWidth(true)}></i>
            </div>
            <div className='nav-controller'>
                <NavControl text='My Profile' icon='bx bx-user-pin' navigateTo='/profile'
                            existance={fullWidth ? 'block' : 'none'}/>
                <NavControl text='Home' icon='bx bx-home-smile' navigateTo='/'
                            existance={fullWidth ? 'block' : 'none'}/>
                <NavControl text='Lectures' icon='bx bx-collection' navigateTo='/lectures'
                            existance={fullWidth ? 'block' : 'none'}/>
                <NavControl text='Assingments' icon='bx bx-code-alt' navigateTo='/assingments'
                            existance={fullWidth ? 'block' : 'none'}/>
                <NavControl text='Placement Invites' icon='bx bxs-zap' navigateTo='/placement-invites'
                            existance={fullWidth ? 'block' : 'none'}/>
            </div>
        </nav>
    );
}
export default Nav;