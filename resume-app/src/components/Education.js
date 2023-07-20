import "../styles/skills.css";

function Education({ education }){
  console.log(education);
  return (
    <div>
      {education.map((edu) => {
        return (
          <div className="edu" key={edu.id}>
            <h3>{edu.name}</h3>
            <div>{edu.course}</div>
            <div>{edu.year}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Education;
