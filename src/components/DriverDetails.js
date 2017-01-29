import React, { Component } from 'react';

import Progress from './Progress';

import {DatePicker, Button, LocaleProvider, Radio, Input} from 'antd';
import { Link } from 'react-router'

import enUS from 'antd/lib/locale-provider/en_US';



const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;


class DriverDetails extends Component {


  render() {

    function onChangeDate(dateString) {
    //console.log(dateString);
    console.log(dateString._d);
    }

    function onChangeRadio(e) {
    console.log(`radio checked:${e.target.value}`);
  }



    return (
      <div>

{/* Progress bar Global */}
        <Progress current={2} />

        {/* Date of Birth   */}
        <div className="content">
          <p> Date of birth of Main driver </p>
             <LocaleProvider locale={enUS}><DatePicker onChange={onChangeDate} /></LocaleProvider>
             


          </div>

          <hr/>


            {/* Gender */}
            <div className="content">
              <p> Gender of main driver </p>
                <RadioGroup onChange={onChangeRadio}>
                  <RadioButton value="Male">Male</RadioButton>
                  <RadioButton value="Female">Female</RadioButton>
                </RadioGroup>
              </div>

                  <hr/>

                    {/* Crashes */}
                    <div className="content">
                      <p> In the last 3 years how many car realeted claims, driver licence suspensions, cancellations, disqualifications and restrictions has the main driver had? </p>
                        <RadioGroup onChange={onChangeRadio}>
                          <RadioButton value="0">0</RadioButton>
                          <RadioButton value="1">1</RadioButton>
                          <RadioButton value="2">2</RadioButton>
                          <RadioButton value="3">3</RadioButton>
                          <RadioButton value="4">4</RadioButton>
                          <RadioButton value="5">5</RadioButton>
                          <RadioButton value="6">6</RadioButton>
                        </RadioGroup>
                      </div>

                          <hr/>

                            {/* Extra Dirvers */}
                            <div className="content">
                              <p> How many additiona drivers are listed on your policy</p>
                                <RadioGroup onChange={onChangeRadio}>
                                  <RadioButton value="0">0</RadioButton>
                                  <RadioButton value="1">1</RadioButton>
                                  <RadioButton value="2">2</RadioButton>
                                  <RadioButton value="3">3</RadioButton>
                                  <RadioButton value="4">4</RadioButton>
                                  <RadioButton value="5">5</RadioButton>
                                  <RadioButton value="6">6</RadioButton>
                                </RadioGroup>
                              </div>

                                  <hr/>

                                {/* current insurance */}
                                <div className="content">
                            <p> Who is your current or most recent car insurance with ?</p>
                                      <Input placeholder="Current Car insurance company" />
                                </div>
                                  <hr/>






{/* Navigation Buttons Global  */}
        <div className="NavigationButtons content">
        <Link to="/driverdetails"><Button type="primary">Finish</Button></Link>
        </div>

      </div>
    );
  }
}

export default DriverDetails;
