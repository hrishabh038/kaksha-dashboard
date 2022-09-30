import './OverviewCard.css'
import {CircularTextButton} from "../../../components/Button/Button";

const OverviewCard = ({count, text, bgColor}) => {
    return(
        <div className='home-overview-card' style={{background: bgColor}}>
            <CircularTextButton text={count} fontSize={'17px'} buttonSize={'20px'} marginRight={'7px'} />
            <span className='home-overview-card-text'>{text}</span>
        </div>
    )
}

export default OverviewCard