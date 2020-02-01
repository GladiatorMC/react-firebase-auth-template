import React from "react";
import { firebase } from "../configuration/firebase2";

import "../configuration/style.css";

export default class LoadingScreen extends React.Component {
    constructor() {
        super();
        this.state = {}
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.props.history.push("/home");
            } else {
                this.props.history.push("/login");
            }
        });
    }

    render() {
        return (
            <div className="loading">
                <progress>Loading...</progress>
            </div>
        );
    }
}
