
import './App.css';
import { Route } from 'react-router-dom';
import NavBar from './components/Navbar/Navbar';
import Home from './components/Home/home'



function App() {
  return (
    <div className="App">
      <header>
       <NavBar /> 
       </header>
       <main>
				<Route exact path='/' component={Home} />
			</main>

    </div>
  );
}

export default App;

