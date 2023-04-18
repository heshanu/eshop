import React, { useState } from 'react';
import './Subtotal.css';

//import useStateValue
import { useStateValue } from '../../state/stateProvider';

//import getBasketTotal 
import { getBasketTotal } from '../../reducer/reducer';

import CurrencyFormat from 'react-currency-format';

const Subtotal = () => {
    const [{ basket }, dispatch] = useStateValue();
    return (
        <div className='subtotal'>
            <CurrencyFormat renderText={(value) => {
                return (
                    <>
                        <p>
                            Subtotal ({basket.length} items): <strong>{value}</strong>
                        </p>
                        <small className='subtotal__gift'>
                            <input type='checkbox' /> This order contains a gift
                        </small>
                    </>
                )
            }}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'$'}
            ></CurrencyFormat>
            <button>Proceed to Checkout</button>
        </div >
    );
}

export default Subtotal;
