function Projects({project}){
    return(
        <div>
            <h1>Projects</h1>
            <hr/>
            <div>
                <h2>{project.title}</h2>
                <h3>{project.techStack}</h3>
                <p>{project.about}</p>
            </div>
        </div>
    )
}

export default Projects;