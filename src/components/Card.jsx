import React from "react";
import LocationOnIcon from '@mui/icons-material/LocationOn';

function Card(props){
    return (
        <div className="card">
            <img src={props.imageUrl} alt="" className="place-img"/>
            <div className="card-info">
                <div className="location-link">
                    <LocationOnIcon style={{color: "#F55A5A"}}/>
                    <p>{props.location}</p>
                    <a href={props.googleMapsUrl} style={{paddingLeft:"8px"}}>View on Google Maps</a>
                </div>
                <h1>{props.title}</h1>
                <p className="dates">{props.startDate}-{props.endDate}</p>
                <p className="description">{props.description}</p>
            </div>
        </div>
    )
}

export default Card