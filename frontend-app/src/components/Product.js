import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import ProductCard from './ProductCard';

class Product extends Component{

    constructor(props){
        super(props);
        //ID
        //Name
        //description
        //URL (images)
    }

    render(){
        return (
            <div class="container"> 
     
      
<div class="row">
    <div class="col-sm-8">
      <img src="https://static.acer.com/up/Resource/Acer/Accessories/Predator/Predator_Aethon_500/Image/20180321/Predator-Aethon_500_sku-main.png" >

      </img>
      </div>
    
      <div class="col-sm-4">
          <h1>&nbsp;</h1>
          <h1>&nbsp;</h1>
          <h1>&nbsp;</h1>
    <ProductCard product={this.props.product} buttonHidden={true} goToPage={this.props.goToPage}></ProductCard>
    <Button onClick={()=>{this.props.goToPage("Bidform")}}>Place Bid</Button>
      </div>
      </div>
      <div class="row">
      <div class="col-sm-8">
    <ul>
<li>Wireless TV keyboard with touchpad: Enjoy effortless control of your TV connected computer</li>
<li>Compact and slim: Perfect for the living room</li>
<li>Comfortable, quiet keys and large (3 inch) touchpad: The ideal HTPC keyboard. Overall Dimensions Height 5.5 inch, Width 14 inch, Depth 1 inch. Touchpad Height 3 inch, Width 2 inch</li>
<li>10 meter (33 foot) wireless range: Ensures trouble free connection in the largest room ( Wireless range may vary depending on operating environment and computer setup)</li>
<li>Familiar, media friendly key layout: Eliminates any learning curve while adding easy access volume controls and arrow keys</li>
<li>Plug and play design: Unifying receiver makes setup of your TV keyboard a snap. Connection type: Logitech unifying protocol 2.4 GigaHertz</li>
<li>18 months battery life: Goes for well over a year without changing batteries. Wide compatibility: Works with Windows 7, 8, 10 or later; Android 5.0 or later; Chrome OS</li>
</ul>
    
    </div>
    </div>
    </div>
    
        );
    }
}

export default Product;
