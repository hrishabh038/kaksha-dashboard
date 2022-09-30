import './Home.css';
import OverviewCard from "./OverviewCard/OverviewCard";
import Notice from "../../components/Notice/Notice";
import {LectureTeaser} from "../../components/Lecture/Lecture";

const Home = ({user}) => {
    return (
        <div className='home'>
            <div className='home-container'>
                <div className='welcome marginBottom-30px'>{"Welcome"+" "+user+"!"}</div>
                {/*  OVERVIEW  */}
                <div className='info-container home-overview marginBottom-30px'>
                    <span className='info-container-heading'>Overview</span>
                    <div className='info-container-container home-overview-container'>
                        <OverviewCard count={'2'} text={'Courses Completed'} bgColor={'#e1d2ff'}/>
                        <OverviewCard count={'2'} text={'Courses Enrolled'} bgColor={'#fde1ab'}/>
                        <OverviewCard count={'2'} text={'Assingments Completed'} bgColor={'#bae5f5'}/>
                        <OverviewCard count={'2'} text={'Assingments Pending'} bgColor={'#ccefbf'}/>
                    </div>
                </div>
                <div className='notice-and-lecture'>
                    {/*  NOTICE  */}
                    <div className='info-container home-notice-and-lecture marginBottom-30px'>
                        <span className='info-container-heading'>Notice Board</span>
                        <div className='info-container-container home-notice-container'>
                            <Notice heading={'Notice Heading'} date={'XX-XX-20XX'} issuedBy={'Issued By'} issuedByDesignation={'Designation'} notice={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas excepturi quas numquam sed molestias delectus ab amet, incidunt mollitia similique vero facilis reiciendis. Est consectetur fuga quo ut nobis deserunt.'} />
                            <Notice heading={'Notice Heading'} date={'XX-XX-20XX'} issuedBy={'Issued By'} issuedByDesignation={'Designation'} notice={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas excepturi quas numquam sed molestias delectus ab amet, incidunt mollitia similique vero facilis reiciendis. Est consectetur fuga quo ut nobis deserunt.'} />
                            <Notice heading={'Notice Heading'} date={'XX-XX-20XX'} issuedBy={'Issued By'} issuedByDesignation={'Designation'} notice={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas excepturi quas numquam sed molestias delectus ab amet, incidunt mollitia similique vero facilis reiciendis. Est consectetur fuga quo ut nobis deserunt.'} />
                            <Notice heading={'Notice Heading'} date={'XX-XX-20XX'} issuedBy={'Issued By'} issuedByDesignation={'Designation'} notice={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas excepturi quas numquam sed molestias delectus ab amet, incidunt mollitia similique vero facilis reiciendis. Est consectetur fuga quo ut nobis deserunt.'} />
                            <Notice heading={'Notice Heading'} date={'XX-XX-20XX'} issuedBy={'Issued By'} issuedByDesignation={'Designation'} notice={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas excepturi quas numquam sed molestias delectus ab amet, incidunt mollitia similique vero facilis reiciendis. Est consectetur fuga quo ut nobis deserunt.'} />
                            <Notice heading={'Notice Heading'} date={'XX-XX-20XX'} issuedBy={'Issued By'} issuedByDesignation={'Designation'} notice={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas excepturi quas numquam sed molestias delectus ab amet, incidunt mollitia similique vero facilis reiciendis. Est consectetur fuga quo ut nobis deserunt.'} />
                        </div>
                    </div>

                    {/*  LECTURE  */}
                    <div className='info-container home-notice-and-lecture marginBottom-30px'>
                        <span className='info-container-heading'>Upcoming Lectcure(s)</span>
                        <div className='info-container-container home-lecture-container'>
                            <LectureTeaser bgColor={'#dab353'} day={'09'} month={'January'} year={'2022'} time={'07:50 AM'} topic={'Boling point of water'}/>
                            <LectureTeaser bgColor={'#db9a94'} day={'09'} month={'January'} year={'2022'} time={'07:50 AM'} topic={'Boling point of water'}/>
                            <LectureTeaser bgColor={'#aa6e7f'} day={'09'} month={'January'} year={'2022'} time={'07:50 AM'} topic={'Boling point of water'}/>
                            <LectureTeaser bgColor={'#dab353'} day={'09'} month={'January'} year={'2022'} time={'07:50 AM'} topic={'Boling point of water'}/>
                            <LectureTeaser bgColor={'#aa6e7f'} day={'09'} month={'January'} year={'2022'} time={'07:50 AM'} topic={'Boling point of water'}/>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}
export default Home;