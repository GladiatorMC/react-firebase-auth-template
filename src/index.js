import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./configuration/serviceWorker";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import LoadingScreen from "./views/LoadingScreen";
import HomeScreen from "./views/HomeScreen";
import LoginScreen from "./views/LoginScreen";
import SignupScreen from "./views/SignupScreen";

class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route path="/" component={LoadingScreen} exact />
                        <Route path="/home" component={HomeScreen} />
                        <Route path="/login" component={LoginScreen} />
                        <Route path="/signup" component={SignupScreen} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
