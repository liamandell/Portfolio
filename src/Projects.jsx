function Projects() {
    const githubProjects = [
        {
            title: 'Employee Tracker',
            description: 'Backend project using Node.js and SQL...',
            tech: ['Node.js', 'SQL'],
            link: 'https://github.com/liamandell/Terry-Employee_Tracker',
        },
    ];

    return (
        <div>
            <h2>Projects</h2>
            {githubProjects.map((project, index) => (
                <div key={index}>
                    <h3>{project.title}</h3>
                    <a href={project.link}>View Project</a>
                </div>
            ))}
        </div>
    );
}

export default Projects;