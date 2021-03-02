import React from 'react';
import {MenuItems} from './MenuItems'
import {Link} from 'react-router-dom'
import'./Header.css'

class Header extends React.Component{
    state = { clicked: false}

    handleClick = () =>{
      this.setState({clicked: !this.state.clicked})
    }

  render (){
  return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo"><i className="fas fa-shield-alt"></i>SecuriQuiz</h1>
        <div className="menu-icon" onClick={this.handleClick}> 
          <i className={this.state.clicked ? 'fas fa-times': 'fas fa-bars'}></i>
        </div>
        <ul className ={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
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
          <i className="fas fa-user-circle"></i>
        </div>
      </nav>
  )}
}

export default Header;