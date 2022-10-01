function CardListItem(props) {
    return (
        <li>{props.item}</li>
    )
}

function ProjectCard(props)  {

    let listItems=[]
    props.items.forEach((listItem) => {
        listItems.push(<CardListItem item={listItem}></CardListItem>)
    });

    return (
        <div className="rounded-xl border-4 border-blue-800 px-16 pt-5 pb-5 w-96 h-96 hover:from-blue-100 hover:to-purple-100 hover:bg-gradient-to-r hover:transition-all hover:ease hover:duration-500">
            <h2 className="text-center text-3xl font-bold text-blue-800 whitespace-normal">{props.title}</h2>
            <div className="flex flex-col h-1/2 items-end justify-end mt-5">
                <div className="mx-auto mt-4 text-xl font-medium text-purple-700 pb-5">
                    <ul className="list-disc">
                        {listItems}
                    </ul>
                </div>
            </div>
            <div className="flex items-end justify-center">
                <a href={props.link} target={props.link !== '/projects' ? '_blank' : '_parent'} rel={'noreferrer'} className="mx-2 px-8 py-2 whitespace-nowrap from-blue-800 to-purple-700 bg-gradient-to-r hover:from-purple-500 hover:to-blue-600 hover:bg-gradient-to-r font-bold text-white rounded-md">Live Demo</a>
            </div>
        </div>
    )
}


export let ProjectPage = (props) => {
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
                <ProjectCard title={project.title} items={project.things} link={project.link}/>
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