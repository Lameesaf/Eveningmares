import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import ListInput from './Component/List/ListInput'
import Search from './Component/Jikan/Search'
import './App.css';
import Momentum from './Component/Momentum/Momentum'
import Joke from './Component/Joke/Joke';

function App() {

  return (
    <Router>
    <nav className= 'App'>
      <Link to='/'>Home Page</Link>{'   '}
      <Link to='/Search'>free time?</Link>{'   '}
      <Link to='/ListInput'>list</Link>{'   '}
      <Link to='/Joke'>feeling sad?</Link>{'   '}
      {/* <Link to='/FavoriteFood'>Favorite Food</Link> */}
    </nav>
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
