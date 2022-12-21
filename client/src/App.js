import React, { component, Fragment , Routes} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import './App.css';

const App = () => (
    <Router>
      <Fragment >
        <Navbar />
        <Landing />
        <Footer />
      </Fragment>
    </Router>
    );

export default App;
