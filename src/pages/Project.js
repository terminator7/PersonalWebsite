import CardCarousel from '../components/CardCarousel'
const ProjectPage = (props) => {
    
    let projects = [
        {
            "title": 'My Website Project',
            "date": "October 2022",
            "languages": ["ReactJS", "JavaScript", "React-Router", "HTML", "TailWindCSS", "NodeJS"],
            "link": "/projects"
        },
        {
            "title": "School Database Project",
            "date": "December 2021",
            "languages": ["JavaScript", "ExpressJS", "NodeJS", "BootStrap", "HTML", "MySQL"],
            "link": "http://sql.jacobsbuilds.com"
        },
        {
            "title": "Turtle Creek Website",
            "date": "May 2021",
            "languages": ["JavaScript", "ExpressJS", "NodeJS", "BootStrap", "HTML"],
            "link": "http://turtle.jacobsbuilds.com"
        },
        {
            "title": "Elmer Collision Website",
            "date": "April 2021",
            "languages": ["JavaScript", "ExpressJS", "NodeJS", "BootStrap", "HTML"],
            "link": "http://elmer.jacobsbuilds.com"
        }
    ]

    return (
        <div className=" from-blue-800 to-purple-700 bg-gradient-to-r">
            <div className="lg:container mx-auto bg-white">
                <div className="p-10">
                    <h1 className="text-7xl font-bold text-purple-700 text-center">Projects</h1>
                    <div className="flex flex-wrap mt-10 gap-2 justify-center">
                        <CardCarousel projects={projects}></CardCarousel>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default ProjectPage