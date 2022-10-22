import React from 'react'
import "../styles/App.css"
import * as Icon from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'


export const Greetings = (props) => {
    return(
        <section className="w-full p-2 lg:p-6 welcomeSection">
            <div className='text-gray-200 border rounded-lg greetingSection'>
                <div className='flex justify-center flex-col'>
                    <h1 className='text-center text-[5rem] font-bold'>Hello World!</h1>
                    <p className='text-center text-xl pt-3'>My name is Jacob Douglas and Welcome to my Website</p>
                </div>
                <div className='flex justify-center p-10'>
                    <p>Here you will find everything there is to know about me and my journey in the world of Computer Science</p>
                </div>
            </div>
        </section>
    )
}