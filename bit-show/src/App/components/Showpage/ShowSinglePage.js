import React, { Component } from 'react';
import * as data from "./../../services/FetchShows";


class ShowSinglePage extends Component{
    constructor(props){
        super(props)
        this.state = {
            show: {},

        }
    }

        componentDidMount(){
            data.FetchSingleShow(this.props.match.params.id)
            .then(show => {
                this.setState({
                    show: show,
                })
            })
        }
        

        SeasonsList = () => {
            return !this.state.show.seasons ? null : this.state.show.seasons.map(season => {
                return <li>{season.premiereDate} - {season.endDate}</li>
            })
        }
        
       
        
        
        
        
        render(){
          
        return (
            <>
            <h1 className="text-center">{this.state.show.name}</h1>
            <div>
             <img className="originalImg" src={this.state.show.image} alt="..." />
            

            <div className="season">
                <h2>Seasons ()</h2>
                <ul>
                    {this.SeasonsList()}
                </ul>
            </div>
            </div>
            </>
        )
    }
}


export default ShowSinglePage;