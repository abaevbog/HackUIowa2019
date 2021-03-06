import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import ProductCard from './ProductCard';

class Bidform extends Component{

    constructor(props){
        super(props);
        this.checkout = this.checkout.bind(this);
    }
  
    
    checkout() {
      var bid = parseInt(document.getElementById("bid").value)
      var confirmBid = parseInt(document.getElementById("confirmBid").value)
      if (isNaN(bid) || isNaN(confirmBid)) {
        Array.from(document.getElementsByClassName('bidWarning')).forEach(function (elem) {
          elem.hidden = false;
          elem.innerText = "Bids must be numbers";
        });
        return
      } else if (bid != confirmBid) {
        Array.from(document.getElementsByClassName('bidWarning')).forEach(function (elem) {
          elem.hidden = false;
          elem.innerText = "Bids must be equal";
        });
        return
      } else if (bid < this.props.product.minimumBid) {
        Array.from(document.getElementsByClassName('bidWarning')).forEach((elem) => {
          elem.hidden = false;
          elem.innerText = "Bid must be at least $" + this.props.product.minimumBid;
        });
        return
      } else {
        Array.from(document.getElementsByClassName('bidWarning')).forEach((elem) => {
          elem.hidden = true;
        });
      }
      this.props.incrementBid();
    }

    render(){
        return (
            <div class="container">
      <h1>&nbsp;</h1>
      <div class="row">
      <div class="col-md-4 order-md-2">
      <div class="card" style={{width: "18 rem",}}>
      <img class="card-img-top" src="https://static.acer.com/up/Resource/Acer/Accessories/Predator/Predator_Aethon_500/Image/20180321/Predator-Aethon_500_sku-main.png"></img>
      <div class="card-body">
      <ProductCard product={this.props.product} buttonHidden={true} goToPage={this.props.goToPage}></ProductCard>
      </div>
    </div>
                </div>
        <div class="col-md-8 order-md-1">
          <h4 class="mb-3">Bidding form</h4>
            <div class="row">
              <div class="col-md-6 mb-3">
                <label for="bid">Enter Bid In Dollars</label>
                <input class="form-control" id="bid" placeholder={this.props.product.minimumBid} required></input>
                <div class="alert alert-warning bidWarning" hidden>
                  Valid bid is required.
                </div>
              </div>
              <div class="col-md-6 mb-3">
                <label for="confirmBid">Re-enter and confirm Bid</label>
                <input class="form-control" id="confirmBid" placeholder={this.props.product.minimumBid} required></input>
                <div class="alert alert-warning bidWarning" hidden>
                  Valid bid is required.
                </div>
              </div>
            </div>

        



            <div class="mb-3">
              <label for="address">Address</label>
              <input type="text" class="form-control" id="address" placeholder="1234 Main St" required=""></input>
              <div class="invalid-feedback">
                Please enter your shipping address.
              </div>
            </div>

            <div class="mb-3">
              <label for="address2">Address 2 <span class="text-muted">(Optional)</span></label>
              <input type="text" class="form-control" id="address2" placeholder="Apartment or suite"></input>
            </div>

            <div class="row">
              
              <div class="col-md-4 mb-3">
                <label for="state">State</label>
                <select class="custom-select d-block w-100" id="state" required="">
                  <option value="">Choose...</option>
                  <option>California</option>
                </select>
                <div class="invalid-feedback">
                  Please provide a valid state.
                </div>
              </div>
              <div class="col-md-3 mb-3">
                <label for="zip">Zip</label>
                <input type="text" class="form-control" id="zip" placeholder="" required=""></input>
                <div class="invalid-feedback">
                  Zip code required.
                </div>
              </div>
            </div>
            <hr class="mb-4"></hr>
            <div class="custom-control custom-checkbox">
              <input type="checkbox" class="custom-control-input" id="same-address"></input>
              <label class="custom-control-label" for="same-address">Shipping address is the same as my billing address</label>
            </div>
            <div class="custom-control custom-checkbox">
              <input type="checkbox" class="custom-control-input" id="save-info"></input>
              <label class="custom-control-label" for="save-info">Save this information for next time</label>
            </div>
            <hr class="mb-4"></hr>

            <h4 class="mb-3">Payment</h4>

            <div class="d-block my-3">
              <div class="custom-control custom-radio">
                <input id="credit" name="paymentMethod" type="radio" class="custom-control-input" checked="" required=""></input>
                <label class="custom-control-label" for="credit">Credit card</label>
              </div>
              <div class="custom-control custom-radio">
                <input id="debit" name="paymentMethod" type="radio" class="custom-control-input" required=""></input>
                <label class="custom-control-label" for="debit">Debit card</label>
              </div>
              <div class="custom-control custom-radio">
                <input id="paypal" name="paymentMethod" type="radio" class="custom-control-input" required=""></input>
                <label class="custom-control-label" for="paypal">Paypal</label>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6 mb-3">
                <label for="cc-name">Name on card</label>
                <input type="text" class="form-control" id="cc-name" placeholder="" required=""></input>
                <small class="text-muted">Full name as displayed on card</small>
                <div class="invalid-feedback">
                  Name on card is required
                </div>
              </div>
              <div class="col-md-6 mb-3">
                <label for="cc-number">Credit card number</label>
                <input type="text" class="form-control" id="cc-number" placeholder="" required=""></input>
                <div class="invalid-feedback">
                  Credit card number is required
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-3 mb-3">
                <label for="cc-expiration">Expiration</label>
                <input type="text" class="form-control" id="cc-expiration" placeholder="" required=""></input>
                <div class="invalid-feedback">
                  Expiration date required
                </div>
              </div>
              <div class="col-md-3 mb-3">
                <label for="cc-expiration">CVV</label>
                <input type="text" class="form-control" id="cc-cvv" placeholder="" required=""></input>
                <div class="invalid-feedback">
                  Security code required
                </div>
              </div>
            </div>
            <hr class="mb-4"></hr>
            <button class="btn btn-primary btn-lg btn-block"  onClick={this.checkout}>Place Bid</button>
        </div>
      </div>
      </div>
        );
    }
}

export default Bidform;
