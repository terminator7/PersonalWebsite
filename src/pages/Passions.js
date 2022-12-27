

import PassionCard from "../components/PassionCard"
import { HiOutlineDesktopComputer } from 'react-icons/hi'
import { AiOutlineHtml5 } from 'react-icons/ai'
import {IoGameControllerOutline} from 'react-icons/io5'
const Passions = (props) => {
    return (
        <section id="passions">
            <h2 className="text-gray-200 text-center font-medium text-[3rem]">My Passions</h2>
            <div className="py-6"></div>
            <div className="passionsCardContainer flex justify-center gap-10 flex-wrap">
                <PassionCard title="Game Design" icon={<IoGameControllerOutline></IoGameControllerOutline>} iconSize="8rem" iconColor="text-blue-500"></PassionCard>
                <PassionCard title="Full Stack Dev" icon={<AiOutlineHtml5></AiOutlineHtml5>} iconSize="8rem" iconColor="text-purple-400"></PassionCard>
                <PassionCard title="Machine Learning" icon={<HiOutlineDesktopComputer></HiOutlineDesktopComputer>} iconSize="8rem" iconColor="text-blue-500"></PassionCard>
            </div>
            <div className="py-3"></div>
            <div className="text-gray-200 px-2 lg:px-20 text-center text-xl">All these technologies are something I find extremely interesting. Have really only taken a full dive into full stack devlopment but I am excited to start the journey into Machine Learning and Game Devlopment</div>
        </section>
    )
}

export default Passions