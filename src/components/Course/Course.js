import './Course.css'
import {CircularIconButton, RouterButton} from "../Button/Button";

const Course = ({name, description, icon}) => {
    return (
        <div className='course'>
            <div className='course-avatar'>
                <CircularIconButton icon={icon} color={'white'} bgColor={'#5b55cd'} marginLeft={'0px'} marginRight={'15px'} />
                <span>{name}</span>
            </div>
            <div className='course-description'>
                <p>{description}</p>
            </div>
            <div className='course-footer'>
                <RouterButton bgColor={'#5b55cd'} color={'white'} button={'Continue'} navigateTo={'/lectures'} />
            </div>
        </div>
    )
}

export default Course