import { SET_DICTIONARY_RESULT } from "./types"

export function fetchApi(word) {
    return async dispatch => {
        try {
            const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
            fetch(url)
                .then(res => res.json())
                .then(result => {
                    console.log(result);
                    dispatch({type: SET_DICTIONARY_RESULT, payload: result})
                })
        } catch (e) {}
    }
}
