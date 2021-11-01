                                      
import './App.css';
import { Route } from 'react-router-dom';
import NavBar from './components/Navbar/Navbar';
import Home from './components/Home/home'
import AddNewShoe from './components/AddNewShoe/AddNewShoe';
import Details from './components/Details/Details';


               
function App() {                                                                                             
  return (
    <div className="App">
      <header>                                          
       <NavBar /> 
       </header>
       <main className="main">
				<Route exact path='/' component={Home} />
        <Route path='/shoes/:id' component={Details} />
        <Route path='/add' component={AddNewShoe} />
			</main>

    </div>              
  );
}                                     

export default App;                            

                                                                                                                                                                                                             