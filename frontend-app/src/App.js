import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import Button from 'react-bootstrap/Button';

class App extends Component {

  constructor(props) {
    super(props);
    // initialize state here
    this.state = {buttonDown:false}
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

    return (
      <div className="App">
        <Login></Login>
        
      </div>
    );
  }
}

export default App;
