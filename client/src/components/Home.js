import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

class Home extends Component {
  render() {
    return(
      <div>
      <Header as='h1' textAlign='center'>Home Component</Header>
      <container>
        welcome blurb
      </container>
      <About />
      <Projects />
      <Contact />
      </div>
    );
  }
}

export default Home;
