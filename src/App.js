import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import ListInput from './Component/List/ListInput'
import Search from './Component/Jikan/Search'
import './App.css';
import Momentum from './Component/Momentum/Momentum'
import Joke from './Component/Joke/Joke';
import "bootstrap/dist/css/bootstrap.css";
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

function App() {

  return (
    <Router>
    <Navbar className=" justify-content-center" fill justify bg="dark" variant="dark">
    <Nav>
      <Nav.Link><Link to='/'>Home Page</Link></Nav.Link>
      <Nav.Link><Link to='/Search'>free time?</Link></Nav.Link>
      <Nav.Link><Link to='/ListInput'>list</Link></Nav.Link>
      <Nav.Link><Link to='/Joke'>feeling sad?</Link></Nav.Link>
    </Nav>
  </Navbar>

    <div className= 'App'>
      <Switch>
      <Route exact path='/' component={Momentum}></Route>
      <Route path='/Search' component={Search}></Route>
      <Route path='/ListInput' component={ListInput}></Route>
      <Route path='/Joke' component={Joke}></Route>
      {/* <Route path='/FavoriteFood' component={FavoriteFood}></Route> */}
      {/* <Route  component={Error}></Route> */}
      </Switch>
    </div>
  </Router>
  );
}

export default App;
