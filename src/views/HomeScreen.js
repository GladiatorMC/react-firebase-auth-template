import React from "react";
import { firebase } from "../configuration/firebase2";

import "../configuration/style.css";

export default class HomeScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            user: {}
        }
    }

    componentWillMount = () => {
        firebase.auth().onAuthStateChanged(user => {
            if (!user) {
                this.props.history.push("/login");
            } else {
                this.setState({
                    user: firebase.auth().currentUser
                });
            }
        });
    }

    render = () => {
        return (
            <div className="home">
                <p>Welcome, {this.state.user.email}</p>
                <button onClick={() => firebase.auth().signOut()}>Logout</button>
            </div>
        );
    }
}
