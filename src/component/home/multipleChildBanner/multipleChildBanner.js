import React, { useState, useRef } from "react";
import "./multipleChildBanner.css"
function MultipleChildBanner(){
    const [list, setTodayList] = useState([
        {
            productImage: "/assets/TrendingImages/vegetable.png",
            category: "Kitchen lorem impsum sample",
           
        },
        {
            productImage: "/assets/TrendingImages/milk.jpeg",
            category: "Fresh milk Lorem impsum Everday",
           
        },
        {
            productImage: "/assets/TrendingImages/flour.jpeg",
            category: "Delicious Homemade Cookies",
         
        },
       
    ])
    
    return(
        <>
        <div className="container-fluid d-flex justify-content-around " style={{margin: "3% 0%"}}>
            {list.map((ele)=>{
                return(
                    <div className="MultipleCardChidDiv" style={{
                            backgroundImage: `url(${ele.productImage})`,
                        
                          }}>
                       
                   {/* ejbdwejfb
                   <button className="shopNow" >Shorfir</button> */}
                    {/* <button className="shopNow" style={{ width: "133.09px" }}>Order now</button> */}
                    </div>
                )
            })}
        </div>
        </>
    )

}
export default MultipleChildBanner