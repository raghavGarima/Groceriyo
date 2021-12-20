import React, { useState } from "react"

function Footer() {
    const [footerContent, setFooterContent] = useState([
        {
            ContentType: "Help",
            Description: [
                {
                    item: "Help/faqs",
                },
                {
                    item: "Track order",
                },
                {
                    item: "Size guide",
                },
                {
                    item: "Buying guide",
                },
                {
                    item: "How do I shop?",
                },
                {
                    item: "How do I pay?",
                },

            ]
        },
        {
            ContentType: "Categories",
            Description: [
                {
                    item: "Cleaning & Household",
                },
                {
                    item: "Kitchen Essentials",
                },
                {
                    item: "Fruits & Vegetables",
                },
                {
                    item: "Dairy & Bakery",
                },
                {
                    item: "Staples",
                },
                {
                    item: "Snacks &  Biscuits",
                },

            ]
        },
        {
            ContentType: "Lorem Impsum",
            Description: [
                {
                    item: "About us",
                },
                {
                    item: "Contact us",
                },
                {
                    item: "Sitemap",
                },
                {
                    item: "Become a seller",
                },
                {
                    item: "Terms and conditions",
                },
                {
                    item: "Privacy policy",
                },
                {
                    item: "E-waste policy",
                },

            ]
        }
    ])

    return (
        <div className="container-fluid py-2 px-4 mt-5" style={{ background: "#F9F9F9" }}>
            <div className="row" style={{
                height: "3.5rem",
                width: "14rem"
            }}>

                <img src="assets/headerImages/Logo.png"></img>
            </div>
            <div className="row">
                <div className="col-4">
                    <p style={{ fontSize: "14px", fontWeight: "400" }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has beenindustry's standard dummy text ever since.</p>
                    <h5>Payment Methods</h5>
                    <h5>Find us on</h5>
                    <div>
                    <i class="fa fa-instagram" aria-hidden="true"></i>
                    </div>
                </div>

                {footerContent.map((ele) => {
                    return (
                        <div className="col" style={{ fontSize: "15px", fontWeight: "500" }} >
                            {ele.ContentType}
                            <ul style={{ fontSize: "14px", fontWeight: "400" }}>
                                {ele.Description.map((typeDes) => {
                                    return (
                                        <li>
                                            {typeDes.item}
                                        </li>
                                    )

                                })}
                            </ul>
                        </div>

                    )

                })}





            </div>
        </div>
    )
}

export default Footer

{/* 
                <div className="col" style={{ fontSize: "15px", fontWeight: "500" }} >
                    Help
                    <ul style={{ fontSize: "14px", fontWeight: "400" }}>
                        <li>
                            Help/faqs
                        </li>
                        <li>
                            Track order
                        </li>
                        <li>
                            Size guide
                        </li>
                        <li>
                            Buying guide
                        </li>
                        <li>
                            How do I shop?
                        </li>
                        <li>
                            How do I pay?
                        </li>
                    </ul>

                </div>
                <div className="col" style={{ fontSize: "15px", fontWeight: "500" }} >
                    Categories
                <ul style={{ fontSize: "14px", fontWeight: "400" }}>
                        <li>
                            Cleaning & Household
                        </li>
                        <li>
                            Kitchen Essentials
                        </li>
                        <li>
                            Fruits & Vegetables
                        </li>
                        <li>
                            Dairy & Bakery
                        </li>
                        <li>
                            Staples
                        </li>
                        <li>
                            Snacks &  Biscuits
                        </li>
                    </ul>
                </div>
                <div className="col" style={{ fontSize: "15px", fontWeight: "500" }} >
                    Lorem Impsum
                <ul style={{ fontSize: "14px", fontWeight: "400" }}>
                        <li>
                            About us
                        </li>
                        <li>
                            Contact us
                        </li>
                        <li>
                            Sitemap
                        </li>
                        <li>
                            Become a seller
                        </li>
                        <li>
                            Terms and conditions
                        </li>
                        <li>
                            Privacy policy
                        </li>
                        <li>
                            E-waste policy
                        </li>
                    </ul>
                </div> */}