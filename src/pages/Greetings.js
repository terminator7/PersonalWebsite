import React from 'react'
import { IconContext } from 'react-icons'
import { AiFillCloseCircle, AiFillMinusCircle } from 'react-icons/ai'
import "../styles/App.css"
import * as Icon from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'


export const Greetings = (props) => {
    return(
        <section className="w-full p-2 lg:p-6 welcomeSection">
            <div className='text-gray-200 border rounded-lg greetingSection'>
                <div className="toolbar p-1 bg-gray-800 rounded-t-lg border border-gray-900 flex flex-row-reverse">
                    <div className="windowOptions flex flex-row-reverse">
                        <IconContext.Provider value={{size: "1.4em"}}>
                            <div className='text-gray-300 hover:text-red-300'>
                                <AiFillCloseCircle/>
                            </div>
                        </IconContext.Provider>
                        <div className="px-1"></div>
                        <IconContext.Provider value={{size: "1.4em"}}>
                            <div className='text-gray-300 hover:text-red-300'>
                                <AiFillMinusCircle/>
                            </div>
                        </IconContext.Provider>
                    </div>
                    <div className='flex-grow font-bold text-center'>Terminal Emulator</div>
                </div>
                <div className='flex justify-center flex-col'>
                    <h1 className='text-center text-[5rem] font-bold'>Hello World!</h1>
                    <p className='text-center text-xl pt-3'>My name is Jacob Douglas and Welcome to my Website</p>
                </div>
                <div className='flex justify-center p-10'>
                    <p>Here you will find everything there is to know about me and my journey in the world of Computer Science</p>
                </div>
                <div className='px-2 pb-1'>
                    <span className='text-blue-500'>jacobdouglas29</span>:<span className='text-purple-400'>~/PersonalWebsite</span> $ _
                </div>
            </div>
        </section>
    )
}