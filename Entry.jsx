

export default function Entry(props){
    return(
        
        <main className="first-country-container">
            <img className="fuji-png" src={props.img.src} alt={props.img.alt} />
            <div className="country-and-description-container">
                <span className="marker-googlemap-container">
                <img src="marker.png" alt="marker image" />
                <p>{props.country}</p>
                <small>
                    <a href={props.googleMapsLink} target="blank">View on google maps</a>
                </small>
                </span>
                <h2 className="h2">{props.title}</h2>
                <p className="p1">{props.dates}</p>
                <p className="p2">{props.text}</p>
                
            </div>
        </main>
    )

}

