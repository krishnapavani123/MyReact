import React from 'react'
import { BrowserRouter , Route, Switch,  } from 'react-router-dom';
import './App.css';
import About from './About';
import Club from './Club';
import Home from './Home';
import Trade from './Trade';
import Contact from './Contact';
import Visit from './Visit';
import Wines from './Wines';

const App=()=>{
  return(
    <div>

     <BrowserRouter>
     <Switch>

<Route exact path='/' component={Home}/>
      <Route exact path='/about' component={About}/>
      <Route exact path='/club' component={Club}/>
      <Route exact path='/trade' component={Trade}/>
      <Route exact path='/contact' component={Contact}/>
      <Route exact path='/visit' component={Visit}/>
      <Route exact path='/wines' component={Wines}/>
     </Switch>
     </BrowserRouter>
    </div>
  )
}

export default App;
