import React from "react";
import "./trending.css";
function Trending() {
    return (
        <>
            <div className="MainDivOfTrending">
                <div>
                    <p>Trending Categories</p>
                    <div className="ForPaginationButton">
                        <button>{`<`}</button>

                        <button>{`>`}</button>

                    </div>
                </div>
                <div>

              
                <div className="Card">
                    <div className="CardImg">
                        <img src="/assets/TrendingImages/vegetable.png"></img>
                    </div>
                    <p>
                        Fruits & Vegetables
                    </p>
                </div>
                <div className="Card">
                    <div className="CardImg">
                        <img src="/assets/TrendingImages/milk.jpeg"></img>
                    </div>
                    <p>
                    Dairy & Bakery
                    </p>
                </div>
                <div className="Card">
                    <div className="CardImg">
                        <img src="/assets/TrendingImages/flour.jpeg"></img>
                    </div>
                    <p>
                    Staples & Flours
                    </p>
                </div>
                <div className="Card">
                    <div className="CardImg">
                        <img src="/assets/TrendingImages/cookies.jpeg"></img>
                    </div>
                    <p>
                    Snacks &  Biscuits
                    </p>
                </div>
                <div className="Card">
                    <div className="CardImg">
                        <img src="/assets/TrendingImages/kitchen.jpeg"></img>
                    </div>
                    <p>
                    Kitchen Essentials
                    </p>
                </div>
                <div className="Card">
                    <div className="CardImg">
                        <img src="/assets/TrendingImages/spices.jpeg"></img>
                    </div>
                    <p>
                    Masalas & Spices
                    </p>
                </div>
                <div className="Card">
                    <div className="CardImg">
                        <img src="/assets/TrendingImages/oil.jpeg"></img>
                    </div>
                    <p>
                    Edible Oils
                    </p>
                </div>
                </div>

            </div>

        </>
    )
}
export default Trending