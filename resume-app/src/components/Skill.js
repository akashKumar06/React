import '../styles/skills.css'

function Skill({skillName,aboutSkill}){
    return (
        <div className='skill'>
            <h3>{skillName}</h3>
            <div>{aboutSkill}</div>
        </div>
    )
}

export default Skill;