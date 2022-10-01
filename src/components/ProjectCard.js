import { IconContext } from "react-icons"
import { IoMdArrowDropdown } from "react-icons/io"
import '../styles/App.css'

function CardButton({Icon, title, primaryColor, hoverColor}) {
    return (
        <a href="" className={"p-2 w-40 text-center rounded-lg text-white hover:bg-blue-500" + (hoverColor ? hoverColor : "")}>{title}</a>
    )
}

const ProjectCard = ({projectName, date, description, languages, links}) =>  {

    return (
        <div className="projectCard w-96 border rounded-md shadow-lg"> 
            <div className="header w-full transition-colors ease-in-out duration-300 rounded-md pt-4 pr-2 pl-2 pb-1 hover:from-blue-800 hover:to-purple-700 hover:bg-gradient-to-r hover:text-white hover:cursor-pointer">
                <div className="flex justify-between">
                    <h3 className="text-2xl font-bold subpixel-antialiased">{projectName}</h3>
                    <div className="flex items-center ">
                        <IconContext.Provider value={{size: "1.75em"}}>
                            <div>
                                <IoMdArrowDropdown/>
                            </div>
                        </IconContext.Provider>
                    </div>
                </div>
            </div>
            <div className="dropDown">
                <div className="flex flex-col body pt-2 px-4 pb-4 space-y-4">
                    <div className="subHeader text-center italic text-gray-500">
                        <h3>May 2020</h3>
                    </div>
                    <div className="Body">
                        <div className="description">
                            <div className="descriptionHeader text-center my-2">
                                <h3 className="overflow-hidden"><span className="
                                 relative
                                 inline-block
                                 after:absolute
                                 after:top-1/2
                                 after:border-b-2
                                 after:w-screen
                                 after:mx-1
                                 after:left-full
                                 after:border-b-black
                                 before:absolute
                                 before:top-1/2
                                 before:border-b-2
                                 before:mx-1
                                 before:w-screen
                                 before:right-full
                                 before:border-b-black">Description</span></h3>
                            </div>
                            <div className="descriptionContent px-2">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum repellendus, minus totam provident ipsum similique sequi animi aspernatur consequuntur nisi excepturi cupiditate, omnis molestiae voluptate architecto et natus officiis consectetur.</p>
                            </div>
                        </div>
                        <div className="languages">
                            <div className="languagesHeader text-center my-2">
                                <h3 className="overflow-hidden"><span className="
                                 relative
                                 inline-block
                                 after:absolute
                                 after:top-1/2
                                 after:border-b-2
                                 after:w-screen
                                 after:mx-1
                                 after:left-full
                                 after:border-b-black
                                 before:absolute
                                 before:top-1/2
                                 before:border-b-2
                                 before:mx-1
                                 before:w-screen
                                 before:right-full
                                 before:border-b-black">Languages Used</span></h3>
                            </div>
                            <div className="descriptionContent px-2 flex justify-evenly">
                                <div className="list px-6">
                                    <ul className="list-disc">
                                        <li>Awesome</li>
                                        <li>Awesome</li>
                                        <li>Awesome</li>
                                        <li>Awesome</li>
                                        <li>Awesome</li>
                                    </ul>
                                </div>
                                <div className="list px-6">
                                    <ul className="list-disc">
                                        <li>Awesome</li>
                                        <li>Awesome</li>
                                        <li>Awesome</li>
                                        <li>Awesome</li>
                                        <li>Awesome</li>
                                    </ul>
                                </div>   
                            </div>
                        </div>
                        <div className="buttonArea p-2 border">
                            <div className="buttonGroup border flex justify-evenly">
                                <CardButton title="GitHub" primaryColor="bg-blue-800" hoverColor="hover:bg-blue-500"></CardButton>
                                <CardButton title="Live Demo" primaryColor="bg-purple-700"></CardButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard