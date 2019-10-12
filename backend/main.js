const express = require('express')
const app = express()
app.use(express.json());
app.use(express.urlencoded());
//const connectionUrl = process.env.DB_URL? process.env.DB_URL: 'mongodb://127.0.0.1:27017/';
const connectionUrl = 'mongodb://127.0.0.1:27017/';
const dbUtils = require('./mongoUtils');
var mongoose = require('mongoose');
mongoose.connect(connectionUrl, {useNewUrlParser: false});
var db = mongoose.connection;
const port = 3000;



// Seller: Seller,
// Product: Product,
// Buyer: Buyer,
// Bid: Bid,
// Auction: Auction,
// createSeller: createSeller,
// addProductToSeller: addProductToSeller,
// createAuction:createAuction,
// bidOnAuction :bidOnAuction ,
// registerBuyer:registerBuyer


db.once('open', () => {
    // DO ALL THE MAIN STUFF HERE
    console.log("Loaded!");
    app.post('/registerbuyer', (req, res) => {   
        const input = req.body;
        dbUtils.registerBuyer(input);
        res.send("hello")
    });

    app.post('/bid', (req, res) => {   
        const input = req.body;
        dbUtils.bidOnAuction(input);
        res.send("hello")
    });

    app.post('/registerseller', (req, res) => {
        const input = req.body;   
        console.log(input);
        dbUtils.createSeller(input);
        res.send("hello")
    });

    app.post('/addproduct', (req, res) => {  
        const input = req.body; 
        dbUtils.addProductToSeller(input);
        res.send("hello")
    });

    app.post('/createauction', (req, res) => {  
        const input = req.body; 
        dbUtils.createAuction(input);
        res.send("hello")
    });
    app.listen(port, () => console.log(`Example app listening on port ${port}!`))

})

