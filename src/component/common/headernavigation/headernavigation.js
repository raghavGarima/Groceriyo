import React from "react";
import "./headernavigation.css";
function HeaderNavigation() {
  return (
    <nav>
      <ul className="navigation-style">
        <li className="nav-heading">Shop by Categories</li>

        <li>
          Fruits & Vegetables
          <i class="fa fa-angle-down" aria-hidden="true" />
          <ul className="first-nested-child">
            <li>Test</li>
            <li>Test2</li>
            <li>Test3</li>
          </ul>
        </li>

        <li>
          Staples
          <i class="fa fa-angle-down" aria-hidden="true" />
          <ul className="first-nested-child">
            <li>Test</li>
            <li>Test2</li>
            <li>Test3</li>
          </ul>
        </li>

        <li>
          Dairy & Bakery <i class="fa fa-angle-down" aria-hidden="true" />
          <ul className="first-nested-child">
            <li>Test</li>
            <li>Test2</li>
            <li>Test3</li>
          </ul>
        </li>

        <li>
          Snacks & Biscuits
          <i class="fa fa-angle-down" aria-hidden="true" />
          <ul className="first-nested-child">
            <li>Test</li>
            <li>Test2</li>
            <li>Test3</li>
          </ul>
        </li>

        <li>
          Kitchen Essentials
          <i class="fa fa-angle-down" aria-hidden="true" />
          <ul className="first-nested-child">
            <li>Test</li>
            <li>Test2</li>
            <li>Test3</li>
          </ul>
        </li>

        <li>
          Cleaning & Household
          <i class="fa fa-angle-down" aria-hidden="true" />{" "}
          <ul className="first-nested-child">
            <li>Test</li>
            <li>Test2</li>
            <li>Test3</li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}

export default HeaderNavigation;
