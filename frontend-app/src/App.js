import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

class App extends Component {

  constructor(props) {
    super(props);
    // initialize state here
    this.state = {}
    // and bind methods to the current scope
    //this.method = this.method.bind(this).
  }



  // fires up just before loading the component
  componentDidMount(){

  }




  render() { 

    return (
      <div className="App">
        <header className="App-header">
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <Button variant="primary">Does bootstrap work </Button>
      </div>
    );
  }
}

export default App;
