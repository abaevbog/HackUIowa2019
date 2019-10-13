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
import Product from './components/Product';
import Bidform from './components/Bidform';
class App extends Component {

  constructor(props) {
    super(props);
    // initialize state here
    this.state = {
        buttonDown:false,
        page: "store",
        products: [
          {
            title: "Blue Light Keyboard",
            seller: "Keyswitch Ninjas LLC",
            minimumBid: 500,
            Bidssofar: 352,
            Numberofprods:20,
            Timeremaining:"1 day 10 minutes",
          },
          {
            title: "Mini Smoker",
            seller: "Steampunk Inc.",
            minimumBid: 750,
            Bidssofar: 120,
            Numberofprods:10,
            Timeremaining:"2 days 3 hours",
          },
          {
            title: "Floating Clock",
            seller: "Timekeepers Co.",
            minimumBid: 300,
            Bidssofar: 49,
            Numberofprods:30,
            Timeremaining:"4 days 3 hours 15 minutes",
          },
          {
            title: "Copper Coil Voroni Lamp",
            seller: "Lighthouse Products",
            minimumBid: 900,
            Bidssofar: 14,
            Numberofprods: 5,
            Timeremaining:"10 days 4 hours",
          }
        ]
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
      page = <Store products={this.state.products} goToPage={this.goToPage}> </Store>;
    } else if (this.state.page === "product") {
      page = <Product product={this.state.products[0]} goToPage={this.goToPage}> </Product>;
    } else if (this.state.page === "Bidform") {
      page = <Bidform product={this.state.products[0]} goToPage={this.goToPage} > </Bidform>;
    } else{ 
      page = <Info> </Info>
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
