import React from 'react';
import {Route,BrowserRouter,Switch } from 'react-router-dom';
import Home from "./components/home/Home.jsx";
import About from "./components/about/About.jsx";
import Contact from "./components/contact/Contact.jsx";

const Routes = () => {
     return (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/contact' component={Contact}/>
        <Route path='/about' component={About} />
        </Switch>
    </BrowserRouter>
);
 };

 export default Routes;