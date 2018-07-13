import React, { Component } from 'react';
import './App.css';
import {Link, Route} from 'react-router-dom';
import Users from './components/Users';

class App extends Component {
  
  render() {
    return (
      <div className="App">
      <nav>
       <Link to='/' className='links'>Home</Link>
       <Link to='/users' className='links'>Users</Link>
       </nav>
       <Route exact path='/users' component={Users}/>
       <p> This is the Home Page </p>
      </div>
    );
  }
}

export default App;
