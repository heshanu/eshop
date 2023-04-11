
import React from "react";
import "./Checkout.css";

//import checkoutproduct
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import Subtotal from "../Subtotal/Subtotal";

//import { SportsBasketball } from "@material-ui/icons";
function Checkout() {

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" className="checkout__ad" />
                <div>
                    <h2 className="checkout__title">
                        Your Shopping Basket
                    </h2>
                    <CheckoutProduct title={"testing"} image={'https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg'} price={100} rating={10} />
                </div>
            </div>

            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
