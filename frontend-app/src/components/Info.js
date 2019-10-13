import React, { Component } from 'react';

class Info extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="row">
              <div className="col-12 text-left">
                <h1 className="text-center">Vickrey Auctions</h1>
                <h3>About the Auction</h3>
                <p>Our modified Vickrey Auction works as follows:</p>
                <ul>
<li>The seller lists a limited number of items available for purchase on Vickrey Auctions</li>
<li>The seller promotes their listing link to their community</li>
<li>Members of the community decide what they are willing to pay for the items and bid that amount. Because they submit sealed bids, they do not know the price that others are willing to pay and do not have any incentive to bid lower than what they (personally) are willing to pay.</li>
<li>The seller reveals the winning bids. All winners pay the highest non-winning bid.</li>
<li>The seller now has a full demand curve, complete with the price that each member was willing to pay attached to their email address.</li>
<li>The buyers are happy because they all paid less than what they specified for their item. </li>
<li>The sellers are happy because they learned exactly what their product was worth and who is willing to buy it for how much (which is often more than they were selling it for) and they earned more money than they would have by selling it at a fixed price because the minimum price was their fixed bid.</li>
              </ul>
              <h3>Example Auction</h3>
              <p>A manufacturer of high-quality speakers has constructed five units. The bids are as follows:</p>
              <ol>
              <li style={{color: 'green'}}>$1,500</li>
              <li style={{color: 'green'}}>$1,400</li>
              <li style={{color: 'green'}}>$1,350</li>
              <li style={{color: 'green'}}>$1,350</li>
              <li style={{color: 'green'}}>$1,300</li>
              <li style={{color: 'blue'}}>$1,250 {"<- This is the price"}</li>
              <li>$1,200</li>
              <li>$1,100</li>
              <li>...</li>
              </ol>
              In this case, the top 5 bidders (green) each purchase the product for the price of the sixth bid (blue). The sixth and lower bidders do not purchase the product.
              <h3>Our Brand</h3>
              <p>We are the Etsy of the online auctioning market. While there are an abundance of conventional auction sites, we market primarily to niche sellers. Etsy alone has 2.1 million sellers, a majority of whom are not earning the value of their product from their customers.</p>
              <h3>End Result</h3>
              <p>Vickrey Auctions would ultimately allow for a better determination of price for niche products. This would be a huge step forward in the current niche marketplace model, which is hindered by foggy estimates of price and a high amount of personal risk for creators.</p>
<p>Niche creators generally have one of two goals:</p>
<ul>
<li>Maximize profit</li>
<li>Maximize distribution</li>
</ul>
<p>Because Vickrey Auctions allow for a perfect demand-price curve, niche creators are able to price their products more fairly. This eliminates a hurdle to entry and greatly benefits the niche community. With more sellers, quality will rise and prices will fall, and the niche community can expand.</p>
<p>Additionally, this feature could grow the amount of items that a seller is comfortable producing and allow them to discover ‘super-fans’ who are willing to pay much more than the average consumer and can make producing even more niche products viable.</p>
<p>Quoting from Kevin Lynagh in his <a href="https://kevinlynagh.com/notes/pricing-niche-products/">case study</a>:</p>
<p>"""Given the trends that’ve enabled niche manufacturing in the first place:</p>
<ul>
<li>direct producer-consumer relationships online via email newsletters, forums, social media, etc.</li>
<li>decreased production costs and turnaround time (whether via contract manufacturers or in-house, e.g., CNC capabilities)</li>
<li>it seems feasible that creators could run regular pre-order auctions to quantitatively gauge the viability of new design ideas.</li>
</ul>
<p>Overall, the status quo shift of “Should I buy this?” to “How much should do I want to pay for this?” will enable all consumers to find more of the niche items they love and enable all sellers to earn a living on providing value to those customers."""</p>
              </div>
            </div>
        );
    }
}

export default Info;
