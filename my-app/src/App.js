import "./App.scss";
import React, {useEffect, useState} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import Home from "./components/Home";
import LoginFormPage from "./components/LoginFormPage";
import RegisterFormPage from "./components/RegisterFormPage";
import Logout from "./components/Logout";
import fire from './firebase';

function App() {

    const [user, setUser] = useState({});
    const [isLogged, setIsLogged] = useState(false);

    useEffect(() => {
        authListener();
    }, [])

    const authListener = () => {
        fire.auth().onAuthStateChanged((user) => {
            if (user) {
                setUser({user});
                setIsLogged(true);
                console.log(user)
            } else {
                setUser({user: null});
            }
        });
    }

    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home user={user} isLogged={isLogged} setIsLogged={setIsLogged}/>
                </Route>
                <Route path="/logowanie">
                    {isLogged ? <Redirect to="/"/> : <LoginFormPage/> }
                </Route>
                <Route path="/rejestracja" component={RegisterFormPage}/>
                <Route path="/wylogowano" component={Logout}/>
            </Switch>
        </Router>
    );
}

export default App;
