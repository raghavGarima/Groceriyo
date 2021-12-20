import React, { useState, useRef } from "react";
import "./categories.css";


function Categories({categoryName}) {

    const slider = useRef();
    const [trendingList, setTrendingList] = useState([
        {
            productImage: "/assets/TrendingImages/vegetable.png",
            category: "Product name and details lorem imspsum  200",
            currentPrice: "104",
            PreviousPrice: "120",
        },
        {
            productImage: "/assets/TrendingImages/milk.jpeg",
            category: "Product name and details lorem imspsum  200",
            currentPrice: "104",
            PreviousPrice: "120",
        },
        {
            productImage: "/assets/TrendingImages/flour.jpeg",
            category: "Product name and details lorem imspsum  200",
            currentPrice: "104",
            PreviousPrice: "120",
        },
        {
            productImage: "/assets/TrendingImages/cookies.jpeg",
            category: "Product name and details lorem imspsum  200",
            currentPrice: "104",
            PreviousPrice: "120",
        },
        {
            productImage: "/assets/TrendingImages/kitchen.jpeg",
            category: "Product name and details lorem imspsum  200",
            currentPrice: "104",
            PreviousPrice: "120",
        },
        {
            productImage: "/assets/TrendingImages/spices.jpeg",
            category: "Product name and details lorem imspsum  200",
            currentPrice: "104",
            PreviousPrice: "120",
        },
        {
            productImage: "/assets/TrendingImages/oil.jpeg",
            category: "Product name and details lorem imspsum  200",
            currentPrice: "104",
            PreviousPrice: "120",
        },
        {
            productImage: "/assets/TrendingImages/oil.jpeg",
            category: "Product name and details lorem imspsum  200",
            currentPrice: "104",
            PreviousPrice: "120",
        },
        {
            productImage: "/assets/TrendingImages/oil.jpeg",
            category: "Product name and details lorem imspsum  200",
            currentPrice: "104",
            PreviousPrice: "120",
        },
        {
            productImage: "/assets/TrendingImages/oil.jpeg",
            category: "Product name and details lorem imspsum  200",
            currentPrice: "104",
            PreviousPrice: "120",
        },
     

    ])

    var settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 520,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
        ],
    };


    const next = () => {
        slider.current.slickNext();
    };
    // const previous = () => {
    //     slider.current.slickPrev();
    // };

    return (
        <div className="container-fluid py-2 px-4 mt-5">
            <div className="row">
                <div className="col-6"><h4>{categoryName}</h4></div>
                <div className="col-6 d-flex justify-content-end align-items-center">
                    <p className="pe-3"> View All</p>
                    {/* <button onClick={previous} className="cssForButtons"> <i className="fa fa-angle-left" style={{ color: "#F28505" }}></i> </button> */}
                    <button className="cssForButtons"> <i className="fa fa-angle-right" style={{ color: "#F28505" }}></i> </button>

                </div>
            </div>
            <div className="row">


                {trendingList.map((ele) => {
                    return (
                        <div className="col-2 d-flex flex-column justify-content-between align-items-center mt-4 mb-2 mx-3">
                            <div className="CardImg1">
                                <img src={ele.productImage}></img>
                            </div>
                            <p className="categoryDes">
                                {ele.category}
                            </p>
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-6">
                                        <p className="CurrentPrice"><span>&#8377; </span> {ele.currentPrice}</p>
                                        <p className="PreviousPrice" style={{ fontSize: "12px" }}><span>&#8377; </span>{ele.PreviousPrice}</p>
                                    </div>
                                    <div className="col-6">
                                        <button className="AddButton">Add+</button>
                                    </div>

                                </div>
                            </div>

                        </div>
                    )
                })}




            </div>

        </div>
    )

}
export default Categories