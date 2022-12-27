
import { IconContext } from "react-icons"
import "../styles/App.css"

const PassionCard = ({title, icon, iconSize, iconColor}) => {
    return (
        <div className="border p-3 text-gray-200 rounded-md w-72 greetingSection hover:-translate-y-3 transition-transform ease-in-out duration-300">
            <div className="py-1"></div>
            <h3 className="text-center font-semibold text-2xl">{title}</h3>
            <div className="py-2"></div>
            <IconContext.Provider value={{size: iconSize}}>
                <div className={`${iconColor} flex justify-center`}>
                    {icon}
                </div>
            </IconContext.Provider>
            <div className="py-2"></div>
        </div>
    )
}

export default PassionCard