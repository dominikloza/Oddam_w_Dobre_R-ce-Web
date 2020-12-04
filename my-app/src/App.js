import "./App.scss";
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from "./components/Home";


function App() {
    return (
        <Router>
            <Switch>
                <Route path="/">
                    <Home/>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;