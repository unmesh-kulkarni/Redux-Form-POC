import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import PersonalDetails from './Personal';
import Employment from './Employment';
import Review from './Review'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/personal' component={PersonalDetails} ></Route>
        <Route exact path='/employment' component={Employment} ></Route>
        <Route exact path='/review' component={Review} ></Route>
        <Route path="/" component={()=><Redirect to='/personal'></Redirect>}></Route>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
