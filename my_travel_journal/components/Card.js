import React from "react"

export default function Card(props) {
    return (
        <div className="card">
            <img 
                className="card--image"
                src={props.item.imageUrl} />
            <div className="card--info">
                <div className="card--location">
                    <img
                        className="card--img-map"
                        src="./img/fill_220.png"
                    />
                    <p>{props.item.location}</p>
                    <a
                        href={props.item.googleMapsUrl}
                    >
                    View on Google Maps
                    </a>
                </div>
                <h2>{props.item.title}</h2>
                <h3>{props.item.startDate} - {props.item.endDate}</h3>
                <p>{props.item.description}</p>
            </div>
        </div>
        
    )
}