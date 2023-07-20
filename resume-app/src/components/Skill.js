import "../styles/skills.css";

function Skill({ skills }){
  console.log(skills);
  return (
    <div>
      {skills.map((skill) => {
        return (
          <div className="skill" key={skill.id}>
            <h3>{skill.skillName}</h3>
            <div>{skill.techUsed}</div>
            <div>{skill.desc}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Skill;
