import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

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
    <h5 class="card-title">Blue Light Keyboard</h5>
    <p class="card-text">Minimum Price 
    <br></br>
    Bids Placed So Far 
    <br></br>
    #of Products
    <br></br>
    Time Remaining
    <br></br>
    </p>
    <Button onClick={()=>{this.props.goToPage("product")}}>Place Bid</Button>
    </div>
    </div>
                </div>
                <div class="col-sm">
                <div class="card" style={{width: "18 rem",}}>

<img class="card-img-top" src="https://cdn.instructables.com/FF5/P65W/K06Y3UU9/FF5P65WK06Y3UU9.LARGE.jpg?auto=webp&frame=1&width=600&height=1024&fit=bounds" alt="Card image cap"></img>
<div class="card-body">
<h5 class="card-title">Mini Smoker</h5>
<p class="card-text">Minimum Price 
    <br></br>
    Bids Placed So Far 
    <br></br>
    #of Products
    <br></br>
    Time Remaining</p>
<a href="#" class="btn btn-primary">Place Bid</a>
</div>
</div>
                </div>
                <div class="col-sm">
                <div class="card" style={{width: "18 rem",}}>
<img class="card-img-top" src="https://content.instructables.com/FBQ/DUMI/K1B4C7SK/FBQDUMIK1B4C7SK.LARGE.jpg" alt="Card image cap"></img>
<div class="card-body">
<h5 class="card-title">Clock</h5>
<p class="card-text">Minimum Price 
    <br></br>
    Bids Placed So Far 
    <br></br>
    #of Products
    <br></br>
    Time Remaining</p>
<a href="#" class="btn btn-primary">Place Bid</a>
</div>
</div>
                </div>
                <div class="col-sm">
                <div class="card" style={{width: "18 rem",}}>
<img class="card-img-top" src="https://cdn.instructables.com/F2U/GTN9/K10ZGP8B/F2UGTN9K10ZGP8B.LARGE.jpg?auto=webp&frame=1&width=336&height=1024&fit=bounds" alt="Card image cap"></img>
<div class="card-body">
<h5 class="card-title">Copper Coil Voronoi Lamp</h5>
<p class="card-text">Minimum Price 
    <br></br>
    Bids Placed So Far 
    <br></br>
    #of Products
    <br></br>
    Time Remaining</p>
<a href="#" class="btn btn-primary">Place Bid</a>
</div>
</div>
                </div>
                

                </div>
                <br></br>
                <div class="row">

        
                <div class="col-sm">
                    <div class="card" style={{width: "18 rem",}}>
<img class="card-img-top" src="..." alt="Card image cap"></img>
<div class="card-body">
<h5 class="card-title">Card title</h5>
<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
<a href="#" class="btn btn-primary">Go somewhere</a>
</div>
</div>
                </div>
                <div class="col-sm">
                <div class="card" style={{width: "18 rem",}}>

<img class="card-img-top" src="..." alt="Card image cap"></img>
<div class="card-body">
<h5 class="card-title">Card title</h5>
<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
<a href="#" class="btn btn-primary">Go somewhere</a>
</div>
</div>
                </div>
                <div class="col-sm">
                <div class="card" style={{width: "18 rem",}}>
<img class="card-img-top" src="..." alt="Card image cap"></img>
<div class="card-body">
<h5 class="card-title">Card title</h5>
<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
<a href="#" class="btn btn-primary">Go somewhere</a>
</div>
</div>
                </div>
                <div class="col-sm">
                <div class="card" style={{width: "18 rem",}}>
<img class="card-img-top" src="..." alt="Card image cap"></img>
<div class="card-body">
<h5 class="card-title">Card title</h5>
<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
<a href="#" class="btn btn-primary">Go somewhere</a>
</div>
</div>
                </div>
                

                </div>
                </div> 
                
                
                
        );
    }
}

export default Store;
