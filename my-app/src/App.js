import './App.css';
import { NavBar } from './Nav';
import { HomePage } from './Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar></NavBar>
      </header>
      <HomePage></HomePage>
    </div>
  );
}

export default App;
