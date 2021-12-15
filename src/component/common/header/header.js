import React from "react";
import "./header.css";

function Header() {
  return (
    <header>
      <div className="logo">
        <div className="logo-img-style">
          <img src="assets/images/Logo.svg" />
        </div>
        <div className="logo-name-style">
          <img src="assets/images/Groceryio.svg" />
        </div>
      </div>

      <div className="address">
        <div className="address-icon">
          <img src="/assets/images/location.svg" alt="location" />
        </div>
        <div className="address-text">
          <p>Deliver to</p>
          <span>110093</span>
        </div>
      </div>

      <div className="search-style">
        <div className="search-input">
          <input
            type="text"
            placeholder="Search essentials, groceries, and more..."
          />
        </div>
        <div className="search-icon">
          <button>
            <i className="fa fa-search" aria-hidden="true"></i>
          </button>
        </div>
      </div>

      <div className="accout-style">
        <div className="user-account-style">
          <i className="fa fa-user-circle-o" aria-hidden="true"></i>
          <p>Sign in / Sign up</p>
        </div>
      </div>

      <div className="bucket-style">
        <div className="user-bucket-style">
          <i className="fa fa-shopping-cart" aria-hidden="true"></i>
          <p>$0.00</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
