import React from 'react'
import * as Icon from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'


export let HomePage = (props) => {
    return(
        <div className="mx-auto pt-28 h-screen from-blue-800 to-purple-700 bg-gradient-to-r">
            <div className="mx-auto xs:w-full lg:w-1/2 p-10">
            <h1 className='text-center text-white text-5xl font-bold md:whitespace-nowrap'>Hi my name is Jacob!</h1>
            <div className="flex mt-10 justify-center p-5">
                <Link to="/projects" className='bg-blue-600 text-white py-3 px-5 mx-5 rounded-lg hover:border-2 hover:from-blue-300 hover:to-purple-300 hover:bg-gradient-to-r hover:text-blue-900 hover:border-blue-600 hover:ease hover:duration-500 hover:transition-all hover:-translate-y-2 font-bold'>Projects</Link>
                <a href="https://drive.google.com/uc?export=download&id=1Tc8LGIn4ajjhpmNW0f9SULMkgAanylV-" className='bg-blue-600 text-white py-3 px-5 mx-5 rounded-lg hover:border-2 hover:from-blue-300 hover:to-purple-300 hover:bg-gradient-to-r hover:text-blue-900 hover:border-blue-600 hover:ease hover:duration-500 hover:transition-all hover:-translate-y-2 font-bold'>Resume</a>
                <Link to="/contact" className='bg-blue-600 text-white py-3 px-5 mx-5 rounded-lg hover:border-2 hover:from-blue-300 hover:to-purple-300 hover:bg-gradient-to-r hover:text-blue-900 hover:border-blue-600 hover:ease hover:duration-500 hover:transition-all hover:-translate-y-2 font-bold'>Contact</Link>
            </div>
            <div className='flex justify-center mt-5 pt-5'>
                <a href="https://www.linkedin.com/in/jacob-douglas-414241205/" className='text-white mx-4 hover:text-blue-400'><Icon.Linkedin size={50}/></a>
                <a href="https://www.github.com/terminator7" className='text-white mx-4 hover:text-blue-400'><Icon.Github size={50}/></a>
            </div>
            </div>
        </div>
    )
}