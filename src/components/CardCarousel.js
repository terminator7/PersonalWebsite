//import ProjectCard from "./ProjectCard";
import {React, useState} from "react"
import { IconContext } from "react-icons"
import {IoMdArrowDropleft, IoMdArrowDropright} from "react-icons/io"

const CardCarousel = ({projectCards}) => {
    
    const [currentProjectCard, setCurrentProjectCard] = useState(0)

    let mutProjectCards = [].concat(projectCards)
    const prevProjectCard = () => {
        if (currentProjectCard < 1) {
            setCurrentProjectCard(projectCards.length-1)
        }
        else {
            setCurrentProjectCard(currentProjectCard - 1)
        }
    }

    const nextProjectCard = () => {
        if (currentProjectCard >= projectCards.length-1) {
            setCurrentProjectCard(0)
        }
        else {
            setCurrentProjectCard(currentProjectCard + 1)
        }
    }
    return (
        <div className="main w-fit flex flex-col">
            <div className="flex w-full">
                 <IconContext.Provider value={{size: "1.75em"}}>
                    <div className="flex h-fit py-4 cursor-pointer" onClick={prevProjectCard}>
                        <IoMdArrowDropleft/>
                    </div>
                </IconContext.Provider>
                <div className="overflow-x-scroll w-96 h-[45rem] scrollbar-hide">
                    <div className={`flex transition-all ease-linear duration-500 translate-x-[${currentProjectCard*-100}%]`}>
                        {mutProjectCards}
                    </div>
                </div>
                <IconContext.Provider value={{size: "1.75em"}}>
                    <div className="flex cursor-pointer py-4" onClick={nextProjectCard}>
                        <IoMdArrowDropright/>
                    </div>
                </IconContext.Provider>
            </div>
        </div>
    )
}

export default CardCarousel