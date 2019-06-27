import {FETCH_SEARCHED_SHOWS} from "./../actions/types";

const initialState = {
    searchedShow: []
}

export const SearchedShows = (state = initialState, action) => {
    switch(action.type){
        case FETCH_SEARCHED_SHOWS: {
            return {
                ...state,
                searchedShow: state.searchedShow
            }
        }
        default: 
        return state
    }
}