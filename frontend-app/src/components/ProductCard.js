import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

class ProductCard extends Component{

    constructor(props){
        super(props);
        this.state = {
          image: "https://static.acer.com/up/Resource/Acer/Accessories/Predator/Predator_Aethon_500/Image/20180321/Predator-Aethon_500_sku-main.png",
          minimumBid: 500,
          Bidssofar: 35,
          Numberofprods:20,
          Timeremaining:"1 day 10 minutes",
          buttonHidden: props.buttonHidden,
        }
    }
    
    goToPage(s) {
      this.setState({page: s});
      console.log("Called");
    }

    render(){
        return (
          <div>
          <h5 class="card-title">Blue Light Keyboard</h5>
          <p class="card-text">Minimum Bid= ${this.state.minimumBid}
          <br></br>
          Bids Placed So Far: {this.state.Bidssofar}
          <br></br>
          Products: {this.state.Numberofprods}
          <br></br>
          Time Remaining: {this.state.Timeremaining}
          </p>
          <Button hidden={this.state.buttonHidden} onClick={()=>{this.props.goToPage("product")}}>Place Bid</Button>
          </div>
        );
    }
}

export default ProductCard;
