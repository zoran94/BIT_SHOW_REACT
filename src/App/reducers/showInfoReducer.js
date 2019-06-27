import  {FETCH_SINGLE_SHOW} from "./../actions/types";


const initialState = {
    singleShow: {}
}

export const singleShowReducer = (state = initialState, action) => {
        switch(action.type){
            case FETCH_SINGLE_SHOW: 
            return {
                ...state,
                singleShow: action.singleShow
            }
            default: 
            return state
        }
}