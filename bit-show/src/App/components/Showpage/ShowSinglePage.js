import React, { Component } from 'react';
import * as data from "./../../services/FetchShows";
import CastList from "./CastList";
import ShowDetails from "./ShowDetails";

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
        
        CountSeasons = () => {
          return  !this.state.show.seasons ? null : this.state.show.seasons.length
        }
        
       CastList = () => {
           return !this.state.show.cast ? <h2>Loading...</h2> : this.state.show.cast.map(cast => {
               
               return <li>{cast.character.name}</li>
           })
       }
        
       ShowDetails = () => {
           return this.state.show.summary
       }
        
        
        
        render(){
        if(!this.state.show){
            return <h1>Loading...</h1>
        }
        return (
            <>
            <h1 className="text-center">{this.state.show.name}</h1>
            <div className="god">
             <img className="originalImg" src={this.state.show.image} alt="..." />
            

            <div className="season">
                <h2>Seasons ({this.CountSeasons()})</h2>
                <ul>
                    {this.SeasonsList()}
                </ul>
            <CastList castList={this.CastList}/>
            </div>

            <ShowDetails showDet={this.ShowDetails} />
            </div>
            </>
        )
    }
}


export default ShowSinglePage;