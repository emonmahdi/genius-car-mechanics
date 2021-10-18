import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './Pages/Home/Services/Services';
import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import Booking from './Pages/Booking/Booking/Booking';
import Login from './Pages/Login/Login/Login';
import Header from './Pages/Shared/Header/Header';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';

function App() { 
  return (
    <div className="App"> 
        
        <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
              <Route exact path='/'> 
                 <Home></Home> 
              </Route>
              <Route exact path='/home'> 
                 <Home></Home> 
              </Route>
              <Route exact path='/login'> 
                  <Login></Login>
              </Route>
              <PrivateRoute path='/booking/:serviceId'>
                  <Booking></Booking>
              </PrivateRoute>
              <Route path='*'> 
                  <NotFound></NotFound>
              </Route>
          </Switch>
        </Router>
        </AuthProvider>
    </div>
  );
}

export default App;