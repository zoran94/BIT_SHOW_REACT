import React from "react";

const CastList = (props) => {

    return (
                <>
                <div className="">
                <h2>Cast</h2>
                <ul>
                    {props.castList()}
                </ul>
                </div>


                </>
    )
}



export default CastList;