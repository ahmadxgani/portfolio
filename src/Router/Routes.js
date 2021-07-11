import React from 'react';
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Navigation from "../Component/Navigation";
import Banner from "../Component/Banner";
import About from "../Component/About";
import Project from "../Component/Project";
import Connect from "../Component/Connect";

export default function Routes() {
    return (
        <React.StrictMode>
            <Router>
                <Navigation/>
                <Switch>
                    <Route exact path="/">
                        <Banner/>
                    </Route>
                    <Route exact path="/project">
                        <Project/>
                    </Route>
                    <Route exact path="/connect">
                        <Connect/>
                    </Route>
                    <Route exact path="/about">
                        <About/>
                    </Route>
                </Switch>
            </Router>
        </React.StrictMode>
    )
}