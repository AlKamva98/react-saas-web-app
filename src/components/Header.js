import React,{useState,useEffect} from 'react';
import {MenuItems} from './MenuItems'
import {Link} from 'react-router-dom'
import {Button} from 'react-bootstrap'
import'./Header.css'
import Auth from '@aws-amplify/auth';

function Header(){
    let state = { clicked: false};

    const handleClick = () =>{
      this.setState({clicked: !this.state.clicked})
    }

  
    const [signedIn, setSignedIn] = useState(false);


function UseEffectFunction(){
useEffect(()=>{
    checkUserSignedIn();
    },[])
}
async function checkUserSignedIn(){
 const user = await Auth.currentAuthenticatedUser();
  if(user !== undefined){
    setSignedIn(true);
  }
}

async function signOut(){
  await Auth.signOut();
}

  return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo"><i className="fas fa-shield-alt"></i>infoHorus</h1>
        <div className="menu-icon" onClick={handleClick}> 
          <i className={state.clicked ? 'fas fa-times': 'fas fa-bars'}></i>
        </div>
        <ul className ={state.clicked ? 'nav-menu active' : 'nav-menu'}>
          {MenuItems.map((item,index)=>{
            return(
              <li key={index}>
                <Link className={item.cName} to={item.url}>
                {item.title} 
                </Link>
              </li>
            )
          })}
        </ul>
        <div className="signin-icon">
         {signedIn? (<Button className="mx-4" onClick={signOut}>Sign Out</Button>):
         (<Link to="/register"><Button className="mx-4">Sign in</Button></Link>)
  }
        </div>
      </nav>
  )}


export default Header;