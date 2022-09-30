import './App.css';

//Routing
import {BrowserRouter , Route , Routes} from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Home from "./pages/Home/Home";
import Lectures from "./pages/Lectures/Lectures";
import PlacementInvites from "./pages/PlacementInvites/PlacementInvites";
import Profile from "./pages/Profile/Profile";
import Assingments from "./pages/Assingments/Assingments";
import {useState} from "react";

const App = ({user}) => {
    const [navExistance, setNavExistance] = useState(true)
    return (
        <div className="app">
            <BrowserRouter>
                <Nav existance={navExistance? 'block' : 'none'} />
                <div className='pages-container'>
                    <i className={ navExistance? 'bx bx-left-arrow-alt nav-toogle sticky-top': 'bx bx-right-arrow-alt nav-toogle sticky-top'} onClick={() => navExistance ? setNavExistance(false) : setNavExistance(true)}></i>
                <Routes>
                    <Route path='/' element={<Home user={user} />} />
                    <Route path='/lectures' element={<Lectures />} />
                    <Route path='/assingments' element={<Assingments />} />
                    <Route path='/placement-invites' element={<PlacementInvites />} />
                    <Route path='/profile' element={<Profile />} />
                </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
}
export default App;
