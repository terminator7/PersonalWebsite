import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './styles/App.css'
import { NavBar } from './components/Nav';
import { HomePage } from './pages/Home';
import { AboutPage } from './pages/About';
import ProjectPage from './pages/Project'
import { ContactPage} from './pages/Contact'

function App() {
  return (
    <Router>
      <div className="">
      <header className="">
        <NavBar></NavBar>
        <Routes>
          <Route path="/" exact element={<HomePage/>} />
          <Route path="/projects" exact element={<ProjectPage/>} />
          <Route path="/about" exact element={<AboutPage/>} />
          <Route path="/contact" exact element={<ContactPage/>} />
        </Routes>
      </header>
    </div>
    </Router>
  );
}


export default App;
