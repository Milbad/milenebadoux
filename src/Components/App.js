import React, { Component } from 'react';
import '../App.css';
import About from './About';
import ProjectList from './ProjectList';
import Footer from './Footer';
import Contact from './Contact';
import Nav from './Nav';
import { Route, Switch} from 'react-router-dom';

class App extends Component {
  render() {

    return (
      <div className="App">
          <Nav />
          <Switch>
          <Route exact path="/" component={About} />
          <Route  path="/portfolio" component={ProjectList} />
          <Route  path="/contact" component={Contact} />
          </Switch>
          <Footer />
      </div>
    );
    
  }
}

export default App;
