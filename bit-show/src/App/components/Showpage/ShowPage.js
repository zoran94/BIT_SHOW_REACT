import React, { Component } from 'react';
import * as data  from "./../../services/FetchShows";


class ShowPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            shows: [],
        }
    }


    componentDidMount(){
        data.FetchShows()
        .then(shows => {
            this.setState({
                shows: shows
            })
        })
    }
    



     renderShows = () => {
       return   this.state.shows.slice(0, 12).map(show => {
        
        return (
            <div className="showcard">
            
            <img src={show.mediumImage} className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text">{show.name}</p>
            </div>
          
          </div>
        )
    })
}

    
    
    
    render(){
        
        if(!this.state.shows.length){
            return <h1>Loading...</h1>
        }
           return (
          <>
            <h2 className="text-center">Popular Shows</h2>
            <div className="shows">
                {this.renderShows()}
            </div>
            </>
           )

    }
}





export default ShowPage;

