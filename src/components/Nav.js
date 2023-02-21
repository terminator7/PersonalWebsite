import React, { useEffect, useState } from 'react'
import { IconContext } from 'react-icons'
import { GoMarkGithub } from 'react-icons/go'
import { BsLinkedin } from 'react-icons/bs'
import { CgMail } from 'react-icons/cg'
import { GiHamburgerMenu } from 'react-icons/gi'
import '../styles/App.css'

function NavItem({link, title}) {
  return(
    <li className='text-white text-center font-bold p-3 lg:px-2 lg:py-0'><a className="transition-all ease-in duration-75 hover:border-b-2 pb-1" href={link}>{title}</a></li>
  )
}


export let NavBar = ({toastFunction}) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);


  useEffect(() => {
    //console.log(toggleMenu)
    window.addEventListener('resize', () => setScreenWidth(window.innerWidth))
  })


  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }

  const emailToast = () => {
    navigator.clipboard.writeText("douglasjacob1999@gmail.com")
    toastFunction("Email Copied to Clipboard ✔️")
  }

  return(
      <nav className="from-blue-800 to-purple-700 bg-gradient-to-r shadow-lg shadow-slate-800 navBar">
        <div className="p-2 flex lg:hidden">
          <IconContext.Provider value={{size: "1.75em"}}>
            <div className='text-gray-300 hover:text-blue-300' onClick={toggleNav}>
              <GiHamburgerMenu/>
            </div>
          </IconContext.Provider>
        </div>
        <div className={`navBody lg:max-h-96  ${toggleMenu ? "max-h-96" : "max-h-0"} flex overflow-hidden justify-between flex-col lg:flex-row ${screenWidth >= 1024 ? "transition-none" : "transition-maxHeight"} ease-in-out duration-500`}>
          <div className='pt-3 px-3 flex flex-grow justify-center lg:flex-grow-0 lg:justify-start'>
            <ul className='flex flex-col lg:flex-row'>
              <NavItem title="Passions" link="#passions"></NavItem>
              <NavItem title="Projects" link="#projects"></NavItem>
              <NavItem title="About Me" link="#about"></NavItem>
              <NavItem title="Resume" link="https://drive.google.com/uc?export=download&id=1Ofj3f5kgDU7d9HT5xXR9wWWtRx9DwYct"></NavItem>
            </ul>
          </div>
          <div className="py-3 lg:hidden"></div>
          <div className='pt-3 px-3 pb-1 flex flex-grow justify-center lg:flex-grow-0 lg:justify-start'>
            <ul className='flex'>
              <li className='px-2'>
                <IconContext.Provider value={{size: "1.75em"}}>
                  <a href='https://github.com/terminator7' target="_blank" rel="noopener noreferrer" className='text-gray-300 hover:text-blue-300'>
                      <GoMarkGithub/>
                  </a>
                </IconContext.Provider>
              </li>
              <li className='px-2'>
                <IconContext.Provider value={{size: "1.75em"}}>
                  <a href='https://www.linkedin.com/in/jacob-douglas-414241205/' target="_blank" rel="noopener noreferrer" className='text-gray-300 hover:text-blue-300'>
                      <BsLinkedin/>
                  </a>
                </IconContext.Provider>
              </li>
              <li className='px-2'>
                <IconContext.Provider value={{size: "2em"}}>
                  <div onClick={() => emailToast()} className='text-gray-300 hover:text-blue-300'>
                      <CgMail/>
                  </div>
                </IconContext.Provider>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  )
} 