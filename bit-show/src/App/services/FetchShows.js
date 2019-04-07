import Show from "./../entities/Show";
import SingleShow from "./../entities/SingleShow";

const FetchShows = (props) => {

    return fetch("http://api.tvmaze.com/shows")
    .then(response => {
        return response.json()
    })
    .then(shows => {
        const showArr = shows.map(show => {
            const {id, name, image, rating} = show;
            return new Show(show.id, show.name, show.image, show.rating.average)
        })
        return showArr

    })
}


const FetchSingleShow = (id) => {
                
    return fetch(`http://api.tvmaze.com/shows/5?embed[]=seasons&embed[]=cast`)
    .then(response => {
        return response.json()
    })
    .then(singleShow => {
        return new SingleShow(singleShow.id, 
            singleShow.name,
             singleShow.image.original
             , singleShow.rating,
             singleShow.summary,
              singleShow._embedded,
               )
    })
}





export {
    FetchShows,
    FetchSingleShow,
}