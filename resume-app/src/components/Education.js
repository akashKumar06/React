import '../styles/Education.css'

function Education({ education }) {
  return (
    <div className='education'>
      <h2>{education.degree}</h2>
      <h3>
        {education.college}
        <span>{education.year}</span>
      </h3>
      <h3>CGPA - {education.score}</h3>
    </div>
  );
}

export default Education;
