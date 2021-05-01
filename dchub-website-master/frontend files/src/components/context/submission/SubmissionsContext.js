import React from 'react';
import {
    GET_ALL_SUBMISSIONS_FAIL, GET_ALL_SUBMISSIONS_SUCCESS, GET_MY_SUBMISSIONS_FAIL, GET_MY_SUBMISSIONS_SUCCESS
} from "./submissions_types";

const SubmissionsContext = React.createContext([])

function reducer(state, {type, payload}) {
    switch (type) {
        case GET_MY_SUBMISSIONS_SUCCESS:
        case GET_ALL_SUBMISSIONS_SUCCESS:

            return {
                ...state,
                submissions: payload
            }
        case GET_MY_SUBMISSIONS_FAIL:
        case GET_ALL_SUBMISSIONS_FAIL  :
            return {
                ...state,
                submissions: null
            }
     
            
        default:
            return state
    }
}

export const SubmissionsProvider = ({children}) => {
    const [state, dispatch] = React.useReducer(reducer, {
        submissions: null,
    })
    return (
        <SubmissionsContext.Provider
            value = {
                [state, dispatch]
            }
        >
            {children}
        </SubmissionsContext.Provider>
    );
};
export const useSubmissions = () => {
    return React.useContext(SubmissionsContext)
}


