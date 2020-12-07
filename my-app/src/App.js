import "./App.scss";
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from "./components/Home";
import LoginFormPage from "./components/LoginFormPage";
import RegisterFormPage from "./components/RegisterFormPage";


function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route path="/logowanie">
                    <LoginFormPage/>
                </Route>
                <Route path="/rejestracja">
                    <RegisterFormPage/>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
