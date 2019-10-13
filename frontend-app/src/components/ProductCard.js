import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

class ProductCard extends Component{

    constructor(props){
        super(props);
        this.state = {
          bids: props.product.Bidssofar,
        }
        if (props.hasBid) {
          this.state = {
            bids: props.product.Bidssofar + 1,
          }
        }
    }

    render(){
      console.log(this.state.bids)
        return (
          <div>
          <h5 class="card-title">{this.props.product.title}</h5>
          <h6 class="card-text">{this.props.product.seller}</h6>
          <p class="card-text">Minimum Bid: ${this.props.product.minimumBid}
          <br></br>
          Bids Placed So Far: {this.state.bids}
          <br></br>
          Products: {this.props.product.Numberofprods}
          <br></br>
          Time Remaining: {this.props.product.Timeremaining}
          </p>
          <Button hidden={this.props.buttonHidden} onClick={()=>{this.props.goToPage("product")}}>Place Bid</Button>
          </div>
        );
    }
}

export default ProductCard;
