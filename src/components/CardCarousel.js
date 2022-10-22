//import ProjectCard from "./ProjectCard";
import { useEffect } from "react"
import ProjectCard from "./ProjectCard"
import {useState} from "react"
import React from "react"
import { IconContext } from "react-icons"
import {IoMdArrowDropleft, IoMdArrowDropright} from "react-icons/io"

const waitTime = (delay) => {
    return new Promise((resolve) => setTimeout(resolve, delay))
}

const CardCarousel = ({projects}) => {
    
    const [cardIndex, setCardIndex] = useState(1)
    const [transitionEnabled, setTransitionEnabled] = useState(true)
    const [leftButtonEnabled, setLeftButtonEnabled] = useState(true)
    const [rightButtonEnabled, setRightButtonEnabled] = useState(true)
    const [toggleCard, setToggleCard] = useState(true)
    
    const cardListGroup = projects.map((element) => <ProjectCard projectName={element.title} date={element.date} languages={element.languages} link={element.link} collapsed={toggleCard}></ProjectCard>) 
    const cardListLength = cardListGroup.length

    const cardList = [cardListGroup[cardListLength-1], ...cardListGroup, cardListGroup[0]]
    useEffect(() => {
        if(cardIndex === 1 || cardIndex === cardListLength) {
            setTransitionEnabled(true)
        }
    }, [cardIndex, cardListLength])

    const handleTransitionEffect = async() => {
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
        setTimeout(() => {
            setToggleCard(true)
        }, 1000)
    }

    const prevProjectCard = () => {
        if(leftButtonEnabled) {
            setCardIndex(cardIndex - 1)
            setLeftButtonEnabled(false)
        }
    }
    const nextProjectCard = async() => {
        if(rightButtonEnabled) {
            setRightButtonEnabled(false)
            setToggleCard(false)
            setTimeout(() => {
                setCardIndex(cardIndex + 1)
            }, 1000);
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
                <div className="overflow-x-scroll w-96 h-[45rem]">
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