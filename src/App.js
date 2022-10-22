import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './styles/App.css'
import { NavBar } from './components/Nav';
import { Greetings, HomePage } from './pages/Greetings';
import { AboutPage } from './pages/About';
import ProjectPage from './pages/Project'
import { ContactPage} from './pages/Contact'

function App() {
  return (
    <div>
      <header className="">
        <NavBar></NavBar>
      </header>
      <Greetings></Greetings>
    </div>
  );
}


export default App;
