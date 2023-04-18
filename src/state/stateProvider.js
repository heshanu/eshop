import React, { createContext, useCallback, useReducer } from 'react';

const initialState = {};

//prepared the data layer
export const StateContext = createContext(initialState);

//wrap our app and provide the data layer to every component
export const StateProvider = ({ reducer, initialState, children }) => () => {
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
}

//pull information from the data layer
export const useStateValue = () => useContext(StateContext);