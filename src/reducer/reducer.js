//here we define all the application level state and define the action to update the state
export const initialState = {
    basket: [],
};

export const getBasketTotal = function getBasketTotal(basket) {
    return basket?.reduce(
        function (amount, item) {
        return item.price + amount;
    }, 0)
}

//Selector
export const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_BASKET':
            //Logic for adding item to basket
            return {
                ...state,
                basket: [...state.basket, action.item],
            }

        case 'REMOVE_FROM_BASKET':
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id)
            let newBasket = [...state.basket];

            //remove the item from the basket
            if (index >= 0) {
                newBasket.splice(index, 1);
            }
            else {
                console.log(`cant remove the item&id: ${action.id} as its not in the basket`);
            }
            return {
                ...state, basket: newBasket
            }

        //Logic for removing item from basket
        default:
            return state;
    }
}