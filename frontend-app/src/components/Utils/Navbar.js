import React, { Component } from 'react';

class Navbar extends Component{

    constructor(props){
        super(props);
    }
    
    //write functions to change page state using this.props

    render(){
      var accountLink;
      if (this.props.loggedin) {
        accountLink = <a className="nav-link" onClick={()=>{this.props.goToPage("dashboard")}}>My Account</a>;
      } else {
        accountLink = <a className="nav-link" onClick={()=>{this.props.goToPage("login")}}>Log In</a>;
      }
        return (
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" onClick={()=>{this.props.goToPage(0)}}>Vickrey Auctions</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" onClick={()=>{this.props.goToPage(0)}}>About <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={()=>{this.props.goToPage("store")}}>Products</a>
              </li>
              <li className="nav-item">
                {accountLink}
              </li>
            </ul>
          </div>
        </nav>
        );
    }
}

export default Navbar;
