import React, {useState} from "react"
import { IconContext } from "react-icons"
import { IoMdArrowDropdown } from "react-icons/io"
import '../styles/App.css'

const SubCardList = ({sublist}) => {
    return (
        <div className="px-6 flex-1">
            <ul className="list-disc">
                {
                    sublist.map(element => {
                      return <li>{element}</li>  
                    })
                }
            </ul>
        </div>
    )
}

const MainCardList = ({list}) => {
    const MAX_SUBLIST_COUNT = 3

    let listGroup = []

    for(let i = 0; i < list.length; i+=MAX_SUBLIST_COUNT) {
        listGroup.push(list.slice(i, i+MAX_SUBLIST_COUNT))
    }
    

    return (
        <React.Fragment>
            {
                listGroup.map(list => {
                    return <SubCardList sublist={list}></SubCardList>
                })
            }
        </React.Fragment>
    )
}

const CardButton = ({Icon, title, primaryColor, hoverColor}) => {
    return (
        <a href="" className={"p-2 w-40 text-center rounded-lg text-white " + (primaryColor ? primaryColor : "") + " " + (hoverColor ? hoverColor : "")}>{title}</a>
    )
}

const ProjectCard = ({projectName, date, description, languages, links}) =>  {

    const [toggleMenu, setToggleMenu] = useState(false)

    const toggleCard = () => setToggleMenu(!toggleMenu)

    const awesomeList = ["HTML", "JavaScript", "ReactJS", "BootStrap", "TailWind", "Java", "C++", "Java", "Css", "Something", "Something", "Something", "Something", "Something", "Something", "Something"]
    return (
        <div className="projectCard w-96 border rounded-md shadow-lg"> 
            <div onClick={toggleCard} className={`header w-full ${toggleMenu ? "from-blue-800 to-purple-700 bg-gradient-to-r text-white" : "bg-white"} transition-colors ease-in-out duration-300 rounded-md pt-4 pr-2 pl-2 pb-1 hover:from-blue-800 hover:to-purple-700 hover:bg-gradient-to-r hover:text-white hover:cursor-pointer`}>
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
            <div className={`${toggleMenu ? "transition-maxHeight ease-in max-h-100 duration-500 overflow-hidden" : "transition-maxHeight ease-in-out duration-300 max-h-0 overflow-hidden"}`}>
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
                            <div className="languagesContent px-2 flex justify-evenly flex-wrap">
                                <MainCardList list={awesomeList}></MainCardList>  
                            </div>
                        </div>
                        <div className="buttonArea p-2 mt-2">
                            <div className="buttonGroup flex justify-evenly">
                                <CardButton title="GitHub" primaryColor="bg-blue-800" hoverColor="hover:bg-blue-500"></CardButton>
                                <CardButton title="Live Demo" primaryColor="bg-purple-700" hoverColor="hover:bg-purple-400"></CardButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard