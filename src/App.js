import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './styles/App.css'
import { NavBar } from './components/Nav';
import { Greetings } from './pages/Greetings';
import Passions from './pages/Passions';
import AboutMe from './pages/About';
import ProjectPage from './pages/Project'
import Footer from './pages/Footer';
import {React, useState, useEffect} from 'react'

function App() {

  const [toastVisable, setToastVisable] = useState(false)
  const [toastMessage, setToastMessage] = useState("")

  useEffect(() => {
    if(toastVisable) {
      setTimeout(() => {
        setToastVisable(false)
      }, 2500)
    }
  },[toastVisable])

  const enableToast = (message) => {
    console.log("Hello")
    setToastMessage(message)
    setToastVisable(true)
  }

  return (
    <div>
      <header className="sticky top-0 z-50">
        <NavBar toastFunction={enableToast}></NavBar>
      </header>
      <main>
        <Greetings></Greetings>
        <div className="p-3"></div>
        <Passions></Passions>
        <div className="p-10"></div>
        <ProjectPage></ProjectPage>
        <div className="p-10"></div>
        <AboutMe></AboutMe>
        <div className="p-10"></div>
      </main>
      <div onClick={() => setToastVisable(false)} className={`p-5 rounded-full bg-white text-center fixed bottom-16 left-1/2 -translate-x-1/2 ${toastVisable ? "opacity-100 hover:cursor-pointer" : "opacity-0 hover:cursor-default"} transition-opacity ease-in-out duration-300`}>{toastMessage}</div>
      <footer className='bottom-0'>
        <Footer></Footer>
      </footer>
    </div>
  );
}


export default App;
