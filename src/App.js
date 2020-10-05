import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import Navigation from './Components/Navigation/Navigation';
import NotFound from './Components/NotFound/NotFound';
import Donation from './Components/Donation/Donation';
import Events from './Components/Events/Events';
import Blog from './Components/Blog/Blog';
import Login from './Components/Login/Login';
import Admin from './Components/Admin/Admin';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Registration from './Components/Registration/Registration';

export const userContext = createContext()

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <userContext.Provider value = {[loggedInUser, setLoggedInUser]}>
    <Router>
      <Navigation></Navigation>
      <Switch>
        <Route exact path = '/'>
          <Home></Home>
        </Route>
        <Route path = '/donation'>
          <Donation></Donation>
        </Route>
        <PrivateRoute path = '/events'>
          <Events></Events>
        </PrivateRoute>
        <Route path = '/blog'>
          <Blog></Blog>
        </Route>
        <Route path = '/login'>
          <Login></Login>
        </Route>
        <PrivateRoute path = '/registration/:volunteerId'>
          <Registration></Registration>
        </PrivateRoute>
        <Route path = '/admin'>
          <Admin></Admin>
        </Route>
        <Route path = '*'>
          <NotFound></NotFound>
        </Route>
      </Switch>      
    </Router>
    </userContext.Provider>
  );
}

export default App;
