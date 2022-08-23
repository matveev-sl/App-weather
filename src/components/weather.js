import React from "react";
const Weather = (props) => {
return (
    <div className="infoWeath">
    { props.city &&
    <div>
     <p> Местоположние: {props.city},{props.country}</p> 
     <p> Температура: {props.temp}</p> 
     <p> Давление: {props.pressure}</p> 
     <p> Заход солнца: {props.sunset}</p> 
    </div>
    }
    <p className="erroe">{props.error}</p>
    </div>
)
}

export default Weather;