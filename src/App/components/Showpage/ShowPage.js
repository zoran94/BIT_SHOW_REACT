import React, { Component } from 'react';
import * as data  from "./../../services/FetchShows";
import {Link} from "react-router-dom"

class ShowPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            shows: [],
            searchedShows: [],
            inputValue: "",
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
    
    onInputChange=(e)=> {
     

            this.setState({
                inputValue: e.target.value
            })
            
            data.FetchSearchedShows(e.target.value)
            .then(shows => {
                this.setState({
                    searchedShows:shows
                })
            })
        }
    
        onKey = (e)=>{
            return this.state.searchedShows.filter(show => {
                console.log(show.id)
                if(this.state.inputValue.includes(show.name)){
                        if(e.keyCode === 13){
                        return
                    }
                    }
                })
        }
        
        SearchedShows = () => {
            return this.state.searchedShows.map(show => {
                return (
                       <Link to={`/show/${show.id}`}>
                <li>{show.name}</li>
            </Link>
            )
        })
    }
    
    renderShows = () => {
        return   this.state.shows.slice(0, 12).map(show => {
        
        return (
            <div className="showcard">
            
            <Link to={`/show/${show.id}`}><img src={show.mediumImage} className="card-img-top" alt="..." /></Link>
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
            <input type="search" placeholder="Search" aria-label="Search" 
            onChange={this.onInputChange}
            value={this.state.inputValue}
            onKeyUp={this.onKey}
            />
            <ul className="lista">
            {this.SearchedShows()}
            </ul>
          <h2 className="text-center">Popular Shows</h2>
            <div className="shows">
                {this.renderShows()}
            </div>
            </>
           )

    }
}





export default ShowPage;

