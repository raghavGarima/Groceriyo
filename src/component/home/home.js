import React from "react";
import HeaderNavigation from "../common/headernavigation/headernavigation";
import Header from "../common/header/header";
import Banner from "./banner/banner";
import Trending from "./trending/trending"
import TodayDeals from "./todayDeals/todayDeals"
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
function Home({ name, loggedIn }) {
  console.log("name", name, loggedIn)
  return (
    <div>
      <Header />
      <HeaderNavigation />
      <Banner />
      <Trending />
      <TodayDeals />
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