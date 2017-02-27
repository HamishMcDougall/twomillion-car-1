import React, { Component } from 'react';




class SignUp extends Component {
  render() {
    return (
      <div className="form-inline">
        <h2> Sign Up</h2>
        <div className='form-group'>
          <input
            className="form-control"
            type="text"
            placeholder="email"
            />
          <input
            className="form-control"
            type="password"
            placeholer="password"
            />
          <button
            className="">
            Sign Up
          </button>

        </div>
      </div>
    );
  }
}

export default SignUp;
