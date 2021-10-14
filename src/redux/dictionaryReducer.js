import {SET_DICTIONARY_RESULT} from './types'

const initialState = {
    result: null
}

export const dictionaryReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_DICTIONARY_RESULT:
            return {
                ...state, result: action.payload
            }
        default:
            return state
    }
}