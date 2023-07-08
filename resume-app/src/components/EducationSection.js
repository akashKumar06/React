import '../styles/Education.css'
import Education from './Education';

function EducationSection({education}){
    return(
        <div className='education-container'>
            <Education education={education[0]}/>
            <Education education={education[1]}/>
        </div>
    )
}

export default EducationSection;