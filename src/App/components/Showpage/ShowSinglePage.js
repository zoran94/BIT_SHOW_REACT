import React, { Component } from 'react';
import * as data from "./../../services/FetchShows";
import CastList from "./CastList";
import ShowDetails from "./ShowDetails";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { SingleShow} from "./../../actions/showAction";


class ShowSinglePage extends Component{
    

        componentDidMount(){
            this.props.SingleShow(this.props.match.params.id)
            
        }
        
        SeasonsList = () => {
            return !this.props.singleShow.seasons ? null : this.props.singleShow.seasons.map(season => {
                return <li>{season.premiereDate} - {season.endDate}</li>
            })
        }
        
        CountSeasons = () => {
            return  !this.props.singleShow.seasons ? null : this.props.singleShow.seasons.length
        }
        
        CastList = () => {
            return !this.props.singleShow.cast ? <h2>Loading...</h2> : this.props.singleShow.cast.map(cast => {
                
                return <li>{cast.character.name}</li>
            })
        }
        
        ShowDetails = () => {
            return this.props.singleShow.summary
        }
        
        
        
        render(){
            const {name, image} = this.props.singleShow;

        
            if(!this.props.singleShow){
                return <h1>Loading...</h1>
            }
            return (
            <>
            <h1 className="text-center">{name}</h1>
            <div className="god">
             <img className="originalImg" src={image} alt="..." />
            

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

ShowSinglePage.propTypes = {
    name: PropTypes.string
  };

const mapStateToProps = state => {
    return {
        singleShow: state.showInfo.singleShow
    }
}

const mapDispatchToProps = {
    SingleShow
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowSinglePage);