//here we define all the application level state and define the action to update the state
export const initialState = {
        basket: [],
}

export const getBasketTotal = (basket) =>{
    return basket?.reduce((amount, item) => item.price + amount, 0);
}

//Selector
export const reducer=(state, action) => {
    switch(action.type){
        case 'ADD_TO_BASKET':
            //Logic for adding item to basket
            return {
                ...state,
                basket: [...state.basket, action.item],
            }

        case 'REMOVE_FROM_BASKET':
            //break;
            return{
                ...state,

            }
            //Logic for removing item from basket
            
        default:
            return state;
    }
}