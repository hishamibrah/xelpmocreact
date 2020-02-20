import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
class SignUpForm extends Component {
    constructor() {
        super();

        this.state = {
            email: '',
            phone:'',
            password: '',
            name: '',
            hasAgreed: false,

        };
    }

    handleChange = (e) =>{
      this.setState({[e.target.name]:e.target.value})
    }

    handleSubmit =e=>{
      e.preventDefault()
      console.log(this.state);
      axios.post('http://localhost:8080/user/signup',this.state)
      .then(response=>{
        console.log(response);
      })
      .catch(error=>{
        console.log(error);
      })
    }

    render() {
      const { name, email, password} = this.state
        return (
        <div className="FormCenter">
            <form onSubmit={this.handleSubmit} className="FormFields">
              <div className="FormField">
                <label className="FormFieldLabel" htmlFor="name">Full Name</label>
                <input type="text" id="name" className="FormFieldInput" placeholder="Enter your full name" name="name" value={this.state.name} onChange={this.handleChange} />
              </div>
              <div className="FormField">
                <label className="FormFieldLabel" htmlFor="password">Password</label>
                <input type="password" id="password" className="FormFieldInput" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
              </div>
              <div className="FormField">
                <label className="FormFieldLabel" htmlFor="email">E-Mail Address</label>
                <input type="email" id="email" className="FormFieldInput" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />
              </div>
              <div className="FormField">
                <label className="FormFieldLabel" htmlFor="email">Phone Number</label>
                <input type="phone" id="phone" className="FormFieldInput" placeholder="Enter your phone number" name="phone" value={this.state.phone} onChange={this.handleChange} />
              </div>
              <div className="FormField">
                <label className="FormFieldCheckboxLabel">
                    <input className="FormFieldCheckbox" type="checkbox" name="hasAgreed" value={this.state.hasAgreed} onChange={this.handleChange} /> I agree all statements in <a href="" className="FormFieldTermsLink">terms of service</a>
                </label>
              </div>

              <div className="FormField">
                <button className="FormFieldButton mr-20" type="signup">Sign Up</button>
                <Link exact to="/signin" className="FormFieldLink">I'm already member</Link>
              </div>
            </form>
          </div>
        );
    }
}

export default SignUpForm;
