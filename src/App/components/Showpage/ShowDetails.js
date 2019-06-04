import React from "react"
import Show from "../../entities/Show";



const ShowDetails = (props)=> {
return (
    <>
    <div className="details">
    <h2>Show Details</h2>
        <p>{props.showDet()}</p>
        </div>
    </>
)

}


export default ShowDetails;