import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthService from './AuthService';
import { Message } from 'semantic-ui-react';


function postData(url, data) {
  return fetch(url, {
    body: JSON.stringify(data), // must match 'Content-Type' header
    headers: {
      'content-type': 'application/json',
      'Authorization': localStorage.getItem('id_token')
    },
    method: 'POST',
    mode: 'cors'
  })
  .then(response => response.json()) // parses response to JSON
}

class SignInForm extends Component {
  constructor() {
  super();
  this.state={
    errorStatus:true,
    errorMessage:''
  };
  this.handleChange = this.handleChange.bind(this);
  this.handleFormSubmit = this.handleFormSubmit.bind(this);
  this.handleForgot = this.handleForgot.bind(this);
  this.Auth = new AuthService();
}


    render() {
        return (
        <div className="FormCenter">
            <form onSubmit={this.handleFormSubmit} className="FormFields">
            <div className="FormField">
                <label className="FormFieldLabel" htmlFor="email">Email</label>
                <input type="email" id="email" className="FormFieldInput" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />
              </div>

              <div className="FormField">
                <label className="FormFieldLabel" htmlFor="password">Password</label>
                <input type="password" id="password" className="FormFieldInput" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
              </div>

              <div className="FormField">
                  <button className="FormFieldButton mr-20" type='submit' name='submit'>Sign In</button> <Link to="/" className="FormFieldLink">Create an account</Link>
              </div>
              <Message hidden={this.state.errorStatus} warning>
                <Message.Header >{this.state.errorMessage}</Message.Header>
              </Message>
            </form>
          </div>
        );
    }

handleFormSubmit(e){
  e.preventDefault();
   this.Auth.login(this.state.email, this.state.password).then(res => {
     console.log(res);
     if(res.message==='Auth successfull'){
       console.log("success");
       this.props.history.push('/cals');
     }else{
         this.setState({
           errorStatus:res.success,
           errorMessage:res.error
         })
       }
   }).catch(err => {
     alert(err);
   })
 }

 handleForgot(){
   this.props.history.replace('/forgot');
 }
 handleChange(e) {
   this.setState({
     [e.target.name]: e.target.value,
     errorStatus:true,
     errorMessage: ''
   })
 }
}

export default SignInForm;
