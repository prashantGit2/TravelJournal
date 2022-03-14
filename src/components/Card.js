import React from "react"

export default function Card(props){
    return (<div className="card">
        <img className="card--img" src={props.imageUrl}/>
        
        <div className="card--details">
            <div className="card--location">
                <span className="country mar2px"><img className="loc--icon" src="https://cdn-icons-png.flaticon.com/512/684/684908.png"></img>{props.location}</span>
                <span ><a className="map--link mar2px" href={props.googleMapsUrl}>View on Google Maps</a></span>
            </div>
            
            <h3 className="card--details--title">{props.title}</h3>
            <h5 className="card--details--dates">{`${props.startDate} - ${props.endDate}`}</h5>
            
            <p className="card--details--description"> {props.description}</p>
            
        </div>
    </div>
    )    
    
}