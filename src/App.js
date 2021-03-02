import React, { Component,} from 'react';
import {Home} from './pages/EndUser/Home.js'
import {About} from './pages/EndUser/About.js'
import {Contact} from './pages/EndUser/Contact.js'
import {Payment} from './pages/EndUser/Payment.js'
import {Pricing} from './pages/EndUser/Pricing.js'
import './App.css';
import {  withAuthenticator } from 'aws-amplify-react';
//import{ AmplifyAuthenticator} from '@aws-amplify/ui-react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Amplify, { API, Auth, graphqlOperation } from 'aws-amplify';
import aws_exports from './aws-exports';
import { Questions } from './pages/EndUser/Questions.js';
import Header from './components/Header';
Amplify.configure(aws_exports);


function App(){
  
    return (
      <Router>
      <div className="App">
      
      <Header/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/questions" component ={Questions}/>
        <Route path="/about" component={About} />
        <Route path="/contact" components={Contact}/>
        <Route path="/payment"component={Payment}/>
        <Route path="/pricing"component={Pricing}/>
      </Switch>
      
      </div>
      </Router>
    );
    }

export default withAuthenticator(App,true);
