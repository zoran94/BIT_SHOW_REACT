import React,{Component} from 'react';
import {Link} from "react-router-dom"
class Header extends Component {
    constructor(props){
        super(props)
            
    }
    
    
    
    render(){
        return (
            <header className="text-white">
            <div className="container">
            <Link to="/"> <h2 className="head">Bit Show</h2>    </Link>
            </div>
            </header>
        )
    
    }

}


export default Header;