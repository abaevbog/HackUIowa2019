import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Store from './components/Store';
import Info from './components/Info';
import Navbar from './components/Utils/Navbar';
import Footer from './components/Utils/Footer';
import Button from 'react-bootstrap/Button';

class App extends Component {

  constructor(props) {
    super(props);
    // initialize state here
    this.state = {
        buttonDown:false,
        page: 0,
    }
    // and bind methods to the current scope
    //this.method = this.method.bind(this).
    this.goToPage = this.goToPage.bind(this);
  }


  method(props){
    console.log("blah")
  }


  // fires up just before loading the component
  componentDidMount(){

  }
  
  goToPage(s) {
    this.setState({page: s});
    console.log("Called");
  }


  render() { 
    var page;
    if (this.state.page === "login"){
      page = <Login> </Login>;
    } else if (this.state.page === "dashboard"){
      page = <Dashboard> </Dashboard>;
    } else if (this.state.page === "store"){
      page = <Store> </Store>;
    } else {
      page = <Info> </Info>;
    }
    return (
      <div className="App">
        <Navbar goToPage={this.goToPage}> </Navbar>
        <div className="container-fluid">
          {page}
        </div>
        <Footer> </Footer>
      </div>
    );
  }
}

export default App;
