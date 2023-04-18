//here we define all the application level state and define the action to update the state
export const initialState = {
        basket: [],
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
            break;
            //Logic for removing item from basket
            
        default:
            return state;
    }
}