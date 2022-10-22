import React, { useEffect, useState } from 'react'
import { IconContext } from 'react-icons'
import { GoMarkGithub } from 'react-icons/go'
import { BsLinkedin } from 'react-icons/bs'
import { CgMail } from 'react-icons/cg'
import { Link } from 'react-router-dom'
import '../styles/App.css'

function NavItem({link, title}) {
  return(
    <li className='px-2 text-white text-center font-bold'><a className="transition-all ease-in duration-75 hover:border-b-2 pb-1" href={link}>{title}</a></li>
  )
}


export let NavBar = (props) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {

    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth)

  })


  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
    console.log(toggleMenu);
  }

  return(
      <nav className="from-blue-800 to-purple-700 bg-gradient-to-r shadow-lg shadow-slate-800 navBar">
        <div className="navBody flex justify-between">
          <div className='pt-3 px-3 flex'>
            <ul className='flex'>
              <NavItem title="Passions" link="#passions"></NavItem>
              <NavItem title="Projects" link="#projects"></NavItem>
              <NavItem title="About Me" link="#about"></NavItem>
              <NavItem title="Contact" link="#contact"></NavItem>
              <NavItem title="Resume" link="#projects"></NavItem>
            </ul>
          </div>
          <div className='pt-3 px-3 pb-1'>
            <ul className='flex'>
              <li className='px-2'>
                <IconContext.Provider value={{size: "1.75em"}}>
                  <a href='#' className='text-gray-300 hover:text-blue-300'>
                      <GoMarkGithub/>
                  </a>
                </IconContext.Provider>
              </li>
              <li className='px-2'>
                <IconContext.Provider value={{size: "1.75em"}}>
                  <a href='#' className='text-gray-300 hover:text-blue-300'>
                      <BsLinkedin/>
                  </a>
                </IconContext.Provider>
              </li>
              <li className='px-2'>
                <IconContext.Provider value={{size: "2em"}}>
                  <a href='#' className='text-gray-300 hover:text-blue-300'>
                      <CgMail/>
                  </a>
                </IconContext.Provider>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  )
} 