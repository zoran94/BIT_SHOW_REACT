import { FETCH_SHOWS, FETCH_SINGLE_SHOW, FETCH_SEARCHED_SHOWS } from "./types";
import  {FetchShows, FetchSingleShow, FetchSearchedShows}  from "./../services/FetchShows";

 export const Show = dispatch => {
    return dispatch => { FetchShows()
        .then(shows => {
             dispatch({
                type: FETCH_SHOWS,
                shows:shows
            })
        })
    }
}



 export const SingleShow = showId => {
    return dispatch => {
        FetchSingleShow(showId).then(singleShow => {
             dispatch({
                type: FETCH_SINGLE_SHOW,
                singleShow: singleShow
            })
        })
    }
}

export const SearchedShows = value => {
    return dispatch => {
        FetchSearchedShows(value).then(searched => {
            dispatch({
                type: FETCH_SEARCHED_SHOWS,
                searchedShow: searched
            })
        })
    }
}