import React from "react";
import "./banner.css";
function Banner() {
  return (
    <div className="banner-container">
      <div
        className="banner"
        style={{
          backgroundImage: `url("/assets/images/BackgroundGrocery.png")`,
        }}
      >
        <button className="ShopNowButton">Shop now</button>
        
        <div className="smallCard" style={{marginLeft: "190px"}}>
              <img src="/assets/images/EasyReturn.png" className="ForImage"></img>
              <p className="P1">Easy Return</p>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting.</p>
        </div>
        <div className="smallCard" style={{marginLeft: "482px"}}>
              <img src="/assets/images/purchase.png" className="ForImage"></img>
              <p className="P1">Easy Return</p>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting.</p>
          </div>
          <div className="smallCard" style={{marginLeft: "776px"}}>
              <img src="/assets/images/SameDayDelivery.png" className="ForImage"></img>
              <p className="P1">Same Day Delivery</p>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting.</p>
          </div>
          <div className="smallCard" style={{marginLeft: "1070px"}}>
          <img src="/assets/images/sustainable.png" className="ForImage"></img>
              <p className="P1">Original & Organic</p>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting.</p>
          </div>
        
   
      </div>
    </div>
  );
}

export default Banner;
