import React from "react";
import { firebase } from "../configuration/firebase2";

import "../configuration/style.css";

export default class LoginScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            error: ""
        }
    }

    login = (e) => {
        e.preventDefault();
        let email = this.state.email;
        let password = this.state.password;
        
        if (!email || !password) {
            return alert("[Error] You either forgot to input your email or password. Please fill our all fields before continuing.");
        }

        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(user => {
            this.props.history.push("/home");
        })
        .catch(error => {
            this.setState({
                error: error.message
            });
        });
    }

    componentWillMount = () => {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.props.history.push("/home");
            }
        });
    }

    render = () => {
        return (
            <div className="login">
                <p>Login</p>
                <div className="error">
                    { this.state.error ? <p>{this.state.error}</p> : null }
                </div>
                <form onSubmit={(e) => this.login(e)}>
                    <input type="email" placeholder="Enter your email..." onChange={(e) => this.setState({ email: e.target.value })} />
                    <input type="password" placeholder="Enter your password..." onChange={(e) => this.setState({ password: e.target.value })} />
                    <input type="submit" value="Login" />
                </form>
                <p>Don't have an account? <a href="/signup">Signup</a></p>
            </div>
        );
    }
}