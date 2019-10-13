import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import ProductCard from './ProductCard';

class Store extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return (
            <div class="container">
            <div class="row">

        
                <div class="col-sm">
                        <div class="card" style={{width: "18 rem",}}>
                        <img class="card-img-top" src="https://static.acer.com/up/Resource/Acer/Accessories/Predator/Predator_Aethon_500/Image/20180321/Predator-Aethon_500_sku-main.png"></img>
                        <div class="card-body">
    <ProductCard product={this.props.products[0]} buttonHidden={false} goToPage={this.props.goToPage}></ProductCard>
    </div>
    </div>
                </div>
                <div class="col-sm">
                <div class="card" style={{width: "18 rem",}}>

<img class="card-img-top" src="https://cdn.instructables.com/FF5/P65W/K06Y3UU9/FF5P65WK06Y3UU9.LARGE.jpg?auto=webp&frame=1&width=600&height=1024&fit=bounds" alt="Card image cap"></img>
<div class="card-body">
<ProductCard product={this.props.products[1]} buttonHidden={false} goToPage={this.props.goToPage}></ProductCard>
</div>
</div>
                </div>
                <div class="col-sm">
                <div class="card" style={{width: "18 rem",}}>
<img class="card-img-top" src="https://content.instructables.com/FBQ/DUMI/K1B4C7SK/FBQDUMIK1B4C7SK.LARGE.jpg" alt="Card image cap"></img>
<div class="card-body">
<ProductCard product={this.props.products[2]} buttonHidden={false} goToPage={this.props.goToPage}></ProductCard>
</div>
</div>
                </div>
                <div class="col-sm">
                <div class="card" style={{width: "18 rem",}}>
<img class="card-img-top" src="https://cdn.instructables.com/F2U/GTN9/K10ZGP8B/F2UGTN9K10ZGP8B.LARGE.jpg?auto=webp&frame=1&width=336&height=1024&fit=bounds" alt="Card image cap"></img>
<div class="card-body">
<ProductCard product={this.props.products[3]} buttonHidden={false} goToPage={this.props.goToPage}></ProductCard>
</div>
</div>
                </div>
                

                </div>
                
      
                </div> 
                
                
                
        );
    }
}

export default Store;
