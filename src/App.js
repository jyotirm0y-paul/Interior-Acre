import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Book from './components/Book/Book';
import Header from './components/Header/Header';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import Admin from './components/Admin/Admin';
import Shipment from './components/Shipment/Shipment';
import Order from './components/Order/Order';
import ManageProduct from './components/ManageProduct/ManageProduct';
export const UserContext = createContext();


function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      {/* <p>Name: {loggedInUser.name}</p> */}
      <Router>
        <Header />
        <Switch>
        <Route path="/login">
            <Login />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <PrivateRoute path="/admin">
            <Admin></Admin>
          </PrivateRoute>
          <Route path="/shipment">
            <Shipment></Shipment>
          </Route>
          <PrivateRoute path="/order">
            <Order></Order>
          </PrivateRoute>
          <PrivateRoute path="/book/:id">
            <Book/>
          </PrivateRoute>
          <Route path="/manageProduct">
            <ManageProduct></ManageProduct>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
