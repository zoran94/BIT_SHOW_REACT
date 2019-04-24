import React  from 'react';
import {Switch, Route} from "react-router-dom";
import ShowPage from "./components/Showpage/ShowPage";
import SingleShowPage from "./components/Showpage/ShowSinglePage";

const Main = (props) => {


    return (

        <Switch>

        <Route path="/show/:id" component={SingleShowPage} />
        <Route path="/" component={ShowPage} />

        </Switch>
    )
}


export default Main;