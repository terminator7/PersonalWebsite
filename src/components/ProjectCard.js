import React, {useState} from "react"
import { IconContext } from "react-icons"
import { IoMdArrowDropdown } from "react-icons/io"
import '../styles/App.css'

const SubCardList = ({sublist}) => {
    return (
        <div className="px-6 flex-1">
            <ul className="list-disc">
                {
                    sublist.map((element, index) => {
                      return <li key={index}>{element}</li>  
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
                listGroup.map((list, index) => {
                    return <SubCardList key={index} sublist={list}></SubCardList>
                })
            }
        </React.Fragment>
    )
}

const CardButton = ({title, primaryColor, hoverColor, link}) => {
    return (
        <a href={(link === "" ? "#" : link)} className={"p-2 w-40 text-center rounded-lg text-white font-bold " + (primaryColor ? primaryColor : "") + " " + (hoverColor ? hoverColor : "") + " " + (link === "" ? "line-through" : " ")}>{title}</a>
    )
}

const ProjectCard = ({projectName, date, description, languages, demo, github, collapsed}) =>  {


    return (
        <div className="projectCard w-96 rounded-md shadow-lg hover:-translate-y-3 transition-transform ease-in-out duration-300 overflow-hidden"> 
            <div className={`header w-full ${collapsed ? "from-blue-800 to-purple-700 bg-gradient-to-r text-white" : "bg-white"} transition-colors ease-in-out duration-300 rounded-t-md pt-4 pr-2 pl-2 pb-1 hover:from-blue-800 hover:to-purple-700 hover:bg-gradient-to-r hover:text-white hover:cursor-pointer`}>
                <div className="flex justify-center pb-2">
                    <h3 className="text-2xl font-bold subpixel-antialiased">{projectName}</h3>
                </div>
            </div>
            <div className="greetingSection text-white h-full">
                <div className="flex flex-col body pt-2 px-4 pb-4 space-y-4">
                    <div className="subHeader text-center italic text-gray-400 mt-4">
                        <h3>{date}</h3>
                    </div>
                    <div className="Body h-96 relative">
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
                                 after:border-b-white
                                 before:absolute
                                 before:top-1/2
                                 before:border-b-2
                                 before:mx-1
                                 before:w-screen
                                 before:right-full
                                 before:border-b-white">Description</span></h3>
                            </div>
                            <div className="descriptionContent px-2">
                                <p>{description}</p>
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
                                 after:border-b-white
                                 before:absolute
                                 before:top-1/2
                                 before:border-b-2
                                 before:mx-1
                                 before:w-screen
                                 before:right-full
                                 before:border-b-white">Languages Used</span></h3>
                            </div>
                            <div className="languagesContent px-2 flex justify-evenly flex-wrap">
                                <MainCardList list={languages}></MainCardList>  
                            </div>
                        </div>
                        <div className="buttonArea p-2 mt-2">
                            <div className="buttonGroup absolute bottom-0">
                                <div className="flex justify-evenly gap-2">
                                    <CardButton title="GitHub" primaryColor="bg-blue-800" hoverColor="hover:bg-blue-500" link={github}></CardButton>
                                    <CardButton title="Live Demo" primaryColor="bg-purple-700" hoverColor="hover:bg-purple-400" link={demo}></CardButton>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard