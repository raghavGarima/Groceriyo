import React from "react";
import "./banner.css";
function Banner() {
  return (
    <div className="banner-container">
      <div
        className="banner"
        style={{
          backgroundImage: `url("/assets/images/homebanner.png")`,
        }}
      >
        <div className="banner-logo-style">
          <div className="super-logo-style">
            <img src="/assets/images/Super.png" />
          </div>
          <div className="grocery-logo-style">
            <img src="/assets/images/Grocery.png" />
          </div>
          <div className="sale-logo-style">
            <img src="/assets/images/SALE.png" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
