import React, { Component } from 'react';
import * as data  from "./../../services/FetchShows";
import {Link} from "react-router-dom"
import { connect } from "react-redux";
import {Show, SearchedShows} from "./../../actions/showAction";

class ShowPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            inputValue: "",
            searchedShows: []
        }
    }


    componentDidMount(){
       this.props.Show()
       
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
    
        // onKey = (e)=>{
        //     return this.props.searchedShow.filter(show => {
        //         console.log(show.id)
        //         if(this.state.inputValue.includes(show.name)){
        //                 if(e.keyCode === 13){
        //                 return
        //             }
        //             }
        //         })
        // }
        
        SearchedShow = () => {
            return this.state.searchedShows.map(show => {
               
                return (
                       <Link to={`/show/${show.id}`}>
                <li>{show.name}</li>
            </Link>
            )
        })
    }
    
    renderShows = () => {
        return   this.props.shows.slice(0, 20).map(show => {
        
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
        
       console.log(this.state.searchedShows)
     
        if(!this.props.shows.length){
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
            {this.SearchedShow()}
            </ul>
          <h2 className="text-center">Popular Shows</h2>
            <div className="shows">
                {this.renderShows()}
            </div>
            </>
           )

    }
}


const mapStateToProps = state => {
    return {
        shows: state.show.shows,
        searchedShows: state.searchedShow.searchedShow
    }
}

const mapDispatchToProps = {
    Show,
    SearchedShows
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowPage);

