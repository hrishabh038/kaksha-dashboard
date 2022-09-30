import './Notice.css';

const Notice = ({heading, date, issuedBy, issuedByDesignation, notice}) => {
    return (
        <div className='notice'>
            <span className='notice-heading'>{heading}</span>
            <div className='notice-date-time'>
                {date}
            </div>
            <p className='notice-paragraph'>{notice}</p>

            <div className='notice-designation'>
                <span>{issuedByDesignation}</span>
            </div>
            <span className='notice-e-sign'>{issuedBy}</span>
        </div>
    );
}
export default Notice;