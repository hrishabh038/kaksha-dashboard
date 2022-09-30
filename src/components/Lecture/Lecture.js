import './Lecture.css';

const Lecture = () => {
    return (
        <div className='lecture'>

        </div>
    );
}

export const LectureTeaser = ({link, month, year, day, time, topic, bgColor}) => {
    const monthConcat = month.slice(0, 3)
    return (
       <a href={link}>
           <div className='lecture-teaser' style={{background: bgColor}}>
               <div className='lecture-teaser-date'>
                   <span className='lecture-teaser-day'>{day}</span>
                   <div className='lecture-teaser-month-year'>{monthConcat + ", " + year}</div>
               </div>
               <div className='lecture-teaser-course-color'></div>
               <div className='lecture-teasure-topic-time'>
                   <div className='lecture-teaser-time'><span className='lecture-teaser-time-starts-at'>starts at: </span></div>
                       <span className='lecture-teaser-time-span'>{time}</span>
                   <div className='lecture-teaser-topic'>{topic}</div>
               </div>
           </div>
       </a>
    );
}
export default Lecture