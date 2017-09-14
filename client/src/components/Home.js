import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import profile from '../assets/profile.jpg'

const styles ={
  homeContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    background: 'black', 
    flexWrap: 'wrap',  
  },
  article: {
    backgroundColor: 'rgba(63, 155, 191, .5)',
    color: 'white',
    flexBasis: '20%',
    minWidth: '360px',
    padding: '10px',
  },
  pictureDiv: {
    minHeight: '56vh',
    minWidth: '360px',
    backgroundImage: `url(${profile})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    flexBasis: '56%',
    
  },
  profilePicture: {
    maxWidth: '360px',
    height: 'auto',


  },
}

class Home extends Component {
  render() {
    return(
      <div style={styles.homeContainer}> 
        <div style={styles.article}>
          <p>
          Pellentesque habitant morbi tristique senectus et netus et 
          malesuada fames ac turpis egestas. Morbi non ipsum quis nibh 
          luctus rhoncus sed et lorem. Morbi malesuada diam at sem 
          auctor semper at et diam. Quisque non risus quis mauris 
          malesuada auctor at vestibulum purus. In egestas augue a nisl 
          varius, id sagittis dui porta. Mauris finibus metus ut turpis 
          consequat feugiat. Etiam magna lorem, tincidunt in consequat 
          quis, blandit in lectus. Curabitur tempus nunc at metus 
          facilisis, in lobortis velit posuere. Integer lacinia erat dui, 
          faucibus egestas dui convallis a.
          </p>
        </div>
        <div style={styles.pictureDiv}>
        </div>
      </div>
    );
  }
}

export default Home;
