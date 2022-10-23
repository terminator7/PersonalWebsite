import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './styles/App.css'
import { NavBar } from './components/Nav';
import { Greetings } from './pages/Greetings';
import Passions from './pages/Passions';
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
      <div className="p-3"></div>
      <Passions></Passions>
    </div>
  );
}


export default App;
