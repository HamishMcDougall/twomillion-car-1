import React, { Component } from 'react';


import Progress from './Progress';

import { Link } from 'react-router'

import { Radio, DatePicker, Button, LocaleProvider } from 'antd';
//const { MonthPicker, RangePicker } = DatePicker;

import enUS from 'antd/lib/locale-provider/en_US';

//import moment from 'moment';

// need to work out how to turn off the chinese dates


// It's recommended to set locale in entry file globaly.
//import 'moment/locale/en-us';
//moment.locale('en-us');



const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;


class YourCar extends Component {

  constructor(props){
    super(props);
    this.state={
      carDetails:props.carDetails
    }
  }



  render() {


      function onChangeRadio(e) {
      console.log(`radio checked:${e.target.value}`);
    }


      function onChangeDate(dateString) {
      //console.log(dateString);
      console.log(dateString._d);
    }



    return (
      <div>

{/* Progress bar Global */}
        <Progress current={0} />

        {/* Insurance Type */}
        <div className="content">
          <p> Select your type of Insurance </p>
            <RadioGroup onChange={onChangeRadio}>
              <RadioButton value="Comprenhensive">Comprenhensive</RadioButton>
              <RadioButton value="Third Party">Third Party</RadioButton>
            </RadioGroup>
          </div>

              <hr/>

            {/* Date Selector */}
          <div className="content">
              <p> Policy Renew Date</p>
               <p> We will send you a comparisan quote two weeks before the end of your policy renew date</p>
               <LocaleProvider locale={enUS}><DatePicker onChange={onChangeDate} /></LocaleProvider>
         </div>

            <hr/>

          {/* Car Search API */}

          <div className="content">
              <p> Find your car using the search below </p>
              <h1>Going to need an API for a car search</h1>
          </div>

          <hr/>

{/* Navigation Buttons Global  */}
        <div className="NavigationButtons content">
        <Link to="/cardetails"><Button type="primary">Find Your Car</Button></Link>
        </div>

      </div>
    );
  }
}

export default YourCar;
