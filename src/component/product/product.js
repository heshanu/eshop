import React from "react";
import "./product.css";

function Product() {
    return (
        <div className="product">
            <div className="product__info">
                <p>Title</p>
                <p className="product__price">$30</p>
            </div>
        </div>
    )
}

export default Product
