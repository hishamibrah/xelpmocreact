
import React, { Component } from 'react';
import AuthService from './AuthService';

export default function withAuth(AuthComponent) {
    const Auth = new AuthService('http://localhost:8080');
    return class AuthWrapped extends Component {
        constructor() {
            super();
            this.state = {
                email:null
            }
        }
        componentWillMount() {
            if (!Auth.loggedIn()) {
                this.props.history.replace('/')
            }
            else {
                try {
                    const profile = Auth.getProfile()
                    this.setState({
                        email: profile
                    })
                }
                catch(err){
                    Auth.logout()
                    this.props.history.replace('/')
                }
            }
        }

        render() {
            if (this.state.email) {
                return (
                    <AuthComponent history={this.props.history} email={this.state.email} />
                )
            }
            else {
                return null
            }
        }
    };
}
