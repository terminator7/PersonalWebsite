import ProjectCard from '../components/ProjectCard'

const ProjectPage = (props) => {
    let projectCards = []
    
    let projects = [
        {
            "title": 'My Website Project',
            "things": ["ReactJS", "JavaScript", "React-Router", "HTML", "TailWindCSS", "NodeJS"],
            "link": "/projects"
        },
        {
            "title": "School Database Project",
            "things": ["JavaScript", "ExpressJS", "NodeJS", "BootStrap", "HTML", "MySQL"],
            "link": "http://sql.jacobsbuilds.com"
        },
        {
            "title": "Turtle Creek Website",
            "things": ["JavaScript", "ExpressJS", "NodeJS", "BootStrap", "HTML"],
            "link": "http://turtle.jacobsbuilds.com"
        },
        {
            "title": "Elmer Collision Website",
            "things": ["JavaScript", "ExpressJS", "NodeJS", "BootStrap", "HTML"],
            "link": "http://elmer.jacobsbuilds.com"
        }
    ]

    projects.forEach((project) => {
        projectCards.push(
            <div className="flex-1 shrink" style={{flex: '0 0 auto'}}>
                <ProjectCard projectName={project.title} items={project.things} link={project.link}/>
            </div>
        )
    });
    return (
        <div className=" from-blue-800 to-purple-700 bg-gradient-to-r">
            <div className="lg:container mx-auto bg-white">
                <div className="p-10">
                    <h1 className="text-7xl font-bold text-purple-700 text-center">Projects</h1>
                    <div className="flex flex-wrap mt-10 gap-2 justify-center">
                        {projectCards}
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default ProjectPage