import React from "react";
import HeaderNavigation from "../common/headernavigation/headernavigation";
import Header from "../common/header/header";
import Banner from "./banner/banner";
import Trending from "./trending/trending"
import TodayDeals from "./todayDeals/todayDeals"
import Categories from "./categories/categories"
import Footer from "../common/footer/footer"
import MultipleChildBanner from "./multipleChildBanner/multipleChildBanner"
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
function Home({ name, loggedIn }) {
  console.log("name", name, loggedIn)
  return (
    <div className="container-fluid" style={{width:"95%"}}>
      
      <div className="row">
      <Header />
      </div>
      <div className="row">
      <HeaderNavigation />
      </div>
      <div className="row">

      <Banner />
      </div>
      <div className="row">
      <Trending />
      </div>
      <div className="row">
      <TodayDeals />
      </div>
      <div className="row">
      <MultipleChildBanner /> 
      </div>
      <div className="row">
        <Categories categoryName={"Fresh Fruits"} />
        <Categories categoryName={"Fresh Vegetables"}  />
        <Categories categoryName={"Cleaning & Household"}  />
      </div>
      <div className="row">
        <Footer />
      </div>


    </div>
  );
}

const mapStateToProps = state => {
  debugger
  return { name: state.mainReducer.name, loggedIn: state.authReducer.loggedIn };
};

function mapDispatchToProps(dispatch) {
  debugger
  // return {
  //   addProduct: e => dispatch(Loader(e))
  // };
}



// export default connect(state => ({ name: state.name }))(Home);
export default connect(mapStateToProps, mapDispatchToProps)(Home);