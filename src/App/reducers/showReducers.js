import { FETCH_SHOWS } from "./../actions/types";

const initialState = {
    shows: []
}

export const showReducer = (state = initialState, action) => {

    switch(action.type){
        case FETCH_SHOWS:
            return {
                ...state,
                shows: action.shows
            }
            default: {
                return state
            }
    }
}