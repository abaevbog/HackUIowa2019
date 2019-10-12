import React, { Component } from 'react';

class Product extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return (
            <div class="container"> 
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Vickrey Auctions</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">About <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Products</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">My Account</a>
      </li>
      
      
    </ul>
   
  </div>
</nav>
      
<div class="row">
    <div class="col-sm-8">
      <img src="C:\Users\16362\HackUIowa2019\frontend-app\src\Capture.JPG" >

      </img>
      </div>
      <div class="col-sm-4">
    <p class="h1">Product Name</p>
    <p>minimum bid</p>
    <p># of bids</p>
      <p># of products</p>
    <p>time remaining</p>
    <button >BID</button>
    </div>
    </div>
    </div>
    
        );
    }
}

export default Product;
