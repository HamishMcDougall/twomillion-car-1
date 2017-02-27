import React, { Component } from 'react';
import './App.css';

import { Button } from 'antd';
import { Link } from 'react-router'



class App extends Component {



  render() {


    return (

      <div className="App">

      home page - lean canavs needed to work out UPS and intergrate the paymentn
      <br/>
      <br/>
      <Link to="/yourcar"> <Button type="primary">Start</Button></Link>
      </div>

    );
  }
}

export default App;
