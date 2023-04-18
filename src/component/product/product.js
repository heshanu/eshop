import React,{useState} from "react";
import "./product.css";
import { useStateValue } from "../../state/stateProvider";

//import material ui star icon
//for filled star
//import StarIcon from '@mui/icons-material/Star';
//for outlined star
//import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
function Product(props) {

    const [state,dispatch] = useStateValue();

    const addToBasketHandler = () => {
        //dispatch the item into the data layer
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: props.id,
                title: props.title,
                image: props.image,
                price: props.price,
                rating: props.rating,
            },
        });
    }

    return (
        <div className="product">
            <div className="product__info">
                <p>{props.title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{props.price}</strong>
                </p>
                <div className="product__rating">
                    {Array(props.rating)
                        .fill()
                        .map((_, i) => (
                            <p key={i}>⭐</p>
                        ))}
                </div>
            </div>

            <img src={props.image} />

            <button onClick={addToBasketHandler}>Add to Basket</button>
        </div>
    )
}

export default Product
