import React from 'react';

export const ImageMouthConfigContext = React.createContext()
export const AT = {
    SET_CONTRAST: 'set-contrast',
    SET_BRIGHTNESS: 'set-brightness',
    INVERT: 'invert',
    SHARPEN: 'sharpen',
    RESET: 'reset'
}
const initialState = {
    contrast: 0,
    brightness: 0,
    invert: false,
    sharpness:0
}

function reducer(state, action) {
    switch (action.type) {
        case AT.SET_CONTRAST:
            return {...state, contrast: action.payload}
        case AT.SET_BRIGHTNESS:
            return {...state, brightness: action.payload}
        case AT.INVERT:
            return {...state, invert: action.payload}
        case AT.SHARPEN:
            return {...state, sharpness: action.payload}
        case AT.RESET:
            return initialState
        default:
            return state
    }
}

export const ImageMouthConfigProvider = ({children}) => {
    const [state, dispatch] = React.useReducer(reducer, initialState);
    return (
        < ImageMouthConfigContext.Provider value = {[state, dispatch]}>
            {children}
        </ImageMouthConfigContext.Provider>
    )
}
export const useImageMouthConfig = () => {
    return React.useContext(ImageMouthConfigContext)
}