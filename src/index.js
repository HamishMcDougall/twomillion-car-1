import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import 'antd/dist/antd.css';






import YourCar from './components/YourCar';
import CarDetails from './components/CarDetails';
import DriverDetails from './components/DriverDetails';

import { Router, Route, hashHistory } from 'react-router'



ReactDOM.render(
  <Router history={hashHistory}>
      <Route path="/" component={App}/>
        <Route path="/yourcar" component={YourCar}/>
        <Route path="/cardetails" component={CarDetails}/>
        <Route path="/driverdetails" component={DriverDetails}/>
    </Router>,
  document.getElementById('root')
);
