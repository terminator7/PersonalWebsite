import React, { useEffect, useState } from 'react'
import * as Icon from 'react-bootstrap-icons'
import { Link } from 'react-router-dom';

function NavItem(props) {
  return(
    <li className='px-2 pb-1 text-white text-center font-bold'><Link className="pb-2 px-2 xs:hover:text-blue-900 xs:hover:bg-white xs:block lg:inline lg:hover:bg-blue-900 lg:hover:text-white lg:hover:border-b-4 border-white ease-linear duration-75" to={props.link}>{props.title}</Link></li>
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
    console.log(toggleMenu)
  }

  return(
      <nav className="mx-auto pl-auto bg-blue-900">
        <div>
          <div className='lg:hidden px-2 pt-2'>
            <button onClick={toggleNav} className="text-white hover:text-blue-500"><Icon.List size={50}/></button>
          </div>
          {(toggleMenu || screenWidth >= 1024) && (
            <div className="flex justify-center pt-2" id="navContent">
              <ul className='lg:flex p-2 xs:w-full lg:w-1/2 justify-center'>
                <NavItem link="/" title="Home"></NavItem>
                <NavItem link="/projects" title="Projects"></NavItem>
                <NavItem link="/about" title="About"></NavItem>
                <NavItem link="/contact" title="Contact"></NavItem>
              </ul>
            </div>
          )}
        </div>
      </nav>
  )
} 