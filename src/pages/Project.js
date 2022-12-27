import ProjectCard from '../components/ProjectCard'
const ProjectPage = (props) => {
    
    let projects = [
        {
            "title": 'My Website Project',
            "date": "October 2022",
            "languages": ["ReactJS", "JavaScript", "TailWindCSS", "NodeJS"],
            "demo": "#projects",
            "description": "This is the website you are currently on. The basis behind this project was to show my skills in front-end and well as show employers what I have to offer.",
            "github": "https://github.com/terminator7/PersonalWebsite"
        },
        {
            "title": "School Database Project",
            "date": "December 2021",
            "languages": ["JavaScript", "ExpressJS", "NodeJS", "BootStrap", "HTML", "MySQL"],
            "demo": "http://sql.jacobsbuilds.com",
            "description": "This was a project that I had done for a database class, The goal for this project was to simulate a car company producing \"jobs\" for the employees. This application has functions such as deleting, adding, or modifying jobs, employees, and customers.",
            "github": "https://github.com/terminator7/DatabaseProject"
        },
        {
            "title": "Turtle Creek Website",
            "date": "May 2021",
            "languages": ["JavaScript", "ExpressJS", "NodeJS", "BootStrap", "HTML"],
            "demo": "http://turtle.jacobsbuilds.com",
            "description": "This website was for a potiential client, Due to a set of unfortunate outcomes, the site never went live. However, I still wanted to showcase it to show my improvments over the course of my project devlopments.",
            "github": ""
        },
        {
            "title": "Elmer Collision Website",
            "date": "April 2021",
            "languages": ["JavaScript", "ExpressJS", "NodeJS", "BootStrap", "HTML"],
            "demo": "http://elmer.jacobsbuilds.com",
            "description": "This was yet again another website for a client, still in the works, However the client has not had the time to discuss futher implentations of the website.",
            "github": ""
        },
        {
            "title": "Fitness Tracker App",
            "date": "September 2022",
            "languages": ["JavaScript", "React Native", "NodeJS", "Expo"],
            "demo": "",
            "description": "This was a school, group project. The idea was to create an application that allowed a user to track workouts, diet, water intake, and weight. All this tracked data would then be then compacted into a single progress page where all data is presented.",
            "github": "https://github.com/terminator7/FitnessTracker"
        },
        {
            "title": "Unity Pinball Project",
            "date": "January 2022",
            "languages": ["C#", "Unity"],
            "demo": "",
            "description": "This was a school, group project. The idea was to create a unity based, pinball game. The theme of said pinball game was Harry Potter.",
            "github": "https://github.com/terminator7/Unity-Pinball-Project"
        },
    ]

    return (
        <section id="projects">
            <h2 className="text-gray-200 text-center font-medium text-[3rem]">My Projects</h2>
            <div className="py-3"></div>
            <div className="flex justify-center">
                <div className="projectCardContainer flex gap-4 flex-wrap px-10 justify-center xl:justify-start">
                    {
                        projects.map(element => {
                            return <ProjectCard projectName={element.title} date={element.date} languages={element.languages} collapsed={true} demo={element.demo} github={element.github} description={element.description}></ProjectCard>
                        })
                    }
                </div>
            </div>

        </section>
    )
}

export default ProjectPage