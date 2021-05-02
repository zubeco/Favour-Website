import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './navcomponents/Navbar';
import About from './navcomponents/About';
import Contacts from './navcomponents/Contacts';
import Team from './navcomponents/Team';
import Services from './navcomponents/Services';
import Home from './navcomponents/Home';

function App() {
  return (
    <Router>
        <div className="App">
            <Navbar/>
            <Switch >
             <Route path="/" exact component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contacts" component={Contacts} />
              <Route path="/team" component={Team} />
              <Route path="/services" component={Services} />  
            </Switch>       
        </div>
    </Router>
  );
}

export default App;
           
