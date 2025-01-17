
import './App.css';
import Navbar from './components/Navbar.js';
import {BrowserRouter, Route ,Switch } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import SignIn from './components/SignIn';
import Register from './components/Register';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Navbar />
      <Switch>
        <Route path='/signin' component ={SignIn} />
        <Route path='/register' component ={Register} />
        <Route path='/about' component ={About} />
        <Route path='/contact' component ={Contact} />
        <Route exact path='/' component ={Home} />
      </Switch>
      <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
