import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

const App = () => {

  return (
    <BrowserRouter>
      <Navbar />
      
      <Switch>
      <Route exact path='/'>
          <h1>Home lol</h1>
        </Route>
        <Route exact path='/login'>
          <h1>Login lol</h1>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
