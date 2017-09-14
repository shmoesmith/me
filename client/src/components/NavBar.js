import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { handleLogout } from '../actions/auth';
import { withRouter } from 'react-router-dom';
import logo from '../assets/logo.gif';


const styles ={
  navdiv: {
    display: 'flex',
    flexWrap: 'wrap',
    backgroundColor: 'black',
    minHeight: '70px',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  navImage: {
    maxWidth: '100%',
    height: 'auto',
  },
  navlist: {
    listStyleType: 'none',
    color: 'white',
      li: {
        border: "2px solid white",
        color: 'white',
        display: 'inline-block',
        padding: '10px',
        margin: '10px',
          cta: {
            backgroundColor: 'red',border: "2px solid white",
            color: 'white',
            display: 'inline-block',
            padding: '10px',
            margin: '10px',
          }
      }
  },


}

class NavBar extends Component {
//   rightNavs = () => {
//     const { user, dispatch, history } = this.props;

//     if(user.id) {
//       return(
//         <Menu.Menu position='right'>
//           <Menu.Item
//             name='Logout'
//             onClick={() => dispatch(handleLogout(history))}
//           />
//         </Menu.Menu>
//       );
//     } else {
//       return(
//         <Menu.Menu position='right'>
//           <Link to='/register'>
//             <Menu.Item name='Register' />
//           </Link>
//         </Menu.Menu>
//       );
//     }
//   }

//   render() {
//     return (
//       <div>
//         <Menu pointing secondary>
//           <Link to='/'>
//             <Menu.Item name='home' />
//           </Link>
//             <Menu.Item name='projects' />
//             <Menu.Item name='about' />
//             <Menu.Item name='contact me now!' />
//           { this.rightNavs() }
//         </Menu>
//       </div>
//     )
//   }

  render () {
    return(
      <div style={styles.navdiv}>
        <div>
          <img src={logo} alt="Alan Vincent logo" style={styles.navImage}></img>
        </div>
        <div>
          <ul style={styles.navlist}>
            <li style={styles.navlist.li}>Home</li>
            <li style={styles.navlist.li}>Projects</li>
            <li style={styles.navlist.li}>About</li>
            <li style={styles.navlist.li.cta}>Contact me now!</li>
          </ul>
        </div>
      </div>

    )
  }
}

const mapStateToProps = (state) => {
  return { user: state.user }
}

export default withRouter(connect(mapStateToProps)(NavBar));
