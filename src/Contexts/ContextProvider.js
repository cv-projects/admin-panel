import React, {createContext, useContext, useEffect, useState} from 'react';

const StateContext = createContext();

const initialState = {
    isLogged: false
};

export const ContextProvider = ({id = null, children}) => {

    const [accountState, setAccountState] = useState(initialState);

    const [sidebarActive, setSidebarActive] = useState(true);

    return (
        <StateContext.Provider
            value={{
                accountState,
                sidebarActive,
                setSidebarActive,
            }}>
            {children}
        </StateContext.Provider>
    )

};

export const useStateContext = () => useContext(StateContext);