import React, { Component } from 'react';


import Progress from './Progress';



import { Radio, Button, Input, Select } from 'antd';
import { Link } from 'react-router'


const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

const Option = Select.Option;


class CarDetails extends Component {


  render() {


      function onChangeRadioMods(e) {
      console.log(`modifications:${e.target.value}`);
    }

      function onChangeRadioFinanced(e) {
      console.log(`Financed:${e.target.value}`);
    }

      function onChangeRadioUsage(e) {
      console.log(`Usage:${e.target.value}`);
    }
    function onChangeRadioKM(e) {
    console.log(`KM:${e.target.value}`);
  }
  function handleChangeState(value) {
    console.log(`selected ${value}`);
  }



    return (
      <div>

{/* Progress bar Global */}
        <Progress current={1} />


          {/* financed  */}
          <div className="content">
            <p>Is your car financed?</p>

            <RadioGroup onChange={onChangeRadioFinanced}>
                <RadioButton value="Yes">Yes</RadioButton>
                <RadioButton value="No">No</RadioButton>
              </RadioGroup>
            </div>

            <hr/>

              {/* usage  */}
              <div className="content">
                <p>How is your car pimary used ?</p>
                <RadioGroup onChange={onChangeRadioUsage}>
                    <RadioButton value="Private">Private</RadioButton>
                    <RadioButton value="Business">Business</RadioButton>
                  </RadioGroup>
                </div>

                <hr/>

        {/* Modifications  */}
        <div className="content">
          <p> Do you have any of the following accessories of modifications ? </p>
          <ul>
            <li>Custom or Specialised Paint (after market)</li>
            <li>Nitro or Hydrogen Fuel</li>
            <li>petrol Turbo or Supercharger(fitted after market)</li>
            <li>Roll Bar / Roll Cage /  Racing Harness</li>
          </ul>

          <RadioGroup onChange={onChangeRadioMods}>
              <RadioButton value="Yes">Yes</RadioButton>
              <RadioButton value="No">No</RadioButton>
            </RadioGroup>
          </div>

          <hr/>

            {/* KM distance per year  */}
            <div className="content">
              <p>How many kilometers does your car trave on average each year </p>
              <RadioGroup onChange={onChangeRadioKM}>
                  <RadioButton value=">5,000">Less than 5,000</RadioButton>
                  <RadioButton value="10,000">Up to 10,000</RadioButton>
                  <RadioButton value="15,000">Up to 15,000</RadioButton>
                  <RadioButton value="20,000">Up to 20,000</RadioButton>
                  <RadioButton value="20,000+">More than 20,000</RadioButton>
                </RadioGroup>
              </div>

              <hr/>

                {/* address */}
                <div className="content">
                  <p>Where is your care usually kept overnight </p>
                    <p>Address line 1</p>
                    <Input placeholder="Address" />
                      <p>Address line 2</p>
                      <Input placeholder="Address" />
                        <p>City</p>
                        <Input placeholder="City" />
                          <p>State</p>
                            <Select defaultValue="ACT" onChange={handleChangeState}>
                              <Option value="ACT">ACT</Option>
                              <Option value="VIC">VIC</Option>
                              <Option value="NSW">NSW</Option>
                              <Option value="QLD">QLD</Option>
                              <Option value="NT">NT</Option>
                              <Option value="WA">WA</Option>
                              <Option value="TAS">TAS</Option>
                            </Select>
                            <p>Postcode</p>
                            <Input placeholder="Postcode" />

                  </div>

                  <hr/>




{/* Navigation Buttons Global  */}
        <div className="NavigationButtons content">
        <Link to="/driverdetails"><Button type="primary">Driver Details</Button></Link>
        </div>

      </div>
    );
  }
}

export default CarDetails;
