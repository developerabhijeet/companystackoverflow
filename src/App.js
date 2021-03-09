import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import RegisterForm from './Forms/SignupForm';
import About from './Pages/About';
import Navbar from './Navbar/NavBar';
import NotFound from './Pages/NotFound';
import LoginForm from './Forms/LoginForm';
import './App.css';
import ProblemSection from './Forms/ProblemSection';
function App() {
  return (

    <div className="App">

      <Navbar />
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Redirect from="/project" to="/" />
        <Route path="/not-found" component={NotFound} />
        <Route path="/login" component={LoginForm} />
        <Route path="/register" component={RegisterForm} />
        <Route path="/" exact component={ProblemSection} />
        <Redirect to="/not-found" />
      </Switch>
    </div>
  );
}

export default App;
