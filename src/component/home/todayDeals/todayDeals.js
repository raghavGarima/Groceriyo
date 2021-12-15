import React from "react";
import "./todayDeals.css";

function TodayDeals() {
    return (
        <>
            <div className="MainDivOfToday">
                <div>
                    <p>Today Deals</p>
                    <div className="ForPaginationButton">
                        <button>{`<`}</button>

                        <button>{`>`}</button>

                    </div>
                </div>
               
                <div style={{    marginTop: "2rem"}}>
                    <div className="CardToday">
                        <div className="CardImgToday">
                            <img src="/assets/TrendingImages/vegetable.png"></img>
                        </div>
                        <p>
                            Product name and details
                            lorem imspsum  200
                    </p>
                    <div className="PriceAndAdd">
                        <div className="OnlyForPriceDiv">
                        <p><span>&#8377; </span> 104</p>
                        <p className="PreviousPrice" style={{ fontSize: "12px"}}><span>&#8377; </span>120</p>
                        </div>
                        <button className="AddButton">Add+</button>
                    </div>
                    </div>
                    <div className="CardToday">
                        <div className="CardImgToday">
                            <img src="/assets/TrendingImages/milk.jpeg"></img>
                        </div>
                        <p>
                            Product name and details
                            lorem imspsum  200
                    </p>
                    <div className="PriceAndAdd">
                        <div className="OnlyForPriceDiv">
                        <p><span>&#8377; </span>104</p>
                        <p className="PreviousPrice"><span>&#8377; </span>120</p>
                        </div>
                        <button className="AddButton">Add+</button>
                    </div>
                    </div>
                    <div className="CardToday">
                        <div className="CardImgToday">
                            <img src="/assets/TrendingImages/flour.jpeg"></img>
                        </div>
                        <p>
                            Product name and details
                            lorem imspsum  200
                    </p>
                    <div className="PriceAndAdd">
                        <div className="OnlyForPriceDiv">
                        <p><span>&#8377; </span>104</p>
                        <p className="PreviousPrice"><span>&#8377; </span>120</p>
                        </div>
                        <button className="AddButton">Add+</button>
                    </div>
                    </div>
                    <div className="CardToday">
                        <div className="CardImgToday">
                            <img src="/assets/TrendingImages/cookies.jpeg"></img>
                        </div>
                        <p>
                            Product name and details
                            lorem imspsum  200
                    </p>
                    <div className="PriceAndAdd">
                        <div className="OnlyForPriceDiv">
                        <p><span>&#8377; </span>104</p>
                        <p className="PreviousPrice"><span>&#8377; </span>120</p>
                        </div>
                        <button className="AddButton">Add+</button>
                    </div>
                    </div>
                    <div className="CardToday">
                        <div className="CardImgToday">
                            <img src="/assets/TrendingImages/kitchen.jpeg"></img>
                        </div>
                        <p>
                            Product name and details
                            lorem imspsum  200
                    </p>
                    <div className="PriceAndAdd">
                        <div className="OnlyForPriceDiv">
                        <p><span>&#8377; </span>104</p>
                        <p className="PreviousPrice"><span>&#8377; </span>120</p>
                        </div>
                        <button className="AddButton">Add+</button>
                    </div>
                    </div>
                    <div className="CardToday">
                        <div className="CardImgToday">
                            <img src="/assets/TrendingImages/spices.jpeg"></img>
                        </div>
                        <p>
                            Product name and details
                            lorem imspsum  200
                    </p>
                    <div className="PriceAndAdd">
                        <div className="OnlyForPriceDiv">
                        <p><span>&#8377; </span>104</p>
                        <p className="PreviousPrice"><span>&#8377; </span>120</p>
                        </div>
                        <button className="AddButton">Add+</button>
                    </div>
                    </div>
                    {/* <div className="CardToday">
                        <div className="CardImgToday">
                            <img src="/assets/TrendingImages/oil.jpeg"></img>
                        </div>
                        <p>
                            Product name and details
                            lorem imspsum  200
                    </p>
                    <div className="PriceAndAdd">
                        <div className="OnlyForPriceDiv">
                        <p><span>&#8377; </span>104</p>
                        <p className="PreviousPrice"><span>&#8377; </span>120</p>
                        </div>
                        <button className="AddButton">Add+</button>
                    </div>
                    </div> */}
                </div>

            </div>
        </>
    )
}
export default TodayDeals