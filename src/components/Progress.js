import React, { Component } from 'react';
import { Steps } from 'antd';

const Step = Steps.Step;

class YourCar extends Component {
  render() {
    return (
      <div>
        <Steps current={this.props.current}>
       <Step title="Find Your Car" description="This is a description." />
       <Step title="Car Detials" description="This is a description." />
        <Step title="Driver Details" description="This is a description." />
     </Steps>
      </div>
    );
  }
}

export default YourCar;
