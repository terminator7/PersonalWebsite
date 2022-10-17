//import ProjectCard from "./ProjectCard";
import { useEffect } from "react"
import {React, useState} from "react"
import { IconContext } from "react-icons"
import {IoMdArrowDropleft, IoMdArrowDropright} from "react-icons/io"

const CardCarousel = ({projectCards}) => {
    
    const [cardIndex, setCardIndex] = useState(1)
    const [cardList, setCardList] = useState([projectCards[projectCards.length-1], ...projectCards, projectCards[0]])
    const [transitionEnabled, setTransitionEnabled] = useState(true)
    const [leftButtonEnabled, setLeftButtonEnabled] = useState(true)
    const [rightButtonEnabled, setRightButtonEnabled] = useState(true)
    
    useEffect(() => {
        if(cardIndex === 1 || cardIndex === projectCards.length) {
            setTransitionEnabled(true)
        }
    }, [cardIndex])

    const handleTransitionEffect = () => {
        if(cardIndex === 0) {
            setTransitionEnabled(false)
            setCardIndex(cardList.length-2)
        } else if(cardIndex === cardList.length-1) {
            setTransitionEnabled(false)
            setCardIndex(1)
        } else {
            setTransitionEnabled(true)
        }
        setRightButtonEnabled(true)
        setLeftButtonEnabled(true)
    }

    const prevProjectCard = () => {
        if(leftButtonEnabled) {
            setCardIndex(cardIndex - 1)
            setLeftButtonEnabled(false)
        }
    }
    const nextProjectCard = () => {
        if(rightButtonEnabled) {
            setCardIndex(cardIndex + 1)
            setRightButtonEnabled(false)
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
                    <div className={`flex ${transitionEnabled ? "transition-all" : "transition-none"} ease-linear duration-500`} style={{transform : `translateX(-${cardIndex*100}%)`}} onTransitionEnd={handleTransitionEffect}> 
                        {cardList}
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