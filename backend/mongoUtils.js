
// // Utility file to talk to mongoDB

// const { MongoClient} = require('mongodb');

//const connectionUrl = process.env.DB_URL? process.env.DB_URL: 'mongodb://127.0.0.1:27017/';

// const database = 'task_manager'
// var db;
// var dbClient;

// const connectToDb = function (doMoreStuff) {
//     return MongoClient.connect(connectionUrl, { useNewUrlParser: true }).then(
//         (client) => {
//             console.log('connectiong to db successful');
//             db = client.db(database);
//             doMoreStuff()
//             }).catch((error) => {
//             console.log(error);
//             return error;
//         })
// }


// const getDb = function () {
//     return db;
// }
// getClient = function () {
//     return dbClient;
// }


// module.exports = {
//     getDb: getDb,
//     connectToDb: connectToDb,
//     getClient: getClient
// }

var mongoose = require('mongoose');

var SellerSchema = new mongoose.Schema({
    name: String,
    products: [mongoose.Schema.ObjectId]
});

const createSeller = function (input) {
    const seller = Seller({name:input.name, products:[]});
    seller.save()
}

//input = {sellerId:...,name,description}
const addProductToSeller = async function (input) {
    console.log(input);
    const product =  Product({name:input.name,description:input.description})
    await product.save()
    const seller = await Seller.findById(input.sellerId);
    seller.products.push(product._id);
    seller.save();
}


const createAuction = function (input) {
    const auction = Auction({name:input.name,product:input.productId,countOfItems:input.countOfItems,bids:[]})
    auction.save();
}


var BuyerSchema = new mongoose.Schema({
    name: String
});

const registerBuyer = function(input){
    const prod = Buyer({name: input.name })
    prod.save();
}


//{auctionId,amount,buyerId}
const bidOnAuction = async function (input)  {
    const auction = await Auction.findById(input.auctionId);
    const bid = Bid({auctionId:input.auctionId,buyerId:input.buyerId,amount:input.amount});
    await bid.save();
    auction.bids.push(bid._id);
    auction.save();
}



var AuctionSchema = new mongoose.Schema({
    name: String,
    product: mongoose.Schema.ObjectId,
    bids: [mongoose.Schema.ObjectId],
    countOfItems: Number
});



var BidSchema = new mongoose.Schema({
    product: mongoose.Schema.ObjectId,
    auctionId: mongoose.Schema.ObjectId,
    amount: Number
});


var ProductSchema = new mongoose.Schema({
    name: String,
    description : String
});

var Seller = mongoose.model('Seller', SellerSchema);
var Buyer = mongoose.model('Buyer', BuyerSchema);
var Auction = mongoose.model('Auction', AuctionSchema);
var Bid = mongoose.model('Bid', BidSchema);
var Product = mongoose.model('Product', ProductSchema);

module.exports = {
    Seller: Seller,
    Product: Product,
    Buyer: Buyer,
    Bid: Bid,
    Auction: Auction,
    createSeller: createSeller,
    addProductToSeller: addProductToSeller,
    createAuction:createAuction,
    bidOnAuction :bidOnAuction ,
    registerBuyer:registerBuyer

}