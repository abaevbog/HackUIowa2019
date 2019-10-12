import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Store from './components/Store';
import Info from './components/Info';

class App extends Component {

  constructor(props) {
    super(props);
    // initialize state here
    this.state = {
        buttonDown:false,
        page: 3,
    }
    // and bind methods to the current scope
    //this.method = this.method.bind(this).
  }


  method(props){
    console.log("blah")
  }


  // fires up just before loading the component
  componentDidMount(){

  }




  render() { 
    var page;
    if (this.state.page == 1){
      page = <Login> </Login>;
    } else if (this.state.page == 2){
      page = <Dashboard> </Dashboard>;
    } else if (this.state.page == 3){
      page = <Store> </Store>;
    } else {
      page = <Info> </Info>;
    }
    return (
      <div className="App">
        {page}
      </div>
    );
  }
}

export default App;
